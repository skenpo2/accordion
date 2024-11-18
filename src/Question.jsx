import React from 'react';

const Question = ({ id, title, info, active, showQuestion }) => {
  const isActive = id === active;
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => showQuestion(id)}
        >
          {isActive ? '-' : '+'}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default Question;
