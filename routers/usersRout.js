import express from "express";
// import service from "../services/usersServ.js";
import { createNewUser } from "../controllers/usersCtrl.js";
import { validateUsernameAndPAss } from "../middleWares/usersMidlW.js";
const router = express.Router()


router.post("/", validateUsernameAndPAss,createNewUser)

export default router