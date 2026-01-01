import express from "express"
import routerU from "./routers/usersRout.js";
import routerM from "./routers/messagesRout.js";
const app = express()
const port = 5000
app.use(express.json())

app.get("/health",(req,res)=>{
    res.json({status:"OK"})
})

app.use("/api",routerU)

app.use("/api/message",routerM)

app.listen(port,()=>{
    console.log(`port running http://localhost:${port}`);
})