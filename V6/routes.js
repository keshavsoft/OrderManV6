import express from 'express';
import { router as routerFromBillsTable } from "./BillsTable/routes.js";
import { router as routerFromItemsTable } from "./ItemsTable/routes.js";

const router = express.Router();
router.use('/BillsTable', routerFromBillsTable);
router.use('/ItemsTable', routerFromItemsTable);

export { router };