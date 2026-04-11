import express from 'express';
import bodyparser from "body-parser";
import { postFunc } from "./controller.js";

const router = express.Router();

router.use(bodyparser.json());
router.post('/', postFunc);

export { router };
