import React from 'react';

export default function Button({
  insideText,
  onClick,
}: {
  insideText: string;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-[#4d5b9e] text-white font-['Inter'] rounded-2xl w-full h-full"
      type="button"
      onClick={onClick}
    >
      {insideText}
    </button>
  );
}
