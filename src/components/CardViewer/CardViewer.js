import React, { useState }  from "react"
import './CardViewer.css'
import Card from '../Card/Card'
import AddCard from '../Card/AddCard'

function CardViewer() {

  const [cards, setCards] = useState([])

  let id = 0

  const addNewCard = (question, answer) => {
    const flashcard = {
        id: id,
        question: question,
        answer: answer,
    }
    setCards([...cards, flashcard]);
    id++;
  }
    return (
        <div className='cardviewer-container'>
        <AddCard addNewCard={addNewCard}></AddCard>
        <div>
       {cards.map(card => {
           return <Card question={card.question} answer={card.answer} key={card.id} />
       })}
       </div>
        </div>
);
};

export default CardViewer;