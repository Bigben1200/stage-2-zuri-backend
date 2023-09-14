import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const connectDatabase = async () => {
  try {
    const connect = mongoose.connect(
      "mongodb+srv://Bigben:Benson@cluster0.xylwtke.mongodb.net/Zuri"
    );
    console.log("Mongodb connected successfully");
  } catch (err) {
    console.log(err);
  }
};
