import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, Gamepad2, MessageSquare, Send, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Веб-сайты',
    desc: 'Лендинги, корпоративные сайты, интернет-магазины и веб-приложения любой сложности. Современный дизайн, быстрая загрузка, адаптив под мобильные.',
    features: ['Лендинг / визитка', 'Корпоративный сайт', 'Интернет-магазин', 'Веб-приложение'],
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Telegram-боты',
    desc: 'Боты для бизнеса, автоматизации, магазинов, рассылок и поддержки клиентов. Интеграция с платёжными системами и CRM.',
    features: ['Бот-магазин', 'Бот поддержки', 'Рассылки', 'Интеграции с API'],
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'VK-боты',
    desc: 'Автоматизация ВКонтакте: ответы на сообщения, обработка заявок, управление сообществом и автоматические рассылки.',
    features: ['Авто-ответы', 'Управление группой', 'Рассылки', 'Обработка заявок'],
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: 'Мини-игры',
    desc: 'Игры для Telegram Mini Apps и браузера. Казуальные игры, аркады, викторины — всё с красивым UI и лидербордами.',
    features: ['Telegram Mini App', 'Браузерные игры', 'Лидерборды', 'Кастомный дизайн'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 text-xs uppercase tracking-widest">Что мы делаем</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-3 text-white">
            НАШИ УСЛУГИ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="text-white mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>

              {/* Features list */}
              <ul className="space-y-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                    <ChevronRight className="w-3 h-3 text-white/30" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/moraroxprog_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all"
              >
                <Send className="w-3 h-3" />
                Заказать
              </a>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/10 group-hover:border-white/30 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
