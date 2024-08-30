"use client";
import { SetStateAction, useState } from "react";
const DepositView = () => {
  const [amount, setAmount] = useState("0");
  const handleAmountChange = (value: SetStateAction<string>) => {
    setAmount(value);
  };
  return (
    <section
      className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto space-y-4 flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
      {/* Main Container */}
      <div className="space-y-4">
        {/* Top Section */}
        <div className="border-b-2 pb-4">
          <div className="flex items-center px-2 py-2 text-lg bg-[#76363d] rounded text-white font-medium mb-2">
            <span className="font-semibold text-md">충전</span>
          </div>

          <div className="flex items-center bg-[#ddd] text-black text-base font-medium py-[6px] pl-3 pr-0 rounded-t mb-5">
            <span>충전요청</span>
          </div>

          <div className="border-b-2 pb-4">
            <div className="grid grid-cols-3 gap-4 items-center mb-2">
              <span className="col-span-1 font-semibold text-md">
                보유 머니
              </span>
              <span className="col-span-2 text-left font-bold text-red-600">
                ₩ 0원
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center mb-5">
            <span className="col-span-1 font-semibold text-md">입금계좌</span>
            <button className="col-span-2 bg-[#ce770d] text-white font-bold py-[10px] px-[16px] text-base rounded-full border-2 border-[#ce770d] cursor-pointer mt-5 w-40">
              입금계좌요청
            </button>
          </div>
        </div>

        {/* Bonus Selection Section */}
        <div>
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span className="col-span-1 font-semibold text-md">
              보너스 선택
            </span>
            <p className="col-span-2 text-sm text-gray-600">
              회원님의 베팅타입에 적합한 보너스를 선택하십시오.
            </p>
          </div>

          {/* Bonus Options */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4 items-center mb-2">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>충전보너스 미선택</span>
                <span className="text-xs text-orange-500">
                  (스포츠 롤링 100%, 미니게임 롤링 100%, 카지노 롤링 200%)
                </span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>입플 보너스</span>
                <span className="text-xs text-orange-500">
                  (스포츠 3폴더이상 조합 롤링 100% (미니게임, 카지노, 슬롯
                  이용불가))
                </span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>스포츠 / 미니게임 충전</span>
                <span className="text-xs text-orange-500">
                  (스포츠 롤링 100%, 미니게임 롤링 300%, 카지노 이용불가)
                </span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>스포츠 3폴더이상 조합</span>
                <span className="text-xs text-orange-500">
                  (스포츠 롤링 100% / 미니게임 / 카지노 이용불가)
                </span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>카지노 충전</span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>슬롯 충전</span>
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center">
              <span className="col-span-1"></span>
              <label className="col-span-2 flex items-center space-x-2">
                <input type="radio" name="bonus" className="form-radio" />
                <span>레볼루션 홀덤 충전</span>
              </label>
            </div>
          </div>
        </div>
        <div className="border-b-2 pb-10"></div>
        {/* Mid Section */}
        <div className="p-4 bg-white-100 rounded-lg space-y-4 mt-10">
          <div>
            <label className="col-span-2 flex items-center space-x-2">
              충전금액
            </label>
            <p className="text-sm text-gray-600 mb-2">
              고객센터에서 알려드린 입금계좌로 이체 후 입금액을 입력란에
              기입하시고 하단의
              <span className="text-red-500 font-bold"> [충전요청]</span> 버튼을
              누르시면 됩니다.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                value={amount}
                readOnly
                className="w-full text-center border border-gray-300 rounded p-2 text-red-500 font-bold text-lg"
              />
            </div>
            <div className="mt-2 space-x-2">
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("10000")}
              >
                1만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("50000")}
              >
                5만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("100000")}
              >
                10만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("500000")}
              >
                50만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("1000000")}
              >
                100만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("5000000")}
              >
                500만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("10000000")}
              >
                1000만원
              </button>
              <button
                className="bg-gray-200 text-gray-700 rounded px-4 py-2"
                onClick={() => handleAmountChange("0")}
              >
                초기화
              </button>
            </div>
          </div>

          {/* 입금자 Section */}
          <div>
            <label className="block font-semibold mb-1">입금자</label>
            <p className="text-sm text-gray-600 mb-2">
              <span className="text-red-500">신*복</span>
              <span className="text-red-500 font-bold">
                {" "}
                (이체시 반드시 회원님 성함으로 이체해 주시기 바랍니다.)
              </span>
            </p>
          </div>

          {/* 충전요청 Button */}
          <div className="text-center mt-4">
            <button className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full">
              충전요청
            </button>
          </div>
        </div>
      </div>

      {/* Last Section 1 */}
      <div className="border-b-2 "></div>

      <div className="flex items-center bg-[#ddd] text-black text-base font-medium py-[6px] pl-3 pr-0 rounded-t ">
        <span>충전방법</span>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 items-center mb-2">
          <span className="col-span-1 font-semibold text-md">충전안내</span>
          <p
            className="col-span-2 text-sm text-gray-600"
            style={{ fontSize: "14px", color: "red" }}
          >
            ① 입금계좌는 [입금계좌요청] 버튼을 통해 확인 하실 수 있습니다.
          </p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [입금계좌요청 버튼을 클릭하신 후 고객센터 메뉴로 들어가시면
                입금계좌를 확인하실 수 있습니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
                ② 입금하실 때에는 인터넷 뱅킹, 폰뱅킹, 무통장 입금, ATM 이체등의
                방법을 이용하여 입금이 가능합니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [입급계좌는 수시로 변경될 수 있습니다. 입금하시기 전에 다시한번
                확인을 해주시기 바랍니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
                ③ 충전하실 금액은 해당버튼을 클릭하시거나 직접 입력하실 수
                있습니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                카[충전 최소 금액은 10,000원 부터이며 입력이 잘못된 경우에는
                초기화 버튼을 클릭하여 재입력 하시면 됩니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
                ④ 충전요청 버튼을 클릭하시면 충전금액이 신청됩니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [선입금 후 충전이 지연된다면 고객센터로 문의해주시기 바랍니다.]
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Last Section 2 */}

      <div className="border-b-2 "></div>
      <div>
        <div className="grid grid-cols-3 gap-4 items-center mb-2">
          <span className="col-span-1 font-semibold text-md">
            충전시 주의사항
          </span>
          <p
            className="col-span-2 text-sm text-gray-600"
            style={{ fontSize: "14px", color: "red" }}
          >
            ① 충전신청은 반드시 선입금 후 신청해주시기 바랍니다.
          </p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 items-center mb-2">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [입금전 신청에 대해서는 전부 취소처리가 되며 신청하신 내용이
                자동 삭제(취소)됩니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
                ② 충전신청은 최소 10,000원 이상, 1,000원 단위로만 가능합니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [최소 10,000원 이상부터 1,000원 단위로 충전 가능합니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
                ③ 입금하실 때 입금자명에는 반드시 회원가입하신 입금자명과
                동일하게 기재하여야 합니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [닉네임 또는 다른 이름으로 입금이 될 경우 입금확인이 불가능하며
                충전이 불가능합니다.]
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px", color: "red" }}>
                ④ 수표 입금시 절대 충전처리가 불가능합니다.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <span className="col-span-1"></span>
            <label className="col-span-2 flex items-center space-x-2">
              <span style={{ fontSize: "14px" }}>
                [수표입금시 충전신청이 불가하며 익일 15:00까지 환불처리도
                불가합니다.]
              </span>
            </label>
          </div>
        </div>
      </div>
    
      {/* Last Section 3 */}
      <div className="border-b-2"></div>
      <div >
        <div className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-between">
          <span>
            충전내역
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
              <th className="px-4 py-2">입금자</th>
              <th className="px-4 py-2">상태</th>
              <th className="px-4 py-2">삭제</th>
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

DepositView.displayName = "DepositView";
export default DepositView;
