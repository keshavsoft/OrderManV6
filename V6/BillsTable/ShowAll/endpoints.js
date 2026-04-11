import express from 'express';
import bodyparser from "body-parser";
import { getFunc } from "./controller.js";

const router = express.Router();

router.use(bodyparser.json());
router.get('/', getFunc);

export { router };
