import { buildHeader } from "./BuildHeaderVersions/V1/start.js";
import { buildFooter } from "./BuildFooterVersions/V2/start.js";
import { pureBuildBody } from "./BuildBodyVersions/V1/pureBuildBody.js";

const initTable = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints, inColumnsConfig, inShowFooter }) => {
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();
    const visibleColumns = inDataStore.getVisibleColumns();

    buildHeader({
        inVisibleColumns: visibleColumns,
        inContainerEl,
        inDom,
        options: {
            showActions: inOptions.table.showRowOptions,
            showSerial: inOptions.table.showSerial
        }
    });

    pureBuildBody({
        inContainerEl,
        inVisibleColumns: visibleColumns,
        inData: data,
        inDom,
        options: {
            showActions: inOptions.table.showRowOptions,
            showSerial: inOptions.table.showSerial,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: ({ index }) => console.log("delete", index)
        }
    });

    if (inShowFooter) {
        buildFooter({
            inContainerEl,
            inDataStore,
            inDom,
            inServices,
            inOptions,
            inEndPoints,
            inColumnsConfig
        });
    };

    // hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initTable };
