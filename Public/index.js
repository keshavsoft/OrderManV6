import { initTable } from "./KSTableAi/V6/entry.js";

const config = {
    containerId: 'kSTableContainer',
    tableName: "Bills",
    endPoints: {
        create: "/V6/BillsTable/Insert",
        update: "",
        delete: "",
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
            showSerial: true,
            showFooter: false,
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

let startFunc = async () => {
    await initTable(config);
};

startFunc();