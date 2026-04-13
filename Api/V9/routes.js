import express from 'express';
import { router as routerFromBillsTable } from "./BillsTable/end-points.js";
import { router as routerFromItemsTable } from "./ItemsTable/end-points.js";
import { router as routerFromtable1 } from "./table1/end-points.js";
import { router as routerFromtable2 } from "./table2/end-points.js";

const router = express.Router();
router.use('/BillsTable', routerFromBillsTable);

export { router };