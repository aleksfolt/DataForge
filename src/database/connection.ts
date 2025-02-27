import mongoose from 'mongoose';
import config from '../config';

const buildMongoURI = (): string => {
  const { host, port, name, username, password } = config.database;
  if (username && password) {
    return `mongodb://${username}:${password}@${host}:${port}/${name}`;
  }
  return `mongodb://${host}:${port}/${name}`;
};

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = buildMongoURI();
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;