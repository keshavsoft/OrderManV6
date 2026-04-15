import express from 'express';
import { router as routerFromTransform } from "./Transform/routes.js";

const router = express.Router();

router.use('/Transform', routerFromTransform);

export { router };