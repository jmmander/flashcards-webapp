import React, { useState }  from "react"
import './AddCard.css'

function AddCard(props) {

  const [question, setQuestion] = useState('Question')
  const [answer, setAnswer] = useState('Answer')

    return (
        <div className='add-container'>
        <div className="addFlashcard"> <h3>Add Flashcard </h3>
        <label> Question: <input type='text' defaultValue={question} placeholder="What is...?" onSubmit={e => setQuestion(e.target.value)}></input> </label>
        <label> Answer: <input type='text' defaultValue={answer} placeholder="It is..." onSubmit={e => setAnswer(e.target.value)}></input> </label>
        <button type="submit" className="btn" onSubmit={props.addNewCard(question, answer)}>Add</button>
        </div>
        </div>
);
};

export default AddCard;