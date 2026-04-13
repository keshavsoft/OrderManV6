import express from 'express';
import { getFunc } from "./ShowAll/controller.js";
import { filterFunc } from "./Filter/controller.js";

const router = express.Router();
router.get('/Filter', filterFunc);
router.get('/ShowAll', getFunc);

export { router };