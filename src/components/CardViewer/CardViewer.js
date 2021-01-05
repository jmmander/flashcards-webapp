import React, { useState }  from "react";
import Card from '../Card/Card';
import './CardViewer.css'


function CardViewer() {

  const [cards, setCards] = useState([])
  const [question, setQuestion] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [id, setId] = useState(0)


  const addNewCard = () => {
    console.log(cards.length);
    const flashcard = {
        id: id,
        question: question,
        answer: answer,
    }
    console.log("new card")
    console.log(flashcard)
    setCards([...cards, flashcard]);
    setId(id+1);
    console.log(id)
    setQuestion("");
    setAnswer("");
  }

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id))
  }

  const updateCard = (id, newQuestion, newAnswer) => {
    setCards(cards.map(card => {
        if (card.id !== id) return card;
        return {...card, question: newQuestion, answer: newAnswer}
    }))
  }

    return (
        <div className='cardviewer-container'>
        <div className='add-container'>
        <div className="addFlashcard"> <h3>Add Flashcard </h3>
        <label> Question: <input type='text' placeholder="What is...?" onChange={e => setQuestion(e.target.value)}></input> </label>
        <label> Answer: <input type='text' placeholder="It is..." onChange={e => setAnswer(e.target.value)}></input> </label>
        <button type="submit" className="btn" onClick={addNewCard}>Add</button>
        </div>
        </div>
        <div className="cardList">
        {cards.map(card => {
           return <Card question={card.question} answer={card.answer} id={card.id} key={card.id} deleteCard={deleteCard} updateCard={updateCard}/>
       })}
       </div>
        </div>
);
};

export default CardViewer;