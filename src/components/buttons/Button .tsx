import React from 'react';

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      className={`w-full py-2 text-white hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
