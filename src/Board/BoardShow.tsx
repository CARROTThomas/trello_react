import axiosHttp from "../auth/interceptor.ts";
import {GlobalConstant} from "../Common/global-constant.ts";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {List} from "../Interfaces/List.ts";
import {Card} from "../Interfaces/Card.ts";
import { Board } from "../Interfaces/Board.ts"; // Import de l'interface Board

export function BoardShow() {
    const [isLoading, setLoading] = useState(true);
    const [board, setBoard] = useState<Board>(); // Spécifier le type de board comme Board
    const [cardName, setCardName] = useState("");
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axiosHttp.get(GlobalConstant.baseurl+"board/show/"+id)
            .then((response)=>{
                setBoard(response.data)
                setLoading(false)
            })

    }, []);

    async function createCard(listId:string){
        await axiosHttp.post(GlobalConstant.baseurl+'card/create/'+listId, {"name":cardName})
            .then((response) => {
                console.log(response.data);
                setTimeout(()=>{
                    navigate("/board/show/"+id)
                },1000)
            })
    }

    if (isLoading || !board) { // Ajout de la vérification !board
        return <div className="App"><div className="container">Loading...</div></div>;
    }

    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-5">

                    <div className="">
                        <a className="btn btn-secondary" href="/myboard">return</a>
                    </div>


                    <div className="topBar">
                        <span>{board.name}</span>
                        <span>{board.id}</span>
                    </div>

                    <div className="d-flex gap-3">
                        {board.lists.map((list: List) => (
                            <div key={list.id}>
                                <div className="d-flex flex-column gap-3 sepa_line p-2">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h2>{list.name}</h2>
                                        <a className={"text-danger"} href=""><i className="bi bi-trash"></i></a>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Add new card"
                                            onChange={(e) => setCardName(e.target.value)}
                                        />
                                        <button className={"btn btn-primary m-1"} onClick={() => {
                                            createCard(list.id.toString()).then()
                                        }}>
                                            Add
                                        </button>
                                    </div>
                                    {list.cards.map((card: Card) => (
                                        <div className="" key={card.id}> {/* Ajouter une clé unique pour chaque élément de la liste */}
                                            <ul>
                                                <li>
                                                    <a className={"card_projet"}>{card.name}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="">
                            <button onClick={() => {navigate("/list/create/" + board.id)}} className="topButton btn btn-primary">Créer une liste</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
