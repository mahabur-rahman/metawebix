import { createContext, useState } from "react";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  // simple user data
  const [user, setUser] = useState({
    name: "john",
    email: "john@gmail.com",
    role: "user",
  });

  return (
    <>
      <UserContextProvider.Provider value={{ user, setUser }}>
        {children}
      </UserContextProvider.Provider>
    </>
  );
};

export { UserContext, UserContextProvider };
