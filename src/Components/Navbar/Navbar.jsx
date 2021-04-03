import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  
  return (

    
    <div className="navbar">
      <h1 className="logo">Logo</h1>
      <div></div>
      <Link to="/"><button className="nav_btns">Home</button></Link>
      <Link to="/auth"><button className="nav_btns">Login</button></Link>
      <Link to="/products"><button className="nav_btns">Products</button></Link>
      <Link to="/auth"><button className="nav_btns">SignUp</button></Link>
      <div></div>
    </div>
  );
};


export default Navbar;
