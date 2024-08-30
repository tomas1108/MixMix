import React from 'react';

interface SportsItemProps {
  iconClass: string;
  name: string;
  count: number;
}

const SportsItem: React.FC<SportsItemProps> = ({ iconClass, name, count }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span className="flex items-center">
        <i className={`${iconClass} mr-2`}></i> {name}
      </span>
      <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
        {count}
      </span>
    </li>
  );
};

export default SportsItem;
