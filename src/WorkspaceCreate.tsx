import {useState} from "react";
import axiosInstance from "./auth/interceptor.ts";
import {GlobalConstant} from "./Common/global-constant.ts";
import {useNavigate} from "react-router-dom";

export function WorkspaceCreate() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate()


    async function create() {
        const workspace = {name, description, type};

        await axiosInstance.post(GlobalConstant.baseurl+'/workspace/create', workspace)
            .then((response) => {console.log(response.data);navigate("/myboard")})
    }


    return (
        <>
            <div className="container">
                <div className="d-flex flex-column">
                    <div className="">
                        <a className="btn btn-secondary" href="/myboard">return</a>
                    </div>

                    <div className="mt-5 d-flex flex-column align-items-center">
                        <div className=""><h1 className="text-light">Create Workspace</h1></div>
                    </div>
                    <hr/>

                    <div className="d-flex flex-column gap-3">

                        <div className="d-flex flex-column">
                            <label htmlFor="" className="form-label">Name :</label>
                            <input className="form-control" type="text" required={true}
                                   onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="" className="form-label">Description :</label>
                            <input className="form-control" type="text" required={true}
                                   onChange={(e) => setDescription(e.target.value)}/>
                        </div>

                        <div className="d-flex gap-5">
                            <div className="form-check">
                                <label htmlFor="">Public</label>
                                <input className="form-check-input" value="1" type="radio" name={"type"} id="" checked onChange={(e) => setType(e.target.value)}/>
                            </div>
                            <div className="form-check">
                                <label htmlFor="">Private</label>
                                <input className="form-check-input" value="2" type="radio" name={"type"} id="" onChange={(e) => setType(e.target.value)}/>
                            </div>
                            <div className="form-check">
                                <label htmlFor="">Team</label>
                                <input className="form-check-input" value="3" type="radio" name={"type"} id="" onChange={(e) => setType(e.target.value)}/>
                            </div>
                        </div>

                        <div className="">
                            <button className="btn btn-primary" onClick={create}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}