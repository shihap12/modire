import React from 'react';
import { ShieldCheck, Cpu, Zap, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutUs() {
  const stats = [
    { number: '+500', label: 'شركة ومنشأة نثق بها', icon: Users },
    { number: '99.9%', label: 'نسبة استقرار المنظومة السحابية', icon: ShieldCheck },
    { number: '+15', label: 'نظام إداري متخصص', icon: TrendingUp },
    { number: '24/7', label: 'دعم وتكامل بالذكاء الاصطناعي', icon: Cpu }
  ];

  const pillars = [
    {
      icon: Cpu,
      title: 'ذكاء اصطناعي مدمج',
      description: 'نظام ذكي يحلل البيانات، يتوقع المبيعات، ويساعدك في اتخاذ القرارات الإدارية السليمة.'
    },
    {
      icon: ShieldCheck,
      title: 'حماية وأمان سحابي فائقتين',
      description: 'تشفير بياناتك وفق أعلى المعايير العالمية مع نسخ احتياطي تلقائي يضمن سلامة معلوماتك.'
    },
    {
      icon: Zap,
      title: 'سرعة وسهولة الاستخدام',
      description: 'واجهات مستخدم عصرية ومصممة بعناية فائقة لتضمن تجربة عمل سريعة وبدون الحاجة لتدريب معقد.'
    },
    {
      icon: Award,
      title: 'تحديثات مستمرة بدعم دائم',
      description: 'تطوير مستمر للأنظمة والميزات بدون أي رسوم إضافية مع فريق دعم فني متواجد لمساعدتك دائماً.'
    }
  ];

  return (
    <section 
      id="about" 
      className="w-full py-24 border-t border-slate-200/60 relative overflow-hidden" 
      dir="rtl"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004bfc]/10 text-[#004bfc] text-xs font-semibold mb-4 border border-[#004bfc]/20">
              🚀 رؤيتنا وقصتنا
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-sora tracking-tight leading-tight mb-6">
              من نحن؟
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
              منصة <span className="text-[#004bfc] font-bold">"مديري"</span> هي منظومة برمجية سحابية متكاملة تهدف إلى تمكين الشركات والمؤسسات بمختلف قطاعاتها من إدارة أعمالها بذكاء وسهولة مطلقة.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              نجمع بين أحدث تقنيات السحابة والذكاء الاصطناعي لتوفير أنظمة إدارية متخصصة (عيادات، مطاعم، متاجر، شركات، وغيرها) تتيح لك أتمتة العمليات اليومية، متابعة الأداء، ورفع الإنتاجية بدقة متناهية.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#systems" 
                className="bg-[#004bfc] text-white px-8 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 text-sm"
              >
                استكشف الأنظمة المتاحة
              </a>
              <button 
                onClick={() => {
                  const el = document.getElementById('feedback');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="bg-white text-slate-800 px-8 py-3.5 rounded-full font-medium border border-slate-300 hover:bg-slate-50 transition-colors text-sm shadow-sm"
              >
                شاهد آراء العملاء
              </button>
            </div>
          </div>

          {/* Stats Grid Card */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/90 p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl hover:border-[#004bfc]/30 transition-all duration-300 flex flex-col items-start justify-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#004bfc]/10 text-[#004bfc] flex items-center justify-center mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-sora mb-2 tracking-tight">
                    {st.number}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm font-medium leading-normal">
                    {st.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div 
                key={idx}
                className="bg-white/80 border border-slate-200/80 p-7 rounded-3xl hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-sora">
                  {pil.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pil.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
