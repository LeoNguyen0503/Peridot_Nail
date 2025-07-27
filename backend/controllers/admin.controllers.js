import Admin from '../models/admin.model.js';
import mongoose from 'mongoose';
import argon2 from "argon2";

export const getAdmin = async (_, res) => {
    try {
        const admins = await Admin.find({});
        res.status(200).json({ success: true, data: admins });
    } catch (error) {
        console.error("Error in Get admins", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const verifyAdminByName = async (req, res) => {
    const {login, password} = req.body;

    try {
        const admin = await Admin.findOne({login: login});
        if(!admin){
            return res.status(404).json({ success: false, message: "BookingList not found" });
        } else {
            const hash = admin.password;
            const isMatch = await argon2.verify(hash, password);
            if (!isMatch) {
                return res.status(401).json({ success: false, message: "Invalid password " + req.body.password});
            }
            res.status(200).json({ success: true, message: "admin login successfully" });
        }
    } catch (error) {
        console.error("Error in Get admin by name", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const createAdmin = async (req, res) => {
    const admin = req.body;

    if (
        !admin.login ||
        !admin.password) {
        return res.status(400).json({ success: false, message: "Please provide all fields correctly" });
    }

    const newAdmin = new Admin(admin);

    try {
        await newAdmin.save();
        res.status(201).json({ success: true, data: newAdmin });
    } catch (error) {
        console.error("Error in Create admin", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteAdmin = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid BookingList ID" });
    }


    try {
        await Admin.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "BookingList deleted successfully" });
    } catch (error) {
        console.error("Error in Delete admin", error.message);
        res.status(404).json({ success: false, message: "BookingList not found" });
    }
}

export const updateAdmin = async (req, res) => {
    const {id} = req.params;

    const admin = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid BookingList ID" });
    }

    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, admin, {new: true});
        res.status(200).json({ success: true, data: updatedAdmin });
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}