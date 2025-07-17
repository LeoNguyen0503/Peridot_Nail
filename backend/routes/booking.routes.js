import express from 'express';
import { getBooking, createBooking, deleteBooking, updateBooking} from "../controllers/booking.controllers.js";

const router = express.Router();

router.get("", getBooking);

router.post("", createBooking);

router.delete("/:id", deleteBooking);

router.put("/:id", updateBooking);



export default router;