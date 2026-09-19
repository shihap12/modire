import React, { useState, useEffect } from 'react';
import { systems } from './SystemCards';

export default function Hero({ onOpenChat }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % systems.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index) => {
    const total = systems.length;
    let diff = index - currentIndex;
    
    // Calculate shortest path in circular array
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Physical coordinates: diff > 0 means it's coming from the right (next item)
    // diff < 0 means it's going to the left (previous item)
    // We limit visible cards to -2, -1, 0, 1, 2
    const absDiff = Math.abs(diff);
    
    if (absDiff > 2) {
      return { 
        opacity: 0, 
        transform: 'translateX(0) scale(0.5) translateZ(-500px)', 
        zIndex: 0,
        pointerEvents: 'none'
      };
    }

    // Physical right is positive X, physical left is negative X
    const x = diff * 120; // Distance between cards
    const scale = 1 - absDiff * 0.2; // 1, 0.8, 0.6
    const zIndex = 10 - absDiff;
    const opacity = 1 - absDiff * 0.4; // 1, 0.6, 0.2
    
    // Optional 3D rotation (right cards rotate left, left cards rotate right)
    const rotateY = diff * -15;

    return {
      opacity,
      transform: `translateX(${x}px) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
      zIndex,
      transition: 'all 0.5s ease-in-out',
    };
  };

  return (
    <section
      className="w-full relative py-32 flex items-center overflow-hidden"
      dir="rtl"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      {/* Grid pattern layer */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          backgroundPosition: '0 0',
          zIndex: 0,
        }}
      />

      {/* Top fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to bottom, oklch(0.97 0.012 75) 0%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Bottom fade mask */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0, height: '120px',
          background: 'linear-gradient(to top, oklch(0.97 0.012 75) 0%, transparent 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-12" style={{ zIndex: 2 }}>
        
        {/* Text Section */}
        <div className="text-right flex flex-col items-start w-full lg:w-1/2">
          <div className="relative inline-block pb-2">
            {/* Original Text */}
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight max-w-4xl">
              نظامك <br />
              الالكتروني <br />
              <span className="text-[#004bfc]">اسهل</span> معنا
            </h1>
            {/* Shine Overlay Text */}
            <h1 className="absolute inset-0 text-5xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl pointer-events-none select-none animate-shine-text" aria-hidden="true">
              نظامك <br />
              الالكتروني <br />
              <span className="text-transparent">اسهل</span> معنا
            </h1>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#systems" className="bg-[#004bfc] text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
              الأنظمة المتاحة
            </a>
            <button onClick={onOpenChat} className="bg-white text-slate-800 px-8 py-3 rounded-full font-medium border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-2">
              احجز موعدك مع الـ AI
            </button>
          </div>
        </div>

        {/* 3D Carousel Section */}
        <div className="w-full lg:w-1/2 h-[400px] flex items-center justify-center relative perspective-1000">
          {systems.map((sys, index) => {
            const Icon = sys.icon;
            const style = getCardStyle(index);
            
            return (
              <div 
                key={sys.id}
                className="absolute bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center w-[240px] h-[360px] md:w-[260px] md:h-[400px]"
                style={style}
              >
                <div className={`w-20 h-20 rounded-2xl ${sys.bg} ${sys.color} flex items-center justify-center mb-6 shadow-sm`}>
                  {Icon && <Icon className="w-10 h-10" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{sys.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{sys.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

