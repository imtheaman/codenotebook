const { createProxyMiddleware } = require("http-proxy-middleware");

const redirectUrl =
  process.env.NODE_ENV === "production"
    ? "https://js-notebook-urtheaman.vercel.app:4000"
    : "http://localhost:4000";

module.exports = (app) => {
  app.use(
    ["/notebook/*", "/check/*"],
    createProxyMiddleware({
      target: redirectUrl,
      changeOrigin: true,
    })
  );
};
