import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>

            <nav className="flex bg-indigo-500 flex-wrap items-center justify-between p-4">

                <div className="lg:order-2 w-auto lg:w-1/5 lg:text-center">
                    <Link className="text-xl text-white font-semibold font-heading" to="/"> HBIM WEB APP</Link>
                </div>

                <div className="block lg:hidden">
                    <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>
                                Menu
                            </title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                            </path>
                        </svg>
                    </button>
                </div>


                <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
                    <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-white  hover:text-indigo-600" to="/model"> Model</Link>
                </div>


                <div className="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
                    
                    <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-white  hover:text-indigo-600" to="/login"> Login</Link>
                    <Link className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-white  hover:text-indigo-600" to="/register"> Register</Link>
                </div>
            </nav>


        </>


    );
};

export default Navbar;