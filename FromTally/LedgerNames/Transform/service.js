import fs from "fs";
import { startFunc as readFromTally } from "./readFromTally.js";
const dataPath = "./Data/LedgerNames.json";

const StartFunc = async () => {
    const dataFromTally = await readFromTally();

    const LocalNewArray = dataFromTally.data.collection.map(element => {
        return {
            LedgerName: element.metadata.name,
            LedgerParentName: element.parent.value,
            LedgerType: element.metadata.type
        }
    });

    fs.writeFileSync(dataPath, JSON.stringify(LocalNewArray));
};

export { StartFunc };