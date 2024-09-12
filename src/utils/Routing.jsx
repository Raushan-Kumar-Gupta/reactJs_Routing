import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Aboutdetail from "../components/Aboutdetail";

const Routing=()=>{
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}>
                </Route>
                    <Route path='/about/:name' element={<Aboutdetail/>}></Route>
                <Route path='/skills' element={<Skills/>}></Route>
            </Routes>
        </div>
    )
}

export default Routing;