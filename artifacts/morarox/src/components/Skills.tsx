import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, TerminalSquare } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: "FRONTEND_MATRIX",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js", "WebGL"]
    },
    {
      title: "BACKEND_LOGIC",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Go", "Python", "Rust", "GraphQL", "gRPC"]
    },
    {
      title: "DATA_STORES",
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "ElasticSearch"]
    },
    {
      title: "INFRASTRUCTURE",
      icon: <TerminalSquare className="w-5 h-5" />,
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            TECHNICAL <span className="text-secondary">CAPABILITIES</span>
          </h2>
          <div className="h-[1px] w-24 bg-secondary"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-6 hover:border-secondary/50 transition-colors relative group"
            >
              <div className="flex items-center gap-3 mb-6 text-secondary group-hover:text-primary transition-colors">
                {category.icon}
                <h3 className="font-mono font-bold text-sm tracking-widest">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between font-mono text-sm">
                    <span className="text-muted-foreground">{skill}</span>
                    <span className="text-xs text-border group-hover:text-secondary/30 transition-colors">{'[OK]'}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
