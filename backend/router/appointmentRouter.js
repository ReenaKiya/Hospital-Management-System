import express from "express";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js"
import { deletAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";


const router = express.Router();
router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/updateappointmentstatus/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deletAppointment);

export default router;