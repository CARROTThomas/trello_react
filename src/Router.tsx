import {Route, Routes} from "react-router-dom";
import {User} from "./User.tsx";
import App from "./App.tsx";
import {WorkspaceIndex} from "./Workspace/WorkspaceIndex.tsx";
import {WorkspaceCreate} from "./Workspace/WorkspaceCreate.tsx";
import {WorkspaceEdit} from "./Workspace/WorkspaceEdit.tsx";
import {BoardIndex} from "./Board/BoardIndex.tsx";
import {BoardCreate} from "./Board/BoardCreate.tsx";
import {BoardShow} from "./Board/BoardShow.tsx";
import {ListCreate} from "./List/Create.tsx";

export const Router = () =>{
    return (
        <>
        <Routes>
            <Route path="/" element={<App />} />

            <Route path="register" element={<User />} />
            <Route path="login" element={<User />} />
            <Route path="logout" element={<User />} />

            <Route path="myboard" element={<WorkspaceIndex />} />
            <Route path="myboard/create" element={<WorkspaceCreate />} />
            <Route path="myboard/edit/:id" element={<WorkspaceEdit />} />

            <Route path="/board/showAll/:id" element={<BoardIndex />}></Route>
            <Route path="/board/create/:id" element={<BoardCreate />} />
            <Route path="/board/show/:id" element={<BoardShow />}></Route>


            <Route path="/list/create/:id" element={<ListCreate />}></Route>


        </Routes>
        </>
    )
}
