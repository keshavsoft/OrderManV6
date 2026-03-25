import { startFetchCalls } from "./FetchCalls/start.js";

import { hookAllListeners } from "./AddListeners/start.js";

const runAfterDomLoad = () => {
    startFetchCalls();
    hookAllListeners();
    console.log("DOM Loaded → business logic runs here");
};

export { runAfterDomLoad };