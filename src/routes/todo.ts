import express from "express";
import { create, getAll, getOne } from "../controllers/todo";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);

router.post("/", create);

export { router as todoRouter };
