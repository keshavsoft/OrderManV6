import { initTable } from "../../KSTableAi/V15/entry.js";

const config = {
    containerId: 'kSTableContainer',
    tableName: "StockItems",
    endPoints: {
        create: "/Api/V9/ItemsTable/Insert",
        update: "",
        delete: "/Api/V9/BillsTable/Delete",
        read: "/Api/V9/StockItems/ShowAll",
        find: "/Api/V9/BillsTable/find",
        dataListEndpoints: {
            items: "/Api/V9/StockItems/ShowAll",
            ledgers: "/Api/V9/LedgerNames/ShowAll"
        }
    },
    options: {
        firstRow: {
            showSearch: true
        },
        vertical: {
            showVertical: false,
            isDisabled: true,
            showSaveButton: false
        },
        dataList: {
            show: true,
        },
        table: {
            isDisabled: false,
            showTable: true,
            showRowOptions: false,
            showSerial: true,
            showFooter: false,
            footer: {
                showDataList: true
            }
        },
        focus: {
            priority: ["vertical", "footer", "search"]
        }
    },
    columnsConfig: [
        {
            columnName: "StockItemName", isRequired: true,
            tableFooterDataListShow: true, dataListSource: "items.StockItemName"
        },
        { columnName: "StockItemReservedName", isRequired: false },
        { columnName: "StockItemType", isRequired: false },
        { columnName: "pk", isPrimaryKey: true, isVisible: false }
    ],
    layout: {
        verticalPosition: "top" // or left/right/bottom
    }
};

let startFunc = async () => {
    await initTable(config);
};

startFunc();