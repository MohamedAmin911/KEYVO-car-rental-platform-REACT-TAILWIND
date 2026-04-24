
import React from 'react';
import { motion } from 'motion/react';

const brands = [
  { name: 'Toyota', logo: 'https://car-logos.org/wp-content/uploads/2022/08/toyota.png' },
  { name: 'Hyundai', logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/4/44/20210811230811%21Hyundai_Motor_Company_logo.svg' },
  { name: 'Nissan', logo: 'https://www.nissanusa.com/content/dam/Nissan/us/Navigation/sitesimp/nissan-logo-white.svg' },
  { name: 'Kia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/KIA_logo2.svg/250px-KIA_logo2.svg.png' },
  { name: 'Peugeot', logo: 'https://www.peugeot-eg.com/content/dam/peugeot/master/home/peugeot-logo-alt.png' },
  { name: 'Chevrolet', logo: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/portable-nav/chevrolet-bowtie-120.svg' },
  { name: 'MG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mg_logo.svg/1280px-Mg_logo.svg.png' },
  { name: 'BMW', logo: 'https://www.bmw.co.uk/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg' },
  { name: 'Mercedes', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1280px-Mercedes-Logo.svg.png?_=20230111203159' },
];

export const BrandCarousel: React.FC = () => {
  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="w-full overflow-hidden py-10  relative group">
      {/* Glossy overlays for depth */}

      <motion.div 
        className="flex gap-20 items-center justify-center whitespace-nowrap"
        animate={{ 
          x: [0, -1920] 
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {duplicatedBrands.map((brand, index) => (
          <div 
            key={`${brand.name}-${index}`} 
            className="flex flex-col items-center gap-4 group/item grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
          >
            <div className="w-20 h-20 bg-white/5 rounded-3xl geometric-border flex items-center justify-center p-4 group-hover/item:bg-primary/10 group-hover/item:border-primary/30 group-hover/item:primary-glow transition-all">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-w-full max-h-full object-contain filter brightness-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover/item:text-primary transition-colors">
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
