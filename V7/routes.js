import express from 'express';
import { router as routerFromItemsTable } from "./ItemsTable/routes.js";

const router = express.Router();
router.use('/ItemsTable', routerFromItemsTable);

export { router };