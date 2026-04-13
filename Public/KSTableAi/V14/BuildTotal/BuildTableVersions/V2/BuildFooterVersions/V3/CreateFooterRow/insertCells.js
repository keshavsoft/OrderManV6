import { createFooterCell } from "./createFooterCell.js";

const startFunc = ({ keys, tr, options = {}, inDefaultRow }) => {
    const defaultRow = inDefaultRow;
    debugger;
    keys.forEach(key => {
        const defaultValue = defaultRow[key];

        tr.appendChild(createFooterCell({
            key,
            inDefaultValue: defaultValue,
            onChangeFunc: options.onChange,
            showDataList: options.showDataList,
            inColumnsConfig: options.inColumnsConfig
        }));
    });
};

export { startFunc };
