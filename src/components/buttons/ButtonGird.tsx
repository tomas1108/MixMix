// components/ButtonGrid.js
import { BUTTON_CLASS, YELLOW_BUTTON_CLASS } from '@/constants/style';

const ButtonGrid = () => (
  <div className="block lg:hidden grid grid-cols-3 gap-2">
    {/* Top Row */}
    <div className={BUTTON_CLASS}>
      <span className="mr-2">💳</span> 충전
    </div>
    <div className={BUTTON_CLASS}>
      <span className="mr-2">🔄</span> 환전
    </div>
    <div className={BUTTON_CLASS}>
      <span className="mr-2">🎧</span> 고객센터
    </div>
    {/* Bottom Row */}
    <div className={BUTTON_CLASS}>
      <span className="mr-2">💰</span> 충금액
    </div>
    <div className={BUTTON_CLASS}>
      <span className="mr-2">🔄</span> 충횟수
    </div>
    <div className={BUTTON_CLASS}>
      <span className="mr-2">💸</span> 페이백
    </div>

    {/* Yellow Buttons */}
    <button className={YELLOW_BUTTON_CLASS}>충전</button>
    <button className={YELLOW_BUTTON_CLASS}>환전</button>
    <button className={YELLOW_BUTTON_CLASS}>고객센터</button>
    <button className={YELLOW_BUTTON_CLASS}>충금액</button>
    <button className={YELLOW_BUTTON_CLASS}>충횟수</button>
    <button className={YELLOW_BUTTON_CLASS}>페이백</button>
  </div>
);

export default ButtonGrid;
