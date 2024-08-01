// import React from 'react';
// import { Link } from 'react-router-dom';
// function Home() {
//   return (

//     <div className="container page">
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
//         <div className="info lg:w-1/2 lg:pr-8 pl-32">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome </h1>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4 pl-16">To</h1>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4 pl-5">
//            <span className="text-teal-500 ">Jobify</span>
//           </h1>
//           <div className="mb-4">
//             <Link to="/register" className="btn register-link mr-4">
//               Register
//             </Link>
//             <Link to="/login" className="btn register-link">
//               Login / Demo User
//             </Link>
//           </div>
//         </div>


//         <div className="lg:w-1/2 float-left lg:inline-block">
//           <img
//             className="h-auto w-full rounded-lg pt-20 pl-10"
//             // src="https://cdn.dribbble.com/users/3848091/screenshots/7827479/media/5f226eb6aa71d3b639a73d214e716db6.gif"
//             src="./Jobopening.gif"
//             alt=""
//           />
//         </div>
      
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     // Fetch username from session storage
//     const storedUser = sessionStorage.getItem('user');
//     if (storedUser) {
//       const userData = JSON.parse(storedUser);
//       setUsername(userData.username);
//     }

//     // Animation logic
//     const jobifyLetters = document.querySelectorAll("#jobify, #o, #b, #i, #f, #y");

//     function animateLetters() {
//       jobifyLetters.forEach((letter, index) => {
//         setTimeout(() => {
//           letter.classList.remove("hidden");
//           letter.classList.add("animate__animated", "animate__fadeInLeft");
//         }, index * 300);
//       });
//     }

//     setTimeout(animateLetters, 1000);
//   }, []);

//   return (
//     <div className="container page">
//       <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
//         <div className="info lg:w-1/2 lg:pr-8 pl-32">
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome</h1>
//           {username && <h1 className="text-4xl lg:text-5xl font-bold mb-4">{username}</h1>}
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4 pl-16">To</h1>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4 pl-5">
//             <span id="jobify" className="text-teal-500 hidden">J</span>
//             <span id="o" className="text-teal-500 hidden">o</span>
//             <span id="b" className="text-teal-500 hidden">b</span>
//             <span id="i" className="text-teal-500 hidden">i</span>
//             <span id="f" className="text-teal-500 hidden">f</span>
//             <span id="y" className="text-teal-500 hidden">y</span>
//           </h1>
//           <div className="mb-4">
//             <Link to="/register" className="btn register-link mr-4">
//               Register
//             </Link>
//             <Link to="/login" className="btn register-link">
//               Login / Demo User
//             </Link>
//           </div>
//         </div>

//         <div className="lg:w-1/2 float-left lg:inline-block">
//           <img
//             className="h-auto w-full rounded-lg pt-20 pl-10"
//             src="./Jobopening.gif"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import 'animate.css';

function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch username from session storage
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUsername(userData.username);
    }

    // Animation logic
    const jobifyLetters = document.querySelectorAll("#jobify span");

    function animateLetters() {
      jobifyLetters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.remove("hidden");
          letter.classList.add("animate__animated", "animate__fadeInLeft");
        }, index * 300);
      });
    }

    setTimeout(animateLetters, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="info lg:w-1/2 lg:pr-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Welcome {username && <span>{username}</span>}
          </h1>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">To</h1>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            <span id="jobify" className="inline-block">
              <span className="text-teal-500 hidden">J</span>
              <span className="text-teal-500 hidden">o</span>
              <span className="text-teal-500 hidden">b</span>
              <span className="text-teal-500 hidden">i</span>
              <span className="text-teal-500 hidden">f</span>
              <span className="text-teal-500 hidden">y</span>
            </span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg lg:text-xl">
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia.
            Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link to="/register" className="btn btn-primary bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-all duration-300">
              Register
            </Link>
            <Link to="/login" className="btn btn-secondary bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-all duration-300">
              Login
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img
            className="h-auto w-full max-w-md rounded-lg shadow-lg"
            src="./Jobopening.gif"
            alt="Job opening animation"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
