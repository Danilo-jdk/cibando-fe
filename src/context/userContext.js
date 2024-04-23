import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export function UserProvider({children}) {
    const [user, setUser] = useState(null);

    const registerUser = (userData) => {
        setUser(userData);
    }

    return (
        <UserContext.Provider value={{ user, registerUser }}>
            {children}
        </UserContext.Provider>
    )
}