import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../ui/Button';
import { ArrowRight, Zap, Clock, DollarSign } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const features = [
    { 
      label: 'أسطول متنوع من السيارات', 
      desc: 'اختر من مئات السيارات الفاخرة والاقتصادية',
      icon: 'car'
    },
    { 
      label: 'أسعار تنافسية مضمونة', 
      desc: 'الأفضل في السوق بخدمة عملاء ممتازة',
      icon: 'dollar'
    },
    { 
      label: 'حجز فوري وسهل', 
      desc: 'احصل على سيارتك في دقائق معدودة',
      icon: 'clock'
    },
  ];

  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'dollar':
        return <DollarSign className="w-6 h-6" />;
      case 'clock':
        return <Clock className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 pb-20 overflow-hidden bg-bg-dark">
      {/* Background overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-bg-dark via-bg-dark/95 to-bg-dark/70 z-0">
        <img src="/heroimg.jpg" alt="" className="w-full h-full object-cover" />
      </div>


      {/* Animated accent glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Gradient behind CTA text */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent z-0 via-black/80 to-bg-dark" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* right Content */}
          <div className='flex flex-row w-700 gap-50'>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
                <h2><span className="text-white block text-2xl md:text-4xl lg:text-7xl">تجربة قيادة</span></h2>
                

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                
                <i><span className="text-primary inline-block relative">
                 على مزاجك
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 1, ease: "circOut" }}
                    className="absolute -bottom-2 left-0 h-1 bg-primary shadow-[0_0_20px_rgba(239,255,0,0.8)]"
                  />
                </span></i>
              </h1>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-4 mt-20"
            >
              <Link to="/cars">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-primary text-black text-4xl font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  ابدأ الحجز الآن
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

           {/* Modern Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                  whileHover={{ 
                    x: 8,
                    boxShadow: "0 20px 40px rgba(239, 255, 0, 0.15)"
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  
                  <div className="relative px-5 py-4 bg-white/5 backdrop-blur-xl border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="shrink-0 mt-1 p-2.5 rounded-lg bg-primary/15 border border-primary/30 text-primary group-hover:bg-primary/30 transition-all"
                      >
                        {getIcon(feature.icon)}
                      </motion.div>

                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                          {feature.label}
                        </h3>
                        <p className="text-xs md:text-sm text-white/50 mt-1 group-hover:text-white/70 transition-colors">
                          {feature.desc}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="shrink-0 mt-1 text-primary/40 group-hover:text-primary transition-all"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

       
        </div>
      </div>
    </section>
  );
};
