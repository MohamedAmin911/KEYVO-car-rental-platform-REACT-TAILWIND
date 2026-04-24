
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={cn(
                'w-full max-w-lg bg-card-dark border border-white/10 rounded-3xl p-8 pointer-events-auto shadow-2xl relative overflow-hidden',
                className
              )}
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-primary/20" />
              
              <div className="flex justify-between items-center mb-6">
                {title && <h2 className="text-xl font-bold">{title}</h2>}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
