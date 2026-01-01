import express from "express"
import router from "./routers/usersRout.js";
const app = express()
const port = 5000
app.use(express.json())

app.get("/health",(req,res)=>{
    res.json({status:"OK"})
})

app.use("/register",router)


app.listen(port,()=>{
    console.log(`port running http://localhost:${port}`);
})