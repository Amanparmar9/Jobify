import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            {/* <header className="sticky z-50 top-0">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9EsPy4WGi0nH8cYb35AN0qu1Q50svCq80w&usqp=CAU"
                                alt=""
                            />
                        </Link>
                    </div>

                    <div className={"lg:flex lg:gap-x-12"}>
                        <ul className="flex rounded-full bg-white/90 px-10 text-medium font-larger text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 w-full">
                            <li>
                                <NavLink to="/" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose hover:underline   hover:text-green-500  inline-block  hover:duration-300 `}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/addjob" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose`}>
                                    AddJob
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose`}>
                                    Stats
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/appliedjob" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose`}>
                                    Jobs
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to="/login" className="text-base/loose font-semibold leading-6 text-black-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
            </header > */}






            <nav class=" bg-cyan-50 border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9EsPy4WGi0nH8cYb35AN0qu1Q50svCq80w&usqp=CAU" class="h-8 rounded-lg" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jobify</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                         
                            <li>
                                <NavLink to="/" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose hover:underline   hover:text-green-500  inline-block  hover:duration-300 `}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/addjob" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose hover:underline   hover:text-green-500  inline-block  hover:duration-300`}>
                                    AddJob
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/stats" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose hover:underline   hover:text-green-500  inline-block  hover:duration-300`}>
                                    Stats
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/appliedjob" className={({ isActive }) => `relative block px-4 py-2 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-teal-500 dark:hover:text-teal-400 text-base/loose hover:underline   hover:text-green-500  inline-block  hover:duration-300`}>
                                    Jobs
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header