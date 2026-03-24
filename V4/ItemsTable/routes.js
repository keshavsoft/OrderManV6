import express from 'express';

const router = express.Router();

import { router as routerFromShowAll } from "./ShowAll/routes.js"
import { router as routerFromInsert } from "./Insert/routes.js"

router.use("/ShowAll", routerFromShowAll);
router.use("/Insert", routerFromInsert);

export { router };