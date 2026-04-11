import { createForm } from "./createForm.js";

const buildForm = ({ inContainerEl, inDataStore, inDom, inVisibleColumns, inServices, inEndPoints }) => {
    const handleSave = async (newItem) => {
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload: newItem
        })
    };

    const form = createForm({
        columns: inDataStore.getColumns(),
        inDataStore,
        onSubmit: handleSave
    });

    inContainerEl.prepend(form);
};

export { buildForm };
