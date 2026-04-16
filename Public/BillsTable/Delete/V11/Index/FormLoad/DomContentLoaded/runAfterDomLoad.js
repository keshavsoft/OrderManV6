import { initTableOnly } from "../../../../../../KSTableAi/V20/entry.js";

const runAfterDomLoad = () => {
    buildUi().then();
};

const buildUi = async () => {
    const config = {
        containerId: 'kSTableContainer',
        tableName: "Bill Create",
        mode: "create", // or "show" "create"
        layout: {
            verticalPosition: "top", // or left/right/bottom
            type: "table", // "vertical" | "table" | "vertical-table"
        },
        endPoints: {
            create: "/Api/V9/ItemsTable/Insert",
            update: "",
            delete: "/Api/V9/BillsTable/Delete",
            read: "/Api/V9/BillsTable/ShowAll",
            find: "/Api/V9/BillsTable/find",
            dataListEndpoints: {
                items: "/Api/V9/StockItems/ShowAll",
                ledgers: "/Api/V9/LedgerNames/ShowAll"
            }
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
                show: true,
            },
            table: {
                isDisabled: false,
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
            {
                columnName: "LedgerName"
            },
            {
                columnName: "InvoiceDate"
            },
            { columnName: "pk", isPrimaryKey: true }
        ],
        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        },
        callbacks: {
            table: {
                onDelete: async (res) => {
                    console.log("aaaaaaaaaaaaaa : ", res);

                    // const fromReponse = await res.text();

                    // window.location.href = `../../WithSubTable/V8/index.html?pk=${fromReponse}`;
                }
            }
        }
    };

    await initTableOnly(config);
};

export { runAfterDomLoad };
