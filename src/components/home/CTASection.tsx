import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Car } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-7xl h-100 mx-auto bg-primary rounded-[40px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="relative z-10 space-y-6 text-center md:text-right flex-1">
          <h2 className="text-4xl md:text-6xl text-black font-black leading-tight tracking-tighter">
            هل أنت مستعد <br /> للانطلاق؟
          </h2>
          <p className="text-black/60 font-bold max-w-sm ml-auto md:ml-0 md:mr-0">
            سجل الآن واحصل على خصم 15% على أول عملية تأجير لك مع كيـفو.
          </p>
          <Link to="/signup" className="inline-block">
            <Button variant="secondary" className="bg-black text-white px-12 h-16 text-lg hover:bg-black/80">اشترك الآن</Button>
          </Link>
        </div>
        <div className="flex-1 w-full max-w-md">
           <div className="relative aspect-square rounded-[60px] flex items-center justify-center -rotate-6">
              <img src="https://images.pexels.com/photos/32911908/pexels-photo-32911908.jpeg" className=" fill rounded-[60px]"  alt="" />
           </div>
        </div>
      </div>
    </section>
  );
};