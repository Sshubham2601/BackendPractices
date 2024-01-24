import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app=express()

app.use(cors({

          origin:process.env. CORS_ORIGIN,
          credentials:true
}))

app.use(express.json({limit:"16kb"}))//for form request
app.use(express.urlencoded({extended:true,limit:"16kb"})) //for url request on server
app.use(express.static("public")) //for files and image store on that server to public using
app.use(cookieParser())
export { app }