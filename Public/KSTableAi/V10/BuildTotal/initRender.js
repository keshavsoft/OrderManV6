import { renderTableHeading } from "./BuildFirstColumn/TableHeading/start.js";
import { initTable } from "./BuildTableVersions/V1/init.js";
import { buildForm } from "./BuildForm/start.js";
import { buildDataLists } from "./BuildDataLists/addToDom.js";
import { hookAllListeners } from "./AddListeners/start.js";

const initRender = ({ inContainerEl, inDataStore, inDom, inServices, inOptions, inEndPoints, inColumnsConfig }) => {
    const data = inDataStore.getData();
    const columns = inDataStore.getColumns();
    const visibleColumns = inDataStore.getVisibleColumns();
    debugger;

    if (inOptions.dataList.show) {
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
            inVisibleColumns: visibleColumns,
            inServices,
            inEndPoints
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
        // debugger;
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
            inVisibleColumns: visibleColumns
        });
    };

    hookAllListeners({ inContainerEl, inDataStore, inDom, inOptions });
};

export { initRender };
