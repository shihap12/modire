import React from 'react';
import roqmaLogo from '../assets/رقمه 1.png';
import { Phone, Globe, GraduationCap, Code2, Building2 } from 'lucide-react';

const founders = [
  {
    name: 'شهاب جابر',
    title: 'المؤسس المشارك — علم الحاسوب',
    phone: '+970 594 314 588',
    icon: Code2
  },
  {
    name: 'إيهم حنون',
    title: 'المؤسس المشارك — علم الحاسوب',
    phone: '+970 597 897 397',
    icon: Code2
  }
];

const services = [
  { icon: Globe, title: 'تطوير الويب', desc: 'بناء مواقع ومنصات رقمية احترافية بأحدث التقنيات.' },
  { icon: GraduationCap, title: 'الأكاديمية التقنية', desc: 'تدريب وتأهيل الكوادر التقنية في مجالات البرمجة والتصميم.' },
  { icon: Building2, title: 'الأنظمة الإدارية', desc: 'تطوير أنظمة SaaS متخصصة لمختلف القطاعات التجارية والخدمية.' }
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="w-full py-24 border-t border-slate-200/60 relative overflow-hidden scroll-mt-16"
      dir="rtl"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Badge */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004bfc]/10 text-[#004bfc] text-xs font-semibold mb-4 border border-[#004bfc]/20">
            🏢 من نحن؟
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-sora tracking-tight leading-tight">
            خلف مديري... شركة <span className="text-[#004bfc]">رُقمه</span>
          </h2>
        </div>

        {/* Main Grid: Logo + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Roqma Logo */}
          <div className="flex items-center justify-center">
            <img
              src={roqmaLogo}
              alt="شركة رقمه"
              className="w-full max-w-lg object-contain rounded-2xl"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-6">
            <p className="text-slate-700 text-lg leading-relaxed font-medium">
              <span className="text-[#004bfc] font-bold">رقمه</span> شركة تقنية فلسطينية مقرّها طولكرم، تهتم بمختلف مجالات التقنية وتقدّم حلولاً رقمية شاملة للأفراد والمؤسسات.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              <span className="font-bold text-slate-800">مديري</span> هو منصة حجز المواعيد الخاصة برقمه، يأتيك من خلالها العميل الذي يرغب في بناء أحد أنظمتنا الإدارية، فيحجز موعداً عبر الشات بوت لنتفاهم معه على كل تفاصيل النظام الذي يحتاجه وننفّذه له بالمواصفات المطلوبة.
            </p>

            {/* Services */}
            <div className="grid grid-cols-1 gap-3 mt-2">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-[#004bfc]/10 text-[#004bfc] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm font-sora">{s.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
