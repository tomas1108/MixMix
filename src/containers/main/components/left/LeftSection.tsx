import React from 'react';

import { Button, MenuButton, ImageLink, SportsItem } from  '@/components';
import Link from 'next/link';
interface LeftSectionProps {
  isLeftSidebarOpen: boolean;
 
}

const LeftSection: React.FC<LeftSectionProps> = ({ isLeftSidebarOpen }) => {
  return (
    <>
    <section
      className={`lg:w-1/5 w-4/5 p-1 rounded-lg shadow-lg space-y-4 h-screen overflow-auto 
       ${isLeftSidebarOpen ? 'absolute left-0 top-0 z-10 bg-white' : 'hidden'} 
       lg:relative lg:block`}
      style={{ height: 'calc(100vh - 115px)' }}
    >
      {/* Grid buttons */}
      <div>
        {/* Top Buttons */}
        <div className="custom-bg grid grid-cols-4 gap-0 rounded-t-lg">
          <Link href="/deposit">
          <Button text="충전" className="rounded-tl-lg bg-pink-600" />
          </Link>
          <Link href="/withdrawal">
          <Button text="환전" className="bg-pink-600" />
          </Link>
          <Button text="고객센터" className="bg-pink-600" />
          <Button text="쪽지함" className="rounded-tr-lg bg-pink-600" />
        </div>

        {/* Menu items */}
        <div className="addMenu-wrap grid grid-cols-3 grid-rows-[repeat(6,_1fr)] gap-0 bg-custom-gradient rounded-custom overflow-hidden mb-1.5">
          <MenuButton text="스포츠(해외형)" />
          <MenuButton text="스포츠(국내형)" />
          <MenuButton text="스포츠(스페셜)" />
          <MenuButton text="스포츠(실시간)" />
          <MenuButton text="미니게임" />
          <MenuButton text="토  게임" />
          <MenuButton text="카지노" />
          <MenuButton text="슬롯" />
          <MenuButton text="레볼루션(홀덤)" />
          <MenuButton text="BET365" />
          <MenuButton text="공지사항" />
          <MenuButton text="이벤트" />
          <MenuButton text="출석부" />
          <MenuButton text="쿠폰" />
          <MenuButton text="배팅내역" />
          <MenuButton text="포인트전환" />
          <MenuButton text="지인현황" />
          <MenuButton text="정보수정" />
        </div>

        {/* Images section */}
        <div className="mt-4 grid grid-rows-2 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <ImageLink href="#" src="/banner/bner_sma1.jpg" alt="Casino" />
            <ImageLink href="#" src="/banner/bner_sma2.jpg" alt="Slot" />
          </div>
          <div>
            <ImageLink href="#" src="/banner/bner_lar.jpg" alt="Revolution Holdem" />
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
        <Button text="스포츠" className="bg-pink-600" />
        <Button text="실시간" className="bg-gray-300" />
        <Button text="미니게임" className="bg-gray-300" />
      </div>

      {/* Sports List */}
      <div className="bg-white p-2 rounded-lg shadow">
        <ul>
          <SportsItem iconClass="fas fa-futbol" name="축구" count={155} />
          <SportsItem iconClass="fas fa-baseball-ball" name="야구" count={24} />
          <SportsItem iconClass="fas fa-basketball-ball" name="농구" count={15} />
          <SportsItem iconClass="fas fa-volleyball-ball" name="배구" count={10} />
          <SportsItem iconClass="fas fa-table-tennis" name="테니스" count={90} />
          <SportsItem iconClass="fas fa-hockey-puck" name="아이스하키" count={3} />
          <SportsItem iconClass="fas fa-gamepad" name="이스포츠" count={2} />
        </ul>
      </div>
    </section>
    </>
  );
};
LeftSection.displayName = 'LeftSection';
export default LeftSection;
