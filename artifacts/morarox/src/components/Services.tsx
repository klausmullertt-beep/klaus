import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 mb-4 text-primary" />,
      title: "CUSTOM_WEB_APPS",
      desc: "Full-stack single page applications. React, Vue, or raw vanilla JS. Backed by scalable APIs.",
      price: "FROM $2,500"
    },
    {
      icon: <PenTool className="w-8 h-8 mb-4 text-secondary" />,
      title: "LANDING_PAGES",
      desc: "High-conversion, visually striking marketing pages with tailored 3D/WebGL animations.",
      price: "FROM $1,000"
    },
    {
      icon: <Rocket className="w-8 h-8 mb-4 text-accent" />,
      title: "PERF_OPTIMIZATION",
      desc: "Auditing and rewriting slow codebases to hit perfect Lighthouse scores and zero jank.",
      price: "$150 / HR"
    }
  ];

  return (
    <section className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            AVAILABLE <span className="text-primary">SERVICES</span>
          </h2>
          <p className="font-mono text-sm text-muted-foreground">
            I don't sell templates. I engineer solutions. Choose your deployment package.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 border border-border bg-card hover:border-primary/50 transition-all group hover:-translate-y-2 relative"
            >
              {service.icon}
              <h3 className="font-mono font-bold text-lg mb-4 tracking-tight">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-8">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">EST. COST:</span>
                <span className="font-mono font-bold text-foreground">{service.price}</span>
              </div>

              {/* Hover effect box */}
              <div className="absolute inset-0 border border-primary opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
