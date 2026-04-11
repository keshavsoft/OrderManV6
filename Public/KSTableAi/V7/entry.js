import { KSAiTable } from "./ai.js";

// entry.js
export const initTable = async (cfg) => {
    const table = new KSAiTable(cfg);
    await table.init();   // ✅ THIS is missing
    return table;
};