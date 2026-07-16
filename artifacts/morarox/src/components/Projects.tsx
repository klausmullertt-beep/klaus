import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "NEXUS_TRADE",
      type: "FINANCIAL INFRASTRUCTURE",
      desc: "High-frequency crypto trading dashboard with sub-millisecond real-time WebSocket updates. Built to process massive data streams without dropping a frame.",
      tech: ["React", "Go", "WebSocket", "Redis"],
      link: "#"
    },
    {
      title: "OBSIDIAN_VAULT",
      type: "SECURE STORAGE",
      desc: "End-to-end encrypted file sharing platform for sensitive corporate data. Zero-knowledge architecture with a brutalist, command-line inspired interface.",
      tech: ["Rust", "TypeScript", "PostgreSQL", "WebCrypto"],
      link: "#"
    },
    {
      title: "SYNTH_WAVE_AI",
      type: "GENERATIVE AUDIO",
      desc: "Browser-based digital audio workstation leveraging WebAudio API and WebAssembly to run neural synthesis models entirely on the client side.",
      tech: ["WASM", "C++", "React", "AudioNode"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-card border-y border-border relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              RECENT <span className="text-primary">DEPLOYMENTS</span>
            </h2>
            <div className="h-[1px] w-24 bg-primary"></div>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm">
            Select case studies of systems engineered for high performance and resilience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="aspect-video bg-background border border-border mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 scanline opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="font-mono text-4xl font-bold text-border group-hover:text-primary/20 transition-colors select-none">
                  {project.title.substring(0, 2)}
                </div>
                
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="w-12 h-12 bg-primary text-background flex items-center justify-center hover:bg-primary/80 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="w-12 h-12 bg-card border border-border text-foreground flex items-center justify-center hover:border-primary/50 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="font-mono text-xs text-primary mb-2 tracking-widest">{project.type}</div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-background border border-border font-mono text-[10px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
