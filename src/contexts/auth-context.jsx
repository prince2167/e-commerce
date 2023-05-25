import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../config";

import { authReducer, initialState } from "../reducers/authReducer";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext("");

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }
  function googleSignin() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      authDispatch({ type: "CURRENT_USER", payload: currentUser });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ authDispatch, authState, login, signUp, logout, googleSignin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
