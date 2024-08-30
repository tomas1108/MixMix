import React from 'react';

interface CardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const Card: React.FC<CardProps> = ({ href, imgSrc, imgAlt }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-full h-auto rounded-lg"
        />
      </a>
    </div>
  );
};

export default Card;
