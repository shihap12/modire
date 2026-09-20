import React, { useState } from 'react';

export default function Navbar({ showLogo = true, onOpenChat }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <nav
        className="w-full px-6 md:px-28 py-4 flex items-center justify-between sticky top-0 z-30"
        style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1.5px solid #101010' }}
        dir="rtl"
      >
        {/* Right side: Logo + مديري */}
        <div onClick={scrollToTop} className="flex items-center gap-2.5 cursor-pointer select-none">
          <div
            id="nav-logo-target"
            className="w-9 h-9 flex items-center justify-center flex-shrink-0 relative"
          >
            <div
              className={`w-full h-full transition-opacity duration-300 ${
                showLogo ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <svg viewBox="0 0 257 246" className="w-full h-full">
                <defs>
                  <mask id="nav-logo-mask">
                    <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
                    <circle cx="126" cy="111" r="56" fill="black" />
                    <polygon points="109,164 166,135 238,207 181,238" fill="black" />
                  </mask>
                </defs>
                <g mask="url(#nav-logo-mask)">
                  <circle cx="126" cy="113" r="91" fill="#101010" />
                </g>
                <path d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z" fill="#101010" />
                <circle cx="126" cy="116" r="21" fill="#004bfc" />
              </svg>
            </div>
          </div>
          <span className="text-lg font-bold tracking-wide font-sora" style={{ color: '#101010' }}>مديري</span>
        </div>

        {/* Middle: Desktop nav links */}
        <div className="hidden md:flex items-center gap-10 px-16">
          <a href="#systems" onClick={(e) => scrollToSection(e, 'systems')} className="text-base font-medium transition-colors hover:text-[#004bfc]" style={{ color: '#3a3530' }}>الأنظمة المتاحة</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-base font-medium transition-colors hover:text-[#004bfc]" style={{ color: '#3a3530' }}>من نحن؟</a>
          <a href="#feedback" onClick={(e) => scrollToSection(e, 'feedback')} className="text-base font-medium transition-colors hover:text-[#004bfc]" style={{ color: '#3a3530' }}>آراء العملاء</a>
        </div>

        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* CTA button - desktop only */}
          <button
            onClick={onOpenChat}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: '#101010', color: 'oklch(0.97 0.012 75)' }}
          >
            <span>←</span>
            <span>تواصل معنا</span>
          </button>

          {/* Hamburger button - mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="القائمة"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: '#101010',
                transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none'
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: '#101010',
                opacity: menuOpen ? 0 : 1
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: '#101010',
                transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu - floats over content */}
      {menuOpen && (
        <div
          className="md:hidden w-full flex flex-col absolute top-full left-0 right-0 z-20 shadow-lg"
          style={{ backgroundColor: 'var(--bg-main)', borderBottom: '1.5px solid #101010' }}
          dir="rtl"
        >
          <a href="#systems" className="px-6 py-4 text-lg font-medium border-b border-black/10" style={{ color: '#3a3530' }} onClick={(e) => scrollToSection(e, 'systems')}>الأنظمة المتاحة</a>
          <a href="#about" className="px-6 py-4 text-lg font-medium border-b border-black/10" style={{ color: '#3a3530' }} onClick={(e) => scrollToSection(e, 'about')}>من نحن؟</a>
          <a href="#feedback" className="px-6 py-4 text-lg font-medium border-b border-black/10" style={{ color: '#3a3530' }} onClick={(e) => scrollToSection(e, 'feedback')}>آراء العملاء</a>
          <button 
            className="px-6 py-4 text-lg font-medium text-right cursor-pointer" 
            style={{ color: '#004bfc' }} 
            onClick={() => { setMenuOpen(false); if(onOpenChat) onOpenChat(); }}
          >
            تواصل معنا
          </button>
        </div>
      )}
    </div>
  );
}
