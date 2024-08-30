// components/RegisterPopup.tsx
import React from 'react';

interface RegisterFormProps {
  isVisible: boolean;
  togglePopup: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ isVisible, togglePopup }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={togglePopup}
        >
          <i className="fas fa-times text-xl">X</i>
        </button>
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">회원가입</h2>
        </div>
        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">아이디</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="4-12자 영문, 숫자를 입력해주세요"
                  />
                  <button className="ml-2 bg-orange-500 text-white py-2 px-4 rounded-md">
                    중복체크
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">닉네임</label>
                <div className="flex">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="3-8자 한글, 숫자 닉네임을 입력해주세요"
                  />
                  <button className="ml-2 bg-orange-500 text-white py-2 px-4 rounded-md">
                    중복체크
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">비밀번호</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="타사이트와 같은 암호를 사용하지 말아주세요"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">비밀번호 확인</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="다시 한번 비밀번호를 입력해주세요"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">휴대폰번호</label>
                <div className="flex">
                  <select className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="010">010</option>
                    {/* Thêm các tùy chọn khác nếu cần */}
                  </select>
                  <input
                    type="text"
                    className="w-full ml-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="휴대폰 번호"
                  />
                  <button className="ml-2 bg-orange-500 text-white py-2 px-4 rounded-md">
                    인증받기
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">인증번호</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="인증번호를 입력해주세요"
                />
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">은행명</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="">은행선택</option>
                  {/* Thêm các tùy chọn ngân hàng khác */}
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">계좌번호</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="-를 제외하고 숫자만 입력하세요"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">예금주</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="계좌 예금주를 입력해주세요."
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">가입코드</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="영문, 숫자를 입력해주세요."
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 mt-4"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
