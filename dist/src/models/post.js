"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const post = new Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
}, {
    timestamps: true,
});
module.exports = mongoose_1.default.model("Post", post);
