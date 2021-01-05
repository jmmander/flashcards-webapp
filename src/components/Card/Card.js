import React, { useState }  from "react"
import './Card.css'

function Card(props) {

    return (
        <div className='card-container'>
        <div className="flashcard">

        <p>
        q = {props.question}
        </p>
        <p>
        a = {props.answer}
        </p>
        </div>
        </div>
);
};

export default Card;