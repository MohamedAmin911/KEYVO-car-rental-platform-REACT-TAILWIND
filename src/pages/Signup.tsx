
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, signupSuccess, loginFailure } from '../store/features/authSlice';
import { RootState } from '../store';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { motion } from 'motion/react';
import { Mail, Lock, User, UserPlus, ChevronLeft } from 'lucide-react';
import { Logo } from '../components/common/Logo';

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('مطلوب'),
      email: Yup.string().email('بريد إلكتروني غير صالح').required('مطلوب'),
      password: Yup.string().min(6, 'كلمة المرور قصيرة جداً').required('مطلوب'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'كلمات المرور غير متطابقة')
        .required('مطلوب'),
    }),
    onSubmit: async (values) => {
      dispatch(loginStart());
      // Simulate API call
      setTimeout(() => {
        dispatch(signupSuccess({
          id: 'new-user',
          name: values.name,
          email: values.email,
          password: values.password
        }));
        navigate('/login');
      }, 1500);
    },
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/[0.03] border border-white/10 rounded-[40px] p-8 md:p-12 space-y-8"
      >
        <div className="text-center space-y-2">
          <Link to="/" className="inline-block text-primary hover:scale-105 transition-transform mb-2">
            <Logo size="lg" />
          </Link>
          <h1 className="text-3xl font-black">إنشاء حساب</h1>
          <p className="text-white/40 font-medium text-sm">انضم لأكبر عائلة لتأجير السيارات في مصر</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-4 top-11 text-white/20" size={18} />
            <Input
              label="الاسم الكامل"
              type="text"
              placeholder="أدخل اسمك بالكامل"
              {...formik.getFieldProps('name')}
              error={formik.touched.name && formik.errors.name ? formik.errors.name : undefined}
              className="pl-12"
            />
          </div>

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

          <div className="relative">
            <Lock className="absolute left-4 top-11 text-white/20" size={18} />
            <Input
              label="تأكيد كلمة المرور"
              type="password"
              placeholder="••••••••"
              {...formik.getFieldProps('confirmPassword')}
              error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : undefined}
              className="pl-12"
            />
          </div>

          {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}

          <Button type="submit" loading={loading} className="w-full h-14 text-lg rounded-2xl shadow-xl shadow-primary/10 mt-4">
            <UserPlus size={20} className="ml-2" />
            <span>إنشاء الحساب</span>
          </Button>
        </form>

        <div className="text-center pt-4 border-t border-white/5">
          <p className="text-sm text-white/40 font-medium">
            لديك حساب بالفعل؟{' '}
            <Link to="/login" className="text-primary font-bold hover:underline">
              سجل دخولك
            </Link>
          </p>
        </div>

        <Link to="/" className="flex items-center justify-center gap-2 text-xs font-bold text-white/20 hover:text-white transition-colors">
           <ChevronLeft size={14} />
           <span>العودة للرئيسية</span>
        </Link>
      </motion.div>
    </div>
  );
};
