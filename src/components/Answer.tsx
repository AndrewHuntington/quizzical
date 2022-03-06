/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export default function Answer({
  answer,
  isCorrect,
  isSelected,
}: {
  answer: string;
  isCorrect: boolean;
  isSelected: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center w-full rounded-lg mb-2 hover:answer-selected ${
        isSelected ? 'answer-selected' : 'answer-unselected'
      }`}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
}
