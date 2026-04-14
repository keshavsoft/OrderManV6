import express from 'express';
import { getFunc } from "./ShowAll/controller.js";

const router = express.Router();
router.get('/ShowAll', getFunc);

export { router };