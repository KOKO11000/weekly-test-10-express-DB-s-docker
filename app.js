import express from "express"
import router from "./routers/usersRout.js";
const app = express()
const port = 5000
app.use(express.json())

app.get("/health",(req,res)=>{
    res.json({status:"OK"})
})

app.use("/api/auth/register",router)
app.use("api/message",)

app.listen(port,()=>{
    console.log(`port running http://localhost:${port}`);
})