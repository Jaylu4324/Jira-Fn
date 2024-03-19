// import { Drawer } from "@mui/material";
import Drawer from "./Drawer/Drawer"
import Login from "./Login/Login";
import Register from "./Register"
import Navbar from "./HomePage/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../src/HomePage/Home"


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
 
     

        <Route path="/Register" element={<Register />} />
      
      </Routes>
    </BrowserRouter>


  );
}

export default App;
