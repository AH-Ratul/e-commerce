import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user data from local storage if available
    const storedUser = localStorage.getItem("loggedUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const dbLogin = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    // store user data in local storage when user state changes
    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const dbLogout = () => {
    setUser(null);
    localStorage.removeItem('loggedUser')
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authInfo = {
    user,
    loginWithGoogle,
    dbLogin,
    dbLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
