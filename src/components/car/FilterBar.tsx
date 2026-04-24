
import React from 'react';
import { Search, MapPin, Calendar, Car, SlidersHorizontal, Fuel, Coins, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilters } from '../../store/features/vehicleSlice';
import { RootState } from '../../store';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';

interface CustomSelectProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, icon, value, options, onChange, placeholder, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <div 
        className="px-4 py-2 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="flex items-center gap-2 text-[10px] uppercase text-white/40 mb-1 font-bold group-hover:text-primary transition-colors">
          {icon}
          <span>{label}</span>
        </label>
        <div className="flex items-center justify-between gap-2">
          <span className={cn("text-sm font-bold truncate", !value && "text-white/30")}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown size={14} className={cn("text-white/20 transition-transform duration-300", isOpen && "rotate-180 text-primary")} />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 py-2 backdrop-blur-xl"
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                className={cn(
                  "px-4 py-3 text-sm font-bold cursor-pointer transition-colors",
                  value === opt.value ? "bg-primary text-black" : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.vehicles);
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const locations = [
    { label: 'جميع المواقع', value: '' },
    { label: 'Cairo', value: 'Cairo' },
    { label: 'Giza', value: 'Giza' },
    { label: 'Alexandria', value: 'Alexandria' }
  ];

  const brands = [
    { label: 'جميع الماركات', value: '' },
    { label: 'Toyota', value: 'Toyota' },
    { label: 'Hyundai', value: 'Hyundai' },
    { label: 'Nissan', value: 'Nissan' },
    { label: 'Kia', value: 'Kia' },
    { label: 'MG', value: 'MG' },
    { label: 'Chevrolet', value: 'Chevrolet' },
    { label: 'Peugeot', value: 'Peugeot' }
  ];

  const transmissions = [
    { label: 'الكل', value: '' },
    { label: 'Automatic', value: 'Automatic' },
    { label: 'Manual', value: 'Manual' }
  ];

  const years = [
    { label: 'أي سنة', value: '' },
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
    { label: '2019', value: '2019' }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row items-center gap-4 animate-fade-in relative z-20">
        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomSelect
            label="موقع الاستلام"
            icon={<MapPin size={10} />}
            value={filters.location}
            options={locations}
            onChange={(val) => dispatch(setFilter({ location: val }))}
            placeholder="جميع المواقع"
            className="border-b md:border-b-0 md:border-l border-white/10"
          />

          <CustomSelect
            label="الماركة"
            icon={<Car size={10} />}
            value={filters.brand}
            options={brands}
            onChange={(val) => dispatch(setFilter({ brand: val }))}
            placeholder="جميع الماركات"
            className="border-b md:border-b-0 md:border-l border-white/10"
          />

          <CustomSelect
            label="ناقل الحركة"
            icon={<Calendar size={10} />}
            value={filters.transmission}
            options={transmissions}
            onChange={(val) => dispatch(setFilter({ transmission: val }))}
            placeholder="الكل"
          />
        </div>
        
        <div className="flex gap-2 w-full md:w-auto px-2 md:px-0">
          <Button 
            variant="secondary"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={cn(
              "h-12 flex-1 md:flex-none md:w-12 rounded-xl flex items-center justify-center p-0",
              showAdvanced && "bg-primary text-black"
            )}
          >
            <SlidersHorizontal size={20} />
          </Button>
         
        </div>
      </div>

      <AnimatePresence>
        {showAdvanced && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="card-gradient border border-white/10 rounded-3xl p-6 space-y-8 animate-fade-in z-10"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-black uppercase tracking-widest text-primary italic">تصفية متقدمة</h4>
              <button 
                onClick={() => dispatch(resetFilters())}
                className="text-[10px] uppercase font-black text-white/40 hover:text-white transition-colors"
              >
                إعادة ضبط
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <label className="flex items-center gap-2 text-[10px] uppercase text-white/40 font-bold">
                    <Coins size={12} />
                    <span>أقصى سعر لليوم</span>
                  </label>
                  <span className="text-xs font-black text-primary">{filters.maxPrice.toLocaleString()} ج.م</span>
                </div>
                <input 
                  type="range"
                  min="500"
                  max="3000"
                  step="50"
                  value={filters.maxPrice}
                  onChange={(e) => dispatch(setFilter({ maxPrice: Number(e.target.value) }))}
                  className="w-full accent-primary h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                />
              </div>

              {/* Fuel Type */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] uppercase text-white/40 px-1 font-bold">
                  <Fuel size={12} />
                  <span>نوع الوقود</span>
                </label>
                <div className="flex gap-2">
                  {['Petrol', 'Gas', 'Electric'].map((type) => (
                    <button
                      key={type}
                      onClick={() => dispatch(setFilter({ fuelType: filters.fuelType === type ? '' : type }))}
                      className={cn(
                        "flex-1 py-3 rounded-xl border text-[11px] font-bold transition-all",
                        filters.fuelType === type 
                          ? "bg-primary border-primary text-black shadow-lg shadow-primary/20" 
                          : "bg-white/5 border-white/10 text-white/60 hover:border-white/30"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Model */}
              <div className="space-y-2">
                <CustomSelect
                  label="سنة الموديل"
                  icon={<Calendar size={12} />}
                  value={filters.year}
                  options={years}
                  onChange={(val) => dispatch(setFilter({ year: val }))}
                  placeholder="أي سنة"
                  className="w-full bg-white/5 border border-white/10 rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
