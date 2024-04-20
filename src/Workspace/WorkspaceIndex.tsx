import {GlobalConstant} from "../Common/global-constant.ts";
import axiosInstance from "../auth/interceptor.ts";
import {useEffect, useState} from "react";
import {Workspace} from "../Interfaces/Workspace.ts";
import {useNavigate} from "react-router-dom";


export function WorkspaceIndex() {

    const [isLoading, setLoading] = useState(true);
    const [workspaces , setWorkspaces] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        axiosInstance.get(GlobalConstant.baseurl+"index")
            .then((response)=>{
                console.log(response.data);
                setWorkspaces(response.data);
                setLoading(false);
            })
    }, []);

    function remove(worspace: Workspace) {
        axiosInstance.delete(`${GlobalConstant.baseurl+`workspace/delete/${worspace.id}`}`)
            .then(()=>{
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            })
    }

    if (isLoading) {
        return <div className="App container">Loading...</div>;
    }

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-5">

                    <div className="d-flex flex-sm-wrap-reverse gap-3">
                        {workspaces.map((workspace: Workspace)=> (
                            <div key={workspace.id} className="card">
                                <h4><strong>Titre : {workspace.name}</strong></h4>
                                <h4>Description</h4>
                                <p><i>{workspace.description}</i></p>
                                <div className="d-flex gap-1">
                                    <button className="btn btn-danger" onClick={() => remove(workspace)}>Delete</button>
                                    <button className="btn btn-warning" onClick={() => navigate("edit/" + workspace.id)}>Edit</button>
                                    <button className="btn btn-primary" onClick={() => navigate("/board/showAll/" + workspace.id)}>Show</button>
                                </div>

                            </div>
                        ))}
                    </div>


                    <div className="">
                        <a className="btn btn-success" href="/myboard/create">Create Workspace</a>
                    </div>

                </div>
            </div>
        </>
    );
}
