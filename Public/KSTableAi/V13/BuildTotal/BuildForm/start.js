import { createForm } from "./V3/createForm.js";
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
    isBuildDataLists,
    inDefaultRow,
    inFormClass,
    inButtonClass,
    uiClasses,
    inIsDisabled
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
            inShowActions, inShowSerial,
            inDefaultRow
        });
    };

    const form = createForm({
        columns: inVisibleColumns,
        inDataStore,
        inDefaultRow,
        onSubmit: handleSave,
        uiClasses,
        inIsDisabled
    });

    inContainerEl.prepend(form);
};

export { buildForm };
