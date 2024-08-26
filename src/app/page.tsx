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
            <nav
              className="flex space-x-4"
              style={{
                color: "#000;",
                fontWeight: "700",
                fontSize: "12px",
                fontFamily: 'aTitleGothic, "Malgun Gothic", sans-serif',
              }}
            >
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

      {/* Navigation Bar */}
      <div
        className="bg-gray-200 shadow-inner font-custom"
        style={{ fontWeight: 700 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4 h-12 items-center text-gray-700">
            <a href="#" className="hover:underline">
              스포츠(해외형)
            </a>
            <a href="#" className="hover:underline">
              스포츠(국내형)
            </a>
            <a href="#" className="hover:underline">
              스포츠(스페셜)
            </a>
            <a href="#" className="hover:underline">
              스포츠(실시간)
            </a>
            <a href="#" className="hover:underline">
              미니게임
            </a>
            <a href="#" className="hover:underline">
              벳365
            </a>
            <a href="#" className="hover:underline">
              토큰게임
            </a>
            <a href="#" className="hover:underline">
              카지노
            </a>
            <a href="#" className="hover:underline">
              슬롯
            </a>
            <a href="#" className="hover:underline">
              레볼루션(홀덤)
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <section className="w-1/5 p-1 rounded-lg shadow-lg space-y-4 h-screen overflow-auto">
          {/* Grid buttons */}
          <div>
            {/* Top Buttons */}
            <div className="custom-bg grid grid-cols-4 gap-0 rounded-t-lg">
              <div className="border-r border-white">
                <button className="w-full py-2 rounded-tl-lg text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                  충전
                </button>
              </div>
              <div className="border-r border-white">
                <button className="w-full py-2 text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                  한전
                </button>
              </div>
              <div className="border-r border-white">
                <button className="w-full py-2 text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                  고객센터
                </button>
              </div>
              <div>
                <button className="w-full py-2 rounded-tr-lg text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                  쪽지함
                </button>
              </div>
            </div>

            {/* Menu items */}
            <div className="addMenu-wrap grid grid-cols-3 grid-rows-[repeat(6,_1fr)] gap-0 bg-custom-gradient rounded-custom overflow-hidden mb-1.5">
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                스포츠(해외형)
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                스포츠(국내형)
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                스포츠(스페셜)
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                스포츠(실시간)
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                미니게임
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                토큰게임
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                카지노
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                슬롯
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                레볼루션(홀덤)
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                BET365
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                공지사항
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                이벤트
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                출석부
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                쿠폰
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                배팅내역
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                포인트전환
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
                지인현황
              </button>
              <button className="py-2 text-white text-xs-custom rounded hover:bg-orange-400 focus:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-600 border">
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
          </div>


          <div className="custom-bg grid grid-cols-3 gap-0 rounded-t-lg bg-custom-gradient">
    <div className="border-r border-white">
      <button className="w-full py-2 text-center text-white bg-pink-600 hover:bg-pink-700 focus:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
        스포츠
      </button>
    </div>
    <div className="border-r border-white">
      <button className="w-full py-2 text-center text-white bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
        실시간
      </button>
    </div>
    <div>
      <button className="w-full py-2 text-center text-white bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400">
        미니게임
      </button>
    </div>
  </div>

  {/* Sports List */}
  <div className="bg-white p-2 rounded-lg shadow">
    <ul>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-futbol mr-2"></i> 축구
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">155</span>
      </li>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-baseball-ball mr-2"></i> 야구
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">24</span>
      </li>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-basketball-ball mr-2"></i> 농구
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">15</span>
      </li>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-volleyball-ball mr-2"></i> 배구
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">10</span>
      </li>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-table-tennis mr-2"></i> 테니스
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">90</span>
      </li>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-hockey-puck mr-2"></i> 아이스하키
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">3</span>
      </li>
      <li className="flex justify-between items-center p-2 border-b">
        <span className="flex items-center">
          <i className="fas fa-gamepad mr-2"></i> 이스포츠
        </span>
        <span className="bg-red-600 text-white px-2 py-1 rounded-lg">2</span>
      </li>
    </ul>
  </div>

  {/* 인기리그 Section */}
  <div className="bg-white p-2 mt-4 rounded-lg shadow">
    <h3 className="text-red-600 font-semibold border-b mb-2 pb-1">🔥 인기리그</h3>
    <ul>
      <li className="flex items-center p-2 border-b">
        <i className="fas fa-baseball-ball mr-2"></i> 미국 MLB 야구
      </li>
      <li className="flex items-center p-2 border-b">
        <i className="fas fa-baseball-ball mr-2"></i> 대한민국 KBO 야구
      </li>
      <li className="flex items-center p-2">
        <i className="fas fa-baseball-ball mr-2"></i> 일본 NPB 야구
      </li>
    </ul>
  </div>
        </section>

        {/* Middle Section */}
        <section className="w-3/5 bg-white rounded-lg shadow h-screen overflow-y-auto space-y-4 flex flex-col">
          {/* Banner */}
          <div className="relative w-auto h-auto">
            <img
              className="w-full h-auto object-cover transition-opacity duration-1000"
              src={banners[currentBanner]}
              alt="Banner"
            />
          </div>

          {/* New Sections Below the Banner */}
          <div>
            {/* Top Row with Two Informational Divs */}
            <div className="flex space-x-4 mb-2">
              {/* Left Information Div */}
              <div className="w-1/2 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex justify-between bg-gray-300 p-4 rounded-t-lg">
                  <h2 className="text-lg font-bold">공지사항</h2>
                  <span className="text-sm text-orange-500 font-semibold cursor-pointer">
                    + MORE
                  </span>
                </div>
                <div className="p-4">
                  <ul className="text-red-500">
                    <li>악질 신고 유저 강력 대응</li>
                    <li>레볼루션 홀덤 규정</li>
                    <li>레볼루션 홀덤 가이드</li>
                    <li>레벨별 등급혜택</li>
                    <li>미니게임 규정안내</li>
                  </ul>
                </div>
              </div>

              {/* Right Information Div */}
              <div className="w-1/2 bg-gray-100 rounded-lg shadow-lg">
                <div className="flex justify-between bg-gray-300 p-4 rounded-t-lg">
                  <h2 className="text-lg font-bold">이벤트</h2>
                  <span className="text-sm text-orange-500 font-semibold cursor-pointer">
                    + MORE
                  </span>
                </div>
                <div className="p-4">
                  <ul className="text-red-500">
                    <li>레볼루션 토너먼트대회</li>
                    <li>레볼루션 홀덤 더블이벤트</li>
                    <li>무한 입금 플러스 이벤트</li>
                    <li>신규회원 이벤트</li>
                    <li>개인정산 이벤트</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Row with Four Items */}
            <div className="grid grid-cols-5 gap-5">
              <div className="image-container">
                <img
                  src="/banner/bner-mid-sma.jpg"
                  alt="Item 1"
                  className="w-full h-auto rounded-lg"
                />
                <div className="play-overlay">
                  <i className="fa fa-play"></i>
                </div>
              </div>

              <div>
                <img
                  src="/banner/bner-mid-sma2.jpg"
                  alt="Item 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div>
                <img
                  src="/banner/bner-mid-sma3.jpg"
                  alt="Item 3"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div>
                <img
                  src="/banner/bner-mid-sma4.jpg"
                  alt="Item 4"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                {/* Add content or image */}
                <img
                  src="/banner/bner-mid-sma5.jpg"
                  alt="Item 4"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/banner/bner-mid-sma5.jpg"
                  alt="Item 4"
                  className="w-full h-auto rounded-lg"
                />
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
