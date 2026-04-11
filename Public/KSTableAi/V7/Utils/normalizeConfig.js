const normalizeConfig = (cfg = {}) => {
    cfg.options ??= {};
    cfg.options.dataList ??= {};
    cfg.options.dataList.show ??= false;

    cfg.options.firstRow ??= {};
    cfg.options.firstRow.showSearch ??= false;

    cfg.options.table ??= {};
    cfg.options.table.showFooter ??= false;
    cfg.options.table.showRowOptions ??= false;
    cfg.options.table.showSerial ??= false;

    cfg.options.table.footer ??= {};
    cfg.options.table.footer.showDataList ??= false;

    cfg.options.table.footer.showDataList ??= false;

    return cfg;
};

export { normalizeConfig };