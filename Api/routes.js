import express from 'express';
import { router as routerFromV9 } from "./V9/routes.js";

const router = express.Router();
router.use('/V9', routerFromV9);

export { router };