const applyMode = (config) => {

    if (config.mode === "create") {
        delete config.endPoints?.find;

        // 🔥 ADD THIS LINE
        config.options.table.showTable = false;
    };

    if (config.mode === "show") {
        if (!config.endPoints?.find) {
            throw new Error("find endpoint required");
        }
    };

    return config;
};

export { applyMode };