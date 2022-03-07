/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export default function Answer({
  id,
  answer,
  isCorrect,
  isSelected,
  handleAnswerClick,
}: {
  id: string;
  answer: string;
  isCorrect: boolean;
  isSelected: boolean;
  handleAnswerClick: (id: string) => void;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center w-full rounded-lg mb-2 hover:cursor-pointer hover:answer-selected ${
        isSelected ? 'answer-selected' : 'answer-unselected'
      }`}
      dangerouslySetInnerHTML={{ __html: answer }}
      onClick={() => handleAnswerClick(id)}
    />
  );
}
