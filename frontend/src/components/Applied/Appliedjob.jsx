// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AppliedJob() {
//   const [jobs, setJobs] = useState([]);

//   // Function to fetch jobs for the user
//   const fetchJobs = async () => {
//     try {
//       const userId = sessionStorage.getItem('userId');
//       console.log(userId);
//       const response = await axios.get(`http://localhost:8000/api/v1/users/fetchjobs`,{userId});
//       setJobs(response.data);
//     } catch (error) {
//       console.error('Error fetching jobs:', error);
//     }
//   };

//   // Use useEffect to fetch jobs when the component mounts
//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <div className="p-5 bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         {/* Search Form */}
//         <form className="mb-10 p-5 bg-white rounded-lg shadow-md">
//           <h2 className="mb-5 text-xl font-bold">Search Form</h2>
//           <div className="grid gap-4 lg:grid-cols-4">
//             <div className="flex flex-col gap-2">
//               <label htmlFor="search" className="text-sm font-medium text-gray-700">Search</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="search"
//                   className="w-full p-2 pl-10 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Search"
//                   required
//                 />
//                 <svg
//                   className="absolute left-2 bottom-5 top-2 w-5 h-5 pointer-events-none text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM21 21l-4.35-4.35m-.65-.65L17 17"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="jobStatus" className="text-sm font-medium text-gray-700">Job Status</label>
//               <select
//                 id="jobStatus"
//                 className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="all">All</option>
//                 <option value="interview">Interview</option>
//                 <option value="declined">Declined</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="jobType" className="text-sm font-medium text-gray-700">Job Type</label>
//               <select
//                 id="jobType"
//                 className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="all">All</option>
//                 <option value="part-time">Part-Time</option>
//                 <option value="full-time">Full-Time</option>
//               </select>
//             </div>
//             <button
//               type="reset"
//               className="mt-6 p-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 lg:col-span-1"
//             >
//               Search Job
//             </button>
//           </div>
//         </form>

//         {/* Jobs Found */}
//         <div className="mb-5 text-center">
//           <h2 className="text-xl font-bold">{jobs.length} Jobs Found</h2>
//         </div>

//         {/* Job Cards */}
//         <div className="grid gap-6 lg:grid-cols-2">
//           {jobs.map((job) => (
//             <div key={job._id} className="p-6 bg-white rounded-lg shadow-md">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white bg-teal-500 rounded-full">{job.position.charAt(0)}</div>
//                   <div>
//                     <h3 className="text-lg font-semibold">{job.position}</h3>
//                     <p className="text-sm text-gray-500">{job.company}</p>
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-500 flex flex-col items-end space-y-1">
//                   <p className="mb-1">{new Date(job.createdAt).toLocaleDateString()}</p>
//                   <span className={`px-2 py-1 text-xs font-medium rounded ${job.jobStatus === 'declined' ? 'text-red-500 bg-red-100' : job.jobStatus === 'interview' ? 'text-blue-500 bg-blue-100' : 'text-yellow-500 bg-yellow-100'}`}>
//                     {job.jobStatus}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <span className="inline-flex items-center gap-1">
//                     {/* Map Marker icon */}
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s-3-4.5-3-8.5c0-3.6 2.4-6.5 5.3-6.5 2.9 0 5.3 2.9 5.3 6.5 0 4-3 8.5-3 8.5z" />
//                       <circle cx={12} cy={10} r={3} />
//                     </svg>
//                     {job.jobLocation}
//                   </span>
//                   <span className="inline-flex items-center gap-1">
//                     {/* Briefcase icon */}
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v7m0 0v4m0-4h-4m4 0h4m-9-3h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
//                     </svg>
//                     {job.jobType}
//                   </span>
//                 </div>
//                 <div className="flex gap-2">
//                   <button className="px-3 py-1 text-sm font-medium text-white bg-teal-500 rounded hover:bg-teal-600">Edit</button>
//                   <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppliedJob;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function AppliedJob() {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const userId = sessionStorage.getItem('userId'); // Sample userId
//         const response = await axios.post('http://localhost:8000/api/v1/users/fetchjobs', {
//            userId 
//         });
//         console.log(userId);
//         setJobs(response.data.data.createdJobs);
//       } 
//       catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching jobs: {error}</div>;

//   return (
//     <div className="p-5 bg-gray-100 min-h-screen">
//       <div className="max-w-6xl mx-auto">
//         <form className="mb-10 p-5 bg-white rounded-lg shadow-md">
//           <h2 className="mb-5 text-xl font-bold">Search Form</h2>
//           <div className="grid gap-4 lg:grid-cols-4">
//             <div className="flex flex-col gap-2">
//               <label htmlFor="search" className="text-sm font-medium text-gray-700">Search</label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="search"
//                   className="w-full p-2 pl-10 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Search"
//                   required
//                 />
//                 <svg
//                   className="absolute left-2 bottom-5 top-2 w-5 h-5 pointer-events-none text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM21 21l-4.35-4.35m-.65-.65L17 17"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="jobStatus" className="text-sm font-medium text-gray-700">Job Status</label>
//               <select
//                 id="jobStatus"
//                 className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="all">All</option>
//                 <option value="interview">Interview</option>
//                 <option value="declined">Declined</option>
//               </select>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label htmlFor="jobType" className="text-sm font-medium text-gray-700">Job Type</label>
//               <select
//                 id="jobType"
//                 className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               >
//                 <option value="all">All</option>
//                 <option value="part-time">Part-Time</option>
//                 <option value="full-time">Full-Time</option>
//               </select>
//             </div>
//             <button
//               type="reset"
//               className="mt-6 p-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 lg:col-span-1"
//             >
//               Search Job
//             </button>
//           </div>
//         </form>

