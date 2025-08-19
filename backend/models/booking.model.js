import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    employeeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
    },
    employeeName:{
        type: String,
        required: true,
    },
    customerName:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    dateString:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    services: {
        manicure: [String],
        pedicure: [String],
        combo: [String],
        nailsEnhancement: [String],
        addOn: [String],
        kids: [String]
    },
    phone: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

const Booking = mongoose.model("Booking",BookingSchema);
export default Booking;