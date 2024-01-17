import './App.css'
import {GlobalConstant} from "./Common/global-constant.ts";

function App() {


  return (
    <>
      <div className="container">
          <h1>Welcome to Trello</h1>
          {GlobalConstant.isLogged ?
              <div>
                  <a href="/myboard">check your board</a>
              </div>
              :
              <></>
          }
      </div>
    </>
  )
}

export default App
