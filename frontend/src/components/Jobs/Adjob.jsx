// import React, { useState } from 'react';
// import axios from 'axios';

// function Adjob() {
//   // const [formData, setFormData] = useState({
//   //   position: '',
//   //   company: '',
//   //   jobLocation: '',
//   //   jobStatus: '',
//   //   jobType: ''
//   // });

//   // const handleChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value
//   //   });
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:8000/api/v1/users/jobs', formData);
//   //     console.log(response.data);
//   //     // Reset form fields after successful submission
//   //     setFormData({
//   //       position: '',
//   //       company: '',
//   //       jobLocation: '',
//   //       jobStatus: '',
//   //       jobType: ''
//   //     });
//   //     // Optionally, display a success message or redirect the user
//   //   } catch (error) {
//   //     console.error(error);
//   //     // Optionally, handle error and display a relevant message to the user
//   //   }
//   // };

//   const [formData, setFormData] = useState({
//     position: '',
//     company: '',
//     jobLocation: '',
//     jobStatus: '',
//     jobType: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const token = sessionStorage.getItem('accessToken');
//       const UsersId = sessionStorage.getItem('userId') 
//       console.log(UsersId);

//       const response = await axios.post(
//         'http://localhost:8000/api/v1/users/jobs',
//         formData.position,
//         formData.company,
//         formData.jobLocation,
//         formData.jobStatus,
//         formData.jobType,
//         UsersId
//       );
//       console.log(formData,UsersId);
//       setFormData({
//         position: '',
//         company: '',
//         jobLocation: '',
//         jobStatus: '',
//         jobType: ''
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="max-w-xl w-full mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-semibold mb-4 text-center">Add Jobs Here</h1>
//         <p className="text-lg font-light mb-8 text-center">Fill out the form below to add a new job:</p>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="position">Position:</label>
//             <input
//               type="text"
//               id="position"
//               name="position"
//               value={formData.position}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter your Position"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="company">Company:</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter company name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="jobLocation">Job Location:</label>
//             <input
//               type="text"
//               id="jobLocation"
//               name="jobLocation"
//               value={formData.jobLocation}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter Location"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="jobStatus">Job Status:</label>
//             <select
//               id="jobStatus"
//               name="jobStatus"
//               value={formData.jobStatus}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               required
//             >
//               <option value="">Select Status</option>
//               <option value="pending">Pending</option>
//               <option value="interview">Interview</option>
//               <option value="decline">Declined</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="jobType">Job Type:</label>
//             <select
//               id="jobType"
//               name="jobType"
//               value={formData.jobType}
//               onChange={handleChange}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               required
//             >
//               <option value="">Select Type</option>
//               <option value="full time">Full Time</option>
//               <option value="part time">Part Time</option>
//               <option value="internship">Internship</option>
//             </select>
//           </div>
//           <div className="text-center">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Adjob;



// // {"_id":{"$oid":"664ba06e3c2f2e051f9de96d"},"username":"smitaparmar","email":"parmarsmita@gmail.com","fullName":"smita","password":"$2b$10$OOxj6bSho1eW.IHM38REI.Vrpe3LePtz8bBxW7u7wFdDYqYZoGnve","createdAt":{"$date":{"$numberLong":"1716232302368"}},"updatedAt":{"$date":{"$numberLong":"1716232377047"}},"__v":{"$numberInt":"0"},"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGJhMDZlM2MyZjJlMDUxZjlkZTk2ZCIsImlhdCI6MTcxNjIzMjM3NywiZXhwIjoxNzE3MDk2Mzc3fQ.aeIkUiMDw-KarcgQYoKC5GK7l5lrmmwxmHqmUL6UZhg"}






//niche na code ma notification nati aavti ea code che teh...


// import React, { useState } from 'react';
// import axios from 'axios';

