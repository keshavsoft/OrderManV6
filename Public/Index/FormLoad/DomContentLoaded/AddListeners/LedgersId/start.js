import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('LedgersId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
