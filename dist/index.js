"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = require("body-parser");
const todo_1 = require("./src/routes/todo");
mongoose_1.default.connect("mongodb://localhost:27017/sigmatec", () => {
    console.log("connected to database");
});
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: false }));
app.use(todo_1.todoRouter);
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});
