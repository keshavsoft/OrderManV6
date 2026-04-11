import express from 'express';
import bodyparser from "body-parser";
import { deleteFunc } from "./controller.js";

const router = express.Router();

router.use(bodyparser.json());
router.delete('/:pk', deleteFunc);

export { router };
