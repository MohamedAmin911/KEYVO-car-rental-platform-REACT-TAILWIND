
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-bg-dark/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <Link to="/" className="text-primary hover:scale-105 transition-transform inline-block">
            <Logo size="md" />
          </Link>
          <p className="text-xs text-white/30 mt-4 max-w-xs font-medium leading-relaxed">
            المنصة الرائدة لتأجير السيارات في مصر. أسطول متنوع وخدمة عملاء على مدار الساعة.
          </p>
        </div>

        <div className="flex gap-12 text-[10px] text-white/40 uppercase tracking-widest font-bold">
          <div className="flex flex-col gap-4">
            <span className="text-white/60 mb-2">الخدمات</span>
            <Link to="/cars" className="hover:text-primary">السيارات</Link>
            <Link to="/about" className="hover:text-primary">من نحن</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white/60 mb-2">الدعم</span>
            <Link to="#" className="hover:text-primary">الشروط والأحكام</Link>
            <Link to="#" className="hover:text-primary">سياسة الخصوصية</Link>
            <Link to="#" className="hover:text-primary">اتصل بنا</Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-widest font-bold">
        <div>© 2026 كيـفو لتأجير السيارات - جميع الحقوق محفوظة</div>
        <div className="flex gap-6">
          <span>فيسبوك</span>
          <span>إنستجرام</span>
          <span>تويتر</span>
        </div>
      </div>
    </footer>
  );
};
