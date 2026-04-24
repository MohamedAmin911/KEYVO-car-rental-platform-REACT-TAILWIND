
import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Landmark, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="px-6 md:px-12 py-12 flex flex-col gap-24 pb-32">
       {/* Hero Concept */}
       <section className="max-w-7xl mx-auto text-center space-y-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
             <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
                نعيد تعريف <span className="text-primary italic">الحركة</span> <br /> في مصر.
             </h1>
             <p className="text-white/40 max-w-2xl mx-auto font-medium text-lg italic uppercase">
                كيـفو ليست مجرد تطبيق لتأجير السيارات، بل هي شريكك في كل رحلة وكل مغامرة.
             </p>
          </motion.div>
       </section>

       <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
             <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                   <Target size={12} />
                   <span>رؤيتنا</span>
                </div>
                <h2 className="text-4xl font-black leading-tight">نسعى لنكون الخيار الأول <br /> لكل مسافر وسائق.</h2>
                <p className="text-white/50 leading-relaxed font-medium">
                   بدأت كيـفو من فكرة بسيطة: كيف يمكننا جعل عملية تأجير السيارات شفافة، سريعة، وموثوقة؟ في بلد نابض بالحياة مثل مصر، الحركة هي عصب الحياة، ونحن هنا لنجعلها أسهل.
                </p>
             </div>

             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                   <div className="text-4xl font-black text-primary italic">2020</div>
                   <div className="text-xs font-bold text-white/40 uppercase tracking-widest">سنة التأسيس</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black text-primary italic">150+</div>
                   <div className="text-xs font-bold text-white/40 uppercase tracking-widest">سيارة نشطة</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black text-primary italic">10K</div>
                   <div className="text-xs font-bold text-white/40 uppercase tracking-widest">عميل سعيد</div>
                </div>
                <div className="space-y-2">
                   <div className="text-4xl font-black text-primary italic">24/7</div>
                   <div className="text-xs font-bold text-white/40 uppercase tracking-widest">دعم فني</div>
                </div>
             </div>
          </div>
          
          <div className="card-gradient border border-white/10 rounded-[60px] p-4 relative overflow-hidden h-[600px]">
             <img 
               src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop" 
               alt="Journey" 
               className="w-full h-full object-cover rounded-[50px] grayscale-[0.5] opacity-60"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80" />
             <div className="absolute bottom-12 right-12 left-12 space-y-4">
                <div className="bg-primary h-1 w-20" />
                <h3 className="text-2xl font-black">رحلتنا بدأت من شوارع القاهرة...</h3>
                <p className="text-sm font-bold text-white/60 leading-relaxed italic">"آمنا دائماً أن التكنولوجيا يجب أن تخدم الإنسان بكفاءة وصدق."</p>
             </div>
          </div>
       </section>

       <section className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-gradient border border-white/5 p-12 rounded-[40px] space-y-6 flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                <Users size={32} />
             </div>
             <h3 className="text-xl font-black">مجتمعنا</h3>
             <p className="text-xs text-white/30 font-bold leading-relaxed uppercase tracking-widest">نحن نبني علاقات طويلة الأمد مع عملائنا وشركائنا.</p>
          </div>
          <div className="card-gradient border border-white/5 p-12 rounded-[40px] space-y-6 flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                <Landmark size={32} />
             </div>
             <h3 className="text-xl font-black">البيئة</h3>
             <p className="text-xs text-white/30 font-bold leading-relaxed uppercase tracking-widest">نشجع استخدام السيارات ذات الكفاءة العالية والكهربائية قريباً.</p>
          </div>
          <div className="card-gradient border border-white/5 p-12 rounded-[40px] space-y-6 flex flex-col items-center text-center">
             <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                <Heart size={32} />
             </div>
             <h3 className="text-xl font-black">قيمنا</h3>
             <p className="text-xs text-white/30 font-bold leading-relaxed uppercase tracking-widest">النزاهة، الابتكار، والاهتمام بأدق تفاصيل تجربة المستخدم.</p>
          </div>
       </section>
    </div>
  );
};
