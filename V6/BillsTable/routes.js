import express from 'express';
import { router as routerFromInsertToTally } from "./InsertToTally/endpoints.js";
import { router as routerFromInsert } from "./Insert/endpoints.js";
import { router as routerFromShowAll } from "./ShowAll/endpoints.js";

const router = express.Router();
router.use('/InsertToTally', routerFromInsertToTally);
router.use('/Insert', routerFromInsert);
router.use('/ShowAll', routerFromShowAll);

export { router };