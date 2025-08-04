import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    login:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true,
})

const Admin = mongoose.model("Admin",AdminSchema);
export default Admin;