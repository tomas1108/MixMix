'use client';
const CasinoView = () => {
    const gameOptions = [
        { img: '/path-to-evolution-image.png', title: '에볼루션 게이밍' },
        { img: '/path-to-asia-gaming-image.png', title: '아시아 게이밍' },
        { img: '/path-to-dream-gaming-image.png', title: '드림 게이밍' },
        { img: '/path-to-sexy-gaming-image.png', title: '섹시 게이밍' },
        { img: '/path-to-wm-casino-image.png', title: 'WM 카지노' },
        { img: '/path-to-micro-gaming-image.png', title: '마이크로 게이밍' },
        { img: '/path-to-pragmatic-image.png', title: '프라그마틱 게이밍' },
        { img: '/path-to-vivo-image.png', title: '비보게이밍' },
        { img: '/path-to-betgames-image.png', title: '벳게임스' },
        { img: '/path-to-dwin-hotel-casino-image.png', title: '드윈 호텔 카지노' },
      ];
  return (
    <section
      className="lg:w-3/5 w-full bg-[#2c2c2c] text-white rounded-lg shadow-lg h-screen overflow-y-auto flex flex-col"
      style={{ height: "calc(100vh - 115px)" }}
    >
         {/* Large Banner */}
         <div className="mb-8">
        <img 
          src="/path-to-large-banner.png" 
          alt="Large Banner" 
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Small Banners Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {gameOptions.map((game, index) => (
          <div key={index} className="bg-[#3c3c3c] p-4 rounded-lg text-center">
            <img src={game.img} alt={game.title} className="w-full h-auto mb-2 rounded-lg" />
            <h3 className="text-sm font-semibold">{game.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

CasinoView.displayName = "CasinoView";
export default CasinoView;