// function Adjob() {
//   // Define individual state variables for each form field
//   const [position, setPosition] = useState('');
//   const [company, setCompany] = useState('');
//   const [jobLocation, setJobLocation] = useState('');
//   const [jobStatus, setJobStatus] = useState('');
//   const [jobType, setJobType] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const userId = sessionStorage.getItem('userId');
//       console.log(userId);
//       console.log(position,company,jobLocation);

//       const response = await axios.post('http://localhost:8000/api/v1/users/jobs', {
//         position,
//         company,
//         jobLocation,
//         jobStatus,
//         jobType,
//         userId
//       });
//       console.log(response.data);

//       // Reset form fields
//       setPosition('');
//       setCompany('');
//       setJobLocation('');
//       setJobStatus('');
//       setJobType('');
//     } catch (error) {
//       console.error('Error creating job:', error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="max-w-xl w-full mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-semibold mb-4 text-center">Add Jobs Here</h1>
//         <p className="text-lg font-light mb-8 text-center">Fill out the form below to add a new job:</p>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="position">Position:</label>
//             <input
//               type="text"
//               id="position"
//               name="position"
//               value={position}
//               onChange={(e) => setPosition(e.target.value)}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter your Position"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="company">Company:</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter company name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="jobLocation">Job Location:</label>
//             <input
//               type="text"
//               id="jobLocation"
//               name="jobLocation"
//               value={jobLocation}
//               onChange={(e) => setJobLocation(e.target.value)}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               placeholder="Enter Location"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="jobStatus">Job Status:</label>
//             <select
//               id="jobStatus"
//               name="jobStatus"
//               value={jobStatus}
//               onChange={(e) => setJobStatus(e.target.value)}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               required
//             >
//               <option value="">Select Status</option>
//               <option value="pending">Pending</option>
//               <option value="interview">Interview</option>
//               <option value="decline">Declined</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-lg font-light" htmlFor="jobType">Job Type:</label>
//             <select
//               id="jobType"
//               name="jobType"
//               value={jobType}
//               onChange={(e) => setJobType(e.target.value)}
//               className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
//               required
//             >
//               <option value="">Select Type</option>
//               <option value="full time">Full Time</option>
//               <option value="part time">Part Time</option>
//               <option value="internship">Internship</option>
//             </select>
//           </div>
//           <div className="text-center">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Adjob;



//notification aave teh vado code che aa...

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adjob() {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobStatus, setJobStatus] = useState('');
  const [jobType, setJobType] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    setShowNotification(!userId); // Show notification if userId is not found
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 10000); // Hide after 10 seconds
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/jobs', {
        position,
        company,
        jobLocation,
        jobStatus,
        jobType,
        userId
      });
      console.log(response.data);

      // Reset form fields
      setPosition('');
      setCompany('');
      setJobLocation('');
      setJobStatus('');
      setJobType('');
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {showNotification && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 bg-white border border-green-500 text-green-500 rounded-lg p-4 shadow-lg flex items-center space-x-4">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Please log in to submit the form</span>
          <button className="text-gray-500 hover:text-gray-700" onClick={() => setShowNotification(false)}>X</button>
        </div>
      )}
      <div className="max-w-xl w-full mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">Add Jobs Here</h1>
        <p className="text-lg font-light mb-8 text-center">Fill out the form below to add a new job:</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-light" htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
              placeholder="Enter your Position"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-light" htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-light" htmlFor="jobLocation">Job Location:</label>
            <input
              type="text"
              id="jobLocation"
              name="jobLocation"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
              placeholder="Enter Location"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-light" htmlFor="jobStatus">Job Status:</label>
            <select
              id="jobStatus"
              name="jobStatus"
              value={jobStatus}
              onChange={(e) => setJobStatus(e.target.value)}
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
              required
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="decline">Declined</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg font-light" htmlFor="jobType">Job Type:</label>
            <select
              id="jobType"
              name="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="w-full border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 py-2"
              required
            >
              <option value="">Select Type</option>
              <option value="full time">Full Time</option>
              <option value="part time">Part Time</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adjob;
