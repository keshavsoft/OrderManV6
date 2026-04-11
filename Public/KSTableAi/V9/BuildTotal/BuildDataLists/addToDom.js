const buildDataLists = ({ inContainerEl, inDataStore, inDom }) => {
    const containerEl = inContainerEl;
    const dom = inDom;
    const columns = inDataStore.getColumns();

    const find = dom.getDataListContainerClass(containerEl);
    if (!find) return;

    find.innerHTML = "";

    columns.forEach(col => {
        const datalist = document.createElement("datalist");
        datalist.id = col + "List";

        const values = [...new Set(
            inDataStore.getData().map(r => r[col]).filter(Boolean)
        )];

        datalist.innerHTML = values.map(v => `<option value="${v}">`).join("");

        find.appendChild(datalist);
    });
};

export { buildDataLists };