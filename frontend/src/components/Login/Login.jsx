import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });

  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/api/v1/users/login', formData);
  //     // Handle success response
  //     setError('');
  //     navigate('/'); // Redirect to home page
  //   } catch (err) {
  //     setError(err.response?.data?.message || 'Something went wrong');
  //   }
  // };


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/login', formData);
      const { user, accessToken } = response.data.data;
      // Store JWT token and user details in local storage or in memory
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('user', JSON.stringify(user));
      const userData = JSON.parse(sessionStorage.getItem('user'));
      const userID = userData ? userData._id : '123';
      // sessionStorage.setItem('userId',);
      console.log(userData);
      console.log(userID);
      sessionStorage.setItem('userId',userID)
      setError('');
      navigate('/'); // Redirect to home page
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };


  return (
    <section className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-green-100 p-10">
          <img
            src="https://img.freepik.com/premium-photo/colleagues-working-together-project_604472-40231.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais"
            alt="Sample image"
            className="object-cover rounded-lg w-full"
          />
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Exam Mastery Hub</h2>
            <p className="text-gray-500 mt-2">Unlock your academic success with Exam Mastery Hub's Exam Success Platform</p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center p-10 bg-white">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-700 text-center">Login</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <form className="mt-5" onSubmit={handleSubmit}>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mt-2"
                type="text"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mt-4"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <div className="mt-4 flex justify-between text-sm font-semibold">
                <label className="flex items-center text-slate-500 hover:text-slate-600 cursor-pointer">
                  <input className="mr-1" type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <a
                  className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Sign in
              </button>
            </form>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-red-600 hover:underline hover:underline-offset-4">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;