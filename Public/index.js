import { initTable } from "./KSTableAi/V7/entry.js";

const config1 = {
    containerId: 'kSTableContainer',
    tableName: "Bills",
    endPoints: {
        create: "/V6/BillsTable/Insert",
        update: "",
        delete: "/V6/BillsTable/Delete",
        read: "/V6/BillsTable/ShowAll"
    },
    options: {
        firstRow: {
            showSearch: false
        },
        vertical: {
            showVertical: false
        },
        table: {
            showRowOptions: true,
            showSerial: true,
            showFooter: true,
            footer: {
                showDataList: true
            }
        },
        dataList: {
            show: false
        }
    },
    columnsConfig: [
        { columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true },
        { columnName: "InvoiceDate", isRequired: false },
        { columnName: "pk", isPrimaryKey: true, isVisible: false }
    ],
    layout: {
        verticalPosition: "top" // or left/right/bottom
    }
};

const config = {
    containerId: 'kSTableContainer',
    tableName: "ItemsTable",
    endPoints: {
        create: "/V6/ItemsTable/Insert",
        update: "",
        delete: "/V6/ItemsTable/Delete",
        read: "/V6/ItemsTable/ShowAll"
    },
    options: {
        firstRow: {
            showSearch: false
        },
        vertical: {
            showVertical: false
        },
        table: {
            showRowOptions: true,
            showSerial: true,
            showFooter: true,
            footer: {
                showDataList: true
            }
        },
        dataList: {
            show: false
        }
    },
    columnsConfig: [
        { columnName: "ItemName", isRequired: true, tableFooterDataListShow: true },
        { columnName: "Rate", isRequired: false },
        { columnName: "Qty", isRequired: false },
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