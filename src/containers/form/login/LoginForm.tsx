import React from 'react';

interface LoginFormProps {
    isVisible: boolean;
    togglePopup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isVisible, togglePopup }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={togglePopup}
        >
          <i className="fas fa-times text-xl">X</i>
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">로그인</h2>
          <p className="text-gray-500 mt-2">계정에 로그인하세요</p>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              아이디
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-gray-600 text-sm"
              >
                아이디 기억하기
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-orange-500 hover:underline"
            >
              비밀번호 찾기
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            로그인
          </button>
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">
              계정이 없으신가요?
            </span>
            <a
              href="#"
              className="text-orange-500 text-sm font-medium ml-2 hover:underline"
            >
              회원가입
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
