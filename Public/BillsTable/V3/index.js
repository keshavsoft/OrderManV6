import { initTable } from "../../KSTableAi/V14/entry.js";

const config = {
    containerId: 'kSTableContainer',
    tableName: "Bills",
    endPoints: {
        create: "/Api/V9/BillsTable/Insert",
        update: "",
        delete: "/Api/V9/BillsTable/Delete",
        read: "/Api/V9/BillsTable/ShowAll",
        find: "/Api/V9/BillsTable/find"
    },
    options: {
        firstRow: {
            showSearch: false
        },
        vertical: {
            showVertical: true,
            isDisabled: true,
            showSaveButton: false
        },
        dataList: {
            show: false,
        },
        table: {
            isDisabled: true,
            showTable: false,
            showRowOptions: true,
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
        { columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true },
        { columnName: "InvoiceDate", isRequired: false, defaultValue: "20260327" },
        { columnName: "pk", isPrimaryKey: true, isVisible: false }
    ],
    layout: {
        verticalPosition: "top" // or left/right/bottom
    }
};

const configSubTable = {
    containerId: 'kSSubTableContainer',
    tableName: "Bills",
    endPoints: {
        create: "/Api/V9/BillsTable/Insert",
        update: "",
        delete: "/Api/V9/BillsTable/Delete",
        read: "/Api/V9/ItemsTable/filter?ParentPk=1",
        find: "/Api/V9/BillsTable/find"
    },
    options: {
        firstRow: {
            showSearch: false
        },
        vertical: {
            showVertical: false,
            isDisabled: true,
            showSaveButton: false
        },
        dataList: {
            show: false,
        },
        table: {
            isDisabled: false,
            showTable: true,
            showRowOptions: true,
            showSerial: true,
            showFooter: true,
            footer: {
                showDataList: true
            }
        },
        focus: {
            priority: ["vertical", "footer", "search"]
        }
    },
    columnsConfig: [
        { columnName: "ItemName", isRequired: true, tableFooterDataListShow: true },
        { columnName: "Rate", isRequired: true },
        { columnName: "Qty", isRequired: false },
        { columnName: "ParentPk", isRequired: false, defaultValue: 1 },
        { columnName: "pk", isPrimaryKey: true, isVisible: false }
    ],
    layout: {
        verticalPosition: "top" // or left/right/bottom
    }
};

let startFunc = async () => {
    await initTable(config);

    await initTable(configSubTable);
};

startFunc();