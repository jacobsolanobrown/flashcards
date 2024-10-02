import PropTypes from 'prop-types';
import './Flashcard.css';
import { useState } from 'react';


const Flashcard = ({ question, answer, flipped, onFlip}) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsCorrect(userAnswer.trim().toLowerCase() === answer.trim().toLowerCase());
    };

    return (
      <div>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={onFlip}>
        <div className="flashcard-content">
        {!flipped ? (
          <div className="flashcard-content-front">
          {question}
          </div>
        ) : (
          <div className="flashcard-content-back">
          {answer}
          </div>
        )}
        </div>
      </div>
      <div>
        <form className="flashcard-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your answer" 
          className="flashcard-input" 
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
        />
        <button type="submit" className="flashcard-submit">Submit</button>
        </form>
        {isCorrect !== null && (
        <div className={`flashcard-response ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Correct!' : 'Incorrect, try again.'}
        </div>
        )}
      </div>
      </div>
    );
};

Flashcard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    flipped: PropTypes.bool,
    onFlip: PropTypes.func,
};

export default Flashcard;