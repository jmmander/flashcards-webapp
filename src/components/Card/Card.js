import React, { useState, useRef }  from "react"
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useOnClickOutside from '../hooks/useOnClickOutside'


function Card(props) {

    const [editable, setEditable] = useState(false)
    
    const makeEditable = () => {
        setEditable(true);
        console.log("readonly");
        console.log(editable);
    }

    const ref = useRef();
    useOnClickOutside(ref, () => {
        setEditable(false);
        console.log("clickoutside");
        console.log(editable);});


    const deleteCard = () => {
        console.log("deleteing")
        console.log(props.id)
        console.log(props.question)
        console.log(props.answer)
        props.deleteCard(props.id)
    }
    return (
        <div className='card-container'>
        <div className="flashcard ref={ref}">
        <div className="question halfcard">
        <div className='edit-container'>
        <button className="icon" onClick={makeEditable}><FontAwesomeIcon icon={faEdit} /></button>
        <button className="icon" onClick={deleteCard}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </div>
        <input type='text' className="editable" defaultValue={props.question} readOnly={!editable}>
        </input>
        </div>
        <div className="answer halfcard">
        <input type='text' className="editable" defaultValue={props.answer} readOnly={!editable}>
        </input>
        </div>
        </div>
        </div>
);
};

export default Card;