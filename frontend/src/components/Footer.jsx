import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import roqmaLogo from '../assets/رقمه 1.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#101010] text-white pt-16 pb-8 border-t border-slate-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">

          {/* Col 1: Mudiri Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 257 246" className="w-full h-full">
                  <defs>
                    <mask id="footer-logo-mask2">
                      <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
                      <circle cx="126" cy="111" r="56" fill="black" />
                      <polygon points="109,164 166,135 238,207 181,238" fill="black" />
                    </mask>
                  </defs>
                  <g mask="url(#footer-logo-mask2)">
                    <circle cx="126" cy="113" r="91" fill="white" />
                  </g>
                  <path d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z" fill="white" />
                  <circle cx="126" cy="116" r="21" fill="#004bfc" />
                </svg>
              </div>
              <span className="text-xl font-bold font-sora tracking-wide">مديري</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              منصة حجز مواعيد لبناء الأنظمة الإدارية المتخصصة. احجز موعدك عبر الشات بوت وابدأ رحلتك الرقمية.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <a 
                href="#systems" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                الأنظمة المتاحة
              </a>
              <span className="text-slate-700">·</span>
              <a 
                href="#about" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                من نحن؟
              </a>
              <span className="text-slate-700">·</span>
              <a 
                href="#feedback" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('feedback')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                آراء العملاء
              </a>
            </div>
          </div>

          {/* Col 2: Roqma */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={roqmaLogo} alt="رقمه" className="h-10 object-contain brightness-200 invert" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              شركة تقنية فلسطينية متخصصة في تطوير الويب، الأنظمة السحابية، والتدريب التقني.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <MapPin size={13} className="text-[#004bfc]" />
              <span>طولكرم، فلسطين 🇵🇸</span>
            </div>
            <p className="text-slate-600 text-[11px] tracking-widest">TECHNOLOGY · SOLUTIONS · GROWTH</p>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-white font-sora">تواصل مع الفريق</h4>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-xs text-slate-500">شهاب جابر</p>
                <a
                  href="tel:+970594314588"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                  dir="ltr"
                >
                  <Phone size={14} className="text-[#004bfc]" />
                  +970 594 314 588
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-slate-500">إيهم حنون</p>
                <a
                  href="tel:+970597897397"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                  dir="ltr"
                >
                  <Phone size={14} className="text-[#004bfc]" />
                  +970 597 897 397
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} مديري — جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-slate-700">
            تحت إشراف وتطوير{' '}
            <span className="text-slate-400 font-semibold">شركة رقمه</span>{' '}
            — طولكرم، فلسطين
          </p>
        </div>

      </div>
    </footer>
  );
}
