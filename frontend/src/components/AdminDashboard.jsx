import React, { useState, useMemo, useEffect } from 'react';
import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  Users,
  Layers,
  LogOut,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  Search,
  Plus,
  Filter,
  TrendingUp,
  Sparkles,
  Menu,
  X,
  ArrowLeft,
  Trash2,
  Edit3,
  UserPlus,
  Eye,
  EyeOff,
  ShieldCheck,
  Image as ImageIcon,
  Lock,
  User,
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
  Globe,
  Laptop,
  CalendarCheck,
  MessageSquare,
  Star,
  Quote,
  ThumbsUp
} from 'lucide-react';
import roqmaLogo from '../assets/رقمه 1.png';
import AnimatedBackground from './AnimatedBackground';

// Icon Map for dynamic icon selection
export const AVAILABLE_ICONS = [
  { id: 'Stethoscope', name: 'طبي / عيادات', icon: Stethoscope },
  { id: 'Utensils', name: 'مطاعم / كافيهات', icon: Utensils },
  { id: 'ShoppingCart', name: 'متاجر / تجارة', icon: ShoppingCart },
  { id: 'Building2', name: 'شركات / مؤسسات', icon: Building2 },
  { id: 'Hotel', name: 'فنادق / سياحة', icon: Hotel },
  { id: 'Pill', name: 'صيدليات / أدوية', icon: Pill },
  { id: 'Dumbbell', name: 'نوادي / لياقة', icon: Dumbbell },
  { id: 'Home', name: 'عقارات / تأجير', icon: Home },
  { id: 'Scale', name: 'محاماة / قضاء', icon: Scale },
  { id: 'Calculator', name: 'محاسبة / مالية', icon: Calculator },
  { id: 'Store', name: 'سوبرماركت / نقاط بيع', icon: Store },
  { id: 'GraduationCap', name: 'تعليم / أكاديميات', icon: GraduationCap },
  { id: 'Globe', name: 'مواقع / منصات ويب', icon: Globe },
  { id: 'Laptop', name: 'برمجيات / تقنية', icon: Laptop }
];

