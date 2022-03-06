/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export default function Answer({
  children,
  isCorrect,
  isSelected,
}: {
  children: React.ReactNode;
  isCorrect: boolean;
  isSelected: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-center text-center w-full rounded-lg mb-2 hover:answer-selected ${
        isSelected ? 'answer-selected' : 'answer-unselected'
      }`}
    >
      {children}
    </div>
  );
}
