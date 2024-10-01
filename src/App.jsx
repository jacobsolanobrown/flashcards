// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Flashcard from './components/Flashcard'; // Adjust the path if necessary


function App() {
  // variable to keep track of the current index of the flashcard
  const [currentIndex, setCurrentIndex] = useState(0);
  // variable to keep track of the current state of the flashcard
  const [flipped, setFlipped] = useState(false);
  // set an array of flashcards with questions and answers
  const flashcard_list = [
    {question: "What is bagel in Spanish?", answer: "Bagel!"},
    {question: "What is cream cheese in Spanish?", answer: "Queso Crema!"},
    {question: "What is coffee in Spanish?", answer: "Cafe!"},
    {question: "What is tea in Spanish?", answer: "Te!"},
    {question: "What is Spanish in Spanish?", answer: "Espanol!"},
    {question: "What is English in Spanish?", answer: "Ingles!"},
    {question: "What is Bread in Spanish?", answer: "Pan!"},
    {question: "What is Butter in Spanish?", answer: "Mantequilla!"},
    {question: "What is Cat in Spanish?", answer: "Gato!"},
    {question: "What is the inverse of the parobola in Spanish?", answer: "Idk!"},
    {question: "What is Dog in Spanish?", answer: "Perro!"},
    {question: "What is Fish in Spanish?", answer: "Pescado!"},
    {question: "What is Horse in Spanish?", answer: "Caballo!"},
    {question: "What is Cow in Spanish?", answer: "Vaca!"},

  ]

  const handlePrevCard = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcard_list.length) % flashcard_list.length);
  }

  // handles the next card in our flashcards array
  const handleNextCard = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcard_list.length);
  };

  const handleFlipCard = () => {
    setFlipped(!flipped);
  };

  // TODO add animation of flipping cards / transitions 
  // TODO add css elements to make it look better

  const handleRandomCard = () => {
    setFlipped(false);
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * flashcard_list.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
  };

  return (
    <>
      <div className='app'>
        <h1 className='header'>SPANISH FLASHCARDS!!</h1>
        <h2>Learn Spanish here! RIGHT NOW!! </h2>
        <h3>ANSWER ALL CORRECTLY AND WIN FREE IPAD !!!</h3>
        <h4>Just kidding, you get nothing. But you do get to learn Spanish!</h4>
        <h4>Total Cards: {flashcard_list.length}</h4>
      </div>
      <div className='flashcard-inner'>
      <div className='flashcard'>
        <Flashcard
          flipped={flipped}
          onFlip={handleFlipCard}
          question={flashcard_list[currentIndex].question}
          answer={flashcard_list[currentIndex].answer}
        />
        </div>
      </div>
      <div className='button-layout'>
        <button onClick={handlePrevCard}>Previous Card</button>
        <button onClick={handleNextCard}>Next Card</button>
        <button onClick={handleRandomCard}>Next Random Card</button>
      </div>
    </>
  )
}

export default App
