import {Route, Routes} from "react-router-dom";
import {User} from "./User.tsx";
import App from "./App.tsx";
import {Board} from "./Board.tsx";
import {WorkspaceCreate} from "./WorkspaceCreate.tsx";
import {WorkspaceEdit} from "./WorkspaceEdit.tsx";

export const Router = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="register" element={<User />} />
            <Route path="login" element={<User />} />
            <Route path="logout" element={<User />} />

            <Route path="myboard" element={<Board />} />
            <Route path="myboard/create" element={<WorkspaceCreate />} />
            <Route path="myboard/edit/:id" element={<WorkspaceEdit />} />
        </Routes>
        </>
    )
}