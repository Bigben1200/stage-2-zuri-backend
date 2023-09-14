"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const connectDatabase = async () => {
    try {
        const connect = mongoose_1.default.connect("mongodb+srv://Bigben:Benson@cluster0.xylwtke.mongodb.net/Zuri");
        console.log("Mongodb connected successfully");
    }
    catch (err) {
        console.log(err);
    }
};
exports.connectDatabase = connectDatabase;
