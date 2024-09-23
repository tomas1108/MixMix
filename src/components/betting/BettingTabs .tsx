import React, { useState } from 'react';

const BettingTabs = () => {
  const [activeTab, setActiveTab] = useState('main');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'main':
        return (
          <div className="space-y-4">
            {/* Main Market Content */}
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="text-sm font-semibold mb-2">핸디캡 (연장포함)</div>
              <div className="flex justify-between items-center">
                <span>팜팡가 자이언트 랜턴</span>
                <span className="text-red-500 font-bold">1.77</span>
                <span className="text-gray-600">-39.5</span>
                <span className="text-red-500 font-bold">1.84</span>
                <span>Bacolod Masters</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="text-sm font-semibold mb-2">오버언더 (연장포함)</div>
              <div className="flex justify-between items-center">
                <span>오버</span>
                <span className="text-red-500 font-bold">1.63</span>
                <span className="text-gray-600">168.5</span>
                <span className="text-blue-500 font-bold">2.06</span>
                <span>언더</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <div className="text-sm font-semibold mb-2">스코어 홀/짝 (연장포함)</div>
              <div className="flex justify-between items-center">
                <span>홀수</span>
                <span className="text-red-500 font-bold">1.82</span>
                <span>vs</span>
                <span className="text-red-500 font-bold">1.82</span>
                <span>짝수</span>
              </div>
            </div>
          </div>
        );
      case 'quarter':
        return <div className="p-4">쿼터별 탭의 내용이 여기에 표시됩니다.</div>;
      case 'extra':
        return <div className="p-4">추가베팅옵션 탭의 내용이 여기에 표시됩니다.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg">
      {/* Banner or Video Section */}
      <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
        <img
          src="path/to/banner-or-video-thumbnail.jpg"
          alt="Banner or Video"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white text-lg font-bold">필리핀 - MPBL</div>
          <div className="text-white text-md">팜팡가 자이언트 랜턴 vs Bacolod Masters</div>
          <div className="text-white text-sm">09월03일(화) 17:00</div>
        </div>
      </div>

      {/* Tabs Header */}
      <div className="flex border-b border-gray-300">
        <button
          className={`flex-1 p-4 text-center text-sm font-semibold ${
            activeTab === 'main' ? 'bg-white border-b-2 border-orange-500 text-black' : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setActiveTab('main')}
        >
          메인마켓
        </button>
        <button
          className={`flex-1 p-4 text-center text-sm font-semibold ${
            activeTab === 'quarter' ? 'bg-white border-b-2 border-orange-500 text-black' : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setActiveTab('quarter')}
        >
          쿼터별
        </button>
        <button
          className={`flex-1 p-4 text-center text-sm font-semibold ${
            activeTab === 'extra' ? 'bg-white border-b-2 border-orange-500 text-black' : 'bg-gray-100 text-gray-600'
          }`}
          onClick={() => setActiveTab('extra')}
        >
          추가베팅옵션
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4">{renderTabContent()}</div>
    </div>
  );
};

export default BettingTabs;
