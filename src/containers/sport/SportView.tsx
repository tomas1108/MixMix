"use client";
import BettingTabs from "@/components/betting/BettingTabs ";
import { useState } from "react";

const SportView = () => {
  const [activeTab, setActiveTab] = useState("mainMarket");
  const [focusedBet, setFocusedBet] = useState(null); // State to track focused bet

  const handleFocus = (betValue: any) => {
    setFocusedBet(betValue);
  };

  return (
    <section
      className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen flex"
      style={{ height: "calc(100vh - 115px)" }}
    >
      {/* Left Column with Icons and Info */}
      <div className="left-column w-3/4 flex flex-col overflow-y-auto">
        <div className="sport-category-wrap flex justify-center items-center sticky top-0 z-10 shadow-md bg-[#f4f5eb]">
          <div className="sport-category flex justify-between mx-auto mb-1 p-2">
            <span className="sub-name category sport on flex flex-col items-center p-2">
              <img
                src="path/to/all-sports-icon.png"
                alt="All Sports"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs text-[#4458ad] truncate">ALL</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/soccer-icon.png"
                alt="Soccer"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">축구</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">농구</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/baseball-icon.png"
                alt="Baseball"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">야구</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/volleyball-icon.png"
                alt="Volleyball"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">배구</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/ice-hockey-icon.png"
                alt="Ice Hockey"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">아이스하키</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/tennis-icon.png"
                alt="Tennis"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">테니스</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/handball-icon.png"
                alt="Handball"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">핸드볼</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/american-football-icon.png"
                alt="American Football"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">미식축구</em>
            </span>
            <span className="sub-name category sport flex flex-col items-center p-2 hover:bg-gray-200">
              <img
                src="path/to/esports-icon.png"
                alt="eSports"
                className="w-8 h-8 mb-1"
              />
              <em className="text-xs truncate">e스포츠</em>
            </span>
          </div>
        </div>

        <div className=" bg-gray-100 p-4 rounded-lg">
          <p className="text-red-500 text-sm">
            ★ 다폴더 보너스 추가 배당 (3, 5, 7) 폴더 이상 조합시 지급 (1.30미만
            배당 조합불가)
          </p>
          <div className="flex justify-between mt-2">
            <button className="bg-gray-200 px-4 py-2 rounded text-blue-600 font-bold hover:bg-gray-300">
              3폴더이상 보너스1.03
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded text-pink-600 font-bold hover:bg-gray-300">
              5폴더이상 보너스1.05
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded text-purple-600 font-bold hover:bg-gray-300">
              7폴더이상 보너스1.07
            </button>
          </div>
        </div>

        {/* Betting Info Section */}

        <div className="betting-info bg-white shadow p-4 rounded-lg border border-gray-200 mb-4">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2 border-b pb-2">
            <div className="flex items-center space-x-2">
              <span
                className="w-6 h-4 bg-[#e2e2e2] mr-2"
                style={{
                  background:
                    "url('path/to/philippines-flag-icon.png') no-repeat center/contain",
                }}
              ></span>
              <span className="text-gray-600 text-sm">필리핀 MPBL</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">베팅 +5</span>
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Match Info Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-800 font-bold text-lg">
              팜팡가 자이언트 랜턴
            </div>
            <div className="text-gray-500 text-sm">VS</div>
            <div className="text-gray-800 font-bold text-lg">
              Bacolod Masters
            </div>
          </div>
          <div className="text-gray-500 text-xs mb-4">09월03일(화) 17:00</div>

          {/* Betting Options Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Handicap Bet Section */}
            <div className="flex flex-col p-2 border rounded-lg">
              <div className="text-xs text-gray-500 mb-2">
                핸디캡 (연장포함)
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">팜팡가 자이언트</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.77
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.77)}
                >
                  1.77
                </button>
                <span className="text-sm text-gray-500">-39.5</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.84
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.84)}
                >
                  1.84
                </button>
                <span className="font-bold text-gray-800">Bacolod Masters</span>
              </div>
            </div>

            {/* Over/Under Bet Section */}
            <div className="flex flex-col p-2 border rounded-lg">
              <div className="text-xs text-gray-500 mb-2">
                오버언더 (연장포함)
              </div>
              <div className="flex justify-between items-center">
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.63
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.63)}
                >
                  1.63
                </button>
                <span className="text-sm text-gray-500">168.5</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 2.06
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(2.06)}
                >
                  2.06
                </button>
                <span className="text-gray-800">언더</span>
              </div>
            </div>
          </div>
        </div>

        <div className="betting-info bg-white shadow p-4 rounded-lg border border-gray-200 mb-4">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2 border-b pb-2">
            <div className="flex items-center space-x-2">
              <span
                className="w-6 h-4 bg-[#e2e2e2] mr-2"
                style={{
                  background:
                    "url('path/to/philippines-flag-icon.png') no-repeat center/contain",
                }}
              ></span>
              <span className="text-gray-600 text-sm">필리핀 MPBL</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">베팅 +5</span>
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Match Info Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-800 font-bold text-lg">
              팜팡가 자이언트 랜턴
            </div>
            <div className="text-gray-500 text-sm">VS</div>
            <div className="text-gray-800 font-bold text-lg">
              Bacolod Masters
            </div>
          </div>
          <div className="text-gray-500 text-xs mb-4">09월03일(화) 17:00</div>

          {/* Betting Options Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Handicap Bet Section */}
            <div className="flex flex-col p-2 border rounded-lg">
              <div className="text-xs text-gray-500 mb-2">
                핸디캡 (연장포함)
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">팜팡가 자이언트</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.77
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.77)}
                >
                  1.77
                </button>
                <span className="text-sm text-gray-500">-39.5</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.84
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.84)}
                >
                  1.84
                </button>
                <span className="font-bold text-gray-800">Bacolod Masters</span>
              </div>
            </div>

            {/* Over/Under Bet Section */}
            <div className="flex flex-col p-2 border rounded-lg">
              <div className="text-xs text-gray-500 mb-2">
                오버언더 (연장포함)
              </div>
              <div className="flex justify-between items-center">
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.63
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.63)}
                >
                  1.63
                </button>
                <span className="text-sm text-gray-500">168.5</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 2.06
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(2.06)}
                >
                  2.06
                </button>
                <span className="text-gray-800">언더</span>
              </div>
            </div>
          </div>
        </div>
        <div className="betting-info bg-white shadow p-4 rounded-lg border border-gray-200 mb-4">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2 border-b pb-2">
            <div className="flex items-center space-x-2">
              <span
                className="w-6 h-4 bg-[#e2e2e2] mr-2"
                style={{
                  background:
                    "url('path/to/philippines-flag-icon.png') no-repeat center/contain",
                }}
              ></span>
              <span className="text-gray-600 text-sm">필리핀 MPBL</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">베팅 +5</span>
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Match Info Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-800 font-bold text-lg">
              팜팡가 자이언트 랜턴
            </div>
            <div className="text-gray-500 text-sm">VS</div>
            <div className="text-gray-800 font-bold text-lg">
              Bacolod Masters
            </div>
          </div>
          <div className="text-gray-500 text-xs mb-4">09월03일(화) 17:00</div>

          {/* Betting Options Section */}
          <div className="grid grid-cols-2 gap-4">
            {/* Handicap Bet Section */}
            <div className="flex flex-col p-2 border rounded-lg">
              <div className="text-xs text-gray-500 mb-2">
                핸디캡 (연장포함)
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800">팜팡가 자이언트</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.77
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.77)}
                >
                  1.77
                </button>
                <span className="text-sm text-gray-500">-39.5</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.84
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.84)}
                >
                  1.84
                </button>
                <span className="font-bold text-gray-800">Bacolod Masters</span>
              </div>
            </div>

            {/* Over/Under Bet Section */}
            <div className="flex flex-col p-2 border rounded-lg">
              <div className="text-xs text-gray-500 mb-2">
                오버언더 (연장포함)
              </div>
              <div className="flex justify-between items-center">
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 1.63
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(1.63)}
                >
                  1.63
                </button>
                <span className="text-sm text-gray-500">168.5</span>
                <button
                  className={`px-2 py-1 rounded ${
                    focusedBet === 2.06
                      ? "bg-blue-100 border border-blue-400"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  onClick={() => handleFocus(2.06)}
                >
                  2.06
                </button>
                <span className="text-gray-800">언더</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column for Additional Content */}
      <div className="right-column w-2/4 bg-gray-50 p-4 rounded-lg overflow-y-auto">
        {/* Add your right column content here */}
        <BettingTabs />
      </div>
    </section>
  );
};

SportView.displayName = "SportView";
export default SportView;
