import React, { useState } from 'react';
import LeftSection from './components/left';
import RightSection from './components/right/RightSection';
import MiddleSection from './components/mid/MidSection';

const MainView = ({ isLeftSidebarOpen, isRightSidebarOpen, toggleRegisterPopup }: { isLeftSidebarOpen: boolean, isRightSidebarOpen: boolean, toggleRegisterPopup: () => void }) => {


  const handleAlert = () => {
    alert('아이디를 입력하세요');
  };

  
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <LeftSection 
        isLeftSidebarOpen={isLeftSidebarOpen}
      />

      {/* Middle Section */}
      <MiddleSection 
      />

      {/* Right Sidebar */}
      <RightSection
        isRightSidebarOpen={isRightSidebarOpen}
        handleAlert={handleAlert}
        toggleRegisterPopup={toggleRegisterPopup}
        
      />
    </div>
  );
};

export default MainView;
