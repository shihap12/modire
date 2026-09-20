import React, { useState } from 'react';
import { 
  Building2, 
  Utensils, 
  Stethoscope, 
  GraduationCap, 
  Dumbbell, 
  ShoppingCart,
  Hotel,
  Pill,
  Home,
  Calculator,
  Store,
  Scale,
  ArrowLeft,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const systems = [
  {
    id: 1,
    title: 'نظام إدارة العيادات',
    category: 'القطاع الطبي',
    description: 'حل متكامل لإدارة حجوزات المرضى والملفات الطبية، الوصفات الإلكترونية والفواتير.',
    features: ['الملفات الطبية الرقمية', 'إدارة الحجوزات والمواعيد', 'الوصفات والمالية'],
    icon: Stethoscope,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200'
  },
  {
    id: 2,
    title: 'نظام إدارة المطاعم',
    category: 'الأغذية والمشروبات',
    description: 'إدارة الطلبات، المنيو الإلكتروني الذكي، نقاط البيع السريعة وتتبع المخزون.',
    features: ['شاشات المطبخ POS', 'المنيو كيو آر كود', 'إدارة المخزون والوجبات'],
    icon: Utensils,
    color: 'text-amber-600',
    bg: 'bg-amber-50 border-amber-200'
  },
  {
    id: 3,
    title: 'نظام المتاجر الإلكترونية',
    category: 'التجارة الرقمية',
    description: 'منصة بيع متكاملة مع بوابات الدفع الإلكتروني تتبع الشحن وإدارة المنتجات.',
    features: ['ربط بوابات الدفع', 'إدارة الطلبات والشحن', 'تحليلات المبيعات'],
    icon: ShoppingCart,
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200'
  },
  {
    id: 4,
    title: 'نظام إدارة الشركات',
    category: 'قطاع الأعمال',
    description: 'إدارة الموارد البشرية، تتبع المهام والمشاريع، وحضور وانصراف الموظفين.',
    features: ['إدارة الموظفين والرواتب', 'تتبع المشاريع والمهام', 'التقارير الإدارية'],
    icon: Building2,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 border-indigo-200'
  },
  {
    id: 5,
    title: 'نظام الصالات الرياضية',
    category: 'الرياضة واللياقة',
    description: 'إدارة اشتراكات الأعضاء، الدخول الإلكتروني، تتبع المدربين والجدول التدريبي.',
    features: ['تتبع الاشتراكات والبوابات', 'جداول المدربين والتمارين', 'التنبيهات التلقائية'],
    icon: Dumbbell,
    color: 'text-rose-600',
    bg: 'bg-rose-50 border-rose-200'
  },
  {
    id: 6,
    title: 'نظام إدارة المدارس',
    category: 'التعليم الأكاديمي',
    description: 'إدارة شؤون الطلاب، الدرجات والاختبارات، والتواصل الفعال مع أولياء الأمور.',
    features: ['البوابة الأكاديمية للطلاب', 'إدارة الشهادات والدرجات', 'تطبيق أولياء الأمور'],
    icon: GraduationCap,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50 border-yellow-200'
  },
  {
    id: 7,
    title: 'نظام إدارة الفنادق',
    category: 'السياحة والضيافة',
    description: 'نظام حجز الغرف، خدمة الغرف، إدارة التسكين والتحصيل الفندقي.',
    features: ['خريطة الغرف التفاعلية', 'حجوزات الاستقبال والإنترنت', 'الفواتير والخدمات'],
    icon: Hotel,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border-cyan-200'
  },
  {
    id: 8,
    title: 'نظام إدارة الصيدليات',
    category: 'القطاع الصيدلاني',
    description: 'مراقبة صلاحيات الأدوية، صرف النواقص، والتكامل مع هيئات الدواء.',
    features: ['تنبيهات تاريخ الصلاحية', 'نظام الجرد الآلي', 'فواتير الأدوية والتأمين'],
    icon: Pill,
    color: 'text-teal-600',
    bg: 'bg-teal-50 border-teal-200'
  },
  {
    id: 9,
    title: 'نظام إدارة العقارات',
    category: 'العقارات والأملاك',
    description: 'إدارة العقود والمستأجرين، تحصيل الإيجارات، وصيانة الوحدات العقارية.',
    features: ['أرشيف العقود الإلكتروني', 'تنبيهات التحصيل التلقائية', 'بلاغات الصيانة'],
    icon: Home,
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-200'
  },
  {
    id: 10,
    title: 'نظام المحاسبة والمالية',
    category: 'الخدمات المالية',
    description: 'إدارة شجرة الحسابات، قيود اليومية، القوائم المالية، والضرائب.',
    features: ['شجرة حسابات مرنة', 'الدفاتر والقوائم المالية', 'إقرارات ضريبة القيمة المضافة'],
    icon: Calculator,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200'
  },
  {
    id: 11,
    title: 'نظام نقاط بيع السوبرماركت',
    category: 'تجزئة السوبرماركت',
    description: 'باركود سريع، موازين إلكترونية، إدارة العروض والمخزون الضخم.',
    features: ['قراءة باركود فائقة السرعة', 'إدارة العروض الترويجية', 'جرد المخازن الذكي'],
    icon: Store,
    color: 'text-orange-600',
    bg: 'bg-orange-50 border-orange-200'
  },
  {
    id: 12,
    title: 'نظام مكاتب المحاماة',
    category: 'الخدمات القانونية',
    description: 'متابعة القضايا والجلسات، أرشيف المستندات القانونية، وحساب الأتعاب.',
    features: ['جدول الجلسات والمواعيد', 'أرشيف القضايا الشامل', 'إدارة العقود والأتعاب'],
    icon: Scale,
    color: 'text-sky-600',
    bg: 'bg-sky-50 border-sky-200'
  }
];

const ITEMS_PER_PAGE = 8; // 2 rows of 4 items on desktop

export default function SystemCards({ onOpenChat }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(systems.length / ITEMS_PER_PAGE);
  const visibleSystems = systems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <section 
      id="systems" 
      className="w-full py-24 border-t border-slate-200/60 relative overflow-hidden scroll-mt-16" 
      dir="rtl" 
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004bfc]/10 text-[#004bfc] text-xs font-semibold mb-4 border border-[#004bfc]/20">
              ⚡ حلول برمجية سحابية متكاملة
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-sora tracking-tight leading-tight">
              الأنظمة المتاحة
            </h2>
            <p className="text-slate-600 text-base mt-3 max-w-2xl leading-relaxed">
              اختار النظام اللي بدك إياه، والباقي علينا.
            </p>
          </div>

          {/* Pagination status indicator */}
          {totalPages > 1 && (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-500">
                صفحة <strong className="text-slate-900">{currentPage + 1}</strong> من {totalPages}
              </span>
              <div className="flex items-center gap-2 dir-ltr">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                  disabled={currentPage === 0}
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                  disabled={currentPage === totalPages - 1}
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 2-Row Vertical Portrait Cards Grid (4 cols x 2 rows = 8 max) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleSystems.map((sys) => {
            const Icon = sys.icon;
            return (
              <div 
                key={sys.id} 
                className="bg-white border border-slate-200/90 p-7 rounded-3xl transition-all duration-300 group hover:-translate-y-1.5 shadow-md hover:shadow-2xl hover:shadow-[#004bfc]/10 flex flex-col justify-between min-h-[410px] relative overflow-hidden"
              >
                {/* Top content */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${sys.bg} ${sys.color} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <Icon size={28} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                      {sys.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-sora leading-snug group-hover:text-[#004bfc] transition-colors">
                    {sys.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {sys.description}
                  </p>
                </div>

                {/* Features list & Action CTA */}
                <div>
                  <div className="border-t border-slate-100 pt-4 mb-6 space-y-2">
                    {sys.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#004bfc]"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={onOpenChat}
                    className="w-full bg-slate-900 text-white hover:bg-[#004bfc] py-3 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors duration-300 group/btn shadow-sm cursor-pointer"
                  >
                    <span>احجز موعدك لبناء النظام</span>
                    <ArrowLeft size={15} className="group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots at bottom */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'w-8 bg-[#004bfc]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
