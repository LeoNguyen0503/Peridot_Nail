import Booking from '../models/booking.model.js';
import mongoose from 'mongoose';

export const getBooking = async (_, res) => {
    try {
        const booking = await Booking.find({});
        res.status(200).json({ success: true, data: booking });
    } catch (e) {
        console.error("Error in Get booking", e.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const createBooking = async (req, res) => {
    const booking = req.body;

    if ( !booking.employeeId || !booking.date || !booking.time || !booking.services ) {
        return res.status(400).json({ success: false, message: "Please provide all fields correctly" });
    }

    const newBooking = new Booking(booking);

    try {
       await newBooking.save();
    } catch (e) {
        console.error("Error in Create booking", e.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteBooking = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Booking ID" });
    }

    try {
        await Booking.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Booking deleted successfully" });
    } catch (e) {
        console.error("Error in Delete booking", e.message);
        res.status(404).json({ success: false, message: "Booking not found" });
    }
}

export const updateBooking = async (req, res) => {
    const {id} = req.params;

    const booking = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Booking ID" });
    }

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, booking, {new: true})
        res.status(200).json({ success: true, data: updatedBooking });
    } catch (e) {
        console.error("Error in Update booking", e.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

