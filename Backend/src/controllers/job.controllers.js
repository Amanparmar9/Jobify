import { asyncHandler } from "../utlis/asyncHandler.js";
import { ApiError } from "../utlis/ApiError.js";
import { Job } from "../models/job.models.js";
import { ApiResponse } from "../utlis/ApiResponse.js";
import { User } from "../models/user.models.js";

const addJob = asyncHandler(async (req, res) => {
//   const { position, company, jobLocation, jobStatus, jobType } = req.body;
  
//   if (!position || !company || !jobLocation || !jobStatus || !jobType) {
//     throw new ApiError(400, "All fields are required.");
//   }

//   const job = await Job.create({
//     userId: req.user._id,
//     position,
//     company,
//     jobLocation,
//     jobStatus,
//     jobType
//   });

//   return res.status(201).json(new ApiResponse(201, job, "Job added successfully."));
// });

// const getJobsByUser = asyncHandler(async (req, res) => {
//   const userId = req.user._id;

//   const jobs = await Job.find({ userId });

//   return res.status(200).json(new ApiResponse(200, jobs, "Jobs fetched successfully."));

const { userId, position, company, jobLocation, jobStatus, jobType } = req.body;

if (!userId || !position || !company || !jobLocation || !jobStatus || !jobType) {
  res.status(400);
  throw new Error('All fields are required');
}

const newJob = new Job({
  userId,
  position,
  company,
  jobLocation,
  jobStatus,
  jobType
});

await newJob.save();
const user = await User.findById(userId);
console.log(user);
if (!user) {
  res.status(404);
  throw new Error('User not found');
}

user.createdJobs.push(newJob._id);
await user.save();

res.status(201).json({job: newJob,user});
});



const getAllJobsByUser = asyncHandler(async (req, res) => {
  // Get the user ID from the request body
  const { userId } = req.body;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  console.log(userId);

  // Query the database for the user and populate the created jobs
  const user = await User.findById(userId).populate("createdJobs");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Ensure createdJobs is an array before mapping
  const createdJobIds = Array.isArray(user.createdJobs) ? user.createdJobs.map((job) => job._id) : [];

  // Query the database to fetch the details of the created jobs
  const createdJobs = await Job.find({ _id: { $in: createdJobIds } });

  if (createdJobs.length === 0) {
    return res.status(200).json(new ApiResponse(200, { createdJobs: [] }, "No jobs found for this user"));
  }

  // Return the details of the created jobs
  return res.status(200).json(new ApiResponse(200, { createdJobs }, "User's created jobs retrieved successfully"));
});






// const getJobStatsByUser = asyncHandler(async (req, res) => {
//   // Get the user ID from the request body
//   const { userId } = req.body;

//   if (!userId) {
//     throw new ApiError(400, "User ID is required");
//   }

//   // Query the database for the user and populate the created jobs
//   const user = await User.findById(userId).populate("createdJobs");

//   if (!user) {
//     throw new ApiError(404, "User not found");
//   }

//   // Log the populated created jobs
//   console.log('Created Jobs:', user.createdJobs);

//   // Ensure createdJobs is an array before mapping
//   const createdJobIds = Array.isArray(user.createdJobs) ? user.createdJobs.map((job) => job._id) : [];

//   // Log the job IDs
//   // console.log('Created Job IDs:', createdJobIds);

//   // Query the database to fetch the details of the created jobs
//   const createdJobs = await Job.find({ _id: { $in: createdJobIds } });

//   // Log the created jobs fetched from the database
//   // console.log('Fetched Created Jobs:', createdJobs);

//   // Calculate statistics with the correct field name 'jobStatus'
//   const pendingApplications = createdJobs.filter(job => job.jobStatus === 'pending').length;
//   const interviewsScheduled = createdJobs.filter(job => job.jobStatus === 'interview').length;
//   const jobsDeclined = createdJobs.filter(job => job.jobStatus === 'decline').length;

//   // Log the calculated statistics
//   // console.log('Pending Applications:', pendingApplications);
//   // console.log('Interviews Scheduled:', interviewsScheduled);
//   // console.log('Jobs Declined:', jobsDeclined);

//   // Return the statistics
//   return res.status(200).json(new ApiResponse(200, { 
//     pendingApplications, 
//     interviewsScheduled, 
//     jobsDeclined 
//   }, "User's job statistics retrieved successfully"));
// });