//         <div className="mb-5 text-center">
//           <h2 className="text-xl font-bold">{jobs.length} Jobs Found</h2>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-2">
//           {jobs.map((job) => (
//             <div key={job._id} className="p-6 bg-white rounded-lg shadow-md">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white bg-teal-500 rounded-full">
//                     {job.title.charAt(0)}
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold">{job.title}</h3>
//                     <p className="text-sm text-gray-500">{job.companyName}</p>
//                   </div>
//                 </div>
//                 <div className="text-sm text-gray-500 flex flex-col items-end space-y-1">
//                   <p className="mb-1">{new Date(job.date).toLocaleDateString()}</p>
//                   <span className={`px-2 py-1 text-xs font-medium bg-blue-100 rounded text-${job.status === 'Interview' ? 'blue' : 'red'}-500`}>
//                     {job.status}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 text-gray-500">
//                   <span className="inline-flex items-center gap-1">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s-3-4.5-3-8.5c0-3.6 2.4-6.5 5.3-6.5 2.9 0 5.3 2.9 5.3 6.5 0 4-3 8.5-3 8.5z" />
//                       <circle cx={12} cy={10} r={3} />
//                     </svg>
//                     {job.location}
//                   </span>
//                   <span className="inline-flex items-center gap-1">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v7m0 0v4m0-4h-4m4 0h4m-9-3h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
//                     </svg>
//                     {job.jobType}
//                   </span>
//                 </div>
//                 <div className="flex gap-2">
//                   <button className="px-3 py-1 text-sm font-medium text-white bg-teal-500 rounded hover:bg-teal-600">Edit</button>
//                   <button className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppliedJob;






import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppliedJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [jobStatus, setJobStatus] = useState("all");
  const [jobType, setJobType] = useState("all");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const userId = sessionStorage.getItem('userId');
        const response = await axios.post('http://localhost:8000/api/v1/users/fetchjobs', {
          userId
        });
        setJobs(response.data.data.createdJobs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleDelete = async (jobId) => {
    try {
      const userId = sessionStorage.getItem('userId');
      await axios.post('http://localhost:8000/api/v1/users/deletejob', { userId, jobId });
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (error) {
      setError(error.message);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (search === "" || job.position.toLowerCase().startsWith(search.toLowerCase()) || job.company.toLowerCase().startsWith(search.toLowerCase())) &&
      (jobStatus === "all" || job.jobStatus.toLowerCase() === jobStatus.toLowerCase()) &&
      (jobType === "all" || job.jobType.toLowerCase() === jobType.toLowerCase())
    );
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching jobs: {error}</div>;

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <form className="mb-10 p-5 bg-white rounded-lg shadow-md">
          <h2 className="mb-5 text-xl font-bold">Search Form</h2>
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="search" className="text-sm font-medium text-gray-700">Search</label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="w-full p-2 pl-10 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg
                  className="absolute left-2 bottom-5 top-2 w-5 h-5 pointer-events-none text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a4 4 0 11-8 0 4 4 0 018 0zM21 21l-4.35-4.35m-.65-.65L17 17"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jobStatus" className="text-sm font-medium text-gray-700">Job Status</label>
              <select
                id="jobStatus"
                className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={jobStatus}
                onChange={(e) => setJobStatus(e.target.value)}
              >
                <option value="all">All</option>
                <option value="interview">Interview</option>
                <option value="declined">Declined</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="jobType" className="text-sm font-medium text-gray-700">Job Type</label>
              <select
                id="jobType"
                className="w-full p-2 text-sm border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option value="all">All</option>
                <option value="part-time">Part-Time</option>
                <option value="full-time">Full-Time</option>
              </select>
            </div>
            <button
              type="button"
              className="mt-6 p-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 lg:col-span-1"
              onClick={() => { /* No action needed as we are filtering directly in render */ }}
            >
              Search Job
            </button>
          </div>
        </form>

        <div className="mb-5 text-center">
          <h2 className="text-xl font-bold">{filteredJobs.length} Jobs Found</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredJobs.map((job) => (
            <div key={job._id} className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-white bg-teal-500 rounded-full">
                    {job.position.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{job.position}</h3>
                    <p className="text-sm text-gray-500">{job.company}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex flex-col items-end space-y-1">
                  <p className="mb-1">{new Date(job.createdAt).toLocaleDateString()}</p>
                  <span className={`px-2 py-1 text-xs font-medium bg-blue-100 rounded text-${job.jobStatus.toLowerCase() === 'interview' ? 'blue' : 'red'}-500`}>
                    {job.jobStatus}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-10 text-gray-500 mt-6">
                  <span className="inline-flex items-center gap-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path></svg>
                    {job.jobLocation}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>
                    {job.jobType}
                  </span>
                </div>
                <div className="flex gap-2 mt-6">
                  <button className="px-3 py-1 text-sm font-medium text-white bg-teal-500 rounded hover:bg-teal-600">Edit</button>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppliedJob;
