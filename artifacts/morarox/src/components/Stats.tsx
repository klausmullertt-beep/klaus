import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { label: "LINES_OF_CODE", value: "1.2M+" },
    { label: "SYSTEMS_DEPLOYED", value: "47" },
    { label: "UPTIME_AVERAGE", value: "99.99%" },
    { label: "COFFEE_INTAKE_L", value: "8,402" }
  ];

  return (
    <section className="py-12 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="font-mono text-3xl md:text-5xl font-bold text-foreground mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-primary/70 tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
