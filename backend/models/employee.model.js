import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    position:{
        type: String,
        required: true,
    },
    availability:{
        type: [String],
        required: true,  
    },
    image:{
        type: String,
        required: false,
    }
},{
    timestamps: true,
});

const Employee = mongoose.model("Employee",employeeSchema);
export default Employee;