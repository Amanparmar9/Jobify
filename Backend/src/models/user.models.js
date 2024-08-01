import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            index:true,
            unique:true,
            lowercase:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true
        },
        fullName:{
            type:String,
            required:true,
            index:true,
            trim:true
        },
        password:{
            type:String,
            required:[true,'Password is required']
        },
        createdJobs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Job',
        }],
        refreshToken:{
            type:String
        }
},
{
    timestamps:true
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }

    //if the password is modified then this particular part runs.
    this.password=await bcrypt.hash(this.password,10)
    next()
})


//checks if the password is correct or not.
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}


userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)


