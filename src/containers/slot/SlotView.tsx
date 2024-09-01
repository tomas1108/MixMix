'use client';

const SlotView = () => {
  const items = [
    { title: '부운고', imgSrc: '/path-to-image/buong-go.png' },
    { title: '에보플레이', imgSrc: '/path-to-image/evoplay.png' },
    { title: '하바네로', imgSrc: '/path-to-image/habanero.png' },
    { title: '와즈단', imgSrc: '/path-to-image/wazdan.png' },
    { title: '씨큐나인', imgSrc: '/path-to-image/cq9.png' },
    { title: '게임아트', imgSrc: '/path-to-image/gameart.png' },
    { title: '프래그마틱플레이', imgSrc: '/path-to-image/pragmatic.png' },
    { title: '플레이손', imgSrc: '/path-to-image/playson.png' },
    { title: 'TPG', imgSrc: '/path-to-image/tpg.png' },
    { title: '플레이스타', imgSrc: '/path-to-image/playstar.png' },
    { title: '블루프린트 게이밍', imgSrc: '/path-to-image/blueprint.png' },
    { title: '아시아 게이밍', imgSrc: '/path-to-image/asia-gaming.png' },
  ];

  return (
    <section className="lg:w-3/5 w-full bg-white rounded-lg shadow h-screen overflow-y-auto flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}>
      
      {/* Grid Section */}
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
            <img src={item.imgSrc} alt={item.title} className="w-full h-32 object-cover rounded" />
            <div className="mt-2 text-center text-gray-700">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

SlotView.displayName = "SlotView";
export default SlotView;
