import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';
import logoImg from '@assets/IMG_0549_1784248813685.jpeg';

const projects = [
  {
    id: 1,
    banner: '/banner1.png',
    name: 'Morarox Prog Bot',
    description: 'Главный бот компании Morarox Prog — заказы, услуги и поддержка.',
    tgLink: 'https://t.me/moraroxprog_bot',
    tgHandle: '@moraroxprog_bot',
  },
  {
    id: 2,
    banner: '/banner2.png',
    name: 'Morarox AI',
    description: 'Мощный AI-инструмент для ваших проектов — умный, быстрый, бесплатно.',
    tgLink: 'https://t.me/moraroxai_bot',
    tgHandle: '@moraroxai_bot',
  },
  {
    id: 3,
    banner: '/banner3.png',
    name: 'Morarox Save',
    description: 'Бот сохраняет удалённые сообщения, фото, видео и защищает ваши чаты.',
    tgLink: 'https://t.me/moraroxsexxxy_bot',
    tgHandle: '@moraroxsexxxy_bot',
  },
];

export default function Projects() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md border-b border-white/10 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </button>
          <div className="w-px h-5 bg-white/20" />
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <img src={logoImg} alt="Morarox Prog" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-sm tracking-tight text-white">
              MORAROX <span className="text-gray-400">PROG</span>
            </span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            НАШИ <span className="text-gray-400">ПРОЕКТЫ</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Это наши проекты которые мы представляем от Morarox Prog.
          </p>
          <div className="w-16 h-px bg-white/30 mx-auto mt-6" />
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300 group"
            >
              {/* Banner image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.banner}
                  alt={project.name}
                  className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  style={{ maxHeight: '340px', objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Card footer */}
              <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">{project.name}</h2>
                  <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                  <span className="text-gray-500 text-xs mt-1 block">{project.tgHandle}</span>
                </div>
                <a
                  href={project.tgLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all rounded-none"
                >
                  Открыть
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer line */}
      <div className="border-t border-white/10 mt-16 py-8 text-center text-gray-600 text-xs">
        © 2024 Morarox Prog. Все права защищены.
      </div>
    </div>
  );
}
