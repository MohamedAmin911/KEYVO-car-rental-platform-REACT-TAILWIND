import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="text-center md:text-right max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">لماذا <span className="text-primary italic">كيفـو</span>؟</h2>
          <p className="text-white/40 font-medium">نحن نوفر لك تجربة استثنائية تجمع بين الفخامة والسهولة والأمان.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={32} />,
              title: "حجز فوري",
              desc: "احجز سيارتك في أقل من دقيقتين عبر موقعنا أو تطبيقنا الذكي بكل سهولة.",
              color: "primary"
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "تأمين شامل",
              desc: "جميع سياراتنا مؤمن عليها بالكامل لضمان راحة بالك في كل كيلومتر تقطعه.",
              color: "primary"
            },
            {
              icon: <CheckCircle2 size={32} />,
              title: "شفافية الأسعار",
              desc: "لا توجد رسوم خفية أو مفاجآت. ما تراه هو ما تدفعه، بكل بساطة ووضوح.",
              color: "primary"
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-[40px] bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-sm"
            >
              {/* Neon Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 space-y-6 flex flex-col items-center md:items-start text-center md:text-right">
                <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors">
                    {feature.desc}
                  </p>
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};