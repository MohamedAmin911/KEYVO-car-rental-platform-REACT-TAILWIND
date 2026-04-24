
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/features/authSlice';
import { setFilter } from '../../store/features/vehicleSlice';
import { Button } from '../ui/Button';
import { User, LogOut, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../common/Logo';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { filters } = useSelector((state: RootState) => state.vehicles);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ searchQuery: e.target.value }));
    if (location.pathname !== '/cars') {
      navigate('/cars');
    }
  };

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'السيارات', path: '/cars' },
    { name: 'من نحن', path: '/about' },
  ];

  return (
    <nav className="h-20 border-b border-white/10 px-6 md:px-12 flex items-center justify-between sticky top-0 bg-bg-dark/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-primary hover:scale-105 transition-transform">
          <Logo size="md" />
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-bold opacity-80">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'hover:text-primary transition-colors pb-1',
                location.pathname === link.path ? 'text-primary border-b-2 border-primary' : 'text-white'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="hidden lg:flex flex-1 max-w-md mx-8 relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/20 group-focus-within:text-primary transition-colors">
          <Search size={18} />
        </div>
        <input
          type="text"
          placeholder="ابحث عن ماركة أو موديل..."
          value={filters.searchQuery}
          onChange={handleSearchChange}
          className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm font-bold focus:outline-none focus:border-primary/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20"
        />
      </div>

      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="hidden md:flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
              <User size={18} />
              <span>{user?.name}</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => dispatch(logout())} className="text-white/40 hover:text-red-500">
              <LogOut size={18} />
            </Button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold hover:text-primary transition-colors">
              تسجيل الدخول
            </Link>
            <Link to="/signup">
              <Button>ابدأ الآن</Button>
            </Link>
          </div>
        )}
        
        <button className="md:hidden p-2 text-white/60" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-bg-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-6 font-bold"
          >
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <div className="relative group pt-2">
              <Search className="absolute left-4 top-5 text-white/20" size={18} />
              <input
                type="text"
                placeholder="ابحث..."
                value={filters.searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-white/20"
              />
            </div>
            {!isAuthenticated && (
              <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>تسجيل الدخول</Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">ابدأ الآن</Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
