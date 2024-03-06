import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blogs");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
