import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean
): void => {
  const app = express();

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: "http://localhost:3000",
        ws: true,
        logLevel: "silent",
      })
    );
  }
};
