import { initTable } from "../../KSTableAi/V12/entry.js";

const config = {
    containerId: 'kSTableContainer',
    tableName: "Bills",
    endPoints: {
        create: "/Api/V9/BillsTable/Insert",
        update: "",
        delete: "/Api/V9/BillsTable/Delete",
        read: "/Api/V9/BillsTable/ShowAll"
    },
    options: {
        firstRow: {
            showSearch: false
        },
        vertical: {
            showVertical: true
        },
        dataList: {
            show: false
        },
        table: {
            showTable: true,
            showRowOptions: true,
            showSerial: true,
            showFooter: true,
            footer: {
                showDataList: true
            }
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

let startFunc = async () => {
    await initTable(config);
};

startFunc();