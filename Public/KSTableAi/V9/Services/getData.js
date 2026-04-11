const getDataFromFetch = async ({ inEndPoint }) => {
    const res = await fetch(inEndPoint);

    if (!res.ok) throw new Error("Create failed");

    return await res.json();
};

export { getDataFromFetch };