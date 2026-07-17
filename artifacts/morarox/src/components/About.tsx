import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import logoImg from '@assets/IMG_0549_1784248813685.jpeg';

const points = [
  'Работаем с 2018 года — более 6 лет опыта',
  'Более 1500 выполненных заказов',
  'Поддержка клиентов 24/7 в Telegram',
  'Фиксированные цены без скрытых доплат',
  'Сдаём проекты в оговоренные сроки',
  'Бесплатные правки после сдачи',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-400 text-xs uppercase tracking-widest">О компании</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 mb-6 text-black leading-tight">
              МЫ — MORAROX<br />PROG
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Morarox Prog — команда разработчиков, специализирующаяся на создании 
              цифровых продуктов для бизнеса и частных клиентов. Мы делаем сайты, 
              Telegram-боты, VK-боты и мини-игры — быстро, качественно и по честным ценам.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              С 2018 года мы помогаем нашим клиентам автоматизировать бизнес-процессы, 
              привлекать клиентов через интернет и создавать вовлекающий контент 
              для своей аудитории.
            </p>

            <ul className="space-y-3">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-black flex-shrink-0" />
                  {p}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-black rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src={logoImg}
                  alt="Morarox Prog"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-black/10 scale-110" />
              <div className="absolute inset-0 rounded-full border border-black/5 scale-125" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
