import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"


const app=express()

//use is mostly used for the middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json())

app.use(express.urlencoded({extended:true}))


app.use(express.static("public"))

//user ka browser joh hai uske andar ki access bhi kr pau aur set bhi kr pau.
app.use(cookieParser())


//routes
import userRouter from './routes/user.routes.js'

//routes declaration 
app.use("/api/v1/users",userRouter)

export {app}