import { initTable } from "../../../KSTableAi/V17/entry.js";

const config = {
    containerId: 'kSTableContainer',
    tableName: "Bill Create",
    mode: "create", // or "show"
    layout: {
        verticalPosition: "top", // or left/right/bottom
        type: "table", // "vertical" | "table" | "vertical-table"
    },
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
            isDisabled: false,
            showSaveButton: true
        },
        dataList: {
            show: false,
        },
        table: {
            isDisabled: true,
            showTable: true,
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
    uiClasses: {
        form: {
            formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
            buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
            rowClass: 'flex items-center space-x-4',
            labelClass: 'w-24 text-sm font-medium',
            inputClass: 'flex-1 border rounded px-3 py-2'
        }
    }
};

let startFunc = async () => {
    await initTable(config);
};

startFunc();