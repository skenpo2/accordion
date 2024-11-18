import React, { useState } from 'react';
import questions from './data';
import Question from './Question';
const Questions = () => {
  const [active, setActive] = useState(null);
  const showQuestion = (id) => {
    let newQuestion = null;
    if (id == active) {
      return null;
    }
    setActive((newQuestion = id));
  };
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((element, index) => {
        return (
          <Question
            key={element.id}
            {...element}
            index={index}
            active={active}
            showQuestion={showQuestion}
          />
        );
      })}
    </section>
  );
};

export default Questions;
