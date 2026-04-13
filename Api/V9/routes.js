import express from 'express';
import { router as routerFromBillsTable } from "./BillsTable/end-points.js";
import { router as routerFromItemsTable } from "./ItemsTable/end-points.js";

const router = express.Router();
router.use('/BillsTable', routerFromBillsTable);
router.use('/ItemsTable', routerFromItemsTable);

export { router };