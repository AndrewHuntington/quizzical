import React from 'react';
import { nanoid } from 'nanoid';
import Answer from './Answer';

export default function Question({
  question,
  correct_answer,
  incorrect_answers,
}: {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}) {
  const answers = [
    {
      answer: correct_answer,
      isCorrect: true,
      isSelected: false,
    },
    ...incorrect_answers.map((answer) => ({
      answer,
      isCorrect: false,
      isSelected: false,
    })),
  ];

  // TODO: Answer 0 is always correct, so it should be randomized
  const answerChoices = answers.map((answer) => (
    <Answer
      key={nanoid()}
      isCorrect={answer.isCorrect}
      isSelected={answer.isSelected}
    >
      {answer.answer}
    </Answer>
  ));
  return (
    <div className="flex justify-center mt-4">
      <div className="border-b w-4/5">
        <h2 className="font-bold mb-3">{question}</h2>
        <div className="flex flex-col sm:flex-row mb-4">{answerChoices}</div>
      </div>
    </div>
  );
}
