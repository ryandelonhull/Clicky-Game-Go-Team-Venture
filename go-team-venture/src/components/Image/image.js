import React, { Component } from "react";
import "./image.css";

function Character(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image}  onClick={() => props.randomizeCharacter(props.id)} className="ranodmize"/>
            </div>  
        </div>
    )
}

export default Character;