//import "./app.css";
import Nav from './Components/nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"; 
import axios from 'axios';
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getEntry(){
      try {
          const res = await axios.get("http://localhost:2000/auth/login/success")
          console.log(res);
      } catch (error) {console.log(error)}
  }
  getEntry()
    
    console.log(user);
  },[user])
  return (
    <BrowserRouter>
      <div className="App">
        <Nav user = {user}/>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/login" element={<Login/>}/>
          {/* <Route path = "/login" element={<Login/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
