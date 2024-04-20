import {useEffect, useState} from "react";
import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstant} from "../Common/global-constant.ts";
import {useNavigate, useParams} from "react-router-dom";
import {Board} from "../Interfaces/Board.ts";

export function BoardIndex() {
    const [isLoading, setLoading] = useState(true);
    const [boards , setBoards] = useState();
    const navigate = useNavigate();
    const {id}= useParams();

    useEffect(() => {
        axiosHttp.get(GlobalConstant.baseurl+"board/showAll/"+id)
            .then((response)=>{
                setBoards(response.data);
                setLoading(false)
            })
    },[]);

    function removeBoard(board: Board) {
        axiosHttp.delete(GlobalConstant.baseurl+"board/delete/"+board.id)
            .then(response => {
                console.log(response)
                setTimeout(()=>{
                    navigate("/board/showAll/"+id)
                    window.location.reload()
                },500)
            })
    }

    if (isLoading) {
        return <div className="App">
                    <div className="container">
                        <div className="d-flex flex-column gap-5">
                            Loading...
                        </div>
                    </div>
                </div>;
    }

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-5">
                    <div className="">
                        <a className="btn btn-secondary" href="/myboard">return</a>
                    </div>


                    <div className="d-flex flex-sm-wrap-reverse gap-3">
                        {boards.map((board: Board) => (
                            <div key={board.id} className="card">
                                <h4><strong>Titre</strong></h4>
                                <p>{board.name}</p>
                                <h4><strong>Description</strong></h4>
                                <p><i>{board.description}</i></p>
                                <div className="d-flex gap-1">
                                    <a onClick={() => navigate("/board/show/" + board.id)}
                                       className="btn btn-primary">Voir</a>
                                    <a onClick={() => removeBoard(board)} className="btn btn-danger">Supprimer</a>
                                </div>
                                <p>Id={board.id}</p>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <button className="btn btn-success" onClick={() => navigate("/board/create/" + id)}>Create</button>
                    </div>

                </div>
            </div>
        </>
    );
}
