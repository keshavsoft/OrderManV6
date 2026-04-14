import { createItem } from "./createItem.js";
import { getDataFromFetch } from "./getData.js";
import { deleteItem } from "./deleteItem.js";
import { findItem } from "./findItem.js";

export const createServices = ({ tableName }) => {
    return {
        actions: {
            getData: ({ inEndPoint }) => getDataFromFetch({ inEndPoint }),
            create: ({ inEndPoint, payload }) => createItem({ inEndPoint, payload }),
            update: (id, payload) => updateItem({ tableName, id, payload }),
            remove: ({ inEndPoint, id }) => deleteItem({ inEndPoint, id }),
            find: ({ inEndPoint, id }) => findItem({ inEndPoint, id }),
        }
    };
};