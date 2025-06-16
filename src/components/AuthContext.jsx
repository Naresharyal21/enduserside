import { createContext, useState } from "react";

export const AuthenticationContext = createContext(null);

const AuthContext = ({ children }) => {
    const persistedUser = localStorage.getItem("user");
    const initialUser = persistedUser ? JSON.parse(persistedUser) : {};

    const [user, setUser] = useState(initialUser);

    const loginUser = (user) => {
        user = {
            ...user,
            isAuthenticated: true,
           
        };

        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logoutUser = () => {
        console.log("i am clicked")
        setUser({});
        localStorage.removeItem("user");
    }

    return (
        <AuthenticationContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthContext;