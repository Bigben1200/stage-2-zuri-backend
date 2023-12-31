"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbconfig_1 = require("./config/dbconfig");
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, dbconfig_1.connectDatabase)();
const port = process.env.PORT || 3050;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use("/api", usersRoute_1.default);
//routes for crud
app.listen(port, () => {
    console.log(`profile api is running at http://localhost:${port}/api?slack_name=BensonEniola&track=backend`);
});
exports.default = app;
