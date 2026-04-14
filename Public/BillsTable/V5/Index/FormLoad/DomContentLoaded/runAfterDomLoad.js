import { formSearchParamsFunc } from "./FormSearchParams/start.js";

const runAfterDomLoad = () => {
    formSearchParamsFunc();
    console.log("DOM Loaded → business logic runs here");
};

export { runAfterDomLoad };