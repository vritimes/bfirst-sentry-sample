"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./instrument.js");
// import { setupExpressErrorHandler, setTag } from '@sentry/node'
const node_1 = require("@sentry/node");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.get("/debug-sentry", function mainHandler(req, res) {
    (0, node_1.setTag)("userId", "xxx");
    throw new Error("My first Sentry error!");
});
// setupExpressErrorHandler(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
