import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "")
  } catch (error) {
    console.error('Database connection failed');
    throw new Error();
  }
};