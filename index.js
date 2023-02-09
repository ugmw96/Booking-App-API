import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import roomsRoutes from './routes/rooms.js';
import hotelsRoutes from './routes/hotels.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const app = express();

const mongoDbConnection = async() => {
  try {
    mongoose.connect(process.env.MONGO_DB, () => {
      console.log('Connected To MongoDB');
    })
  } catch (error) {
    console.log(error);
  }
}

mongoose.connection.on("disconnected", () => {
  console.log('Mongodb Disconnected');
});

mongoose.connection.on("connected", () => {
  console.log('Mongodb Connected');
});

//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);

app.use((err,req,res,next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorMessage,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8080, () => {
  mongoDbConnection()
  console.log('listening on port 8080');
})