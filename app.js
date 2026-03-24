import express from 'express';
import http from 'http';
import { router as routerFromV1 } from "./V1/routes.js";
import { router as routerFromV2 } from "./V2/routes.js";
import { router as routerFromV3 } from "./V3/routes.js";
import { router as routerFromV4 } from "./V4/routes.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));
app.use("/V1", routerFromV1);
app.use("/V2", routerFromV2);
app.use("/V3", routerFromV3);
app.use("/V4", routerFromV4);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});