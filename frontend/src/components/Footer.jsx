import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#101010] text-white py-16 border-t border-slate-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <svg viewBox="0 0 257 246" className="w-6 h-6">
              <defs>
                <mask id="footer-logo-mask">
                  <rect width="100%" height="100%" fill="white" />
                  <circle cx="126" cy="111" r="56" fill="black" />
                  <polygon points="109,164 166,135 238,207 181,238" fill="black" />
                </mask>
              </defs>
              <g mask="url(#footer-logo-mask)">
                <circle cx="126" cy="113" r="91" fill="#101010" />
              </g>
              <path d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z" fill="#101010" />
              <circle cx="126" cy="116" r="21" fill="#004bfc" />
            </svg>
          </div>
          <span className="text-xl font-bold font-sora tracking-wide">مديري</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 font-medium">
          <a href="#systems" className="hover:text-white transition-colors">الأنظمة المتاحة</a>
          <a href="#feedback" className="hover:text-white transition-colors">الفيدباك</a>
          <a href="#about" className="hover:text-white transition-colors">من نحن؟</a>
          <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-500 font-sans">
          © {new Date().getFullYear()} مديري (Mudiri SaaS). جميع الحقوق محفوظة.
        </div>

      </div>
    </footer>
  );
}
