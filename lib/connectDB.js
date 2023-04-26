import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already Connected");
    return;
  }

  mongoose.connect(process.env.MONGODB_URL, {}, (err) => {
    if (err) throw new err();
    console.log("Connected to mongodb.");
  });
};
export default connectDB;
