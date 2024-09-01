"use client";
import { SetStateAction, useState } from "react";

const WithdrawView = () => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (value: number) => {
    setAmount((prevAmount) => prevAmount + value);
  };

  const resetAmount = () => {
    setAmount(0);
  };

  return (
    <section
      className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
      {/* Main Container */}
      <div>
        {/* Top Section */}
        <div className="border-b-2 pb-4">
          <div className="flex items-center px-2 py-2 text-lg bg-[#76363d] rounded text-white font-medium mb-2">
            <span className="font-semibold text-md">환전</span>
          </div>

          <div className="flex items-center bg-[#ddd] text-black text-base font-medium py-[6px] pl-3 pr-0 rounded-t mb-5">
            <span>환전요청</span>
          </div>

          <div className="border-b-2 pb-4">
            <div className="grid grid-cols-3 gap-4 items-center mb-2">
              <span
                className="col-span-1 font-semibold text-md"
                style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
              >
                보유 머니
              </span>
              <span className="col-span-2 text-left font-bold text-red-600">
                ₩ 0원
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <span
              className="col-span-1 font-semibold text-md"
              style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
            >
              요청금액
            </span>
            <p className="col-span-2 text-xs text-gray-600">
              전하실 금액을 입력란에 기입하시고 하단의 [환전요청] 버튼을
              누르시면 됩니다. 환전은 만원단위로 가능합니다.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span className="col-span-1"></span>
            <div className="col-span-2">
              <input
                type="text"
                value={amount}
                readOnly
                className="w-full text-center border border-gray-300 rounded p-2 text-red-500 font-bold text-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2 ml-10 mt-2">
            {[
              "10000",
              "50000",
              "100000",
              "500000",
              "1000000",
              "5000000",
              "10000000",
            ].map((value) => (
              <button
                key={value}
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange(Number(value))}
              >
                {`${Number(value) / 10000}만원`}
              </button>
            ))}
            <button
              className="bg-gray-200 text-gray-700 rounded px-4 py-2"
              onClick={() => resetAmount()}
            >
              초기화
            </button>
          </div>
        </div>

        {/* Member Info */}
        <div className="mb-8">
          <div className="grid grid-cols-3 gap-4 items-center mb-8">
            <span
              className="col-span-1 font-semibold text-md"
              style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
            >
              회원정보
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <span
              className="col-span-1 font-semibold text-md"
              style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
            >
              이름
            </span>
            <span className="col-span-2">신*복</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <span
              className="col-span-1 font-semibold text-md"
              style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
            >
              환전계좌
            </span>
            <span className="col-span-2">3130****05315</span>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <span
              className="col-span-1 font-semibold text-md"
              style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
            >
              은행명
            </span>
            <span className="col-span-2">우체국</span>
          </div>
        </div>

        {/* 입금자 Section */}
        <div className="mb-4">
          {/* Label and Input */}
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span
              className="col-span-1 font-semibold text-md"
              style={{ color: "rgb(125, 125, 125)", fontWeight: "700" }}
            >
              충환전 비밀번호
            </span>
            <input
              type="text"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              className="col-span-2 w-full text-center border border-gray-300 rounded p-2 text-black text-lg"
            />
          </div>

          {/* Information Infor */}
          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <p className="col-span-2 text-sm text-red-500">
              <span style={{ fontSize: "14px" }}>
                ⓘ 가입시 설정한 충환전 비밀번호를 입력하세요.
              </span>
            </p>
          </div>
        </div>

        <div className="border-b-2 pb-4" />

        {/* 충전요청 Button */}
        <div className="text-center mt-10">
          <button className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full">
            충전요청
          </button>
        </div>
      </div>

 { /* 1nd Rule Section */}
      <div className="border-b-2 pb-10" />

      <div className="flex items-center bg-[#ddd] text-black text-base font-medium py-[6px] pl-3 pr-0 rounded-t ">
        <span>환전방법</span>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 items-center mb-2">
          <span className="col-span-1 font-semibold text-md">환전안내</span>
          <p
            className="col-span-2 text-sm text-gray-600"
            style={{ fontSize: "14px", color: "red" }}
          >
           
① 24시간 자유롭게 환전이 가능하며 최장 3~5분 정도 소요됩니다.
          </p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [단, 환전 업무가 집중적으로 발생할시 지연될 수 있습니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
              ② 환전 신청이 지연되는 경우 회원님의 임금계좌 정보가 잘못 기입된 경우가 많습니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [고객센터에 문의하시면 빠르게 처리해드리도록 하겠습니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
              ③ 환전계좌 변경은 고객센터에 문의해주시면 본인 확인 절차를 거쳐 변경 가능합니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [보유금액과 포인트가 남아있는 경우에는 환전계좌 변경이 불가합니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
              ④ 환전금액은 10,000원 단위로 환전 가능합니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [최소 10,000원 이상부터 10,000원 단위로만 환전가능합니다.]
              </span>
            </label>
          </div>
        </div>
      </div>


      <div className="border-b-2 pb-10" />

      { /* 2nd Rule Section */}

      <div>
        <div className="grid grid-cols-3 gap-4 items-center mb-2">
          <span className="col-span-1 font-semibold text-md">환전시 참고사항</span>
          <p
            className="col-span-2 text-sm text-gray-600"
            style={{ fontSize: "14px", color: "red" }}
          >
           

           ① 환전 신청시 베팅내역을 검토한 후 환전처리가 진행됩니다.
          </p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [베팅에 이상이 있을 경우에는 환전취소가 될 수 있으니 참고 부탁드립니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
              ② 롤링조건에 충족 되지 않을 경우 환전취소 처리가 됩니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [고객센터로 문의주시면 빠르고 친절하게 답변 도와드리겠습니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
              ③ 주요경기 종료직후는 환전신청이 많아 다소 시간이 걸릴 수 있습니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
              [신청하신 순서대로 진행되오니 충분한 시간적 여유를 두시고 기다려 주시면 감사하겠습니다.]
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="border-b-2 pb-10" />
      {/* Table Section */}

      <div className="p-4">
        <div className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-between">
          <span>
          환전내역
            <span className="text-red-500 text-sm ml-2">
            최근 3일 동안의 내역만 조회가능합니다
            </span>
          </span>
        </div>

        <table className="w-full table-auto mb-4">
          <thead>
            <tr className="text-gray-700 bg-gray-100">
              <th className="px-4 py-2">날짜</th>
              <th className="px-4 py-2">요청금액(원)</th>
              <th className="px-4 py-2">상태</th>
              <th className="px-4 py-2">삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={4}
                className="bg-gray-600 text-white text-center py-4 rounded-full"
              >
                1
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4M4 7h16"
              />
            </svg>
            충전내역 전체삭제
          </button>
        </div>
      </div>
    </section>
  );
};

WithdrawView.displayName = "WithdrawView";
export default WithdrawView;
