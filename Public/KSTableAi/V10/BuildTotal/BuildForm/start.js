import { createForm } from "./createForm.js";
// import { refreshTable } from "../BuildTableVersions/V1/afterMutation.js";

const buildForm = ({ inContainerEl, inDataStore, inVisibleColumns, inServices, inEndPoints,
    inDom, inOptions,
}) => {
    const handleSave = async (newItem) => {
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload: newItem
        });

        // afterMutation({
        //     inServices, inEndPoints, inDataStore, inContainerEl,
        //     inDom, inOptions, inVisibleColumns, onDelete: handleDelete
        // });
    };

    const form = createForm({
        columns: inVisibleColumns,
        inDataStore,
        onSubmit: handleSave
    });

    inContainerEl.prepend(form);
};

export { buildForm };
