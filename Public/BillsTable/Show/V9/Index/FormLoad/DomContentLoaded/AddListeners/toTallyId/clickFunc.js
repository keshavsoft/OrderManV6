import { startFetchAsGet } from "./FetchAsGet/start.js";

const clickFuncToRun = () => {
    startFetchAsGet();
    console.log("clickFuncToRun");
};

export { clickFuncToRun };