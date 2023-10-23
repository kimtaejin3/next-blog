import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rlaxowls1316:jh6il1fl5gIXmGB9@cluster0.zojkcyy.mongodb.net/"
    );
    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("not connected to mongodb");
    console.log(e);
  }
};

export default connectMongoDB;
