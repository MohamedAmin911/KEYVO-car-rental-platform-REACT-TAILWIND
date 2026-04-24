
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../store/features/authSlice';
import { RootState } from '../store';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, ChevronLeft } from 'lucide-react';
import { Logo } from '../components/common/Logo';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('بريد إلكتروني غير صالح').required('مطلوب'),
      password: Yup.string().min(6, 'كلمة المرور قصيرة جداً').required('مطلوب'),
    }),
    onSubmit: async (values) => {
      dispatch(loginStart());
      // Simulate API call
      setTimeout(() => {
        if (values.password === '123456') { // Simple simulation
          dispatch(loginSuccess({
            id: '1',
            name: 'أحمد محمد',
            email: values.email
          }));
          navigate('/profile');
        } else {
          dispatch(loginFailure('كلمة المرور أو البريد الإلكتروني غير صحيح'));
        }
      }, 1500);
    },
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-12 space-y-10"
      >
        <div className="text-center space-y-4">
          <Link to="/" className="inline-block text-primary hover:scale-105 transition-transform mb-4">
            <Logo size="lg" />
          </Link>
          <h1 className="text-3xl font-black">تسجيل الدخول</h1>
          <p className="text-white/40 font-medium text-sm">مرحباً بك مجدداً في كيـفو</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-4 top-11 text-white/20" size={18} />
            <Input
              label="البريد الإلكتروني"
              type="email"
              placeholder="name@example.com"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
              className="pl-12"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-11 text-white/20" size={18} />
            <Input
              label="كلمة المرور"
              type="password"
              placeholder="••••••••"
              {...formik.getFieldProps('password')}
              error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
              className="pl-12"
            />
          </div>

          {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}

          <Button type="submit" loading={loading} className="w-full h-14 text-lg rounded-2xl shadow-xl shadow-primary/10">
            <LogIn size={20} className="ml-2" />
            <span>دخول</span>
          </Button>
        </form>

        <div className="text-center space-y-4">
          <Link to="#" className="text-xs font-bold text-white/40 hover:text-primary transition-colors">
            نسيت كلمة المرور؟
          </Link>
          <div className="pt-4 border-t border-white/5">
            <p className="text-sm text-white/40 font-medium">
              ليس لديك حساب؟{' '}
              <Link to="/signup" className="text-primary font-bold hover:underline">
                أنشئ حساباً الآن
              </Link>
            </p>
          </div>
        </div>

        <Link to="/" className="flex items-center justify-center gap-2 text-xs font-bold text-white/20 hover:text-white transition-colors">
           <ChevronLeft size={14} />
           <span>العودة للرئيسية</span>
        </Link>
      </motion.div>
    </div>
  );
};
