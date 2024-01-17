import {GlobalConstant} from "./Common/global-constant.ts";
import {useEffect, useState} from "react";

export function NavBar() {

    const [state, setState] = useState(false)

    function logout() {
        localStorage.removeItem("bearerToken");
        window.location.reload();
    }

    function readLocalStorage() {
        if (GlobalConstant.isLogged) {
            setState(true)
        }
    }

    useEffect(() => {
        return readLocalStorage
    }, []);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-lg d-flex align-items-center justify-content-between">
                        <a className="nav-link text-light" id="logoNavBarre" href="/">LOGO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-light" id="navbarNav">
                            <ul className="navbar-nav">
                                {state ?
                                    <li>
                                        <button onClick={logout} className="nav-link text-light">logout</button>
                                    </li> :
                                    <>
                                        <li>
                                            <a className="nav-link text-light" href="/register">Register</a>
                                        </li>
                                        <li>
                                            <a className="nav-link text-light" href="/login">Login</a>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
