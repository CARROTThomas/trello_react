import {useState} from "react";
import {useParams} from "react-router-dom";
import axiosInstance from "../auth/interceptor.ts";
import {GlobalConstant} from "../Common/global-constant.ts";
import {useNavigate} from "react-router-dom";


export function BoardCreate() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('');

    const {id} = useParams();


    function createBoard(){
        const board = {name, description, visibility};
        axiosInstance.post(GlobalConstant.baseurl+"board/create/"+id, board)
            .then((response) => {
                console.log(response.data)
                navigate("/board/showAll/"+id)
            })
    }

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column">
                    <div className="">
                        <a className="btn btn-secondary" href="/myboard">return</a>
                    </div>

                    <div className="mt-5 d-flex flex-column align-items-center">
                        <div className=""><h1 className="text-light">Create Board</h1></div>
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
                                <input className="form-check-input" value="1" type="radio" name={"type"} id=""
                                       onChange={(e) => setVisibility(e.target.value)}/>
                            </div>
                            <div className="form-check">
                                <label htmlFor="">Private</label>
                                <input className="form-check-input" value="2" type="radio" name={"type"} id=""
                                       onChange={(e) => setVisibility(e.target.value)}/>
                            </div>
                            <div className="form-check">
                                <label htmlFor="">Team</label>
                                <input className="form-check-input" value="3" type="radio" name={"type"} id=""
                                       onChange={(e) => setVisibility(e.target.value)}/>
                            </div>
                        </div>

                        <div className="">
                            <button onClick={createBoard} className={"btn btn-success"} type="submit">Create a board
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
