import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useContext } from "react";
import { auth } from "../firebase";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const Authcontext = ({ children }) => {

   function register (email,password,name){
      return createUserWithEmailAndPassword(auth,email,password,name)
   }

   function login (email, password) {
      return signInWithEmailAndPassword(auth,email, password)
   }

   const values = {
      register,
      login
   }
	return <authContext.Provider value = {values}>{children}</authContext.Provider>;
};

export default Authcontext;
