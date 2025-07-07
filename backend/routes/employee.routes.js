import express from 'express';
import { getEmployees, updateEmployee, deleteEmployee, createEmployee } from '../controllers/employee.controllers.js';



const router = express.Router();

router.get("", getEmployees);

router.post("", updateEmployee)

router.delete("/:id", deleteEmployee)

router.put("/:id", createEmployee)

export default router;