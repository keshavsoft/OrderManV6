import express from 'express';
import { router as routerFromDelete } from "./Delete/endpoints.js";

const router = express.Router();
router.use('/Delete', routerFromDelete);

export { router };