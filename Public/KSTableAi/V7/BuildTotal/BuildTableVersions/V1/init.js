import { buildHeader } from "./BuildHeaderVersions/V1/start.js";
import { buildFooter } from "./BuildFooterVersions/V3/start.js";
import { pureBuildBody } from "./BuildBodyVersions/V1/pureBuildBody.js";

const initTable = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints, inColumnsConfig,
    inShowFooter, inData, inVisibleColumns }) => {
    const data = inData;
    const columns = inDataStore.getColumns();
    const visibleColumns = inVisibleColumns;
    const showActions = inOptions.table.showRowOptions;

    buildHeader({
        inVisibleColumns: visibleColumns,
        inContainerEl,
        inDom,
        options: {
            showActions,
            showSerial: inOptions.table.showSerial
        }
    });

    const handleDelete = async ({ presentPk }) => {
        debugger;

        await inServices.actions.remove({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        })
    };

    pureBuildBody({
        inContainerEl,
        inVisibleColumns: visibleColumns,
        inData: data,
        inDom,
        options: {
            showActions,
            showSerial: inOptions.table.showSerial,
            onEdit: ({ item }) => console.log("edit", item),
            onDelete: handleDelete,
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
            inColumnsConfig,
            inVisibleColumns
        });
    };

    // hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initTable };
