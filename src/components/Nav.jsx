import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex gap-16 justify-center m-4">
      <NavLink
        style={(e) => {
         return {color:e.isActive?"tomato":""}
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink className={(e)=>{
        return [e.isActive?"text-blue-300":"", e.isActive?"font-extrabold":""].join(" ")
      }} to="/about">About</NavLink>

      <NavLink  to="/skills">
            {
                (e)=>{
                    return <span className={[e.isActive?"text-pink-400":"", e.isActive?"font-extrabold":""].join(" ")}>Skills</span>
                }
            }
      </NavLink>
    </nav>
  );
};

export default Nav;
