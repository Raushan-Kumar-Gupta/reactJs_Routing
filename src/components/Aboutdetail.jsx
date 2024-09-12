import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Aboutdetail=()=>{
    const {name}=useParams();
    const navigate=useNavigate()
    const handleNav=()=>{
        return (
            // navigate(-1);
            navigate('/about')
        )
    }
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2>User Details</h2>
            <h4>Hii {name}</h4>
            <button onClick={handleNav} className="px-4 py-2 mt-2 bg-red-400">Go back</button>
        </div>
    )
}

export default Aboutdetail;