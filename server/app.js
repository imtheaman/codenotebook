const express = require("express");
const bodyParser = require("body-parser");
const { insertDoc, readDoc, checkExistOrNot } = require("./database/utils");

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get("/notebook/:name", async (req, res) => {
  await readDoc(req.params.name).then((response) => {
    res.json(response);
  });
});

app.post("/notebook/:name", async (req, res) => {
  await insertDoc(req.body).then((response) => {
    console.log(response);
    res.send(response);
  });
});

app.get("/check/:name", async (req, res) => {
  await checkExistOrNot(req.params.name).then((response) => {
    res.status(200).send(response + "");
  });
});

app.get("*", (req, res) => {
  const url =
    process.env.NODE_ENV === "production"
      ? "https://js-notebook-urtheaman.vercel.app"
      : "http://localhost:3000";
  res.redirect(url);
});

app.listen(port, () => console.log("listening on port ", port));
