// ai.js
import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { createServices } from "./Services/createServices.js";
import { validateConfig } from "./Utils/validateConfig.js";
import { prepareColumnsBundle } from "./Utils/prepareColumnsBundle.js";
import { initRender } from "./BuildTotal/initRender.js";
import { normalizeConfig } from "./Utils/normalizeConfig.js";
import { focusToEl } from "./FocusSet/V2/focusSet.js";

import { createStore } from "./TableStore/V2/start.js";
import { loadDataLists } from "./Services/dataListLoader.js";

class KSAiTable {
    constructor(inConfig) {
        const config = normalizeConfig(inConfig);

        validateConfig(config);

        const { containerId, options, endPoints, columnsConfig } = config;

        this.config = config;
        this.containerEl = document.getElementById(containerId);

        if (!this.containerEl) {
            throw new Error(`Container not found: ${containerId}`);
        };

        this.dataStore = createStore();
        this.uiState = createState();
        this.dom = getDomManipulation();

        this.uiState.setTableContainerId(containerId);

        const bundle = prepareColumnsBundle(columnsConfig);

        this.dataStore.setColumns(bundle.keys);
        this.dataStore.setVisibleColumns(bundle.visibleColumns);
        this.dataStore.setVisibleConfig(bundle.visibleConfig);
        this.dataStore.setDefaultRow(bundle.defaultRow);
        this.dataStore.setDataListColumns(bundle.dataListColumns);

        this.options = options;
        this.endPoints = endPoints;
        this.columnsConfig = columnsConfig;
    };

    async init() {
        this.setupServices();

        await this.loadData();

        this.mountUI();

        focusToEl({
            inContainerEl: this.containerEl,
            inPriority: this.options.focus.priority
        });
    };

    async loadData() {
        const { data, endPoints } = this.config;

        if (Array.isArray(data)) {
            this.dataStore.setData(data);
            return;
        }

        if (endPoints?.read) {
            const dataFromFetch = await this.services.actions.getData({ inEndPoint: endPoints.read });

            if (!Array.isArray(dataFromFetch)) {
                throw new Error("read endpoint must return array");
            };

            this.dataStore.setData(dataFromFetch);
        };


        if (endPoints?.find) {
            const dataFromFetch = await this.services.actions.find({
                inEndPoint: endPoints.find,
                id: 2
            });

            this.dataStore.setFindData(dataFromFetch);
        };

        await loadDataLists({
            inDataStore: this.dataStore,
            inServices: this.services,
            inEndpoints: this.endPoints
        });
    };

    setupServices() {
        const { tableName } = this.config;

        this.dataStore.setTableName(tableName);

        this.services = createServices({
            tableName: this.dataStore.getTableName()
        });
    }

    mountUI() {
        initRender({
            inContainerEl: this.containerEl,
            inDataStore: this.dataStore,
            inDom: this.dom,
            inServices: this.services,
            inOptions: this.options,
            inEndPoints: this.endPoints,
            inColumnsConfig: this.columnsConfig
        });
    };
}

export { KSAiTable };