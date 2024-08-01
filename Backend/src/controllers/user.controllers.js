import { asyncHandler } from "../utlis/asyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utlis/ApiResponse.js";

const generateAccessandRefreshToken=async(userId)=>{
    try {

        const user=await User.findById(userId)
        const accessToken=user.generateAccessToken()
        const refreshToken=user.generateRefreshToken()

        user.refreshToken=refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}

    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating access and refresh token")
    }
}

const registerUser=asyncHandler(async(req,res) => {

    //getting the data

    console.log("REq : ",req.body)
    const {fullName,username,email,password}=req.body
    console.log("email : ",email );

    if(
        [email,fullName,username,password].some((field)=>field?.trim()==="")
        ){
        throw new ApiError(400,"All the fields are required.")
    }

    //already exists or not

    const existedUser=await User.findOne({
        $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with same email or password already exists")
    }
    
    const user=await User.create({
        fullName,
        email,
        password,
        username,
    })

    //check that the user is created or not + removing the password and refreshtoken.

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    return res
    .status(200)
    .json(new ApiResponse (200,createdUser,"User registered Successfully."))
});


const logInUser=asyncHandler(async(req,res)=>{

    const {email,password}=req.body
    if(!email){
        throw new  ApiError(400,"email is required")
    }

    const user=await User.findOne({email})

    if(!user){
        throw new ApiError(404,"user doesn't exists")
    }

    const checkPassword=await user.isPasswordCorrect(password)

    if(!checkPassword){
        throw new ApiError(401,"incorrect credentials")
    }
    
    const {accessToken,refreshToken}=await generateAccessandRefreshToken(user._id)

    const loggedInUser= await User.findById(user._id).select("-password -refreshToken")

    const options={
        httpOnly:true,
        secure:true
    }


    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
        )
    )
})

const logOutUser=asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            },
            
        },
        {
            new:true
        }
    )

    const options={
        httpOnly:true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"user logged out"))
})

const refreshAccessToken=asyncHandler(async(req,res)=>{
    //refresh token toh bhejna hi padega
    const incomingRefreshToken=req.cookies.refreshToken || req.body.refreshToken
    if (!incomingRefreshToken) {
        throw new ApiError(401,"unauthorized request")
    }

try {
        const decodedToken=jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
       const user=await User.findById(decodedToken?._id)
       if (!user) {
        throw new ApiError(401,"Invalid refresh token")
       }
    
    //    hum yaha pr match kr lenge joh user hume bhej raha hai aur is token ko decode krke humne joh user find kiya hai woh uske pass bhi token honga. 
    if (incomingRefreshToken !== user?.refreshToken) {
        throw new ApiError(401,"refresh is expired")
    }
    
    const options={
        httpOnly:true,
        secure:true
    }
    const {accessToken,newRefreshToken}=await generateAccessAndRefreshToken(user._id)
    
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",newRefreshToken,options)
    .json(
        new ApiResponse(
            200,
            {accessToken,refreshToken:newRefreshToken},
            "Access token refreshed successfully"
        )
    )
} 
catch (error) {
       throw new ApiError(401,error?.message || "invalid refresh token") 
}

})

const updateAccountDetials=asyncHandler(async(req,res)=>{
    const {fullName,email}=req.body
    if(!fullName || !email){
        throw new ApiError(400,"All the fields are required")
    }

    const user=User.findByIdAndUpdate(
        req.user?._id,
        {
            $set:{
                fullName, //is same as the fullname=fullname
                email:email
            }
        },
        {
            new:true
        }
        ).select("-password")

        return res
        .status(200)
        .json(new ApiResponse(200,user,"Accounts detials updated successfully"))
})



export { registerUser,
    logInUser,
    logOutUser,
    refreshAccessToken,
}