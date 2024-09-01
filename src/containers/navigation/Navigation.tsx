import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

interface NavigationBarProps {
  toggleLoginPopup: () => void;
  toggleRegisterPopup: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  toggleLoginPopup,
  toggleRegisterPopup
}) => {
  const router = useRouter(); // Initialize useRouter

  // Define paths corresponding to each navigation item
  const paths: { [key: string]: string } = {
    '스포츠(해외형)': '',
    '스포츠(국내형)': '',
    '스포츠(스페셜)': '',
    '스포츠(실시간)': '', 
    '미니게임': '',
    '벳365': '/bet365',
    '토큰게임': '',
    '카지노': '/casino',
    '슬롯': '/slots',
    '레볼루션(홀덤)': '/warning',
  };

  // Function to handle navigation or alert
  const handleNavigation = (item: string) => {
    const path = paths[item];
    if (path === '/warning') {
      alert('레볼루션(홀덤) 페이지는 준비 중입니다.'); // Show alert if path is '/warning'
    }
    else if (path) {
      router.push(path); // Navigate to path if it exists



    } else {
      alert('Coming Soon'); // Show alert if path doesn't exist
    }
  };

  return (
    <div
      className="bg-gray-200 shadow-inner font-custom"
      style={{ fontWeight: 700 }}
    >
      {/* Buttons for small screens */}
      <div className="block lg:hidden mb-4 flex flex-row w-full">
        <button
          className="flex-1 flex items-center justify-center border border-[#eb8691] bg-[#c94c5a] rounded-sm mx-1 py-3 cursor-pointer text-base text-white font-[aTitleGothic, 'Malgun Gothic', sans-serif]"
          onClick={toggleLoginPopup}
        >
          로그인
        </button>
        <button
          className="flex-1 flex items-center justify-center border border-[#eb8691] bg-[#c94c5a] rounded-sm mx-1 py-3 cursor-pointer text-base text-white font-[aTitleGothic, 'Malgun Gothic', sans-serif]"
          onClick={toggleRegisterPopup}
        >
          회원가입
        </button>
      </div>

      {/* Navigation Links for large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:block hidden">
        <nav className="flex justify-center space-x-4 h-12 items-center text-gray-700">
          {[
            '스포츠(해외형)',
            '스포츠(국내형)',
            '스포츠(스페셜)',
            '스포츠(실시간)',
            '미니게임',
            '벳365',
            '토큰게임',
            '카지노',
            '슬롯',
            '레볼루션(홀덤)',
          ].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)} // Handle click event
              className="hover:underline cursor-pointer"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
