import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onBack: () => void;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
  toggleLoginPopup: () => void;
  toggleRegisterPopup: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onBack,
  toggleLeftSidebar,
  toggleRightSidebar,
  toggleLoginPopup,
  toggleRegisterPopup
}) => {

  const router = useRouter();
  

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center h-auto p-4 w-full lg:w-auto">
            <button className="lg:hidden" onClick={toggleLeftSidebar}>
            <img src='/icons/list.svg' alt="Button Icon" />
            </button>
            <img
              className="h-8 w-auto md:h-10 lg:h-12 mx-auto cursor-pointer"
              src="/logo/logo.png"
              alt="MixMix"
              onClick={onBack}
            />
            <button className="lg:hidden" onClick={toggleRightSidebar}>
            <img src='/icons/logout.png' alt="Log Button" className='w-12 mb-4'/>

            </button>
          </div>

          {/* Navigation */}
          <nav
            className="flex space-x-4 lg:block hidden"
            style={{
              fontWeight: "700",
              fontSize: "12px",
              fontFamily: 'aTitleGothic, "Malgun Gothic", sans-serif',
            }}
          >
            {[
              { text: '충전', path: '/deposit' },
              { text: '환전', path: '/withdrawal' },
              { text: '페이백', path: '/' },
              { text: '충횟수', path: '/' },
              { text: '충금액', path: '/' },
              { text: '포인트', path: '/myPoint' },
              { text: '고객센터', path: '/qna' },
              { text: '쪽지', path: '/messages' },
              { text: '베팅내역', path: '/bet-history' },
              { text: '이벤트', path: '/events' },
              { text: '공지사항', path: '/notices' },
            ].map(({ text, path }) => (
              <a
                key={text}
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
                onClick={() => handleNavigation(path)}

              >
                {text}
              </a>
            ))}
          </nav>

          {/* Login and Sign Up */}
          <div className="flex items-center space-x-4 lg:block hidden">
            <button
              className="text-gray-700 font-semibold hover:text-orange-500"
              onClick={toggleLoginPopup}
            >
              로그인
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              onClick={toggleRegisterPopup}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
