import {Route, Routes} from "react-router-dom";
import {User} from "./User.tsx";
import App from "./App.tsx";

export const Router = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="register" element={<User />} />
            <Route path="login" element={<User />} />
            <Route path="logout" element={<User />} />
        </Routes>
        </>
    )
}