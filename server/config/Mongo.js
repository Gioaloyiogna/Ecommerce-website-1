import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongo is running");
  } catch (error) {
    
    console.log(`Error:${error}`);
    process.exit(1);
  }
};

export default connectDatabase;