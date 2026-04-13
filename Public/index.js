import { initTable } from "./KSTableAi/V10/entry.js";

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
            showVertical: true
        },
        dataList: {
            show: false
        },
        table: {
            showTable: false,
            showRowOptions: false,
            showSerial: true,
            showFooter: false,
            footer: {
                showDataList: true
            }
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

const config2 = {
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
            showVertical: true
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

const configItemsTable = {
    containerId: 'kSSubTableContainer',
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
            showTable: true,
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
        { columnName: "Amount", isRequired: false },
        { columnName: "TaxPer", isRequired: false },
        { columnName: "Uom", isRequired: false },
        { columnName: "ParentPk", isRequired: false, defaultValue: "3", isVisible: false },
        { columnName: "pk", isPrimaryKey: true, isVisible: false }
    ],
    layout: {
        verticalPosition: "top" // or left/right/bottom
    }
};


let startFunc = async () => {

    await initTable(config);

    await initTable(configItemsTable);
};

startFunc();