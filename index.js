import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import roomsRoutes from './routes/rooms.js';
import hotelsRoutes from './routes/hotels.js';
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
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);

app.listen(8080, () => {
  mongoDbConnection()
  console.log('listening on port 8080');
})