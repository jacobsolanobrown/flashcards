import PropTypes from 'prop-types';
import './Flashcard.css';

const Flashcard = ({ question, answer, flipped, onFlip}) => {
    return (
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
      );
};

Flashcard.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    flipped: PropTypes.bool,
    onFlip: PropTypes.func,
};

export default Flashcard;