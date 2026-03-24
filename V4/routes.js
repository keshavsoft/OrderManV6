import express from 'express';

const router = express.Router();

import { router as routerFromBillsTable } from "./BillsTable/routes.js"
import { router as routerFromItemsTable } from "./ItemsTable/routes.js"
import { router as routerFromLedgerNames } from "./LedgerNames/routes.js"
import { router as routerFromStockItems } from "./StockItems/routes.js"

router.use("/BillsTable", routerFromBillsTable);
router.use("/ItemsTable", routerFromItemsTable);
router.use("/LedgerNames", routerFromLedgerNames);
router.use("/StockItems", routerFromStockItems);

export { router };