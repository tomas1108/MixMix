"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ["/banner/intro-main2_1.jpg", "/banner/intro-main2_2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Head>
        <title>MixMix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center ml-0">
              <img
                className="h-12 w-auto ml-0"
                src="/logo/logo.png"
                alt="MixMix"
              />
            </div>
            {/* Navigation */}
            <nav className="flex space-x-4">
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                충전
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                환전
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                페이백
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                충횟수
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                충금액
              </a>

              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                포인트
              </a>

              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                고객센터
              </a>

              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                쪽지
              </a>
              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                베팅내역
              </a>

              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                이벤트
              </a>

              <a
                href="#"
                className="text-gray-700 font-semibold hover:text-orange-500"
              >
                공지사항
              </a>
            </nav>
            {/* Login and Sign Up */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 font-semibold hover:text-orange-500">
                로그인
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                회원가입
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 mt-12">
        {/* Left Sidebar */}
        <section className="w-1/5 bg-white p-4 rounded-lg shadow space-y-4 overflow-hidden">
          {/* Grid buttons */}
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              스포츠(해외형)
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              스포츠(국내형)
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              스포츠(스페셜)
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              스포츠(실시간)
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              미니게임
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              토토게임
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              카지노
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              슬롯
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              레볼루션(홀덤)
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              BET365
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              공지사항
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              이벤트
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              출석부
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              쿠폰
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              베팅내역
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              포인트전환
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              지인현황
            </button>
            <button className="bg-gradient-to-b from-orange-500 to-orange-400 text-white py-2 rounded-lg">
              정보수정
            </button>
          </div>

          {/* Images section */}
          <div className="mt-4 grid grid-rows-2 gap-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/banner/bner_sma1.jpg"
                alt="Casino"
                className="w-full h-auto rounded-lg"
              />
              <img
                src="/banner/bner_sma2.jpg"
                alt="Slot"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div>
              <img
                src="/banner/bner_lar.jpg"
                alt="Revolution Holdem"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Search section */}
          <div className="mt-4 space-y-2">
            <div className="bg-gray-200 p-2 rounded flex items-center">
              <input
                type="text"
                placeholder="스포츠 해외형 검색 (국가/리그/팀명)"
                className="flex-1 bg-transparent outline-none"
              />
              <button className="ml-2 text-gray-700">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="bg-gray-200 p-2 rounded flex items-center">
              <input
                type="text"
                placeholder="스포츠 국내형 검색 (국가/리그/팀명)"
                className="flex-1 bg-transparent outline-none"
              />
              <button className="ml-2 text-gray-700">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Middle Section */}
        <section className="w-3/5 bg-white rounded-lg shadow flex flex-col overflow-hidden">
          {/* Banner */}
          <div className="relative w-auto h-auto">
            <img
              className="w-full h-auto object-cover transition-opacity duration-1000"
              src={banners[currentBanner]}
              alt="Banner"
            />
          </div>

          {/* New Sections Below the Banner */}
          <div className="p-4">
            {/* Top Row with Two Informational Divs */}
            <div className="flex space-x-4 mb-4">
              {/* Left Information Div */}
              <div className="w-1/2 bg-gray-100 rounded-lg p-4 shadow-lg">
                <h2 className="text-lg font-bold mb-2">공지사항</h2>
                <ul className="text-red-500">
                  <li>악질 신고 유저 강력 대응</li>
                  <li>레볼루션 홀덤 규정</li>
                  <li>레볼루션 홀덤 가이드</li>
                  <li>레벨별 등급혜택</li>
                  <li>미니게임 규정안내</li>
                </ul>
              </div>

              {/* Right Information Div */}
              <div className="w-1/2 bg-gray-100 rounded-lg p-4 shadow-lg">
                <h2 className="text-lg font-bold mb-2">이벤트</h2>
                <ul className="text-red-500">
                  <li>레볼루션 토너먼트대회</li>
                  <li>레볼루션 홀덤 더블이벤트</li>
                  <li>무한 입금 플러스 이벤트</li>
                  <li>신규회원 이벤트</li>
                  <li>개인정산 이벤트</li>
                </ul>
              </div>
            </div>

            {/* Bottom Row with Four Items */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                {/* Add content or image */}
                <img
                  src="/path/to/your/image3.png"
                  alt="Item 1"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-gray-700">First item content.</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                {/* Add content or image */}
                <img
                  src="/path/to/your/image4.png"
                  alt="Item 2"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-gray-700">Second item content.</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                {/* Add content or image */}
                <img
                  src="/path/to/your/image5.png"
                  alt="Item 3"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-gray-700">Third item content.</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 shadow-lg">
                {/* Add content or image */}
                <img
                  src="/path/to/your/image6.png"
                  alt="Item 4"
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-2">
                  <p className="text-gray-700">Fourth item content.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

     {/* Right Sidebar */}
     <section className="w-1/5 bg-white p-4 rounded-lg shadow h-screen overflow-auto space-y-4 flex flex-col">
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
      <button className="flex-1 bg-red-500 text-white py-2 rounded-lg">
        로그인
      </button>
      <button className="flex-1 bg-gray-300 py-2 rounded-lg">
        회원가입
      </button>
    </div>
  </div>

  {/* Cards */}
  <div className="space-y-4 flex-1 overflow-y-auto">
    {/* Card 1 */}
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <img
        src="/banner/bner-right-1.gif"
        alt="Lifetime Domain Guide"
        className="w-full h-auto rounded-lg"
      />
    </div>
    {/* Card 2 */}
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <img
        src="/banner/bner-right-2.gif"
        alt="Kakao Customer Center"
        className="w-full h-auto rounded-lg"
      />
    </div>
    {/* Card 3 */}
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <img
        src="/banner/bner-right-3.gif"
        alt="Telegram Customer Center"
        className="w-full h-auto rounded-lg"
      />
    </div>
    {/* Card 4 */}
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <img
        src="/banner/bner-right-4.gif"
        alt="Telegram Notice Room"
        className="w-full h-auto rounded-lg"
      />
    </div>
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <img
        src="/banner/bner-right-5.gif"
        alt="Telegram Notice Room"
        className="w-full h-auto rounded-lg"
      />
    </div>
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
      <img
        src="/banner/bner-right-6.gif"
        alt="Telegram Notice Room"
        className="w-full h-auto rounded-lg"
      />
    </div>
  </div>
</section>

      </div>
    </div>
  );
}
