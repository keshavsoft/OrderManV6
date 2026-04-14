import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    hookAllListeners();
    console.log("DOM Loaded → business logic runs here");
};

export { runAfterDomLoad };