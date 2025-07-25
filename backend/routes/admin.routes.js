import express from 'express';
import {
    getAdmin,
    createAdmin,
    deleteAdmin,
    updateAdmin, verifyAdminByName,
} from "../controllers/admin.controllers.js";

const router = express.Router();

router.get("", getAdmin);

router.post("/login", verifyAdminByName)

router.post("", createAdmin);

router.delete("/:id", deleteAdmin);

router.put("/:id", updateAdmin);



export default router;