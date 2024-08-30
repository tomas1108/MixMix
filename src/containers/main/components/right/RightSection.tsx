import React, { useState, useEffect } from 'react';
import Card from '@/components/cards';

interface RightSectionProps {
  isRightSidebarOpen: boolean;
  handleAlert: () => void;
  toggleRegisterPopup: () => void;
}

const RightSection: React.FC<RightSectionProps> = ({
  isRightSidebarOpen,
  handleAlert,
  toggleRegisterPopup,
}) => {
  const [isOpen, setIsOpen] = useState(isRightSidebarOpen);

  useEffect(() => {
    setIsOpen(isRightSidebarOpen);
  }, [isRightSidebarOpen]);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay to prevent interaction outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={closeSidebar}
        />
      )}

      <section
        className={`lg:w-1/5 w-4/5 bg-white p-4 rounded-lg shadow h-screen overflow-auto space-y-4 
                    ${isOpen ? 'absolute right-0 top-0 z-30' : 'hidden'} 
                    lg:relative lg:block`}
        style={{ height: 'calc(100vh - 115px)' }}
      >
        {/* Close Button */}
      

        {/* Login Form */}
        <div className="space-y-2 mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <div className="flex space-x-2">
            <button
              className="flex-1 bg-red-500 text-white py-2 rounded-lg"
              onClick={handleAlert}
            >
              로그인
            </button>
            <button
              className="flex-1 bg-gray-300 py-2 rounded-lg"
              onClick={toggleRegisterPopup}
            >
              회원가입
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4 flex-1 cursor-pointer overflow-y-auto">
          <Card
            href="https://xn--ig3ba432cba.com/"
            imgSrc="/banner/bner-right-1.gif"
            imgAlt="Lifetime Domain Guide"
          />
          <Card
            href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
            imgSrc="/banner/bner-right-2.gif"
            imgAlt="Kakao Customer Center"
          />
          <Card
            href="https://t.me/mixmix365"
            imgSrc="/banner/bner-right-3.gif"
            imgAlt="Telegram Customer Center"
          />
          <Card
            href="https://t.me/mixmix_Channel"
            imgSrc="/banner/bner-right-4.gif"
            imgAlt="Telegram Notice Room"
          />
          <Card
            href="https://bigwin.livenst.com/mixmix/livescore/livescore/"
            imgSrc="/banner/bner-right-5.gif"
            imgAlt="Live Score"
          />
          <Card
            href="https://www.rotowire.com/"
            imgSrc="/banner/bner-right-6.gif"
            imgAlt="Rotowire"
          />
        </div>
      </section>
    </>
  );
};
RightSection.displayName = 'RightSection';

export default RightSection;
