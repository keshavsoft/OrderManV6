import { funcToRun as funcToRunForStockItemsId } from "./StockItemsId/start.js";

import { funcToRun as funcToRunForLedgersId } from "./LedgersId/start.js";

const hookAllListeners = () => {
    funcToRunForStockItemsId();
    funcToRunForLedgersId();

};

export { hookAllListeners };