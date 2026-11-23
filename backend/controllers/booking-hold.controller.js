import BookingHold from "../models/booking-hold.model.js";
import mongoose from "mongoose";

export const createBookingHold = async (req, res) => {
    const bookingHold = req.body;

    if (
        !bookingHold.employeeId ||
        !bookingHold.dateString ||
        !bookingHold.time ||
        !bookingHold.sessionToken ||
        !bookingHold.expiresAt
    ) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }   

    const newBookingHold = new BookingHold(bookingHold);

    try {
        await newBookingHold.save();
        res.status(201).json({ success: true, data: newBookingHold });
    } catch (error){
        console.error("Error in Create booking hold", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

export const getBookingHold = async (req, res) => {
    try {
        const bookingHolds = await BookingHold.find();
        res.status(200).json({ success: true, data: bookingHolds });
    } catch (error) {
        console.error("Error in Get booking hold", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


export const deleteBookingHold = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteBookingHold = await BookingHold.findByIdAndDelete(id);
        if (!deleteBookingHold) {
            return res.status(404).json({ success: false, message: "Booking hold not found" });
        }
        res.status(200).json({ success: true, message: "Booking hold deleted successfully" });  
    } catch (error) {
        console.error("Error in Delete booking hold", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