const getJobStatsByUser = asyncHandler(async (req, res) => {
  // Get the user ID from the request body
  const { userId } = req.body;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  // Query the database for the user and populate the created jobs
  const user = await User.findById(userId).populate("createdJobs");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Ensure createdJobs is an array before mapping
  const createdJobIds = Array.isArray(user.createdJobs) ? user.createdJobs.map((job) => job._id) : [];

  // Query the database to fetch the details of the created jobs
  const createdJobs = await Job.find({ _id: { $in: createdJobIds } });

  // Calculate statistics with the correct field name 'jobStatus'
  const pendingApplications = createdJobs.filter(job => job.jobStatus === 'pending').length;
  const interviewsScheduled = createdJobs.filter(job => job.jobStatus === 'interview').length;
  const jobsDeclined = createdJobs.filter(job => job.jobStatus === 'decline').length;

  // Calculate statistics for job types
  const fullTimeJobs = createdJobs.filter(job => job.jobType === 'full time').length;
  const partTimeJobs = createdJobs.filter(job => job.jobType === 'part time').length;
  const internshipJobs = createdJobs.filter(job => job.jobType === 'internship').length;

  // Return the statistics
  return res.status(200).json(new ApiResponse(200, { 
    pendingApplications, 
    interviewsScheduled, 
    jobsDeclined,
    fullTimeJobs,
    partTimeJobs,
    internshipJobs
  }, "User's job statistics retrieved successfully"));
});

const deleteJob = asyncHandler(async (req, res) => {
  const { userId, jobId } = req.body;

  if (!userId || !jobId) {
    throw new ApiError(400, "User ID and Job ID are required");
  }

  // Find the user by ID
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Remove the job from the user's createdJobs array
  user.createdJobs = user.createdJobs.filter((job) => job.toString() !== jobId);

  // Save the user document
  await user.save();

  // Remove the job from the Job collection
  const deletedJob = await Job.findByIdAndDelete(jobId);

  if (!deletedJob) {
    throw new ApiError(404, "Job not found");
  }

  return res.status(200).json(new ApiResponse(200, {}, "Job deleted successfully"));
});


// const searchJobs = asyncHandler(async (req, res) => {
//   const { userId, search, jobStatus, jobType } = req.body;

//   if (!userId) {
//     throw new ApiError(400, "User ID is required");
//   }

//   // Find the user by ID
//   const user = await User.findById(userId);

//   if (!user) {
//     throw new ApiError(404, "User not found");
//   }

//   // Build query object for MongoDB
//   const query = {};

//   // Search by company name
//   if (search) {
//     query.company = { $regex: new RegExp(search, "i") };
//   }

//   // Filter by job status
//   if (jobStatus && jobStatus !== "all") {
//     query.jobStatus = jobStatus;
//   }

//   // Filter by job type
//   if (jobType && jobType !== "all") {
//     query.jobType = jobType;
//   }

//   // Fetch jobs based on the query
//   const jobs = await Job.find(query);

//   if (!jobs || jobs.length === 0) {
//     return res.status(200).json(new ApiResponse(200, [], "No jobs found"));
//   }

//   return res.status(200).json(new ApiResponse(200, jobs, "Jobs found successfully"));
// });


const searchJobs = asyncHandler(async (req, res) => {
  const { userId, search, jobStatus, jobType } = req.body;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  // Find the user by ID
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // Build query object for MongoDB
  const query = {};

  // Search by company name
  if (search) {
    query.company = { $regex: new RegExp(search, "i") };
  }

  // Filter by job status
  if (jobStatus && jobStatus !== "all") {
    query.jobStatus = jobStatus;
  }

  // Filter by job type
  if (jobType && jobType !== "all") {
    query.jobType = jobType;
  }

  // Fetch jobs based on the query
  const jobs = await Job.find(query);

  if (!jobs || jobs.length === 0) {
    return res.status(200).json(new ApiResponse(200, [], "No jobs found"));
  }

  return res.status(200).json(new ApiResponse(200, jobs, "Jobs found successfully"));
});



export { addJob ,getAllJobsByUser,getJobStatsByUser,deleteJob,searchJobs};
