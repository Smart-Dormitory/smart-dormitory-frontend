import React from "react";
import logo from "../assets/logo.png"
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-zinc-700 w-full h-20 flex items-center justify-around">
      <img src={logo} alt="" className="w-40 h-14 mr-12"/>
      <Link to='/login' className="border-2 text-center rounded-lg text-white py-1 px-3 cursor-pointer">Login</Link>
    </header>
  );
}
