import express from 'express';
import { router as routerFromShowAll } from "./ShowAll/endpoints.js";
import { router as routerFromInsert } from "./Insert/endpoints.js";

const router = express.Router();
router.use('/ShowAll', routerFromShowAll);
router.use('/Insert', routerFromInsert);

export { router };