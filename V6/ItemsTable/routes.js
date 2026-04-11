import express from 'express';
import { router as routerFromShowAll } from "./ShowAll/endpoints.js";
import { router as routerFromInsert } from "./Insert/endpoints.js";
import { router as routerFromDelete } from "./Delete/endpoints.js";

const router = express.Router();
router.use('/ShowAll', routerFromShowAll);
router.use('/Insert', routerFromInsert);
router.use('/Delete', routerFromDelete);

export { router };