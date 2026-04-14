import express from 'express';
import { getFunc } from "./ShowAll/controller.js";
import { filterFunc } from "./Filter/controller.js";
import { postFunc } from "./Insert/controller.js";

const router = express.Router();
router.post('/Insert', express.json(), postFunc);
router.get('/Filter', filterFunc);
router.get('/ShowAll', getFunc);

export { router };