"use client";

import { SetStateAction, useState } from "react";
import { _IMAGE_URL } from "@/constants/global";

const QnaView = () => {
  const [activeTab, setActiveTab] = useState("공지사항");
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // State for selected image to display in full size
  const img_event = _IMAGE_URL.img_event;

  // Function to handle image click and show full image
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  // Function to close the full-size image view
  const closeModal = () => {
    setSelectedImage(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "공지사항":
        return (
          <table className="w-full table-auto mb-4">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-2">번호</th>
                <th className="px-4 py-2">제목</th>
                <th className="px-4 py-2">작성자</th>
                <th className="px-4 py-2">작성일</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-red-500">
                <td className="text-center">공지</td>
                <td className="text-left pl-4">🔔 약질 신고 유지 강력 대응</td>
                <td className="text-center">관리자</td>
                <td className="text-center">2024-04-20</td>
              </tr>
              <tr>
                <td className="text-center">공지</td>
                <td className="text-left pl-4">🔔 레볼루션 홀덤 규정</td>
                <td className="text-center">관리자</td>
                <td className="text-center">2024-04-04</td>
              </tr>
              <tr>
                <td className="text-center">공지</td>
                <td className="text-left pl-4">🔔 레볼루션 홀덤 가이드</td>
                <td className="text-center">관리자</td>
                <td className="text-center">2024-02-04</td>
              </tr>
              <tr>
                <td className="text-center">공지</td>
                <td className="text-left pl-4">🔔 레벨별 등급혜택</td>
                <td className="text-center">관리자</td>
                <td className="text-center">2024-02-04</td>
              </tr>
            </tbody>
          </table>
        );
      case "이벤트":
        return (
          <div className="grid grid-cols-3 gap-4">
            {img_event.map((image, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow rounded text-center"
              >
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="mx-auto mb-2 cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
                <h3 className="text-lg font-bold">이벤트 제목 {index + 1}</h3>
                <p className="text-sm text-gray-600">이벤트 설명 {index + 1}</p>
              </div>
            ))}
          </div>
        );
      case "고객센터":
        return (
          <div className="bg-white p-4 shadow rounded">
            <table className="w-full table-auto mb-4 border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">제목</th>
                  <th className="border border-gray-300 px-4 py-2">상태</th>
                  <th className="border border-gray-300 px-4 py-2">작성일</th>
                  <th className="border border-gray-300 px-4 py-2">삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    충전 계좌요청
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    답변완료
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    2024-09-01 21:11:40
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                      삭제
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2">
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  텔레그램문의
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  입금계좌문의
                </button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                  작성하기
                </button>
              </div>
              <div className="text-gray-700">
                <button className="px-4 py-2 bg-orange-500 text-white rounded">
                  문의내역 전체삭제
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="bg-gray-400 text-white px-4 py-2 rounded">
                1
              </button>
            </div>
          </div>
        );
      case "쪽지":
        return (
          <div className="bg-white p-4 shadow rounded">
            <table className="w-full table-auto mb-4 border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">번호</th>
                  <th className="border border-gray-300 px-4 py-2">제목</th>
                  <th className="border border-gray-300 px-4 py-2">상태</th>
                  <th className="border border-gray-300 px-4 py-2">작성일</th>
                  <th className="border border-gray-300 px-4 py-2">삭제</th>
                </tr>
              </thead>
              <tbody>
                {/* Empty row as per the provided image */}
                <tr>
                  <td
                    className="border border-gray-300 px-4 py-2 text-center"
                    colSpan={5}
                  >
                    No messages
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center mt-4">
              <button className="bg-gray-400 text-white px-4 py-2 rounded">
                1
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-4">
              <button className="px-4 py-2 bg-orange-500 text-white rounded">
                쪽지내역 전체삭제
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded">
                쪽지내역 전체확인
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
      {/* Tabs */}
      <div className="flex bg-[#76363d] text-white text-lg">
        <button
          className={`w-1/4 p-4 ${
            activeTab === "공지사항" ? "bg-[#ffffff30]" : ""
          }`}
          onClick={() => setActiveTab("공지사항")}
        >
          공지사항
        </button>
        <button
          className={`w-1/4 p-4 ${
            activeTab === "이벤트" ? "bg-[#ffffff30]" : ""
          }`}
          onClick={() => setActiveTab("이벤트")}
        >
          이벤트
        </button>
        <button
          className={`w-1/4 p-4 ${
            activeTab === "고객센터" ? "bg-[#ffffff30]" : ""
          }`}
          onClick={() => setActiveTab("고객센터")}
        >
          고객센터
        </button>
        <button
          className={`w-1/4 p-4 ${
            activeTab === "쪽지" ? "bg-[#ffffff30]" : ""
          }`}
          onClick={() => setActiveTab("쪽지")}
        >
          쪽지
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex-grow">{renderContent()}</div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Full Size Event"
            className="max-w-full max-h-full"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

QnaView.displayName = "QnaView";
export default QnaView;
