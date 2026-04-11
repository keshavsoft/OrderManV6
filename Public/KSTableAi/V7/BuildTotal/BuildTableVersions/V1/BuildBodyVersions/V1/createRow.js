const createRow = () => {
    const tr = document.createElement("tr");
    tr.className = "border-t hover:bg-blue-100 odd:bg-gray-100";
    return tr;
};

export { createRow };