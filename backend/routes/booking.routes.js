import express from 'express';
import {
    getBooking,
    createBooking,
    deleteBooking,
    updateBooking,
    getBookingByEmployeeId,
    getBookingByEmployeeIdAndDate
} from "../controllers/booking.controllers.js";

const router = express.Router();

router.get("", getBooking);

router.get("/:id", getBookingByEmployeeId);

router.get("/:id/date", getBookingByEmployeeIdAndDate)

router.post("", createBooking);

router.delete("/:id", deleteBooking);

router.put("/:id", updateBooking);



export default router;