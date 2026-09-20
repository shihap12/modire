import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import roqmaLogo from '../assets/رقمه 1.png';

export default function Login({ onNavigateHome, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null); // { type: 'error' | 'success' | 'info', text: string }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMsg(null);

    if (!email.trim() || !password.trim()) {
      setStatusMsg({ type: 'error', text: 'يرجى ملء جميع الحقول المطلوبة للمتابعة.' });
      return;
    }

    setIsLoading(true);

    // Simulated login process and redirect to Admin
    setTimeout(() => {
      setIsLoading(false);
      setStatusMsg({
        type: 'success',
        text: 'تم التحقق بنجاح! جاري الانتقال إلى لوحة تحكم الأدمن...'
      });
      setTimeout(() => {
        if (onLoginSuccess) {
          onLoginSuccess();
        } else {
          window.history.pushState(null, '', '/admin');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }, 600);
    }, 800);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setStatusMsg({
      type: 'info',
      text: 'لاستعادة بيانات الحساب، يرجى التواصل مباشرة مع الدعم الفني لشركة رُقمه.'
    });
  };

  return (
    <div 
      className="min-h-screen w-full flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 select-none font-sans"
      style={{ backgroundColor: 'var(--bg-main)' }}
      dir="rtl"
    >
      {/* Top Header / Back Button */}
      <header className="max-w-6xl w-full mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 cursor-pointer group transition-transform duration-200 active:scale-95"
          title="العودة للرئيسية"
        >
          <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 relative">
            <svg viewBox="0 0 257 246" className="w-full h-full">
              <defs>
                <mask id="login-nav-logo-mask">
                  <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
                  <circle cx="126" cy="111" r="56" fill="black" />
                  <polygon points="109,164 166,135 238,207 181,238" fill="black" />
                </mask>
              </defs>
              <g mask="url(#login-nav-logo-mask)">
                <circle cx="126" cy="113" r="91" fill="#101010" />
              </g>
              <path d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z" fill="#101010" />
              <circle cx="126" cy="116" r="21" fill="#004bfc" />
            </svg>
          </div>
          <span className="text-xl font-bold font-sora tracking-wide text-slate-900 group-hover:text-[#004bfc] transition-colors">
            مديري
          </span>
        </div>

        {/* Back Link */}
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-slate-300/80 bg-white/70 backdrop-blur-sm text-slate-700 hover:bg-white hover:border-[#101010] transition-all cursor-pointer shadow-sm"
        >
          <span>العودة للرئيسية</span>
          <ArrowRight size={15} />
        </button>
      </header>

      {/* Main Login Card Area */}
      <main className="w-full max-w-md mx-auto my-auto py-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div 
            className="absolute top-0 right-0 w-36 h-36 bg-[#004bfc]/5 rounded-full blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Section Badge */}
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004bfc]/10 text-[#004bfc] text-xs font-semibold border border-[#004bfc]/20 mb-3">
              <ShieldCheck size={14} />
              <span>بوابة الدخول الإدارية</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sora tracking-tight">
              تسجيل الدخول
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              أهلاً بك مجدداً، أدخل بياناتك للوصول إلى لوحة التحكم
            </p>
          </div>

          {/* Status / Alert Message */}
          {statusMsg && (
            <div 
              className={`mb-6 p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 transition-all ${
                statusMsg.type === 'error'
                  ? 'bg-rose-50 border border-rose-200 text-rose-700'
                  : statusMsg.type === 'success'
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-700'
                  : 'bg-blue-50 border border-blue-200 text-blue-700'
              }`}
            >
              {statusMsg.type === 'error' && <AlertCircle size={17} className="flex-shrink-0 mt-0.5" />}
              {statusMsg.type === 'success' && <CheckCircle2 size={17} className="flex-shrink-0 mt-0.5" />}
              {statusMsg.type === 'info' && <ShieldCheck size={17} className="flex-shrink-0 mt-0.5" />}
              <span className="leading-relaxed">{statusMsg.text}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                البريد الإلكتروني أو اسم المستخدم
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@mudiri.com"
                  dir="ltr"
                  className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-10 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] focus:ring-2 focus:ring-[#004bfc]/15 transition-all"
                  autoComplete="username"
                  required
                />
                <Mail 
                  size={18} 
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  كلمة المرور
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-xs text-[#004bfc] hover:underline font-medium cursor-pointer"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  dir="ltr"
                  className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-10 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] focus:ring-2 focus:ring-[#004bfc]/15 transition-all"
                  autoComplete="current-password"
                  required
                />
                <Lock 
                  size={18} 
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer transition-colors p-1"
                  aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#004bfc] focus:ring-[#004bfc] cursor-pointer accent-[#004bfc]"
                />
                <span>تذكر تسجيل الدخول على هذا الجهاز</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              style={{ backgroundColor: '#101010', color: 'oklch(0.97 0.012 75)' }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>تسجيل الدخول</span>
                  <span>←</span>
                </>
              )}
            </button>
          </form>

          {/* Security Note */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-xs text-center">
            <ShieldCheck size={15} className="text-emerald-500 flex-shrink-0" />
            <span>نظام محمي ومشفر بالكامل بأحدث معايير الأمان</span>
          </div>
        </div>
      </main>

      {/* Footer / Roqma Credit */}
      <footer className="max-w-6xl w-full mx-auto text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-4">
        <div className="flex items-center gap-2">
          <span>مديري — تطوير وتشغيل</span>
          <img src={roqmaLogo} alt="رقمه" className="h-5 object-contain" />
        </div>
        <p className="dir-ltr text-slate-400">
          © {new Date().getFullYear()} Mudiri. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
