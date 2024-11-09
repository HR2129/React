import React, { useState, useEffect } from 'react';
import './AutoTypingText.css';

const AutoTypingText = ({ lines, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText + lines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText + '\n');
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayedText, lineIndex, charIndex, lines, speed]);

  return (
    <div className="auto-typing-text">
      {displayedText.split('\n').map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default AutoTypingText;
