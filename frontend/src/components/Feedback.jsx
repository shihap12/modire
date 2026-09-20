import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviewsRow1 = [
  {
    id: 1,
    name: 'د. طارق الحامد',
    role: 'مدير مجمع عيادات الشفاء',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    comment: 'نظام إدارة العيادات من مديري اختصر علينا 70% من زمن تنظيم الحجوزات والملفات الطبية!',
    rating: 5
  },
  {
    id: 2,
    name: 'مهندس أحمد السعيد',
    role: 'رئيس مجلس إدارة شركة نماء',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    comment: 'إدارة الحضور والانصراف والمهام أصبحت سهلة للغاية وبدقة فائقة بدون أي تعقيد.',
    rating: 5
  },
  {
    id: 3,
    name: 'سارة العتيبي',
    role: 'مالكة سلسلة مطاعم لقمة',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    comment: 'ربط المنيو الإلكتروني بنقاط البيع ونظام المطبخ سرّع تحضير الطلبات بشكل مذهل.',
    rating: 5
  },
  {
    id: 4,
    name: 'خالد المطيري',
    role: 'مدير متجر تيك بوكس الإلكتروني',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    comment: 'دعم البوابات المالية والتأطير التلقائي للشحنات وفر علينا مبالغ كبيرة وطاقة تشغيلية.',
    rating: 5
  }
];

const reviewsRow2 = [
  {
    id: 5,
    name: 'الكابتن يوسف الفارس',
    role: 'مالك أكاديمية الأبطال الرياضية',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    comment: 'نظام الاشتراكات وتنبيهات التجديد الآلية رفع نسبة تجديد الاشتراكات لدينا بنسبة 40%.',
    rating: 5
  },
  {
    id: 6,
    name: 'أستاذة مريم الشمري',
    role: 'مديرة مدارس الأجيال الواعدة',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    comment: 'تواصل اولياء الأمور ونظام الدرجات التلقائي جعل إدارة المدرسة مرنة ومنظمة جداً.',
    rating: 5
  },
  {
    id: 7,
    name: 'عمر الفاروق',
    role: 'مدير صيدليات الرعاية الدوائية',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    comment: 'تنبيهات الصلاحية والجرد الآلي حمى الصيدلية من أي خسائر في الأدوية المخزنة.',
    rating: 5
  },
  {
    id: 8,
    name: 'د. ليلى حسن',
    role: 'مؤسسة مركز الأمل الطبي',
    avatar: 'https://images.unsplash.com/photo-1594824813566-88855ce75907?w=150&auto=format&fit=crop&q=80',
    comment: 'تجربة استخدام سهلة جداً وكادر الدعم الفني متواجد معنا على مدار الساعة بسرعة استجابة رائعة.',
    rating: 5
  }
];

const reviewsRow3 = [
  {
    id: 9,
    name: 'إبراهيم منصور',
    role: 'المدير التنفيذي لشركة عقارات الجوار',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    comment: 'نظام العقود وتحصيل المستحقات حوّل العمل العقاري اليدوي لعملية مؤتمتة بضغطة زر.',
    rating: 5
  },
  {
    id: 10,
    name: 'منى القحطاني',
    role: 'مديرة الاستقبال بمجموعة الفنادق الذهبية',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    comment: 'تسجيل دخول وخروج النزلاء أصبح يأخذ ثواني معدودة مع تكامل الخدمات الفندقية.',
    rating: 5
  },
  {
    id: 11,
    name: 'محمود عبد العزيز',
    role: 'المحاسب الرئيسي بسوبرماركت الأمانة',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    comment: 'سرعة قراءة الباركود وإصدار الفاتورة الضريبية قلل طوابير المحاسبة بشكل ملحوظ.',
    rating: 5
  },
  {
    id: 12,
    name: 'المحامي فيصل الزهراني',
    role: 'صاحب مكتب الزهراني للاستشارات',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    comment: 'متابعة الجلسات وأرشيف القضايا القانونية جعلنا ننجز مهامنا بدقة وبدون أي تأخير.',
    rating: 5
  }
];

const reviewsRow4 = [
  {
    id: 13,
    name: 'هند الدوسري',
    role: 'مديرة الموارد البشرية لشركة المدار',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    comment: 'رواتب موظفينا وتقارير الحضور أصبحت جاهزة بآلية دقيقة بنهاية كل شهر بدون أخطاء.',
    rating: 5
  },
  {
    id: 14,
    name: 'فهد البقمي',
    role: 'مؤسس منصة تسوقك',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    comment: 'دعم الذكاء الاصطناعي في منصة مديري ساعدنا في توقع المبيعات وتحليل سلوك عملائنا.',
    rating: 5
  },
  {
    id: 15,
    name: 'د. ريم الغامدي',
    role: 'مديرة مركز الأسنان التخصصي',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80',
    comment: 'تطوير ممتاز وشاشة تحكم واضحة جداً، لم نحتج لأي تدريب معقد لبدء العمل عليه.',
    rating: 5
  },
  {
    id: 16,
    name: 'سعود الهاجري',
    role: 'مدير سلسلة كافيهات بريستو',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&auto=format&fit=crop&q=80',
    comment: 'من أفضل القرارات التي اتخذناها لتنظيم الفروع والمستودعات في كافة المناطق.',
    rating: 5
  }
];

function ReviewCard({ review }) {
  return (
    <div className="w-[340px] md:w-[380px] bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 mx-3 flex-shrink-0 flex flex-col justify-between select-none">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <Quote size={24} className="text-slate-200" />
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
          "{review.comment}"
        </p>
      </div>

      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <img 
          src={review.avatar} 
          alt={review.name} 
          className="w-11 h-11 rounded-full object-cover border border-slate-200"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900 font-sora">{review.name}</h4>
          <p className="text-xs text-slate-500">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Feedback() {
  return (
    <section 
      id="feedback" 
      className="w-full py-24 border-t border-slate-200/60 relative overflow-hidden scroll-mt-16" 
      dir="rtl"
      style={{ backgroundColor: 'var(--bg-main)' }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-sora tracking-tight leading-tight">
          آراء عملائنا (الفيدباك)
        </h2>

      </div>

      {/* 4 Horizontal Ribbon Rows with alternating marquee direction */}
      <div className="relative w-full space-y-6 overflow-hidden py-4" dir="ltr">
        {/* Left & Right fade gradient masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[oklch(0.97_0.012_75)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[oklch(0.97_0.012_75)] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Horizontal Marquee RIGHT ➡️ */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-right">
            {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((rev, idx) => (
              <ReviewCard key={`r1-${idx}`} review={rev} />
            ))}
          </div>
        </div>

        {/* Row 2: Horizontal Marquee LEFT ⬅️ */}
        <div className="flex overflow-hidden w-full">
          <div className="animate-marquee-left">
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((rev, idx) => (
              <ReviewCard key={`r2-${idx}`} review={rev} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
