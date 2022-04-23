import { Image } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "./assets/logo-spacex.png";

import Home from "./pages/Home";
import LaunchDetails from "./pages/LaunchDetails";


export default function App() {
  
  return (
    <>
    <Link to='/'>
      <Image m="5" src={logo} alt="Space X Logo" htmlWidth="300" />
    </Link>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='launch/:id' element={<LaunchDetails />}/>
      </Routes>
    </>
  );
}
