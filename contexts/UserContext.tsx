import React, { createContext, FC } from "react";

type User = { birthDate: Date; firstName: string; lastName: string };

export const UserContext = createContext<User>(undefined);

export const UserContextProvider: FC = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        birthDate: new Date(1997, 9, 16),
        firstName: "Martin",
        lastName: "PELCAT",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
