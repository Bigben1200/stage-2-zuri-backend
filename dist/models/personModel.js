"use strict";
// import mongoose, { Schema, Document } from "mongoose";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
// interface IPerson extends Document {
//   name: string;
//   age: Number;
// }
// const personSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });
// export const Person = mongoose.model<IPerson>("Person", personSchema);
// export { IPerson };
const mongoose_1 = __importStar(require("mongoose"));
const uuid_1 = require("uuid");
const personSchema = new mongoose_1.Schema({
    _id: { type: String, default: uuid_1.v4 },
    name: { type: String, required: true },
    age: { type: Number, required: false },
});
exports.Person = mongoose_1.default.model("Person", personSchema);
