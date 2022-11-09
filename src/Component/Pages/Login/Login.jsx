import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { emailValidation, passwordValidation } from "./formValidation.js";
import { AuthContext } from "../../AuthContext/ContextProvider.jsx";
import toast from "react-hot-toast";
import useTitle from "../../../UseHook/UseHook.js";

//login component function
//=========================================//
const Login = () => {
  const [emailError, setEmailError] = useState("");
  const [passError, setPassworError] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle("Login");

  //context api info
  const { user_login_firebase, login_with_google } = useContext(AuthContext);

  //loginFormHandler
  const loginFormHandler = (e) => {
    e.preventDefault();

    const validEmail = emailRef.current.value;
    const validPassword = passRef.current.value;
    const email = emailValidation(validEmail, setEmailError);
    const passwords = passwordValidation(validPassword, setPassworError);

    if (email) setEmailError("");
    if (passwords) setPassworError("");

    //valid email & password
    if (email && passwords) {
      user_login_firebase(email, passwords)
        .then((userCredential) => {
          const user = userCredential.user;

          navigate(from, { replace: true });

          toast.success("Login Successfully");
          e.target.reset();
        })
        .catch((e) => toast.error(e.message));
    }
  };

  //loginWithGoogle
  const loginWithGoogle = () => {
    login_with_google()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="container py-16 mx-auto">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto md:shadow-lg  dark:text-gray-900">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={(e) => loginFormHandler(e)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">
              Enter email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              ref={emailRef}
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
            />
            <small className="block text-red-500">
              {emailError && emailError}
            </small>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              ref={passRef}
              placeholder="Password"
              className="w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 focus:dark:border-violet-400"
            />
            <small className="block text-red-500">
              {passError && passError}
            </small>
            <div className="flex justify-end text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full py-2 text-center rounded-sm dark:text-gray-900 bg-teal-400"
          >
            Login
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => loginWithGoogle()}
            aria-label="Log in with Google"
            className="py-1 rounded-sm w-full bg-[#30336b]"
          >
            <span className="text-teal-400 py-1 block">Google</span>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <strong className="text-red-400">
            <Link to="/signup">sign up</Link>
          </strong>
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-100"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
