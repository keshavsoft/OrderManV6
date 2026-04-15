import { createForm } from "./V3/createForm.js";
import { afterMutation } from "../afterMutation.js";
// import { applyProjection } from "./applyProjection.js";

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
    inVisibleColumnsConfig,
    onDelete,
    inShowActions,
    inShowSerial,
    isBuildDataLists,
    inDefaultRow,
    inFormClass,
    inButtonClass,
    uiClasses,
    inIsDisabled,
    showSaveButton,
    inFindData,
    inShowTable
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
            inDefaultRow,
            inShowTable
        });
    };

    const form = createForm({
        columns: inVisibleColumns,
        inVisibleColumnsConfig,
        inDataStore,
        inDefaultRow,
        onSubmit: handleSave,
        uiClasses,
        inIsDisabled,
        showSaveButton
    });

    inContainerEl.prepend(form);
    // debugger;
    applyProjectionToTableRow({ tr: form, projection: inFindData })
};

const applyProjectionToTableRow = ({ tr, projection }) => {
    Object.entries(projection).forEach(([key, value]) => {
        const cell = tr.querySelector(`[name="${key}"]`);
        if (cell) {
            cell.value = value;
        }
    });
};

export { buildForm };
