// ai.js

import { createStore } from "./tableStore.js";
import { createState } from "./HtmlState/start.js";
import { getDomManipulation } from "./DomManipulation/start.js";
import { createServices } from "./Services/createServices.js";
import { validateConfig } from "./Utils/validateConfig.js";
import { initRender } from "./BuildTotal/initRender.js";
import { normalizeConfig } from "./Utils/normalizeConfig.js";
import { focusToEl } from "./focusSet.js";

const setColumns = (inColumnsConfig) => {
    state.columns = inColumnsConfig.map(c => c.columnName);
    state.visibleColumns = inColumnsConfig
        .filter(c => c.isVisible !== false)
        .map(c => c.columnName);
};

class KSAiTable {
    constructor(inConfig) {
        const config = normalizeConfig(inConfig);
        // debugger;
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

        this.options = options;
        this.endPoints = endPoints;
        this.columnsConfig = columnsConfig;
    };

    async init() {
        this.setupServices();

        await this.loadData();

        this.dataStore.setColumns(this.columnsConfig); // 👈 add here

        this.mountUI();
        focusToEl({ inContainerEl: this.containerEl });
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
        }
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