// Utils/prepareColumnsBundle.js

export const prepareColumnsBundle = (columnsConfig = []) => {
    const keys = columnsConfig.map(c => c.columnName);

    const visibleConfig = columnsConfig.filter(c => c.isVisible !== false);

    const visibleColumns = visibleConfig.map(c => c.columnName);

    const defaultRow = columnsConfig.reduce((acc, c) => {
        acc[c.columnName] = c.defaultValue ?? "";
        return acc;
    }, {});

    return {
        keys,
        visibleColumns,
        visibleConfig,
        defaultRow
    };
};