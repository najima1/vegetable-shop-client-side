import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/ContextProvider";
import toast from "react-hot-toast";
import {
  emailValidation,
  passwordValidation,
  userNameValidation,
} from "./signup_formValidation";
import useTitle from "../../../UseHook/UseHook";

const Signup = () => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassworError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useTitle('signup')

  //context provider
  const { signUpUser, updata_user, login_with_google } =
    useContext(AuthContext);

  //sing up input collection
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();

  //sign up handelar
  const signUpHandelar = (e) => {
    e.preventDefault();

    const username = userName.current.value;
    const email = userEmail.current.value;
    const passwords = userPassword.current.value;

    const validName = userNameValidation(username, setNameError);
    const validEmail = emailValidation(email, setEmailError);
    const validPass = passwordValidation(passwords, setPassworError);

    if (validName) setNameError("");
    if (validEmail) setEmailError("");
    if (validPass) setPassworError("");

    if (validName && validEmail && validPass) {
      const _validUser = { validName, validEmail, validPass };

      //create user with email , name, & password
      signUpUser(validEmail, validPass)
        .then((userCredential) => {
          const _user = userCredential.user;
          toast.success("Sign up Successfully");

          //updata user name
          update_user_info(validName);
          navigate(from, { replace: true });

          e.target.reset();
        })
        .catch((e) => {
          toast.error(e.message);
        });
    }
  };

  //update user information
  const update_user_info = (name) => {
    updata_user({ displayName: name })
      .then(() => {})
      .catch((e) => toast.error(e.message));
  };

  //login_with_google
  const loginWithGoogle = () => {
    login_with_google()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div>
      <div className="container py-16 mx-auto">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto md:shadow-lg  dark:text-gray-900">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>
          <form
            onSubmit={(e) => signUpHandelar(e)}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block dark:text-gray-400">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                ref={userName}
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
              />
              <small className="block text-red-400">
                {nameError && nameError}
              </small>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-400">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="email"
                ref={userEmail}
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-none bg-gray-200  focus:dark:border-violet-400"
              />
              <small className="block text-red-400">
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
                placeholder="Password"
                ref={userPassword}
                className="w-full outline-none px-4 py-3 rounded-md dark:border-gray-700 bg-gray-200 focus:dark:border-violet-400"
              />
              <small className="block text-red-400">
                {passError && passError}
              </small>
            </div>
            <button className="block w-full py-2 text-center rounded-sm dark:text-gray-900 bg-teal-400">
              Sign up
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
            Alrady have an account?
            <span className="text-orange-400">
              <Link to="/login">login</Link>
            </span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="underline dark:text-gray-100"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
