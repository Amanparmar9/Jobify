import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

// is called to load environment variables from a .env file located in the root directory.
dotenv.config({
    path:'./.env'
})

// Call connectDB and handle the promise using .then() and .catch()
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ),()=>{
        console.log(`Server is Running at the PORT : ${process.env.PORT}`);
    }
})
.catch((err)=>{
    console.log("MongoDb connection failed : ",err);
})