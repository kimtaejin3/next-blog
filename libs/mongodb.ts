import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rlaxowls1316:jh6il1fl5gIXmGB9@cluster0.zojkcyy.mongodb.net/"
    );
  } catch (e) {
    console.log("failed to connected to mongodb");
    console.log(e);
  }
};

export default connectMongoDB;
