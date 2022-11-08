import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//contextProvider conponet function
//=========================================//
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user with email & password
  const signUpUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Login with email & passwor firebase
  const user_login_firebase = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google
  const login_with_google = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //updata user profile & name
  const updata_user = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //logout user
  const log_out_user = () => {
    return signOut(auth)
  }

  //get login current user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUrs) => {
      setUser(currentUrs);
      setLoading(false);
    });
  }, []);

  //provide all firebase method
  const userInfo = {
    user,
    loading,
    signUpUser,
    updata_user,
    user_login_firebase,
    login_with_google,
    log_out_user,
  };

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
