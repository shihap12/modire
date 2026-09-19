import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CaptchaVerification({ onVerified }) {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Create dots for the dissolve effect
      const container = containerRef.current;
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const dotCount = 100;
      
      // We will handle the dissolve transition animation here
      const tl = gsap.timeline({
        onComplete: onVerified
      });
      
      tl.to(container, {
        scale: 1.05,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      });

    }, 2000);

    return () => clearTimeout(timer);
  }, [onVerified]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden" style={{ backgroundColor: 'var(--bg-main)' }} dir="rtl">

      {/* Grid pattern */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)`,
        backgroundSize: '64px 64px',
        zIndex: 0,
      }} />
      {/* Top fade */}
      <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to bottom, oklch(0.97 0.012 75), transparent)', zIndex: 1 }} />
      {/* Bottom fade */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, oklch(0.97 0.012 75), transparent)', zIndex: 1 }} />

      {/* Main Container Wrapper - 3-Shape Geometric Design */}
      <div
        ref={containerRef}
        className="relative w-[360px] h-[360px] flex items-center justify-center mx-4"
        style={{ zIndex: 2 }}
      >
        {/* SVG Backdrop representing the 3 tech shapes with thick dark black borders & edge glows */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible drop-shadow-2xl"
          viewBox="0 0 360 360"
        >
          <defs>
            <filter id="blue-line-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="9" result="blur" />
            </filter>
            <filter id="white-line-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="7" result="blur" />
            </filter>
            <mask id="captcha-logo-mask">
              <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
              <circle cx="126" cy="111" r="56" fill="black" />
              <polygon points="109,164 166,135 238,207 181,238" fill="black" />
            </mask>
          </defs>

          {/* Top-Right Blue Line Glow Path (#004bfc - matching logo dot) */}
          <path
            d="M 95 0 L 312 0 A 48 48 0 0 1 360 48 L 360 265"
            fill="none"
            stroke="#004bfc"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#blue-line-glow)"
            opacity="0.85"
          />

          {/* Bottom-Left Luminous White Line Glow Path (High Contrast & Luminous) */}
          <path
            d="M 265 360 L 48 360 A 48 48 0 0 1 0 312 L 0 95"
            fill="none"
            stroke="#ffffff"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#white-line-glow)"
            opacity="1"
          />
          <path
            d="M 265 360 L 48 360 A 48 48 0 0 1 0 312 L 0 95"
            fill="none"
            stroke="#ffffff"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#white-line-glow)"
            opacity="1"
          />

          {/* Main Card Shape (Chamfered Top-Left & Bottom-Right, Rounded Top-Right & Bottom-Left) */}
          <path
            d="M 85 0 L 312 0 A 48 48 0 0 1 360 48 L 360 275 L 275 360 L 48 360 A 48 48 0 0 1 0 312 L 0 85 Z"
            fill="var(--bg-main)"
            stroke="#101010"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Top-Left Larger Detached Corner Triangle */}
          <polygon
            points="0,0 65,0 0,65"
            fill="var(--bg-main)"
            stroke="#101010"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Bottom-Right Larger Detached Corner Triangle */}
          <polygon
            points="360,360 360,295 295,360"
            fill="var(--bg-main)"
            stroke="#101010"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* Content inside the card */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6 text-center">
          {/* Centered Logo Icon */}
          <div className="flex items-center justify-center mb-2.5 drop-shadow-md">
            <svg viewBox="0 0 257 246" className="w-[88px] h-[88px]">
              <defs>
                <mask id="captcha-logo-mask">
                  <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
                  <circle cx="126" cy="111" r="56" fill="black" />
                  <polygon points="109,164 166,135 238,207 181,238" fill="black" />
                </mask>
              </defs>
              <g mask="url(#captcha-logo-mask)">
                <circle cx="126" cy="113" r="91" fill="#101010" />
              </g>
              <path d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z" fill="#101010" />
              <circle cx="126" cy="116" r="21" fill="#004bfc" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-wider font-sora">
            مديري
          </h1>

          {/* Subtitle */}
          <p className="text-slate-500 mb-6 text-xs font-normal leading-relaxed max-w-[250px]">
            نرجو التحقق من أمان الجلسة لضمان حماية بيانات المنظومة
          </p>
          
          {/* Cloudflare Box */}
          <div className="w-full bg-white/80 border border-slate-300/80 rounded-xl p-3 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-4.5 h-4.5 rounded-md bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-xs bg-[#3b82f6]"></div>
              </div>
              <span className="text-slate-700 text-xs font-medium">جاري التحقق...</span>
            </div>
            <div className="text-[11px] text-slate-400 font-sans tracking-wide">Cloudflare</div>
          </div>
        </div>
      </div>
    </div>
  );
}

