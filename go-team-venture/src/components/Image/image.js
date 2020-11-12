import React, { Component } from "react";
import "./image.css";

function Character(props) {
    return (
        <div className="card">
            <img alt={props.name} src={props.image}  onClick={() => props.removeCharacter(props.id)} className="remove"/>

        </div>
    )
}

export default Character;