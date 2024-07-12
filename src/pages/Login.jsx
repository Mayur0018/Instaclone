// Login.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logimg from "../assets/images/loginlogo.png";
import { login } from '../features/authSlice';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    navigate("/home");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulated login logic, replace this with your actual authentication logic
    if (username === "mayur" && password === "mayur") {
      // Simulated successful login
      dispatch(login());
      navigate("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container max-w-full mx-auto py-24 px-6">
        <div className="font-sans">
          <div className="max-w-sm mx-auto px-6">
            <div className="relative flex flex-wrap">
              <div className="w-full relative">
                <div className="mt-6">
                  <div className="mb-5 pb-1 border-b-2 text-center font-base text-gray-700 w-[200px] ml-12">
                    <img src={logimg} alt="Logo" />
                  </div>
                  <div className="text-center font-semibold text-black">
                    Welcome, please login!
                  </div>
                  <form className="mt-8" onSubmit={handleLogin}>
                    <div className="mx-auto max-w-lg">
                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">Username</span>
                        <input
                          type="text"
                          className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                          placeholder=""
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                      </div>
                      <div className="py-2">
                        <span className="px-1 text-sm text-gray-600">Password</span>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            <svg
                              className={`h-6 text-gray-700 cursor-pointer ${showPassword ? 'hidden' : 'block'}`}
                              fill="none"
                              onClick={() => setShowPassword(!showPassword)}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                            >
                              <path
                                fill="currentColor"
                                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                              />
                            </svg>
                            <svg
                              className={`h-6 text-gray-700 cursor-pointer ${showPassword ? 'block' : 'hidden'}`}
                              fill="none"
                              onClick={() => setShowPassword(!showPassword)}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path
                                fill="currentColor"
                                d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM320 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      {error && (
                        <div className="text-red-500 text-sm mb-2">
                          {error}
                        </div>
                      )}
                      <div className="flex justify-between">
                        <label className="block text-gray-500 font-bold my-4">
                          <input type="checkbox" className="leading-loose text-pink-600" />
                          <span className="py-2 text-sm text-gray-600 leading-snug"> Remember Me </span>
                        </label>
                        <label className="block text-gray-500 font-bold my-4">
                          <a
                            href="#"
                            className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400"
                          >
                            <span>Forgot Password?</span>
                          </a>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
