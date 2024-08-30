"use client";

import React, { useState } from "react";
import Header from "@/containers/header";
import LeftSection from "@/containers/main/components/left";
import RightSection from "@/containers/main/components/right";
import NavigationBar from "@/containers/navigation";
import { LoginForm, RegisterForm } from "@/containers/form";

// Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false);
  const handleOnBack = () => {
    window.location.href = "/"; 
    }

  const handleToggleLeftSidebar = () => setLeftSidebarOpen((prev) => !prev);
  const handleToggleRightSidebar = () => setRightSidebarOpen((prev) => !prev);
  const handleToggleLoginPopup = () => setLoginPopupOpen((prev) => !prev);
  const handleToggleRegisterPopup = () => setRegisterPopupOpen((prev) => !prev);

  return (
    <>
      <Header
        toggleLeftSidebar={handleToggleLeftSidebar}
        toggleRightSidebar={handleToggleRightSidebar}
        toggleLoginPopup={handleToggleLoginPopup}
        toggleRegisterPopup={handleToggleRegisterPopup}
      onBack={handleOnBack}
      />
      <NavigationBar
        toggleLoginPopup={handleToggleLoginPopup}
        toggleRegisterPopup={handleToggleRegisterPopup}
      />

      <div className="flex">
        {/* Left Sidebar */}
        <LeftSection isLeftSidebarOpen={isLeftSidebarOpen} />

        {/* Middle Section (Dynamic Content) */}

        {children}

        {/* Right Sidebar */}
        <RightSection
          isRightSidebarOpen={isRightSidebarOpen}
          handleAlert={() => alert("아이디를 입력하세요")}
          toggleRegisterPopup={handleToggleRegisterPopup}
        />
      </div>

      {/* Popup Forms */}
      <LoginForm
        isVisible={isLoginPopupOpen}
        togglePopup={handleToggleLoginPopup}
      />
      <RegisterForm
        isVisible={isRegisterPopupOpen}
        togglePopup={handleToggleRegisterPopup}
      />
    </>
  );
};

export default Layout;
