import React from 'react';

interface MenuButtonProps {
  text: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text }) => {
  return (
    <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
      {text}
    </button>
  );
};

export default MenuButton;
