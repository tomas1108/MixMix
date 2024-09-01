'use client';
const MyPointView = () => {

  return (
    <section
      className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
      {/* Main Container */}
      <div>
        {/* Header Section */}
        <div className="bg-[#76363d] text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">포인트</span>
          </div>
        </div>

        {/* Current Points Section */}
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <span className="text-lg">현재포인트 : 0</span>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-full"
          onClick={() => alert('전환이 불가능합니다.')}>
            
          포인트전환</button>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-4">
        <table className="w-full table-auto mb-4">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="px-4 py-2">등록일자</th>
              <th className="px-4 py-2">타입</th>
              <th className="px-4 py-2">증감</th>
              <th className="px-4 py-2">분류</th>
              <th className="px-4 py-2">포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={5}
                className="bg-gray-600 text-white text-center py-4 rounded-full"
              >
                1
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

MyPointView.displayName = "MyPointView";
export default MyPointView;
