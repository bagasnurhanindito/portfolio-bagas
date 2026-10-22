import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data';

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  const introWords = "Welcome to My Portfolio.".split(" ");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden w-full">
      <AnimatePresence mode="wait">
        
        {/* 1. Layar Intro */}
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
             <div className="font-syne text-3xl sm:text-4xl md:text-6xl font-bold flex gap-2 sm:gap-3 flex-wrap justify-center px-4 text-center">
              {introWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.15, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ) : (
            
          /* 2. Konten Utama Hero (Sudah dioptimalkan untuk Mobile) */
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl text-center z-10 mt-12 md:mt-0 px-2 sm:px-0"
          >
             <p className="font-mono text-accent mb-3 sm:mb-4 tracking-wide uppercase text-xs sm:text-sm">
                Halo, saya {personalData.name}
             </p>
             
             {/* Ukuran teks berubah dinamis: text-4xl (HP) -> text-5xl (Tablet) -> text-7xl (Laptop) */}
             <h2 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 sm:mb-6 text-text-main leading-tight tracking-tight">
               {personalData.role}
             </h2>
             
             {/* Teks Bio: text-base (HP) -> text-lg (Tablet/Laptop) */}
             <p className="font-sans text-base sm:text-lg md:text-xl text-text-muted mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
               {personalData.bio}
             </p>
             
             {/* Tombol: Memanjang penuh di HP (w-full), tapi otomatis menyesuaikan (sm:w-auto) di layar lebih besar */}
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <a 
                  href="#portfolio" 
                  className="w-full sm:w-auto px-8 py-3 bg-accent text-white font-medium rounded-full transition-all hover:bg-accent/90 active:scale-95 text-sm sm:text-base"
                >
                  Lihat Karya
                </a>
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-8 py-3 border border-white/10 text-text-main font-medium rounded-full transition-all hover:border-white/30 hover:bg-white/5 active:scale-95 text-sm sm:text-base"
                >
                  Hubungi Saya
                </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}