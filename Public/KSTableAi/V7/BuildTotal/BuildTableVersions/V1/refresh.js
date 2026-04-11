import { buildDataLists } from "../../BuildDataLists/addToDom.js";
import { pureBuildBody } from "./BuildBodyVersions/V1/pureBuildBody.js";

const refreshTable = ({ inContainerEl, inDataStore, inDom, inOptions, inVisibleColumns }) => {
    const data = inDataStore.getData();
    const visibleColumns = inVisibleColumns;

    if (inOptions.dataList.show) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    pureBuildBody({
        inContainerEl,
        inData: data,
        inVisibleColumns: visibleColumns,
        inDom,
        options: {
            showActions: inOptions.table.showRowOptions,
            showSerial: inOptions.table.showSerial,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: ({ index }) => console.log("delete", index)
        }
    });
};

export { refreshTable };
