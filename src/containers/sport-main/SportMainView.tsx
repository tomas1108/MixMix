"use client";
const SportMainView = () => {
  return (
    <section
      className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
      {/* Sticky Header for Sport Categories */}
      <div className="sport-category-wrap flex justify-center items-center sticky top-0 z-10 shadow-md bg-[#f4f5eb] w-full">
        <div className="sport-category flex justify-between w-full p-2 overflow-x-auto">
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

      {/* Phần Thông Tin Tỷ Lệ Cược */}
      <div className="odds-info bg-[#f9f9f9] p-4 border-b">
        <div className="grid grid-cols-3 gap-4">
          <div className="focus:ring-2 focus:ring-[#4458ad] hover:bg-[#e0e7ff] transition duration-300 p-2 bg-white rounded shadow-sm">
            <span className="bonus-item text-[#4458ad]">
              ★ 3폴더이상 보너스
            </span>
            <span className="bonus-value text-[#4458ad] block mt-2">1.03</span>
          </div>
          <div className="focus:ring-2 focus:ring-[#d1367c] hover:bg-[#ffe0f0] transition duration-300 p-2 bg-white rounded shadow-sm">
            <span className="bonus-item text-[#d1367c]">
              ★ 5폴더이상 보너스
            </span>
            <span className="bonus-value text-[#d1367c] block mt-2">1.05</span>
          </div>
          <div className="focus:ring-2 focus:ring-[#8c52e5] hover:bg-[#ede0ff] transition duration-300 p-2 bg-white rounded shadow-sm">
            <span className="bonus-item text-[#8c52e5]">
              ★ 7폴더이상 보너스
            </span>
            <span className="bonus-value text-[#8c52e5] block mt-2">1.07</span>
          </div>
        </div>
      </div>

      {/* Phần Danh Sách Trận Đấu */}

      <div className="game-list p-4">
      <div className="game-item border bg-[#ebebeb] p-2 rounded shadow-sm">
          <div className="flex justify-between items-center bg-[#cfcfcf] p-2 rounded">
            <div className="flex items-center">
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm text-[#333]">필리핀 MPBL</span>
            </div>
            <span className="text-xs text-gray-500">09월03일(화) 17:00</span>
          </div>
        
          <div className="game-details flex justify-between items-center mt-2 bg-white p-2 rounded">
            
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
              <button className="text-sm text-[#333] focus:outline-none">
                팜팡가 자이언트 랜턴
              </button>
              <span className="ml-20     text-sm text-green-600">1.77</span>
            </div>
            <span className="text-sm text-gray-500">-39.5</span>
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
            <span className="mr-10 text-sm text-red-600">1.84</span>
              <button className="text-sm text-[#333] focus:outline-none">
                Bacolod Masters
              </button>
            
            </div>
          </div>
          <div className="flex justify-end mt-2">
          <button className="px-2 py-1 bg-gray-400 text-xs rounded text-white">
              + 펼치기
            </button>
          </div>
        </div>

        <div className="game-item border bg-[#ebebeb] p-2 rounded shadow-sm">
          <div className="flex justify-between items-center bg-[#cfcfcf] p-2 rounded">
            <div className="flex items-center">
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm text-[#333]">필리핀 MPBL</span>
            </div>
            <span className="text-xs text-gray-500">09월03일(화) 17:00</span>
          </div>
        
          <div className="game-details flex justify-between items-center mt-2 bg-white p-2 rounded">
            
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
              <button className="text-sm text-[#333] focus:outline-none">
                팜팡가 자이언트 랜턴
              </button>
              <span className="ml-20     text-sm text-green-600">1.77</span>
            </div>
            <span className="text-sm text-gray-500">-39.5</span>
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
            <span className="mr-10 text-sm text-red-600">1.84</span>
              <button className="text-sm text-[#333] focus:outline-none">
                Bacolod Masters
              </button>
            
            </div>
          </div>
          <div className="flex justify-end mt-2">
          <button className="px-2 py-1 bg-gray-400 text-xs rounded text-white">
              + 펼치기
            </button>
          </div>
        </div>
        <div className="game-item border bg-[#ebebeb] p-2 rounded shadow-sm">
          <div className="flex justify-between items-center bg-[#cfcfcf] p-2 rounded">
            <div className="flex items-center">
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm text-[#333]">필리핀 MPBL</span>
            </div>
            <span className="text-xs text-gray-500">09월03일(화) 17:00</span>
          </div>
        
          <div className="game-details flex justify-between items-center mt-2 bg-white p-2 rounded">
            
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
              <button className="text-sm text-[#333] focus:outline-none">
                팜팡가 자이언트 랜턴
              </button>
              <span className="ml-20     text-sm text-green-600">1.77</span>
            </div>
            <span className="text-sm text-gray-500">-39.5</span>
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
            <span className="mr-10 text-sm text-red-600">1.84</span>
              <button className="text-sm text-[#333] focus:outline-none">
                Bacolod Masters
              </button>
            
            </div>
          </div>
          <div className="flex justify-end mt-2">
          <button className="px-2 py-1 bg-gray-400 text-xs rounded text-white">
              + 펼치기
            </button>
          </div>
        </div>
        <div className="game-item border bg-[#ebebeb] p-2 rounded shadow-sm">
          <div className="flex justify-between items-center bg-[#cfcfcf] p-2 rounded">
            <div className="flex items-center">
              <img
                src="path/to/basketball-icon.png"
                alt="Basketball"
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm text-[#333]">필리핀 MPBL</span>
            </div>
            <span className="text-xs text-gray-500">09월03일(화) 17:00</span>
          </div>
        
          <div className="game-details flex justify-between items-center mt-2 bg-white p-2 rounded">
            
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
              <button className="text-sm text-[#333] focus:outline-none">
                팜팡가 자이언트 랜턴
              </button>
              <span className="ml-20     text-sm text-green-600">1.77</span>
            </div>
            <span className="text-sm text-gray-500">-39.5</span>
            <div className="team-odds flex items-center p-2 rounded hover:bg-gray-100 focus:bg-gray-200 transition duration-300 cursor-pointer">
            <span className="mr-10 text-sm text-red-600">1.84</span>
              <button className="text-sm text-[#333] focus:outline-none">
                Bacolod Masters 
              </button>
            
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button className="px-2 py-1 bg-gray-400 text-xs rounded text-white">
              + 펼치기
            </button>
          </div>
        </div>
     </div>
      
    </section>
  );
};

SportMainView.displayName = "SportMainView";
export default SportMainView;
