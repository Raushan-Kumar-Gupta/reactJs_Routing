import React from "react";
import { Link, Outlet } from "react-router-dom";

const About=()=>{
    return (
        <div className="flex flex-col items-center gap-8">
            <h1>About</h1>
            <div className="flex flex-col gap-4 mt-4">
                <Link className="bg-red-400 p-2 m-2 px-3 hover:bg-red-600" to="/about/ayush">Ayush</Link>
                <Link className="bg-red-400 p-2 m-2 px-3 hover:bg-red-600" to="/about/sahil">Sahil</Link>
                <Link className="bg-red-400 p-2 m-2 px-3 hover:bg-red-600" to="/about/samip">Samip</Link>
            </div>
            <hr />
            <Outlet/>
        </div>
    )
}

export default About;