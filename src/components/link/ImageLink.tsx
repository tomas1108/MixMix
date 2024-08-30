import React from 'react';

interface ImageLinkProps {
  href: string;
  src: string;
  alt: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
    </a>
  );
};

export default ImageLink;
