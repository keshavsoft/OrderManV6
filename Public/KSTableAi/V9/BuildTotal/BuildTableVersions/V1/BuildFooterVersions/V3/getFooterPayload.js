const getFooterPayload = ({ tr, inDom, inVisibleColumns }) => {
    const keys = inVisibleColumns;
    const payload = {};

    keys.forEach((key) => {
        payload[key] = inDom.getInputValueFromRow(tr, key);
    });

    return payload;
};

export { getFooterPayload };