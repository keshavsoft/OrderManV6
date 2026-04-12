const clickFuncToRun = () => {
    const config = {
        containerId: 'kSTableContainer',
        tableName: "Ledgers",
        endPoints: {
            create: "/Ledgers/V1/Insert",
            update: "",
            delete: "",
            read: "/Api/V3/StockItems/GetFromTally"
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
            { columnName: "StockItemName", isRequired: true, tableFooterDataListShow: true },
            { columnName: "StockItemReservedName", isRequired: false },
            { columnName: "StockItemType", isRequired: false },
            { columnName: "pk", isPrimaryKey: true, isVisible: false }
        ],
        layout: {
            verticalPosition: "top" // or left/right/bottom
        }
    };

    window.KSTable.init(config);
};

export { clickFuncToRun };