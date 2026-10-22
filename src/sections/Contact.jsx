import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CircleCheck } from 'lucide-react';
import { personalData } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Memanggil token secara aman dari file .env
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Pesan Baru dari Portfolio - ${formData.name}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        console.error("Gagal mengirim:", result);
        setStatus('idle');
        alert("Maaf, terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('idle');
      alert("Gagal terhubung ke server. Periksa koneksi internetmu.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between pt-32 px-6 lg:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto w-full flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Bagian Teks Kiri */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="font-syne text-4xl md:text-6xl font-bold text-text-main mb-6 leading-tight tracking-tight">
                Mari bangun <br/> sesuatu bersama<span className="text-accent">.</span>
              </h2>
              <p className="font-sans text-text-muted text-lg max-w-md mb-12">
                Punya ide proyek, tawaran pekerjaan, atau sekadar ingin menyapa? Jangan ragu untuk mengirim pesan, dan pastikan tujuan sesuai dengan email yang tertera.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href={`mailto:${personalData.email}`} className="flex items-center gap-4 text-text-muted hover:text-accent transition-colors w-max group">
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-mono">{personalData.email}</span>
              </a>
              
              <div className="flex gap-4">
                <a href={personalData.socials?.[0]?.url || "#"} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 text-text-muted hover:text-white hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7.1a5.8 5.8 0 0 0-1.6-4.2c.3-.8.3-2.2-.2-3.1 0 0-1.2-.4-3.8 1.4a12.8 12.8 0 0 0-7 0C1.7 2.2.5 2.6.5 2.6c-.5.9-.5 2.3-.2 3.1a5.8 5.8 0 0 0-1.6 4.2c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.02v4"/>
                    <path d="M9 18c-3.1.9-3.1-2-3.1-2-1-.8-2.5-1-2.5-1-1-.2-.1-.2-.1-.2 1.1-.1 1.6 1 1.6 1 1 1.6 2.6 1.1 3.2.9"/>
                  </svg>
                </a>
                <a href={personalData.socials?.[1]?.url || "#"} target="_blank" rel="noreferrer" className="p-4 rounded-full bg-white/5 text-text-muted hover:text-[#0A66C2] hover:bg-white/10 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bagian Form Kanan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-dark-100 p-8 md:p-12 rounded-sm border border-white/5 relative overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-text-muted">Nama</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-text-main focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-text-muted">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-text-main focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-text-muted">Pesan</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-text-main focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-white/20"
                  placeholder="Ceritakan tentang proyekmu..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className="w-full py-4 bg-accent text-white font-syne font-bold tracking-wide flex items-center justify-center gap-3 hover:bg-accent/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'idle' && <><Send size={18} /> Kirim Pesan</>}
                {status === 'submitting' && <span className="animate-pulse">Mengirim...</span>}
                {status === 'success' && <><CircleCheck size={18} /> Terkirim!</>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <footer className="mt-32 pb-8 pt-8 flex flex-col md:flex-row items-center justify-between text-text-muted font-mono text-xs">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Dirancang & Dibangun dengan <span className="text-accent">♥</span>
        </p>
      </footer>
    </section>
  );
}