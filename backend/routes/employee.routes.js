import express from 'express';
import {
    getEmployees,
    updateEmployee,
    deleteEmployee,
    createEmployee,
    getEmployeesById
} from '../controllers/employee.controllers.js';



const router = express.Router();

router.get("", getEmployees);

router.get("/:id", getEmployeesById);

router.post("", createEmployee)

router.delete("/:id", deleteEmployee)

router.put("/:id", updateEmployee)

export default router;