"use client";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = ["/banner/intro-main2_1.jpg", "/banner/intro-main2_2.jpg"];
  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isRegisterPopupVisible, setRegisterPopupVisible] = useState(false);
  const handleAlert = () => {
    alert("아이디를 입력하세요");
  };
  const toggleLoginPopup = () => {
    setLoginPopupVisible(!isLoginPopupVisible);
  };

  const toggleRegisterPopup = () => {
    setRegisterPopupVisible(!isRegisterPopupVisible);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center h-auto p-4 w-full lg:w-auto">
              <img
                className="h-8 w-auto md:h-10 lg:h-12 mx-auto"
                src="/logo/logo.png"
                alt="MixMix"
              />
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

      {/* Navigation Bar */}
      <div
        className="bg-gray-200 shadow-inner font-custom  "
        style={{ fontWeight: 700 }}
      >
    {/* Buttons for small screens */}
    <div className="block lg:hidden mb-4 flex flex-row w-full">
    <button
      className="flex-1 flex items-center justify-center border border-[#eb8691] bg-[#c94c5a] rounded-sm mx-1 py-3 cursor-pointer  text-base text-white font-[aTitleGothic, 'Malgun Gothic', sans-serif]"
      onClick={toggleLoginPopup}
    >
      로그인
    </button>
    <button
      className="flex-1 flex items-center justify-center border border-[#eb8691] bg-[#c94c5a] rounded-sm mx-1 py-3 cursor-pointer  text-base text-white font-[aTitleGothic, 'Malgun Gothic', sans-serif]"
      onClick={toggleRegisterPopup}
    >
      회원가입
    </button>
  </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:block hidden">
          <nav className="flex justify-center space-x-4 h-12 items-center text-gray-700 ">
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
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar */}
        <section className="lg:w-1/5 w-full p-1 rounded-lg shadow-lg space-y-4 h-screen overflow-auto lg:block hidden">
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
                <a href="">
                  <img
                    src="/banner/bner_sma1.jpg"
                    alt="Casino"
                    className="w-full h-auto rounded-lg"
                  />
                </a>
                <a href="">
                  <img
                    src="/banner/bner_sma2.jpg"
                    alt="Slot"
                    className="w-full h-auto rounded-lg"
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src="/banner/bner_lar.jpg"
                    alt="Revolution Holdem"
                    className="w-full h-auto rounded-lg"
                  />
                </a>
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
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  155
                </span>
              </li>
              <li className="flex justify-between items-center p-2 border-b">
                <span className="flex items-center">
                  <i className="fas fa-baseball-ball mr-2"></i> 야구
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  24
                </span>
              </li>
              <li className="flex justify-between items-center p-2 border-b">
                <span className="flex items-center">
                  <i className="fas fa-basketball-ball mr-2"></i> 농구
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  15
                </span>
              </li>
              <li className="flex justify-between items-center p-2 border-b">
                <span className="flex items-center">
                  <i className="fas fa-volleyball-ball mr-2"></i> 배구
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  10
                </span>
              </li>
              <li className="flex justify-between items-center p-2 border-b">
                <span className="flex items-center">
                  <i className="fas fa-table-tennis mr-2"></i> 테니스
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  90
                </span>
              </li>
              <li className="flex justify-between items-center p-2 border-b">
                <span className="flex items-center">
                  <i className="fas fa-hockey-puck mr-2"></i> 아이스하키
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  3
                </span>
              </li>
              <li className="flex justify-between items-center p-2 border-b">
                <span className="flex items-center">
                  <i className="fas fa-gamepad mr-2"></i> 이스포츠
                </span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-lg">
                  2
                </span>
              </li>
            </ul>
          </div>

          {/* 인기리그 Section */}
          <div className="bg-white p-2 mt-4 rounded-lg shadow">
            <h3 className="text-red-600 font-semibold border-b mb-2 pb-1">
              🔥 인기리그
            </h3>
            <ul>
              <li className="flex items-center p-2 border-b">
                <i className="fas fa-baseball-ball mr-2"></i> 미국 MLB 야구
              </li>
              {/* <li className="flex items-center p-2 border-b">
                <i className="fas fa-baseball-ball mr-2"></i> 대한민국 KBO 야구
              </li>
              <li className="flex items-center p-2">
                <i className="fas fa-baseball-ball mr-2"></i> 일본 NPB 야구
              </li> */}
            </ul>
          </div>
        </section>

        {/* Middle Section */}
        <section className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto space-y-4 flex flex-col">
          {/* Banner */}
          <a href="#" className="relative w-auto h-auto block">
            <img
              className="w-full h-auto object-cover transition-opacity duration-1000"
              src={banners[currentBanner]}
              alt="Banner"
            />
          </a>

          {/* New Sections Below the Banner */}
          <div className="space-y-4">
            {/* Top Row with Two Informational Divs */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-2">
              {/* Left Information Div */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-lg block hover:bg-gray-200 focus:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:-translate-y-1"
              >
                <div className="flex justify-between bg-gray-300 p-4 rounded-t-lg">
                  <h2 className="text-lg font-bold">공지사항</h2>
                  <span className="text-sm text-orange-500 font-semibold cursor-pointer">
                    + MORE
                  </span>
                </div>
                <div className="p-4">
                  <ul className="text-red-500">
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      악질 신고 유저 강력 대응
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      레볼루션 홀덤 규정
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      레볼루션 홀덤 가이드
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      레벨별 등급혜택
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      미니게임 규정안내
                    </li>
                  </ul>
                </div>
              </a>

              {/* Right Information Div */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-1/2 bg-gray-100 rounded-lg shadow-lg block hover:bg-gray-200 focus:bg-gray-200 transition duration-300 ease-in-out transform hover:-translate-y-1 focus:-translate-y-1"
              >
                <div className="flex justify-between bg-gray-300 p-4 rounded-t-lg">
                  <h2 className="text-lg font-bold">이벤트</h2>
                  <span className="text-sm text-orange-500 font-semibold cursor-pointer">
                    + MORE
                  </span>
                </div>
                <div className="p-4">
                  <ul className="text-red-500">
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      레볼루션 토너먼트대회
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      레볼루션 홀덤 더블이벤트
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      무한 입금 플러스 이벤트
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      신규회원 이벤트
                    </li>
                    <li className="py-2 px-4 rounded-md hover:bg-red-100 focus:outline-none focus:bg-red-200 transition duration-300 ease-in-out">
                      개인정산 이벤트
                    </li>
                  </ul>
                </div>
              </a>
            </div>

            {/* Bottom Row with Four Items */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <a href="#" className="block">
                <img
                  src="/banner/bner-mid-sma.jpg"
                  alt="Item 1"
                  className="w-full h-auto rounded-lg"
                />
                <div className="play-overlay">
                  <i className="fa fa-play"></i>
                </div>
              </a>

              <a href="#" className="block">
                <img
                  src="/banner/bner-mid-sma2.jpg"
                  alt="Item 2"
                  className="w-full h-auto rounded-lg"
                />
              </a>

              <a href="#" className="block">
                <img
                  src="/banner/bner-mid-sma3.jpg"
                  alt="Item 3"
                  className="w-full h-auto rounded-lg"
                />
              </a>

              <a href="#" className="block">
                <img
                  src="/banner/bner-mid-sma4.jpg"
                  alt="Item 4"
                  className="w-full h-auto rounded-lg"
                />
              </a>

              <a href="#" className="block">
                <img
                  src="/banner/bner-mid-sma5.jpg"
                  alt="Item 5"
                  className="w-full h-auto rounded-lg"
                />
              </a>

              <a href="#" className="block">
                <img
                  src="/banner/bner-mid-sma5.jpg"
                  alt="Item 6"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <section className="lg:w-1/5 w-full bg-white p-4 rounded-lg shadow h-screen overflow-auto space-y-4 flex flex-col lg:block hidden">
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
              <button
                className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                onClick={handleAlert}
              >
                로그인
              </button>
              <button
                className="flex-1 bg-gray-300 py-2 rounded-lg"
                onClick={toggleRegisterPopup}
              >
                회원가입
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-4 flex-1 cursor-pointer overflow-y-auto">
            {/* Card 1 */}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
              <a href="https://xn--ig3ba432cba.com/" target="_blank">
                <img
                  src="/banner/bner-right-1.gif"
                  alt="Lifetime Domain Guide"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
            {/* Card 2 */}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
              <a
                href="https://www.kakaocorp.com/page/service/service/KakaoTalk"
                target="_blank"
              >
                <img
                  src="/banner/bner-right-2.gif"
                  alt="Kakao Customer Center"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
            {/* Card 3 */}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
              <a href="https://t.me/mixmix365" target="_blank">
                <img
                  src="/banner/bner-right-3.gif"
                  alt="Telegram Customer Center"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
            {/* Card 4 */}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
              <a href="https://t.me/mixmix_Channel" target="_blank">
                <img
                  src="/banner/bner-right-4.gif"
                  alt="Telegram Notice Room"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
            {/* Card 5 */}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
              <a
                href="https://bigwin.livenst.com/mixmix/livescore/livescore/"
                target="_blank"
              >
                <img
                  src="/banner/bner-right-5.gif"
                  alt="Telegram Notice Room"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
            {/* Card 6 */}
            <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
              <a href="https://www.rotowire.com/" target="_blank">
                <img
                  src="/banner/bner-right-6.gif"
                  alt="Telegram Notice Room"
                  className="w-full h-auto rounded-lg"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Login Popup */}
        {isLoginPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 relative animate-fadeIn">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={toggleLoginPopup}
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
        )}

        {/* Register Popup */}
        {isRegisterPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative animate-fadeIn">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                onClick={toggleRegisterPopup}
              >
                <i className="fas fa-times text-xl">X</i>
              </button>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                  회원가입
                </h2>
              </div>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  {/* Left Column */}
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        아이디
                      </label>
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
                      <label className="block text-gray-700 font-medium mb-2">
                        닉네임
                      </label>
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
                      <label className="block text-gray-700 font-medium mb-2">
                        비밀번호
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="타사이트와 같은 암호를 사용하지 말아주세요"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        비밀번호 확인
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="다시 한번 비밀번호를 입력해주세요"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        휴대폰번호
                      </label>
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
                      <label className="block text-gray-700 font-medium mb-2">
                        인증번호
                      </label>
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
                      <label className="block text-gray-700 font-medium mb-2">
                        은행명
                      </label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                        <option value="">은행선택</option>
                        {/* Thêm các tùy chọn ngân hàng khác */}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        계좌번호
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="-를 제외하고 숫자만 입력하세요"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        예금주
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="계좌 예금주를 입력해주세요."
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        가입코드
                      </label>
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
        )}
      </div>
    </div>
  );
}
