import { Router } from "express";
import { logInUser, logOutUser, refreshAccessToken, registerUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { addJob, deleteJob, getAllJobsByUser, getJobStatsByUser, searchJobs } from "../controllers/job.controllers.js";

//create an router  
const router=Router()

router.route("/register").post(registerUser)

router.route('/login').post(logInUser)

//secured router
router.route("/logout").post(verifyJWT,logOutUser)  

router.route("/refresh-token").post(refreshAccessToken)


router.route("/jobs").post(addJob)  

router.route("/fetchjobs").post(getAllJobsByUser)  

router.route("/fetchstats").post(getJobStatsByUser) 


router.route("/deletejob").post(deleteJob)  


router.route("/searchjob").post(searchJobs)  



export default router   