import mongoose from 'mongoose';

const BookingHoldSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    dateString: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    sessionToken: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["held", "confirming"],
        default: "held",
        required: true,
    },
});

BookingHoldSchema.index(
    { employeeId: 1, dateString: 1, time: 1 },
    { unique: true }
);
BookingHoldSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const BookingHold = mongoose.model("BookingHold", BookingHoldSchema);
export default BookingHold;
