import React from 'react';
import Button from './Button';

export default function StartPage({ gameStart }: { gameStart: () => void }) {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl">Quizzical</h1>
      <p className="font-['Inter'] mt-3">A quiz game</p>
      <div className="mt-7 h-[52px] w-[193px]">
        <Button insideText="Start quiz" onClick={gameStart} />
      </div>
    </div>
  );
}
