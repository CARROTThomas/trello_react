import {useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstant} from "../Common/global-constant.ts";
import {useNavigate, useParams} from "react-router-dom";

export function ListCreate() {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const {id} = useParams()

    async function createList(){
        const list = {name};
        await axiosHttp.post(GlobalConstant.baseurl+'list/create/'+id, list)
            .then((response) => {
                console.log(response.data);
                setTimeout(()=>{
                    navigate("/board/show/"+id)
                },500)
            })
    }

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-5">

                    <div className="">
                        <a className="btn btn-secondary" onClick={() => navigate("/board/show/" + id)}>return</a>
                    </div>

                    <h1>Create New List</h1>

                    <div className="">
                        <input type="text"
                               placeholder="name"
                               required={true}
                               onChange={(e) => setName(e.target.value)}
                               className="form-control"/>
                        <br/>

                        <button onClick={createList} className={"btn btn-success"} type="submit">Create a list</button>
                        <br/>
                    </div>

                </div>
            </div>


        </>
    );
}
