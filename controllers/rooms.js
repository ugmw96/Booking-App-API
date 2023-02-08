import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";


export const createRoom = async(req, res, next) => {
  const HotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const saveRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        $push: { rooms: saveRoom._id }
      })
    } catch (error) {
      next(error);
    }
    res.status(200).send(saveRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Room.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new : true }
    );
    res.status(200).json(updateRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  const HotelId = req.params.hotelId;
  try {
    try {
      await Hotel.findByIdAndUpdate(HotelId, {
        $pull: { rooms: req.params.id }
      })
    } catch (error) {
      next(error);
    }
    res.status(200).json('Room deleted');
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(
      req.params.id,
    );
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    next(error);
  }
};