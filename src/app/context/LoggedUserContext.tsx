"use client";

import { ReactNode, createContext, useState } from "react";

export interface LoggedUserContext {
  currentlyUser: string;
  handleCurrentlyUser: (user: string) => void;
}

export const LoggedUserContext = createContext({} as LoggedUserContext);

export const LoggedUserProvider = ({ children }: { children: ReactNode }) => {
  const [currentlyUser, setCurrentlyUser] = useState<string>("");

  const handleCurrentlyUser = (user: string) => {
    setCurrentlyUser(user);
  };

  console.log("logged user", currentlyUser);

  return (
    <LoggedUserContext.Provider
      value={{
        currentlyUser,
        handleCurrentlyUser,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};
