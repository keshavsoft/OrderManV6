import express from 'express';
import { router as routerFromInsert } from "./Insert/endpoints.js";
import { router as routerFromFilter } from "./Filter/endpoints.js";

const router = express.Router();
router.use('/Insert', routerFromInsert);
router.use('/Filter', routerFromFilter);

export { router };