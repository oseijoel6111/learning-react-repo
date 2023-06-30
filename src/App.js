import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <>
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/preferences" Component={Preferences} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
