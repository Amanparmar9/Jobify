import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './loginman.avif';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();  // Use the useNavigate hook

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
      const response = await axios.post('http://localhost:8000/api/v1/users/register', formData);
      sessionStorage.setItem(response.data.user);
      console.log(response.data)
      setSuccess('User registered successfully!');
      setError('');

      // Redirect to home page after successful registration
      navigate('/');
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <section className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
        <div className="md:w-1/2 flex flex-col justify-center items-center bg-green-100 p-10">
          <img
            src={logo}
            className="object-cover rounded-lg w-full"
          />
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Register to Jobify</h2>
            <p className="text-gray-500 mt-2">Save your Placements Details Here</p>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center p-10 bg-white">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-700 text-center">Register</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-500 text-center">{success}</p>}
            <form className="mt-5" onSubmit={handleSubmit}>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mt-3"
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mt-3"
                type="text"
                placeholder="User Name"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mt-3"
                type="text"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded mt-3"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 w-full px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Register
              </button>
            </form>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-red-600 hover:underline hover:underline-offset-4">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
