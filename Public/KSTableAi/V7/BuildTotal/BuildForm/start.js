import { createForm } from "./createForm.js";

const buildForm = ({ inContainerEl, inDataStore, inDom }) => {
    const form = createForm({
        columns: inDataStore.getColumns(),
        inDataStore,
        onSubmit: (newItem) => {
            this.dataStore.add(newItem);
            render(); // re-render table
        }
    });

    inContainerEl.prepend(form);
};

export { buildForm };
