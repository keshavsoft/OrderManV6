import { createItem } from "./createItem.js";
import { getDataFromFetch } from "./getData.js";

export const createServices = ({ tableName }) => {
    return {
        actions: {
            getData: ({ inEndPoint }) => getDataFromFetch({ inEndPoint }),
            create: ({ inEndPoint, payload }) => createItem({ inEndPoint, payload }),
            update: (id, payload) => updateItem({ tableName, id, payload }),
            remove: (id) => deleteItem({ tableName, id })
        }
    };
};