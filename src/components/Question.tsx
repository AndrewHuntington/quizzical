import React, { useState, useCallback } from 'react';
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
      id: nanoid(),
      answer: correct_answer,
      isCorrect: true,
      isSelected: false,
    },
    ...incorrect_answers.map((answer) => ({
      id: nanoid(),
      answer,
      isCorrect: false,
      isSelected: false,
    })),
  ];

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
