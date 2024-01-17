
export function NavBar() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-lg d-flex align-items-center justify-content-between">
                        <a className="nav-link" id="logoNavBarre" href="/">LOGO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-light" id="navbarNav">
                            <ul className="navbar-nav">
                                <li>
                                    <a className="nav-link" href="/register">Register</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
