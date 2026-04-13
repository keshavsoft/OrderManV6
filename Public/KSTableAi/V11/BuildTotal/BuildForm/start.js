import { createForm } from "./createForm.js";
import { afterMutation } from "../afterMutation.js";

const buildForm = ({
    inContainerEl,
    inDataStore,
    inDom,
    inServices,
    inOptions,
    inEndPoints,
    inColumnsConfig,
    inShowFooter,
    inData,
    inVisibleColumns,
    onDelete,
    inShowActions,
    inShowSerial,
    isBuildDataLists
}) => {
    const handleSave = async (newItem) => {
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload: newItem
        });

        afterMutation({
            inServices,
            inEndPoints,
            inDataStore,
            inContainerEl,
            inDom,
            inOptions,
            inVisibleColumns,
            onDelete,
            isBuildDataLists,
            inShowActions, inShowSerial
        });
    };

    const form = createForm({
        columns: inVisibleColumns,
        inDataStore,
        onSubmit: handleSave
    });

    inContainerEl.prepend(form);
};

export { buildForm };
