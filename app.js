import express from 'express';
import http from 'http';
import { router as routerFromV4 } from "./V4/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromV7 } from "./V7/routes.js";
import { router as routerFromV8 } from "./V8/routes.js";

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || 3000);

app.use(express.static('Public'));
app.use("/V4", routerFromV4);
app.use('/V5', routerFromV5);
app.use('/V6', routerFromV6);
app.use('/V7', routerFromV7);
app.use('/V8', routerFromV8);

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