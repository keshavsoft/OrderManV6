import {  } from "module";

const clickFuncToRun = () => {
    const config = {
        containerId: 'kSTableContainer',
        tableName: "Bills",
        endPoints: {
            create: "/Ledgers/V1/Insert",
            update: "",
            delete: "",
            read: "/V6/BillsTable/ShowAll"
        },
        options: {
            firstRow: {
                showSearch: true
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

    window.KSTable.init(config);
};

export { clickFuncToRun };