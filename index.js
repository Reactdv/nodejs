import cors from "cors"
import express from "express"
import bodyParser from "body-parser"

const app = express()
app.use(cors())
app.get("/",(req,res)=>res.send("working"))

app.listen(4000,()=>console.log("listening"))
