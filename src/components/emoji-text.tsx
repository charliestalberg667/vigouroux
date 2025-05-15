import emoji from 'emoji-toolkit';
import React from 'react';

interface EmojiTextProps {
  text: string;
  className?: string;
}

export function EmojiText({ text, className = '' }: EmojiTextProps) {
  // Split the text by newlines and preserve them
  const formattedText = text.split('\n').map((line, index, array) => (
    <React.Fragment key={index}>
      <span>{line}</span>
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className={`${className} emoji-text`}>
      {formattedText}
    </div>
  );
} 