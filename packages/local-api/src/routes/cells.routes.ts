import { Router } from "express";
import path from 'path'
import fs from 'fs/promises'

interface Cell {
    id: string,
    content: string,
    type: 'code' | 'text'
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = Router();
  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    try {
        const result = await fs.readFile(fullPath, {encoding: 'utf-8'})

        res.send(JSON.parse(result))
    } catch (err: any) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(fullPath, '[]', "utf-8")
            res.send([])
        } else throw err;
    }
  })

  router.post('/cells', async (req, res) => {
    // take the list of cells from the request obj
    // serialize them
    const {cells} : {cells: Cell[]} = req.body;

    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8')
    res.send({status: 'ok'})
  })

  return router;
};
