import express from "express";
import { addUserToCollection } from "../controllers/usersCtrl.js";
import { validateUsername } from "../middleWares/usersMidlW.js";
import { getAll } from "../mongoCRUD/crud.js";

const routerU = express.Router()

const collectionName = "users collection"



routerU.post("/auth/register", addUserToCollection)
routerU.get("/users/me",validateUsername ,async (req,res)=>{
   try {
     const {id} = req.body
     const get = await getAll(collectionName,id)
     res.json({get})
   } catch (error) {
    res.status(404).json({msg:error.message})
    console.error(error)
   }
})

export default routerU