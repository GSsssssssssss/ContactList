import React from "react";
import './card.css';
export default function ContactCard(props){
    return (
    <div className="contactCard">
    <h3>{props.Name}</h3>
    <h4>{props.phone}</h4>
    </div>
    
    );

}