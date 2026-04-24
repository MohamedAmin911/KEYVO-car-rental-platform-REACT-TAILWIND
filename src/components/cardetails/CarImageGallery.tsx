import React, { useState } from 'react';
import { motion } from 'motion/react';

interface CarImageGalleryProps {
  vehicle: {
    brand: string;
    model: string;
    images: string[];
  };
}

export const CarImageGallery: React.FC<CarImageGalleryProps> = ({ vehicle }) => {
  const [currentImage, setCurrentImage] = useState(vehicle.images[0]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="h-[400px] md:h-[500px] card-gradient rounded-[40px] border border-white/5 p-4 flex items-center justify-center relative overflow-hidden"
    >
      

      {/* Main Image */}
      <img
        src={currentImage}
        alt={vehicle.model}
        className="w-full h-full object-cover rounded-[32px] transition-all duration-300"
        referrerPolicy="no-referrer"
      />

      {/* Thumbnails */}
      <div className="absolute bottom-10 left-10 right-10 flex gap-4 h-24">
        {vehicle.images.map((img) => (
          <div
            key={img}
            onClick={() => setCurrentImage(img)}
            className={`flex-1 border rounded-2xl p-2 cursor-pointer overflow-hidden backdrop-blur-sm transition-all
              ${currentImage === img 
                ? 'border-primary scale-105' 
                : 'bg-white/5 border-white/10 hover:border-primary'}
            `}
          >
            <img
              src={img}
              alt="thumb"
              className={`w-full h-full object-cover rounded-xl transition-opacity duration-300
                ${currentImage === img ? 'opacity-100' : 'opacity-40 hover:opacity-100'}
              `}
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};