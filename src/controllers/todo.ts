import { Request, Response } from "express";

import { createTodo, getAllTodo, getOneTodo } from "../services/todo";

export const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await createTodo(body);

    if (!result) throw Error("Cannot create post");
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await getAllTodo();

    if (!result) throw Error("Cannot get todo.");
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    const result = await getOneTodo(id);

    if (!result) throw Error("Cannot get todo.");
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};
