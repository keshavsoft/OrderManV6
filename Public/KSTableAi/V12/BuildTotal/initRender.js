import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { initTable } from "./BuildTableVersions/V1/init.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";
import { hookAllListeners } from "./AddListeners/start.js";
import { afterMutation } from "./afterMutation.js";

const uiClasses = {
    formClass: 'mb-4 p-4 border rounded verticalForm',
    inputClass: 'border px-2 py-1 flex-1',
    buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
    rowClass: 'flex items-center gap-4 mb-2',
    labelClass: 'w-40',
};

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints, inColumnsConfig }) => {
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();
    const visibleColumns = inDataStore.getVisibleColumns();
    const defaultRow = inDataStore.getDefaultRow();
    debugger
    const isBuildDataLists = inOptions.dataList.show;
    const showActions = inOptions.table.showRowOptions;
    const showSerial = inOptions.table.showSerial;

    const handleDelete = async ({ presentPk }) => {
        await inServices.actions.remove({
            inEndPoint: inEndPoints.delete,
            id: presentPk
        })

        afterMutation({
            inServices, inEndPoints, inDataStore, inContainerEl,
            inDom, inOptions, inVisibleColumns: visibleColumns,
            onDelete: handleDelete, isBuildDataLists,
            inShowActions: showActions,
            inShowSerial: showSerial
        });
    };

    if (isBuildDataLists) {
        buildDataLists({
            inContainerEl,
            inDataStore,
            inDom
        });
    };

    if (inOptions.vertical.showVertical) {
        buildForm({
            inContainerEl,
            inDataStore,
            inDom,
            inServices,
            inOptions,
            inEndPoints,
            inColumnsConfig,
            inShowFooter: inOptions.table.showFooter,
            inData: data,
            inVisibleColumns: visibleColumns,
            onDelete: handleDelete,
            inShowActions: showActions,
            inShowSerial: showSerial,
            isBuildDataLists,
            inDefaultRow: defaultRow,
            uiClasses
        });
    };
    // debugger;
    if (inOptions.firstRow.showSearch) {
        renderTableHeading({
            inContainerEl,
            inDataStore,
            inDom
        });
    } else {
        const firstRow = inDom.getFirstRowClass(inContainerEl);

        firstRow.style.display = "none";
    };

    if (inOptions.table.showTable) {
        initTable({
            inContainerEl,
            inDataStore,
            inDom,
            inServices,
            inOptions,
            inEndPoints,
            inColumnsConfig,
            inShowFooter: inOptions.table.showFooter,
            inData: data,
            inVisibleColumns: visibleColumns,
            onDelete: handleDelete,
            inShowActions: showActions,
            inShowSerial: showSerial
        });
    };

    hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initRender };
