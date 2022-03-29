import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import path from "path";
import { createCellsRouter } from "./routes/cells.routes";

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
): Promise<void> => {

  const app = express();

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: "http://localhost:3000",
        ws: true,
        logLevel: "silent",
      })
    );
  } else {
    const pkgPath = require.resolve("local-client/build/index.html");
    app.use(express.static(path.dirname(pkgPath)));
  }

  app.use(createCellsRouter(filename, dir))

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on("error", reject);
  });
};
