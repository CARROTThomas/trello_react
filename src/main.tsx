import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {NavBar} from "./NavBar.tsx";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router.tsx";

ReactDOM.createRoot(document.getElementById('content')!).render(
  <React.StrictMode>
      <NavBar />

      <div className="mt-5">
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </div>

  </React.StrictMode>,
)
