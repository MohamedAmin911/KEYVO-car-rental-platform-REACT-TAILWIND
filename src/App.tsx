import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Cars } from './pages/Cars';
import { CarDetails } from './pages/CarDetails';
import { Booking } from './pages/Booking';
import { Payment } from './pages/Payment';
import { Confirmation } from './pages/Confirmation';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollToTop } from './components/layout/ScrollToTop';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-bg-dark text-white flex flex-col selection:bg-primary/30 selection:text-primary">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/car/:id" element={<CarDetails />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/payment/:id" element={<Payment />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}
