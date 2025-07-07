import Employee from '../models/employee.model.js';
import mongoose from 'mongoose';

export const getEmployees = async (_, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json({ success: true, data: employees });
    } catch (error) {
        console.error("Error in Get employees", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const createEmployee = async (req, res) => {
    const employee = req.body;

    if (!employee.name || !employee.email || !employee.phone || !employee.position || !employee.availability) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newEmployee = new Employee(employee);

    try {
        await newEmployee.save();
        res.status(201).json({ success: true, data: newEmployee });
    } catch (error) {
        console.error("Error in Create employee", error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteEmployee = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Employee ID" });
    }


    try {
        await Employee.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Employee deleted successfully" });
    } catch (error) {
        console.error("Error in Delete employee", error.message);
        res.status(404).json({ success: false, message: "Employee not found" });
    }
}

export const updateEmployee = async (req, res) => {
    const {id} = req.params;

    const employee = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success: false, message: "Invalid Employee ID" });
    }

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, employee, {new: true});
        res.status(200).json({ success: true, data: updatedEmployee });
    } catch (error) {
        res.status(500).json({success: false, message: "Internal Server Error" });
    }
}