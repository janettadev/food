import React, { createContext, useContext } from "react";

const authContext = createContext();
export const useAuthContext = () => useContext(authContext);

const Authcontext = ({ children }) => {
   const values = {}
	return <authContext.Provider value = {values}>{children}</authContext.Provider>;
};

export default Authcontext;
