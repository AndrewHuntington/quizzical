import React from 'react';

export default function Button({
  height,
  width,
  insideText,
  onClick,
}: {
  height: number;
  width: number;
  insideText: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`bg-[#4d5b9e] text-white rounded-2xl w-[${width}px] h-[${height}px]`}
      type="button"
      onClick={onClick}
    >
      {insideText}
    </button>
  );
}
