'use-client';
import { useState, useEffect } from 'react';
import { _IMAGE_URL } from '@/constants/global';



const BannerSlider = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = _IMAGE_URL.banners;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, [banners.length]);

  return (
    <a href="#" className="relative w-auto h-auto block">
      <img
        className={`w-full h-auto object-cover transition-opacity duration-1000`}
        src={banners[currentBanner]}
        alt="Banner"
      />
    </a>
  );
};
BannerSlider.displayName = 'BannerSlider';
export default BannerSlider;
