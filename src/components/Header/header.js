import React, { Component } from "react";
import "./header.css";

function Header({message}) {
    return (    
    <header className="header">
      <h1>GO TEAM VENTURE</h1>
    <p>{message}</p>
    </header>
 
     )       
  }
  
  export default Header;