"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
router.post("/create", users_1.createPerson);
router.get("/getPerson/:id", users_1.getPersonById);
router.put("/updatePerson/:id", users_1.updatePersonById);
router.delete("/deletePerson/:id", users_1.deletePersonById);
exports.default = router;
