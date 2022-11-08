import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  //create user with email & password
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //updata user profile & name
  const updata_user = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //provide all firebase method
  const userInfo = { signUpUser, updata_user };

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
