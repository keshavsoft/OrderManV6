import { KSAiTable } from "./ai.js";

// entry.js
export const initTable = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.init();   // ✅ THIS is missing
    return table;
};