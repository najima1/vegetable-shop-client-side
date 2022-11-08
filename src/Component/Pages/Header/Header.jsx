import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";

const Header = () => {
  const [navbar, setNavbar_icon] = useState(true);

  return (
    <div>
      <nav
        x-data="{ isOpen: false }"
        className="relative bg-white shadow dark:bg-[#01BBB4]"
      >
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <Link
                  className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  to="#"
                >
                  <img src={logo} alt="" className="w-[40%]" />
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <div onClick={() => setNavbar_icon(!navbar)}>
                    {navbar ? (
                      <svg
                        x-show="!isOpen"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        x-show="isOpen"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden"  x-cloak :className="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']"--> */}
            <div
              className={
                navbar
                  ? "translate-x-0 opacity-100 "
                  : "opacity-0 -translate-x-full" +
                    "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-[#01BBB4] lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center hidden"
              }
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link
                  to="/home"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Browse Topics
                </Link>
                <Link
                  to="/logout"
                  className="px-5 py-1 mx-1 mt-2 text-white transition-colors duration-300 transform rounded lg:mt-0 bg-[#FC427B] text-center"
                >
                  Log out
                </Link>
                <Link
                  to="/login"
                  className="px-5 py-1 mx-1 mt-2 text-white transition-colors duration-300 transform rounded lg:mt-0 bg-[#182C61] text-center"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