export const COLOR_THEMES = [
  { id: 'emerald', label: 'أخضر زمردي', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
  { id: 'amber', label: 'كهرماني / ذهبي', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
  { id: 'blue', label: 'أزرق مديري', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
  { id: 'indigo', label: 'نيلي / بنفسجي', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
  { id: 'purple', label: 'أرجواني ملكي', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
  { id: 'rose', label: 'وردي / أحمر', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-200' },
  { id: 'cyan', label: 'سماوي بحري', color: 'text-cyan-600', bg: 'bg-cyan-50 border-cyan-200' }
];

// Initial default systems matching the main page
const initialDefaultSystems = [
  {
    id: 1,
    title: 'نظام إدارة العيادات',
    category: 'القطاع الطبي',
    description: 'حل متكامل لإدارة حجوزات المرضى والملفات الطبية، الوصفات الإلكترونية والفواتير.',
    features: ['الملفات الطبية الرقمية', 'إدارة الحجوزات والمواعيد', 'الوصفات والمالية'],
    iconId: 'Stethoscope',
    themeId: 'emerald'
  },
  {
    id: 2,
    title: 'نظام إدارة المطاعم',
    category: 'الأغذية والمشروبات',
    description: 'إدارة الطلبات، المنيو الإلكتروني الذكي، نقاط البيع السريعة وتتبع المخزون.',
    features: ['شاشات المطبخ POS', 'المنيو كيو آر كود', 'إدارة المخزون والوجبات'],
    iconId: 'Utensils',
    themeId: 'amber'
  },
  {
    id: 3,
    title: 'نظام المتاجر الإلكترونية',
    category: 'التجارة الرقمية',
    description: 'منصة بيع متكاملة مع بوابات الدفع الإلكتروني تتبع الشحن وإدارة المنتجات.',
    features: ['ربط بوابات الدفع', 'إدارة الطلبات والشحن', 'تحليلات المبيعات'],
    iconId: 'ShoppingCart',
    themeId: 'blue'
  },
  {
    id: 4,
    title: 'نظام إدارة الشركات',
    category: 'قطاع الأعمال',
    description: 'إدارة الموارد البشرية، تتبع المهام والمشاريع، وحضور وانصراف الموظفين.',
    features: ['إدارة الموظفين والرواتب', 'تتبع المشاريع والمهام', 'التقارير الإدارية'],
    iconId: 'Building2',
    themeId: 'indigo'
  }
];

// Initial default admins
const initialDefaultAdmins = [
  {
    id: 1,
    firstName: 'أحمد',
    lastName: 'السعيد',
    username: 'ahmad_admin',
    phone: '0598765432',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    role: 'المدير العام',
    createdAt: '2026-09-01'
  },
  {
    id: 2,
    firstName: 'سارة',
    lastName: 'العتيبي',
    username: 'sara_ops',
    phone: '0592345678',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    role: 'مسؤولة العمليات والمواعيد',
    createdAt: '2026-09-10'
  }
];

// Initial appointments
const initialAppointments = [
  {
    id: 1,
    client: 'د. طارق الحامد',
    phone: '0599123456',
    system: 'نظام إدارة العيادات',
    date: '2026-09-20',
    time: '10:30 ص',
    status: 'مؤكد',
    notes: 'حجز موعد لاستعراض نظام الملفات الطبية الإلكترونية'
  },
  {
    id: 2,
    client: 'مهندس أحمد السعيد',
    phone: '0598765432',
    system: 'نظام إدارة الشركات',
    date: '2026-09-20',
    time: '01:00 م',
    status: 'مؤكد',
    notes: 'طلب تخصيص نظام الحضور والبصمة وربط الفروع'
  },
  {
    id: 3,
    client: 'سارة العتيبي',
    phone: '0592345678',
    system: 'نظام إدارة المطاعم',
    date: '2026-09-21',
    time: '11:15 ص',
    status: 'قيد المراجعة',
    notes: 'استفسار عن ربط المنيو الرقمي مع نقاط البيع POS'
  },
  {
    id: 4,
    client: 'خالد المطيري',
    phone: '0593456789',
    system: 'نظام المتاجر الإلكترونية',
    date: '2026-09-22',
    time: '03:45 م',
    status: 'مؤكد',
    notes: 'بناء متجر إلكتروني متعدد التجار وبوابات دفع'
  }
];

export default function AdminDashboard({ onNavigateHome, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview | calendar | systems | admins | bookings | testimonials
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 1. Systems CRUD State
  const [systemsList, setSystemsList] = useState(() => {
    try {
      const saved = localStorage.getItem('mudiri_systems');
      return saved ? JSON.parse(saved) : initialDefaultSystems;
    } catch {
      return initialDefaultSystems;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mudiri_systems', JSON.stringify(systemsList));
    } catch (e) {
      console.error(e);
    }
  }, [systemsList]);

  // System Modal State (Add or Edit)
  const [isSystemModalOpen, setIsSystemModalOpen] = useState(false);
  const [editingSystemId, setEditingSystemId] = useState(null);
  const [systemForm, setSystemForm] = useState({
    title: '',
    category: '',
    description: '',
    feature1: '',
    feature2: '',
    feature3: '',
    iconId: 'Building2',
    themeId: 'emerald'
  });

  // 2. Admins CRUD State
  const [adminsList, setAdminsList] = useState(() => {
    try {
      const saved = localStorage.getItem('mudiri_admins');
      return saved ? JSON.parse(saved) : initialDefaultAdmins;
    } catch {
      return initialDefaultAdmins;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mudiri_admins', JSON.stringify(adminsList));
    } catch (e) {
      console.error(e);
    }
  }, [adminsList]);

  // Admin Modal State
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);
  const [adminForm, setAdminForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    avatar: '',
    password: '',
    role: 'مشرف نظام'
  });

  // 3. Calendar & Bookings State
  const [appointments, setAppointments] = useState(initialAppointments);
  const [selectedDate, setSelectedDate] = useState('2026-09-20');
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(8); // September
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // 4. Testimonials State
  const initialTestimonials = [
    { id: 1, name: 'د. خالد الحربي', role: 'صاحب عيادة أسنان', content: 'مديري غيّر طريقة عملي كلياً! الحجوزات أصبحت تلقائية وإدارة الملفات الطبية باتت بنقرة واحدة.', rating: 5, avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&auto=format&fit=crop&q=80' },
    { id: 2, name: 'سارة المطيري', role: 'مديرة مطعم فاخر', content: 'النظام سهّل علينا إدارة الطلبات والمنيو بشكل رائع. التقارير اليومية دقيقة جداً وتوفر وقتاً كبيراً.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' },
    { id: 3, name: 'محمد العنزي', role: 'صاحب متجر إلكتروني', content: 'ربط بوابات الدفع وإدارة الشحن في مكان واحد وفّر علينا ساعات من العمل اليومي.', rating: 4, avatar: '' },
  ];
  const [testimonialsList, setTestimonialsList] = useState(() => {
    try {
      const saved = localStorage.getItem('mudiri_testimonials');
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mudiri_testimonials', JSON.stringify(testimonialsList));
    } catch (e) {
      console.error(e);
    }
  }, [testimonialsList]);

  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [testimonialForm, setTestimonialForm] = useState({
    name: '', role: '', content: '', rating: 5, avatar: ''
  });

  const handleSaveTestimonial = (e) => {
    e.preventDefault();
    if (!testimonialForm.name.trim() || !testimonialForm.content.trim()) {
      alert('يرجى كتابة الاسم والمحتوى');
      return;
    }
    if (editingTestimonialId) {
      setTestimonialsList(prev => prev.map(t =>
        t.id === editingTestimonialId ? { ...t, ...testimonialForm, rating: Number(testimonialForm.rating) } : t
      ));
    } else {
      const newT = { id: Date.now(), ...testimonialForm, rating: Number(testimonialForm.rating) };
      setTestimonialsList(prev => [...prev, newT]);
    }
    setIsTestimonialModalOpen(false);
    setEditingTestimonialId(null);
  };

  const monthNamesArabic = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  const daysOfWeekArabic = ['سبت', 'أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة'];

  // Calendar Days Computation
  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const startOffset = (firstDay + 1) % 7;
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < startOffset; i++) {
      days.push({ dayNumber: null });
    }
    for (let day = 1; day <= totalDays; day++) {
      const formattedMonth = String(currentMonth + 1).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
      const dateString = `${currentYear}-${formattedMonth}-${formattedDay}`;
      const dayAppts = appointments.filter((app) => app.date === dateString);
      days.push({
        dayNumber: day,
        dateString,
        appointments: dayAppts
      });
    }
    return days;
  }, [currentYear, currentMonth, appointments]);

  const selectedDateAppointments = useMemo(() => {
    return appointments.filter((app) => app.date === selectedDate);
  }, [appointments, selectedDate]);

  // System Form Handlers
  const handleOpenAddSystem = () => {
    setEditingSystemId(null);
    setSystemForm({
      title: '',
      category: '',
      description: '',
      feature1: '',
      feature2: '',
      feature3: '',
      iconId: 'Building2',
      themeId: 'emerald'
    });
    setIsSystemModalOpen(true);
  };

  const handleOpenEditSystem = (sys) => {
    setEditingSystemId(sys.id);
    setSystemForm({
      title: sys.title,
      category: sys.category,
      description: sys.description,
      feature1: sys.features[0] || '',
      feature2: sys.features[1] || '',
      feature3: sys.features[2] || '',
      iconId: sys.iconId || 'Building2',
      themeId: sys.themeId || 'emerald'
    });
    setIsSystemModalOpen(true);
  };

  const handleDeleteSystem = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا النظام؟')) {
      setSystemsList((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleSaveSystem = (e) => {
    e.preventDefault();
    if (!systemForm.title.trim() || !systemForm.category.trim()) {
      alert('يرجى كتابة اسم وتصنيف النظام');
      return;
    }

    const featuresArray = [
      systemForm.feature1.trim() || 'إدارة رقمية متكاملة',
      systemForm.feature2.trim() || 'تقارير فورية ودقيقة',
      systemForm.feature3.trim() || 'دعم فني وتحديثات مستمرة'
    ];

    if (editingSystemId) {
      setSystemsList((prev) =>
        prev.map((s) =>
          s.id === editingSystemId
            ? {
                ...s,
                title: systemForm.title,
                category: systemForm.category,
                description: systemForm.description,
                features: featuresArray,
                iconId: systemForm.iconId,
                themeId: systemForm.themeId
              }
            : s
        )
      );
    } else {
      const newSys = {
        id: Date.now(),
        title: systemForm.title,
        category: systemForm.category,
        description: systemForm.description,
        features: featuresArray,
        iconId: systemForm.iconId,
        themeId: systemForm.themeId
      };
      setSystemsList((prev) => [newSys, ...prev]);
    }

    setIsSystemModalOpen(false);
  };

  // Admin Form Handlers
  const handleOpenAddAdmin = () => {
    setAdminForm({
      firstName: '',
      lastName: '',
      username: '',
      phone: '',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      password: '',
      role: 'مشرف نظام'
    });
    setIsAdminModalOpen(true);
  };

  const handleSaveAdmin = (e) => {
    e.preventDefault();
    if (!adminForm.firstName.trim() || !adminForm.username.trim() || !adminForm.password.trim()) {
      alert('يرجى كتابة الاسم واسم المستخدم وكلمة المرور');
      return;
    }

    const newAdmin = {
      id: Date.now(),
      firstName: adminForm.firstName,
      lastName: adminForm.lastName,
      username: adminForm.username,
      phone: adminForm.phone || '0590000000',
      avatar: adminForm.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      role: adminForm.role,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setAdminsList((prev) => [newAdmin, ...prev]);
    setIsAdminModalOpen(false);
  };

  const handleDeleteAdmin = (id) => {
    if (adminsList.length <= 1) {
      alert('لا يمكن حذف المشرف الأخير في النظام');
      return;
    }
    if (window.confirm('هل أنت متأكد من حذف هذا المشرف؟')) {
      setAdminsList((prev) => prev.filter((a) => a.id !== id));
    }
  };

  // Helper to get Icon Component
  const getIconComponent = (iconId) => {
    const found = AVAILABLE_ICONS.find((i) => i.id === iconId);
    return found ? found.icon : Building2;
  };

  // Helper to get Color Theme
  const getColorTheme = (themeId) => {
    const found = COLOR_THEMES.find((t) => t.id === themeId);
    return found || COLOR_THEMES[0];
  };

  return (
    <div 
      className="min-h-screen w-full text-slate-900 flex relative overflow-hidden font-sans select-none"
      style={{ backgroundColor: 'var(--bg-main)' }}
      dir="rtl"
    >
      {/* ========================================================
          0. ANIMATED BACKGROUND (خلفية متحركة)
      ======================================================== */}
      <AnimatedBackground />

      {/* ========================================================
          2. GLASS SIDEBAR (Matching Website Light Aesthetic)
      ======================================================== */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside 
        className={`fixed lg:sticky top-0 right-0 h-screen w-72 z-40 flex flex-col justify-between p-6 transition-all duration-300 glass-sidebar ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 p-2 flex items-center justify-center shadow-xs">
                <svg viewBox="0 0 257 246" className="w-full h-full">
                  <defs>
                    <mask id="dash-logo-mask-new">
                      <rect x="-1000" y="-1000" width="3000" height="3000" fill="white" />
                      <circle cx="126" cy="111" r="56" fill="black" />
                      <polygon points="109,164 166,135 238,207 181,238" fill="black" />
                    </mask>
                  </defs>
                  <g mask="url(#dash-logo-mask-new)">
                    <circle cx="126" cy="113" r="91" fill="#101010" />
                  </g>
                  <path d="M 126 154 L 152 137 L 202 184 L 202 214.5 L 178.5 214.5 Z" fill="#101010" />
                  <circle cx="126" cy="116" r="21" fill="#004bfc" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold font-sora text-slate-900 tracking-wide flex items-center gap-2">
                  مديري
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h2>
                <p className="text-[11px] text-slate-500 font-mono">لوحة تحكم الأدمن</p>
              </div>
            </div>

            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5">
            {[
              { id: 'overview', label: 'لوحة المؤشرات', icon: LayoutDashboard },
              { id: 'calendar', label: 'التقويم والمواعيد', icon: CalendarIcon, badge: appointments.length },
              { id: 'systems', label: 'إدارة الأنظمة (CRUD)', icon: Layers, badge: systemsList.length },
              { id: 'admins', label: 'إدارة المشرفين (Admins)', icon: Users, badge: adminsList.length },
              { id: 'bookings', label: 'قائمة الحجوزات', icon: CalendarCheck },
              { id: 'testimonials', label: 'آراء العملاء', icon: MessageSquare },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#004bfc] text-white shadow-md shadow-blue-500/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-white' : 'text-slate-500'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Card & Logout */}
        <div className="pt-6 border-t border-slate-200/80 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <img 
              src={adminsList[0]?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'} 
              alt="Admin" 
              className="w-10 h-10 rounded-full object-cover border border-slate-200"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-slate-900 truncate">
                {adminsList[0] ? `${adminsList[0].firstName} ${adminsList[0].lastName}` : 'مدير النظام'}
              </h4>
              <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {adminsList[0]?.role || 'المدير العام'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={onNavigateHome}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-all cursor-pointer shadow-xs"
            >
              <ExternalLink size={14} />
              <span>الموقع</span>
            </button>

            <button
              onClick={onLogout}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer shadow-xs"
            >
              <LogOut size={14} />
              <span>خروج</span>
            </button>
          </div>
        </div>
      </aside>

      {/* ========================================================
          3. MAIN CONTENT AREA (Site Color Glassmorphism)
      ======================================================== */}
      <main className="flex-1 min-h-screen flex flex-col z-10 overflow-y-auto px-4 sm:px-8 py-5 max-w-7xl mx-auto w-full">
        {/* Compact Minimal Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/60">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl glass-pill text-slate-700 hover:text-slate-900 cursor-pointer"
            >
              <Menu size={18} />
            </button>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
              <span>لوحة الإدارة المباشرة</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-medium text-slate-700">
              <CalendarCheck size={13} className="text-[#004bfc]" />
              <span>{new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            TAB: OVERVIEW
        ======================================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {[
                {
                  title: 'إجمالي المواعيد المحجوزة',
                  val: `${appointments.length * 15 + 88}`,
                  delta: '+18% هذا الشهر',
                  icon: CalendarCheck,
                  accent: 'text-[#004bfc]',
                  iconBg: 'bg-blue-50/80 text-[#004bfc] border border-blue-100'
                },
                {
                  title: 'الأنظمة المتاحة النشطة',
                  val: `${systemsList.length} أنظمة`,
                  delta: 'قابلة للإضافة والتعديل',
                  icon: Layers,
                  accent: 'text-purple-600',
                  iconBg: 'bg-purple-50/80 text-purple-600 border border-purple-100'
                },
                {
                  title: 'المشرفون المصرح لهم',
                  val: `${adminsList.length} مدراء`,
                  delta: 'إدارة كاملة للصلاحيات',
                  icon: Users,
                  accent: 'text-emerald-600',
                  iconBg: 'bg-emerald-50/80 text-emerald-600 border border-emerald-100'
                },
                {
                  title: 'مواعيد اليوم المجدولة',
                  val: `${selectedDateAppointments.length}`,
                  delta: 'محدثة بالتقويم',
                  icon: Clock,
                  accent: 'text-cyan-600',
                  iconBg: 'bg-cyan-50/80 text-cyan-600 border border-cyan-100'
                }
              ].map((kpi, idx) => {
                const Icon = kpi.icon;
                return (
                  <div
                    key={idx}
                    className="relative rounded-3xl p-5 glass-surface glass-surface-hover"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-700">{kpi.title}</span>
                      <div className={`p-2 rounded-2xl ${kpi.iconBg}`}>
                        <Icon size={18} />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 mb-1.5">{kpi.val}</div>
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <TrendingUp size={13} className={kpi.accent} />
                      <span>{kpi.delta}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions & Live Systems Preview */}
            <div className="p-6 rounded-3xl glass-surface space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-sora flex items-center gap-2">
                    <Layers size={18} className="text-[#004bfc]" />
                    <span>الأنظمة الحالية المفعلة على المنصة</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">يمكنك إضافة، تعديل، وحذف أي نظام من تبويب إدارة الأنظمة</p>
                </div>
                <button
                  onClick={() => setActiveTab('systems')}
                  className="px-4 py-2 rounded-full bg-[#101010] hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                >
                  <Plus size={14} />
                  <span>إدارة الأنظمة (CRUD)</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {systemsList.map((sys) => {
                  const Icon = getIconComponent(sys.iconId);
                  const theme = getColorTheme(sys.themeId);
                  return (
                    <div key={sys.id} className="p-4 rounded-2xl glass-pill hover:bg-white/80 transition-all flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${theme.bg} ${theme.color} flex-shrink-0`}>
                        <Icon size={22} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-bold text-slate-900 truncate">{sys.title}</h4>
                        <span className="text-[10px] text-slate-500">{sys.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: SYSTEMS CRUD (إدارة وتعديل وحذف وإضافة الأنظمة)
        ======================================================== */}
        {activeTab === 'systems' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Minimal Toolbar */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">الأنظمة المتاحة ({systemsList.length})</span>
              <button
                onClick={handleOpenAddSystem}
                className="px-5 py-2.5 rounded-full bg-[#004bfc] hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <Plus size={16} />
                <span>إضافة نظام جديد</span>
              </button>
            </div>

            {/* EXACT MATCH CARDS GRID (مع لمسة الجلاسمورفيزم الزجاجي) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {systemsList.map((sys) => {
                const Icon = getIconComponent(sys.iconId);
                const theme = getColorTheme(sys.themeId);

                return (
                  <div 
                    key={sys.id} 
                    className="glass-surface glass-surface-hover p-6 rounded-3xl flex flex-col justify-between min-h-[420px] relative overflow-hidden text-slate-900 group"
                  >
                    {/* Top actions toolbar on card */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 z-10">
                      <button
                        onClick={() => handleOpenEditSystem(sys)}
                        title="تعديل هذا النظام"
                        className="w-8 h-8 rounded-full glass-pill hover:bg-blue-50 text-slate-600 hover:text-[#004bfc] flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteSystem(sys.id)}
                        title="حذف هذا النظام"
                        className="w-8 h-8 rounded-full glass-pill hover:bg-rose-50 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    {/* Top Content */}
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${theme.bg} ${theme.color} group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                          <Icon size={28} />
                        </div>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full glass-pill text-slate-700 ml-16">
                          {sys.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2 font-sora leading-snug group-hover:text-[#004bfc] transition-colors">
                        {sys.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed mb-5 line-clamp-3">
                        {sys.description}
                      </p>
                    </div>

                    {/* Features list & Action CTA (Matching Home Page) */}
                    <div>
                      <div className="border-t border-slate-200/60 pt-4 mb-5 space-y-2">
                        {sys.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004bfc] flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="w-full bg-[#101010] hover:bg-[#004bfc] text-white py-2.5 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors">
                        <span>معاينة كرت الصفحة الرئيسية</span>
                        <ArrowLeft size={13} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: ADMINS MANAGEMENT (إدارة المشرفين بالكامل)
        ======================================================== */}
        {activeTab === 'admins' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Minimal Toolbar */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-600 font-medium">المشرفون المسجلون ({adminsList.length})</span>
              <button
                onClick={handleOpenAddAdmin}
                className="px-5 py-2.5 rounded-full bg-[#101010] hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <UserPlus size={16} />
                <span>إضافة أدمن جديد</span>
              </button>
            </div>

            {/* Admins Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminsList.map((admin) => (
                <div
                  key={admin.id}
                  className="p-6 rounded-3xl glass-surface glass-surface-hover flex flex-col justify-between space-y-5"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={admin.avatar}
                        alt={admin.firstName}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-200 shadow-xs"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80';
                        }}
                      />
                      <div>
                        <h3 className="text-base font-bold text-slate-900 font-sora">
                          {admin.firstName} {admin.lastName}
                        </h3>
                        <p className="text-xs text-[#004bfc] font-mono mt-0.5">@{admin.username}</p>
                        <span className="inline-block text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-[#004bfc] font-semibold border border-blue-200 mt-1.5">
                          {admin.role}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteAdmin(admin.id)}
                      className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 transition-colors cursor-pointer"
                      title="حذف هذا المشرف"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-150 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Phone size={13} className="text-slate-400" />
                        <span>رقم الجوال:</span>
                      </span>
                      <span className="text-slate-900 font-mono font-medium">{admin.phone}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-emerald-600" />
                        <span>الصلاحية:</span>
                      </span>
                      <span className="text-emerald-600 font-bold">كاملة (Super Admin)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span>تاريخ الإضافة: {admin.createdAt}</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      نشط
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: CALENDAR & BOOKINGS (التقويم التفاعلي)
        ======================================================== */}
        {activeTab === 'calendar' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-3">
                <span className="text-base sm:text-lg font-bold font-sora text-slate-900">
                  {monthNamesArabic[currentMonth]} {currentYear}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-[#004bfc] border border-blue-200 font-semibold">
                  {appointments.length} موعد مجدول
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (currentMonth === 11) {
                      setCurrentMonth(0);
                      setCurrentYear((prev) => prev + 1);
                    } else {
                      setCurrentMonth((prev) => prev + 1);
                    }
                  }}
                  className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-1 text-xs shadow-xs"
                >
                  <ChevronRight size={15} />
                  <span>الشهر التالي</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentMonth(8);
                    setCurrentYear(2026);
                    setSelectedDate('2026-09-20');
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#004bfc] text-white text-xs font-semibold cursor-pointer shadow-xs"
                >
                  اليوم
                </button>
                <button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentMonth(11);
                      setCurrentYear((prev) => prev - 1);
                    } else {
                      setCurrentMonth((prev) => prev - 1);
                    }
                  }}
                  className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-1 text-xs shadow-xs"
                >
                  <span>الشهر السابق</span>
                  <ChevronLeft size={15} />
                </button>
              </div>
            </div>

            {/* Calendar Grid + Details Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-5 rounded-3xl glass-surface">
                <div className="grid grid-cols-7 gap-2 mb-3 text-center text-xs font-bold text-slate-500 pb-2 border-b border-white/60">
                  {daysOfWeekArabic.map((d, idx) => (
                    <div key={idx} className="py-1">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((cell, idx) => {
                    if (!cell.dayNumber) {
                      return <div key={`empty-${idx}`} className="h-20 sm:h-24 rounded-2xl opacity-20 border border-dashed border-slate-300" />;
                    }

                    const isSelected = selectedDate === cell.dateString;
                    const hasAppointments = cell.appointments && cell.appointments.length > 0;

                    return (
                      <div
                        key={cell.dateString}
                        onClick={() => setSelectedDate(cell.dateString)}
                        className={`h-20 sm:h-24 rounded-2xl p-2 sm:p-2.5 transition-all duration-200 cursor-pointer flex flex-col justify-between relative ${
                          isSelected
                            ? 'bg-[#004bfc] text-white border-2 border-white shadow-lg shadow-blue-500/30'
                            : hasAppointments
                            ? 'glass-pill bg-blue-50/60 border-blue-200/80 hover:bg-white/80'
                            : 'glass-pill hover:bg-white/90'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs sm:text-sm font-bold font-sora ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                            {cell.dayNumber}
                          </span>
                          {hasAppointments && (
                            <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-[#004bfc]'}`} />
                          )}
                        </div>

                        {hasAppointments && (
                          <div className="space-y-1 overflow-hidden">
                            {cell.appointments.slice(0, 2).map((app, i) => (
                              <div 
                                key={i} 
                                className={`text-[10px] truncate px-1.5 py-0.5 rounded-md font-medium ${
                                  isSelected 
                                    ? 'bg-white/25 text-white' 
                                    : 'glass-pill text-slate-800'
                                }`}
                              >
                                {app.time} {app.client.split(' ')[0]}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Day Schedule Panel */}
              <div className="p-6 rounded-3xl glass-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/60">
                    <div>
                      <span className="text-[11px] text-slate-500">مواعيد اليوم المحدد</span>
                      <h3 className="text-base font-bold font-sora text-slate-900 mt-0.5">{selectedDate}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-blue-50/90 text-[#004bfc] border border-blue-200">
                      {selectedDateAppointments.length} مواعيد
                    </span>
                  </div>

                  {selectedDateAppointments.length === 0 ? (
                    <div className="py-12 text-center text-slate-500 space-y-2">
                      <CalendarIcon size={24} className="mx-auto text-slate-400" />
                      <p className="text-xs">لا توجد مواعيد في هذا اليوم.</p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[420px] overflow-y-auto pr-1 no-scrollbar">
                      {selectedDateAppointments.map((app) => (
                        <div key={app.id} className="p-3.5 rounded-2xl glass-pill space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[#004bfc] font-bold">{app.time}</span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {app.status}
                            </span>
                          </div>
                          <div className="font-bold text-slate-900">{app.client}</div>
                          <div className="text-slate-500">{app.system}</div>
                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60">
                            <span className="font-mono text-slate-500">{app.phone}</span>
                            <a href={`https://wa.me/${app.phone}`} target="_blank" rel="noreferrer" className="text-[#004bfc] font-semibold hover:underline">
                              واتساب ←
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/60 mt-4">
                  <button
                    onClick={() => {
                      const newAppt = {
                        id: Date.now(),
                        client: 'عميل جديد (حجز يدوي)',
                        phone: '0590000000',
                        system: systemsList[0]?.title || 'نظام إدارة العيادات',
                        date: selectedDate,
                        time: '12:00 م',
                        status: 'مؤكد',
                        notes: 'تمت الإضافة من لوحة الأدمن'
                      };
                      setAppointments((prev) => [newAppt, ...prev]);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#101010] hover:bg-slate-800 text-white flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Plus size={15} />
                    <span>إضافة موعد في هذا اليوم</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: BOOKINGS LIST
        ======================================================== */}
        {activeTab === 'bookings' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="p-4 sm:p-5 rounded-3xl glass-surface flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="ابحث بالاسم، النظام، أو الهاتف..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-2.5 pr-10 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#004bfc]"
                />
                <Search size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>

              <div className="flex items-center gap-2">
                {['all', 'مؤكد', 'قيد المراجعة'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
                      statusFilter === s 
                        ? 'bg-[#004bfc] text-white shadow-xs' 
                        : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s === 'all' ? 'الكل' : s}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl glass-surface overflow-hidden">
              <table className="w-full text-right text-xs sm:text-sm">
                <thead className="bg-white/40 border-b border-white/60 text-slate-500 text-xs font-semibold">
                  <tr>
                    <th className="p-4">العميل</th>
                    <th className="p-4">النظام المطلوب</th>
                    <th className="p-4">التاريخ</th>
                    <th className="p-4">الوقت</th>
                    <th className="p-4">الحالة</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/50 text-slate-800">
                  {appointments.map((b) => (
                    <tr key={b.id} className="hover:bg-white/50 transition-colors">
                      <td className="p-4">
                        <div className="font-bold text-slate-900">{b.client}</div>
                        <div className="text-xs text-slate-500 font-mono mt-0.5">{b.phone}</div>
                      </td>
                      <td className="p-4 text-slate-700 font-medium">{b.system}</td>
                      <td className="p-4 font-mono text-slate-600">{b.date}</td>
                      <td className="p-4 font-mono text-[#004bfc] font-semibold">{b.time}</td>
                      <td className="p-4">
                        <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================
            TAB: TESTIMONIALS
        ======================================================== */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold font-sora text-slate-900 flex items-center gap-2">
                  <MessageSquare size={22} className="text-[#004bfc]" />
                  آراء العملاء
                </h2>
                <p className="text-xs text-slate-500 mt-1">استعرض وأدر تقييمات العملاء الظاهرة في الصفحة الرئيسية</p>
              </div>
              <button
                onClick={() => {
                  setTestimonialForm({ name: '', role: '', content: '', rating: 5, avatar: '' });
                  setEditingTestimonialId(null);
                  setIsTestimonialModalOpen(true);
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#004bfc] text-white text-xs font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all cursor-pointer"
              >
                <Plus size={16} />
                إضافة رأي جديد
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'إجمالي الآراء', value: testimonialsList.length, icon: MessageSquare, color: 'text-[#004bfc]', bg: 'bg-blue-50 border-blue-200' },
                { label: 'متوسط التقييم', value: testimonialsList.length ? (testimonialsList.reduce((s,t) => s + t.rating, 0) / testimonialsList.length).toFixed(1) + ' ★' : '—', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50 border-amber-200' },
                { label: 'تقييم 5 نجوم', value: testimonialsList.filter(t => t.rating === 5).length, icon: ThumbsUp, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
                { label: 'آراء موثقة', value: testimonialsList.filter(t => t.avatar).length, icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl border glass-surface`}>
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${stat.bg}`}>
                      <Icon size={16} className={stat.color} />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900 leading-none">{stat.value}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Testimonials Grid */}
            {testimonialsList.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 glass-surface rounded-3xl text-center">
                <Quote size={40} className="text-slate-300 mb-4" />
                <p className="text-slate-500 font-semibold">لا توجد آراء حتى الآن</p>
                <p className="text-xs text-slate-400 mt-1">ابدأ بإضافة رأي عميل من الزر أعلاه</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {testimonialsList.map((t) => (
                  <div key={t.id} className="glass-surface rounded-3xl p-5 flex flex-col gap-3 border border-white/60 hover:shadow-lg transition-all">
                    {/* Quote Icon */}
                    <Quote size={18} className="text-[#004bfc]/40" />
                    {/* Content */}
                    <p className="text-sm text-slate-700 leading-relaxed flex-1">{t.content}</p>
                    {/* Rating */}
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} size={13} className={s <= t.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'} />
                      ))}
                    </div>
                    {/* Author */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2.5">
                        {t.avatar ? (
                          <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover border border-slate-200" />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-[#004bfc]/10 border border-blue-200 flex items-center justify-center text-[#004bfc] font-bold text-sm">
                            {t.name.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="text-xs font-bold text-slate-900">{t.name}</p>
                          <p className="text-[10px] text-slate-500">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => {
                            setEditingTestimonialId(t.id);
                            setTestimonialForm({ name: t.name, role: t.role, content: t.content, rating: t.rating, avatar: t.avatar || '' });
                            setIsTestimonialModalOpen(true);
                          }}
                          className="p-1.5 rounded-xl bg-blue-50 text-[#004bfc] hover:bg-blue-100 transition-all cursor-pointer"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm('هل أنت متأكد من حذف هذا الرأي؟')) {
                              setTestimonialsList(prev => prev.filter(x => x.id !== t.id));
                            }
                          }}
                          className="p-1.5 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-100 transition-all cursor-pointer"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* ========================================================
          MODAL: ADD / EDIT SYSTEM
      ======================================================== */}
      {isSystemModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/35 backdrop-blur-md overflow-y-auto">
          <div className="glass-surface border-2 border-white rounded-3xl w-full max-w-2xl p-6 sm:p-8 shadow-2xl relative my-8 text-slate-900">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#004bfc]">
                  <Layers size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sora text-slate-900">
                    {editingSystemId ? 'تعديل بيانات النظام' : 'إضافة نظام إداري جديد'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    املأ البيانات ليظهر الكرت في الصفحة الرئيسية واللوحة بنفس التنسيق
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsSystemModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveSystem} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">عنوان / اسم النظام</label>
                  <input
                    type="text"
                    value={systemForm.title}
                    onChange={(e) => setSystemForm({ ...systemForm, title: e.target.value })}
                    placeholder="مثال: نظام إدارة العيادات"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">التصنيف</label>
                  <input
                    type="text"
                    value={systemForm.category}
                    onChange={(e) => setSystemForm({ ...systemForm, category: e.target.value })}
                    placeholder="مثال: القطاع الطبي"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">الوصف المختصر للنظام</label>
                <textarea
                  value={systemForm.description}
                  onChange={(e) => setSystemForm({ ...systemForm, description: e.target.value })}
                  rows={2}
                  placeholder="حل متكامل لإدارة الحجوزات والعمليات الرقمية والتقارير..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">المزايا والخصائص (3 نقاط رئيسية)</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    value={systemForm.feature1}
                    onChange={(e) => setSystemForm({ ...systemForm, feature1: e.target.value })}
                    placeholder="الميزة 1: مثلاً إدارة المواعيد والملفات الرقمية"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                  />
                  <input
                    type="text"
                    value={systemForm.feature2}
                    onChange={(e) => setSystemForm({ ...systemForm, feature2: e.target.value })}
                    placeholder="الميزة 2: مثلاً ربط نقاط البيع والفواتير الضريبية"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                  />
                  <input
                    type="text"
                    value={systemForm.feature3}
                    onChange={(e) => setSystemForm({ ...systemForm, feature3: e.target.value })}
                    placeholder="الميزة 3: مثلاً لوحة تحليلات وتقارير سحابية"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">اختر أيقونة النظام</label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 max-h-36 overflow-y-auto p-2 rounded-2xl bg-slate-50 border border-slate-200">
                  {AVAILABLE_ICONS.map((item) => {
                    const IconComp = item.icon;
                    const isSelected = systemForm.iconId === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setSystemForm({ ...systemForm, iconId: item.id })}
                        className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 border-[#004bfc] text-[#004bfc]'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                        title={item.name}
                      >
                        <IconComp size={20} />
                        <span className="text-[9px] truncate w-full text-center">{item.name.split('/')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">اختر نسق الألوان</label>
                <div className="flex flex-wrap gap-2">
                  {COLOR_THEMES.map((theme) => {
                    const isSelected = systemForm.themeId === theme.id;
                    return (
                      <button
                        type="button"
                        key={theme.id}
                        onClick={() => setSystemForm({ ...systemForm, themeId: theme.id })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#004bfc] bg-blue-50/50 text-[#004bfc] shadow-xs'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full ${theme.bg} ${theme.color} border`} />
                        <span>{theme.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => setIsSystemModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer font-medium"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#004bfc] hover:bg-blue-700 text-white font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  {editingSystemId ? 'حفظ التعديلات' : 'إضافة النظام فوراً'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: ADD NEW ADMIN
      ======================================================== */}
      {isAdminModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-8 text-slate-900">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900">
                  <UserPlus size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sora text-slate-900">إضافة مشرف (Admin) جديد</h3>
                  <p className="text-xs text-slate-500">إدخال بيانات الاعتماد وتصريح الدخول للوحة التحكم</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAdminModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveAdmin} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">الاسم الأول</label>
                  <input
                    type="text"
                    value={adminForm.firstName}
                    onChange={(e) => setAdminForm({ ...adminForm, firstName: e.target.value })}
                    placeholder="مثال: محمد"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">الاسم الثاني / العائلة</label>
                  <input
                    type="text"
                    value={adminForm.lastName}
                    onChange={(e) => setAdminForm({ ...adminForm, lastName: e.target.value })}
                    placeholder="مثال: النجار"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">اسم المستخدم (Username)</label>
                  <input
                    type="text"
                    value={adminForm.username}
                    onChange={(e) => setAdminForm({ ...adminForm, username: e.target.value })}
                    placeholder="mohammad_admin"
                    dir="ltr"
                    className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5">رقم الجوال</label>
                  <input
                    type="text"
                    value={adminForm.phone}
                    onChange={(e) => setAdminForm({ ...adminForm, phone: e.target.value })}
                    placeholder="0599000000"
                    dir="ltr"
                    className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">كلمة السر (Password)</label>
                <div className="relative">
                  <input
                    type={showAdminPassword ? 'text' : 'password'}
                    value={adminForm.password}
                    onChange={(e) => setAdminForm({ ...adminForm, password: e.target.value })}
                    placeholder="••••••••••••"
                    dir="ltr"
                    className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-10 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                    required
                  />
                  <Lock size={16} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <button
                    type="button"
                    onClick={() => setShowAdminPassword(!showAdminPassword)}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showAdminPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">رابط الصورة الشخصية (Avatar URL)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={adminForm.avatar}
                    onChange={(e) => setAdminForm({ ...adminForm, avatar: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    dir="ltr"
                    className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] text-xs"
                  />
                  <img
                    src={adminForm.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}
                    alt="Preview"
                    className="w-9 h-9 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80';
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">المسمى الوظيفي / الرتبة</label>
                <select
                  value={adminForm.role}
                  onChange={(e) => setAdminForm({ ...adminForm, role: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:bg-white focus:border-[#004bfc]"
                >
                  <option value="المدير العام">المدير العام</option>
                  <option value="مسؤول العمليات والمواعيد">مسؤول العمليات والمواعيد</option>
                  <option value="مشرف تقني">مشرف تقني</option>
                  <option value="دعم فني ومبيعات">دعم فني ومبيعات</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAdminModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer font-medium"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#101010] hover:bg-slate-800 text-white font-bold transition-all shadow-md cursor-pointer"
                >
                  حفظ وإضافة المشرف
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: ADD / EDIT TESTIMONIAL
      ======================================================== */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/35 backdrop-blur-md overflow-y-auto">
          <div className="glass-surface border-2 border-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative my-8 text-slate-900">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#004bfc]">
                  <Quote size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sora text-slate-900">
                    {editingTestimonialId ? 'تعديل رأي العميل' : 'إضافة رأي عميل جديد'}
                  </h3>
                  <p className="text-xs text-slate-500">سيظهر هذا الرأي في صفحة آراء العملاء</p>
                </div>
              </div>
              <button
                onClick={() => setIsTestimonialModalOpen(false)}
                className="p-1.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveTestimonial} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5 text-xs">اسم العميل</label>
                  <input
                    type="text"
                    value={testimonialForm.name}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                    placeholder="مثال: د. خالد الحربي"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1.5 text-xs">المسمى / الوظيفة</label>
                  <input
                    type="text"
                    value={testimonialForm.role}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                    placeholder="مثال: صاحب عيادة أسنان"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5 text-xs">نص الرأي / التقييم</label>
                <textarea
                  value={testimonialForm.content}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                  rows={3}
                  placeholder="مثال: مديري غيّر طريقة عملي كلياً! الحجوزات أصبحت تلقائية..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] text-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 text-xs">التقييم بالنجوم</label>
                <div className="flex items-center gap-1.5">
                  {[1,2,3,4,5].map(s => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setTestimonialForm({ ...testimonialForm, rating: s })}
                      className="cursor-pointer transition-transform hover:scale-110"
                    >
                      <Star size={24} className={s <= testimonialForm.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300 fill-slate-200'} />
                    </button>
                  ))}
                  <span className="text-xs text-slate-500 mr-2">{testimonialForm.rating} من 5</span>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5 text-xs">رابط الصورة الشخصية (اختياري)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={testimonialForm.avatar}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    dir="ltr"
                    className="w-full text-right bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#004bfc] text-xs"
                  />
                  {testimonialForm.avatar && (
                    <img
                      src={testimonialForm.avatar}
                      alt="Preview"
                      className="w-10 h-10 rounded-xl object-cover border border-slate-200 flex-shrink-0"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsTestimonialModalOpen(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer font-medium text-xs"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#004bfc] hover:bg-blue-700 text-white font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer text-xs"
                >
                  {editingTestimonialId ? 'حفظ التعديلات' : 'إضافة الرأي'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
