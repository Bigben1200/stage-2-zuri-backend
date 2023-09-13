// import mongoose, { Schema, Document } from "mongoose";

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

import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IPerson extends Document {
  _id: string;
  name: string;
}

const personSchema: Schema = new Schema({
  _id: { type: String, default: uuidv4 }, // Default to a new UUID when creating a person
  name: { type: String, required: true },
});

export const Person = mongoose.model<IPerson>("Person", personSchema);
