import { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  title: String;
  description: String;
}

const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const Todo = model("Todo", todoSchema);
