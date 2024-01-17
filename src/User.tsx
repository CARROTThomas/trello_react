import {useState} from "react";
import axios from 'axios';
import {GlobalConstant} from "./Common/global-constant.ts";
import {useNavigate} from "react-router-dom";

export function User() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const uri = window.location.pathname;
    const navigate = useNavigate()

    function checkUri(){
        return uri.includes("/register");
    }

    function register() {
        const user = {username,password};
        axios.post(GlobalConstant.baseurl+"register",user)
            .then((response)=>{
                console.log(response.data["message"])
            })
        return navigate("/login")
    }

    async function login() {
        const user  = {username,password};
        await axios.post(GlobalConstant.baseurl+"token", user)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("bearerToken",response.data["access"])
                setTimeout(()=>{
                    navigate("/")
                    window.location.reload()
                },500)
            })
    }


    return (
        <>
            <div className="container">
                <div className="d-flex flex-column gap-3 align-items-center">
                    <div className="d-flex flex-column gap-3 align-items-center w-100">
                        {checkUri() ?
                            <h1>Register</h1> :
                            <h1>Login</h1>
                        }

                        <div className="col-8">
                            <div className="d-flex flex-column justify-content-center gap-2 w-100">
                                <input type="text"
                                       placeholder="username"
                                       onChange={(e) => setUsername(e.target.value)}
                                       className="form-control"/>

                                <input type="password" placeholder="password" className="form-control"
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                        </div>

                        {checkUri() ?
                            <div>
                                <button onClick={register} className="btn btn-primary">Register</button>
                            </div> :
                            <div>
                                <button onClick={login} className="btn btn-primary">Login</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}