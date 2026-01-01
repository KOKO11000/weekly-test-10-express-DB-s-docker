import express from "express";
import { validateUsername } from "../middleWares/usersMidlW.js";
import { addNewMsg, encryptMsg } from "../services/messageSrv.js";
import { addToSupabase } from "../controllers/messageCtrl.js";

const routerM = express.Router()


routerM.post("/encrypt", validateUsername, addToSupabase)
routerM.post("/decrypt",async (req,res)=>{
    
})

export default routerM