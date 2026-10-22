import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

// Kategori disesuaikan, kamu bisa menambahkannya jika ada proyek kategori lain nanti
const categories = ["All", "Web App",];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="min-h-screen py-32 px-6 lg:px-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne text-4xl md:text-5xl font-bold text-text-main"
          >
            Pekerjaan Terpilih<span className="text-accent">.</span>
          </motion.h2>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-text-main text-dark-900 font-bold" 
                    : "border border-white/10 text-text-muted hover:border-white/30 hover:text-text-main"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              
              /* 👇 INI ADALAH BAGIAN LINK-NYA (motion.a) 👇 */
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col gap-5 cursor-pointer"
              >
                {/* Image Container with Hover Effect */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-dark-100">
                  <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Link Icon */}
                  <div className="absolute top-4 right-4 z-20 bg-dark-900/80 backdrop-blur-sm p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="font-syne text-2xl font-bold text-text-main mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-text-muted mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="font-mono text-xs text-text-muted bg-white/5 px-3 py-1 rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a> 
              /* 👆 PENUTUP LINK (motion.a) 👆 */
              
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}