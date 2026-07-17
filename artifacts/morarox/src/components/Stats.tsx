import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '6+', label: 'лет на рынке' },
  { value: '1503', label: 'довольных клиентов' },
  { value: '4', label: 'направления услуг' },
  { value: '24/7', label: 'поддержка' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-black border-y border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black tracking-tighter mb-1 text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
