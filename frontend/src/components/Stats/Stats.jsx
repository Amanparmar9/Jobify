// import React from 'react';

// function Stats() {
//   return (
//     <div className="flex justify-center p-6 bg-gray-100">
//       <div className="max-w-4xl w-full bg-white rounded-lg shadow p-6">
//         <div className="flex justify-between mb-6">
//           <div className="flex items-center">
//             <h5 className="text-xl font-bold leading-none text-gray-900">Your team's progress</h5>
//             <svg data-popover-target="chart-info" data-popover-placement="bottom" className="w-3.5 h-3.5 text-gray-500 hover:text-gray-900 cursor-pointer ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
//             </svg>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-6">
//           <div className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-4">
//             <div className="text-3xl font-bold text-yellow-600">30</div>
//             <div className="flex items-center mt-2">
//               <div className="bg-yellow-200 p-2 rounded-md">
//                 <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z"></path></svg>
//               </div>
//               <span className="text-yellow-600 ml-2 font-medium">Pending Applications</span>
//             </div>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4">
//             <div className="text-3xl font-bold text-blue-600">30</div>
//             <div className="flex items-center mt-2">
//               <div className="bg-blue-200 p-2 rounded-md">
//               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path></svg>
//               </div>
//               <span className="text-blue-600 ml-2 font-medium">Interviews Scheduled</span>
//             </div>
//           </div>
//           <div className="flex flex-col items-center justify-center bg-red-100 rounded-lg p-4">
//             <div className="text-3xl font-bold text-red-600">40</div>
//             <div className="flex items-center mt-2">
//               <div className="bg-red-200 p-2 rounded-md">
//               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z"></path></svg>
//               </div>
//               <span className="text-red-600 ml-2 font-medium">Jobs Declined</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stats() {
  const [pendingApplications, setPendingApplications] = useState(0);
  const [interviewsScheduled, setInterviewsScheduled] = useState(0);
  const [jobsDeclined, setJobsDeclined] = useState(0);
  const [fullTimeJobs, setFullTimeJobs] = useState(0);
  const [partTimeJobs, setPartTimeJobs] = useState(0);
  const [internshipJobs, setInternshipJobs] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userId = sessionStorage.getItem('userId'); // Sample userId
        const response = await axios.post('http://localhost:8000/api/v1/users/fetchstats', {
           userId 
        });
        const data = response.data.data;
        setPendingApplications(data.pendingApplications);
        setInterviewsScheduled(data.interviewsScheduled);
        setJobsDeclined(data.jobsDeclined);
        setFullTimeJobs(data.fullTimeJobs);
        setPartTimeJobs(data.partTimeJobs);
        setInternshipJobs(data.internshipJobs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stats: {error}</div>;

  return (
    <>
    <div className="flex justify-center p-6 bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <h5 className="text-xl font-bold leading-none text-gray-900">Your team's progress</h5>
            <svg data-popover-target="chart-info" data-popover-placement="bottom" className="w-3.5 h-3.5 text-gray-500 hover:text-gray-900 cursor-pointer ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-yellow-600">{pendingApplications}</div>
            <div className="flex items-center mt-2">
              <div className="bg-yellow-200 p-2 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z"></path></svg>
              </div>
              <span className="text-yellow-600 ml-2 font-medium">Pending Applications</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-600">{interviewsScheduled}</div>
            <div className="flex items-center mt-2">
              <div className="bg-blue-200 p-2 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path></svg>
              </div>
              <span className="text-blue-600 ml-2 font-medium">Interviews Scheduled</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-red-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-600">{jobsDeclined}</div>
            <div className="flex items-center mt-2">
              <div className="bg-red-200 p-2 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48c-114.9 0-208 93.1-208 208s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm87.1 264.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L256 289.9l-53.2 53.2c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L222.1 256l-53.2-53.2c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L256 222.1l53.2-53.2c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L289.9 256l53.2 53.2z"></path></svg>
              </div>
              <span className="text-red-600 ml-2 font-medium">Jobs Declined</span>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div className="flex justify-center p-6 bg-gray-100 mt-8">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow p-6">
        <div className="flex justify-between mb-6">
          <div className="flex items-center">
            <h5 className="text-xl font-bold leading-none text-gray-900">Your team's progress</h5>
            <svg data-popover-target="chart-info" data-popover-placement="bottom" className="w-3.5 h-3.5 text-gray-500 hover:text-gray-900 cursor-pointer ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-yellow-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-yellow-600">{fullTimeJobs}</div>
            <div className="flex items-center mt-2">
              <div className="bg-yellow-200 p-2 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336 160H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V208c0-26.51-21.49-48-48-48zm-16 216c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zm0-96c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h240c4.42 0 8 3.58 8 8v16zM144 48h96v80h48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80h48V48z"></path></svg>
              </div>
              <span className="text-yellow-600 ml-2 font-medium">Full Time Jobs</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-blue-600">{partTimeJobs}</div>
            <div className="flex items-center mt-2">
              <div className="bg-blue-200 p-2 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"></path></svg>
              </div>
              <span className="text-blue-600 ml-2 font-medium">Part Time Jobs</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-red-100 rounded-lg p-4">
            <div className="text-3xl font-bold text-red-600">{internshipJobs}</div>
            <div className="flex items-center mt-2">
              <div className="bg-red-200 p-2 rounded-md">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 48c-114.9 0-208 93.1-208 208s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm87.1 264.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L256 289.9l-53.2 53.2c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L222.1 256l-53.2-53.2c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L256 222.1l53.2-53.2c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L289.9 256l53.2 53.2z"></path></svg>
              </div>
              <span className="text-red-600 ml-2 font-medium">Internship Jobs</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
}

export default Stats;
