import React, { useState, useCallback } from 'react';
import TriviaAnswers from '../interfaces/TriviaAnswers';
import Answer from './Answer';

export default function Question({
  question,
  answers,
}: {
  question: string;
  answers: TriviaAnswers[];
}) {
  const [questionAnswers, setQuestionAnswers] = useState(answers);

  const handleAnswerClick = useCallback(
    (id: string) => {
      const updatedAnswers = questionAnswers.map((answer) => {
        if (answer.id === id) {
          return { ...answer, isSelected: true };
        }
        return { ...answer, isSelected: false };
      });
      setQuestionAnswers(updatedAnswers);
    },
    [questionAnswers]
  );

  // TODO: Answer 0 is always correct, so it should be randomized
  const answerChoices = questionAnswers.map((answer) => (
    <Answer
      key={answer.id}
      id={answer.id}
      isCorrect={answer.isCorrect}
      isSelected={answer.isSelected}
      answer={answer.answer}
      handleAnswerClick={handleAnswerClick}
    />
  ));

  return (
    <div className="flex justify-center mt-4">
      <div className="border-b w-4/5">
        <div
          className="font-bold mb-3"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <div className="flex flex-col sm:flex-row mb-4">{answerChoices}</div>
      </div>
    </div>
  );
}
