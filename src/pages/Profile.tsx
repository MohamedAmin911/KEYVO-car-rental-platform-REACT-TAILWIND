
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/features/authSlice';
import { cancelBooking } from '../store/features/bookingSlice';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { User, Mail, Calendar, Hash, Car, LogOut, Clock, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { bookings } = useSelector((state: RootState) => state.bookings);
  const { items: vehicles } = useSelector((state: RootState) => state.vehicles);

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const getVehicle = (id: string) => vehicles.find(v => v.id === id);

  if (!user) return null;

  return (
    <div className="px-6 md:px-12 py-12 pb-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 space-y-8">
           <div className="card-gradient border border-white/10 rounded-[40px] p-8 text-center space-y-6 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-24 bg-primary/20 -z-10" />
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-black font-black text-3xl mx-auto border-4 border-bg-dark shadow-2xl">
                 {user.name.charAt(0)}
              </div>
              <div>
                 <h2 className="text-xl font-bold">{user.name}</h2>
                 <p className="text-white/40 text-xs font-bold mt-1 uppercase tracking-widest">{user.email}</p>
              </div>
              <div className="pt-6 border-t border-white/5 space-y-4">
                 <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-white/5" onClick={() => {}}>
                    <User size={16} />
                    <span>تعديل الملف الشخصي</span>
                 </Button>
                 <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:bg-red-500/10" onClick={handleLogout}>
                    <LogOut size={16} />
                    <span>تسجيل الخروج</span>
                 </Button>
              </div>
           </div>

           <div className="bg-primary/5 rounded-[30px] p-6 border border-primary/10">
              <h3 className="text-xs font-black uppercase text-white/20 mb-4 tracking-widest">إحصائياتك</h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-1">
                    <div className="text-xl font-black">{bookings.length}</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase">إجمالي الحجوزات</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-xl font-black">
                      {bookings.reduce((acc, b) => acc + b.totalPrice, 0).toLocaleString()}
                    </div>
                    <div className="text-[10px] text-white/40 font-bold uppercase">إجمالي الإنفاق (ج.م)</div>
                 </div>
              </div>
           </div>
        </aside>

        {/* Content */}
        <main className="flex-1 space-y-10">
           <div className="flex justify-between items-end">
              <div>
                 <h1 className="text-3xl font-black italic">حجوزاتي <span className="text-primary italic">الحالية</span></h1>
                 <p className="text-white/40 text-sm font-bold mt-1 uppercase tracking-widest">إدارة رحلاتك القادمة والسابقة</p>
              </div>
           </div>

           <div className="space-y-6">
              {bookings.length > 0 ? (
                bookings.map((booking) => {
                  const car = getVehicle(booking.vehicleId);
                  return (
                    <motion.div 
                      key={booking.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="card-gradient border border-white/10 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
                    >
                       <div className="w-full md:w-40 h-28 bg-white/5 rounded-2xl p-2 flex items-center justify-center overflow-hidden">
                          <img src={car?.image} alt="car" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
                       </div>

                       <div className="flex-1 text-center md:text-right space-y-2">
                          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-2">
                             <Badge variant={booking.status === 'نشط' ? 'primary' : 'default'}>{booking.status}</Badge>
                             <div className="flex items-center gap-1 text-[10px] font-bold text-white/40 uppercase">
                                <Hash size={12} />
                                <span>{booking.id}</span>
                             </div>
                          </div>
                          <h3 className="text-xl font-black">{car?.brand} {car?.model}</h3>
                          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-2">
                             <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                                <Calendar size={14} className="text-primary" />
                                <span>{new Date(booking.startDate).toLocaleDateString('ar-EG')}</span>
                             </div>
                             <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                                <Clock size={14} className="text-primary" />
                                <span>{new Date(booking.endDate).toLocaleDateString('ar-EG')}</span>
                             </div>
                          </div>
                       </div>

                       <div className="text-center md:text-left space-y-4">
                          <div className="text-2xl font-black">{booking.totalPrice.toLocaleString()} ج.م</div>
                          {booking.status === 'نشط' && (
                            <Button 
                              variant="ghost" 
                              className="text-xs text-red-500 hover:bg-red-500/10 font-black h-10"
                              onClick={() => dispatch(cancelBooking(booking.id))}
                            >
                               <XCircle size={14} className="ml-1" />
                               إلغاء الحجز
                            </Button>
                          )}
                       </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="bg-white/5 border border-dashed border-white/10 rounded-[40px] py-32 text-center space-y-6">
                   <div className="text-6xl opacity-10">📭</div>
                   <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white/40">لا توجد حجوزات حتى الآن</h3>
                      <p className="text-xs font-bold text-white/20 uppercase tracking-widest">ابدأ رحلتك الأولى مع كيـفو اليوم</p>
                   </div>
                   <Button onClick={() => navigate('/cars')}>تصفح السيارات</Button>
                </div>
              )}
           </div>
        </main>
      </div>
    </div>
  );
};
