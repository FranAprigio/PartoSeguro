import React, { createContext} from "react";

export const AuthContex = createContext({});

const AuthProvider = ({ children }) => {
  
  return (
    <AuthContex.Provider
      value={{}}
    >
      {children}
    </AuthContex.Provider>
  );
};

export default AuthProvider;
