import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LogoAnimation({ onComplete, isExiting }) {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const handleRef = useRef(null);
  const hasAnimated = useRef(false); // guard against double-run

  useEffect(() => {
    if (hasAnimated.current) return; // already ran — skip
    hasAnimated.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        // Calculate exact target position in Navbar
        const targetEl = document.getElementById('nav-logo-target');
        let deltaX = 0;
        let deltaY = -window.innerHeight / 2 + 50;
        let targetScale = 0.14;

        if (targetEl && containerRef.current) {
          const targetRect = targetEl.getBoundingClientRect();
          const currentRect = containerRef.current.getBoundingClientRect();

          const targetCenterX = targetRect.left + targetRect.width / 2;
          const targetCenterY = targetRect.top + targetRect.height / 2;
          const currentCenterX = currentRect.left + currentRect.width / 2;
          const currentCenterY = currentRect.top + currentRect.height / 2;

          deltaX = targetCenterX - currentCenterX;
          deltaY = targetCenterY - currentCenterY;
          targetScale = targetRect.width / 256;
        }

        // Smooth transition into Navbar position
        gsap.to(containerRef.current, {
          x: deltaX,
          y: deltaY,
          scale: targetScale,
          duration: 1.1,
          ease: "power3.inOut",
          onComplete: onComplete
        });
      }
    });

    // Reset initial states
    gsap.set(ringRef.current, { opacity: 0, scale: 0.5, transformOrigin: "center" });
    gsap.set(dotRef.current, { opacity: 0, x: 100, y: -100 });
    gsap.set(handleRef.current, { opacity: 0, scale: 0.8, x: 50, y: 50, transformOrigin: "center" });

    // Step 1: Outer shape forms
    tl.to(ringRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: "back.out(1.5)"
    })
    // Step 2: Blue dot slides in
    .to(dotRef.current, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.2")
    // Step 3: Diagonal slash appears
    .to(handleRef.current, {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "back.out(1.2)"
    }, "-=0.3")
    // Hold briefly to let the user see the complete logo
    .to({}, { duration: 0.4 });

  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 overflow-hidden pointer-events-none">
      {/* Background layer (grid pattern & solid color) that fades out when isExiting is true */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundColor: 'var(--bg-main)' }}
      >
        {/* Grid pattern — same as Hero & Captcha */}
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
      </div>

      {/* Animated Logo Container */}
      <div ref={containerRef} className="relative w-64 h-64 flex items-center justify-center" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 257 246" className="w-full h-full overflow-visible drop-shadow-2xl">
          <defs>
            <mask id="anim-logo-mask">
              <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
              <circle cx="126" cy="111" r="56" fill="black" />
              <polygon points="109,164 166,135 238,207 181,238" fill="black" />
            </mask>
          </defs>

          {/* We animate this group! The mask scales synchronously because it's applied to the child circle */}
          <g ref={ringRef}>
            <circle cx="126" cy="113" r="91" fill="#101010" mask="url(#anim-logo-mask)" />
          </g>
          
          {/* Handle */}
          <path
            ref={handleRef}
            d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z"
            fill="#101010"
          />
          
          {/* Blue Center */}
          <circle ref={dotRef} cx="126" cy="116" r="21" fill="#004bfc" />
        </svg>
      </div>
    </div>
  );
}
