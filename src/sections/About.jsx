import { motion } from 'framer-motion';
import { personalData, skills, experience, certifications } from '../data'; 

export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 px-6 lg:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-syne text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-text-main"
        >
          Sekilas Tentang Saya<span className="text-accent">.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Kiri: Bio & Foto Profil */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="font-sans text-xl md:text-2xl leading-relaxed text-text-muted mb-8">
              {personalData.bio}
            </p>
            <div className="aspect-[4/5] w-full max-w-sm bg-dark-100 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               <img 
                 src="/PasFoto_Bagas.jpeg" 
                 alt="Foto Profil" 
                 className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
               />
            </div>
          </motion.div>

          {/* Kanan: Skills, Experience, & Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7 flex flex-col gap-16"
          >
            {/* Skills */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-text-main mb-6 border-b border-white/10 pb-4">Tech Stack & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 border border-white/10 rounded-full font-mono text-sm text-text-muted hover:text-accent hover:border-accent/50 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-text-main mb-6 border-b border-white/10 pb-4">Riwayat Singkat</h3>
              <div className="flex flex-col gap-8">
                {experience.map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-2">
                      <span className="font-mono text-sm text-accent w-32 shrink-0">{item.year}</span>
                      <h4 className="font-syne text-xl font-bold text-text-main group-hover:text-white transition-colors">{item.role}</h4>
                    </div>
                    <div className="sm:pl-[9.5rem]">
                      <p className="text-text-muted font-medium mb-1">{item.company}</p>
                      <p className="text-text-muted/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (Bentuk Visual / Foto yang bisa diklik) */}
            <div>
              <h3 className="font-mono text-sm uppercase tracking-widest text-text-main mb-6 border-b border-white/10 pb-4">Sertifikat & Pelatihan</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <a 
                    href={cert.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    key={index} 
                    className="flex flex-col gap-4 group cursor-pointer"
                  >
                    {/* Wadah Gambar Sertifikat */}
                    <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-sm border border-white/5 bg-dark-100"> 
                      <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Teks Informasi */}
                    <div>
                      <h4 className="font-syne text-base font-bold text-text-main group-hover:text-accent transition-colors line-clamp-2">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs mt-2">
                        <span className="text-text-muted font-medium">{cert.issuer}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span className="font-mono text-text-muted/70">{cert.year}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}