import React, { useState }  from "react"
import './Card.css'

function Card(question, answer, id) {

    return (
        <div className='card-container'>
        <div className="flashcard">
        id = {id}
        q = {question}
        a = {answer}
        </div>
        </div>
);
};

export default Card;