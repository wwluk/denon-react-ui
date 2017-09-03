import path from "path";
import express from "express";
import proxy from "http-proxy-middleware";

const app = express(),
    DEFAULT_PORT  = 3000;

app.set("port", process.env.PORT || DEFAULT_PORT);

app.use('/api', proxy({target: 'http://denon', pathRewrite: {'^/api' : ''}}));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/bundle.js', (req, res) => res.sendFile(path.join(__dirname, 'bundle.js')));
// 404 fallback to index.html
app.use("*", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(app.get("port"));