import { Todo, ITodo } from "../models/todo";

export const createTodo = async (body: ITodo) => {
  const todo = new Todo(body);
  return todo.save();
};

export const getAllTodo = async () => {
  return await Todo.find({});
};

export const getOneTodo = async (id: String) => {
  return await Todo.findById(id);
};
