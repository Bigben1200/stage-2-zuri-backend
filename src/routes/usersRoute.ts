import express from "express";
import {
  createPerson,
  deletePersonById,
  getPersonById,
  updatePersonById,
} from "../controllers/users";

const router = express.Router();
router.post("/create", createPerson);
router.get("/getPerson/:id", getPersonById);
router.put("/updatePerson/:id", updatePersonById);
router.delete("/deletePerson/:id", deletePersonById);

export default router;
