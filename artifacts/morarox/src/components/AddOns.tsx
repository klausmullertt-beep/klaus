import React from 'react';
import { motion } from 'framer-motion';
import { Server, Settings, Pencil, Palette, Globe, Plus, Send } from 'lucide-react';

const addons = [
  {
    icon: <Server className="w-5 h-5" />,
    title: 'Подключение бота/сайта на VDS',
    desc: 'Подключаем ваш готовый проект на VDS-сервер, настройка окружения и деплой.',
    price: '200 руб.',
    exact: true,
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: 'Покупка VDS на месяц',
    desc: 'Аренда VDS-сервера на 1 месяц для размещения вашего проекта.',
    price: '300 руб.',
    exact: true,
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: 'Покупка VDS на три месяца',
    desc: 'Аренда VDS-сервера на 3 месяца — экономия по сравнению с помесячной оплатой.',
    price: '800 руб.',
    exact: true,
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: 'Новая система к боту/сайту/игре',
    desc: 'Разработка и интеграция нового функционального модуля в существующий проект.',
    price: 'от 400 руб.',
    exact: false,
  },
  {
    icon: <Pencil className="w-5 h-5" />,
    title: 'Лёгкое изменение в проекте',
    desc: 'Небольшие правки в боте, сайте или игре — текст, кнопки, логика.',
    price: '150 руб.',
    exact: true,
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'Дизайн для бота/сайта',
    desc: 'Создание дизайна интерфейса: баннеры, иконки, UI-kit для проекта.',
    price: 'от 500 руб.',
    exact: false,
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Настройка хостинга и домена',
    desc: 'Помогаем выбрать, купить и настроить домен и хостинг под ваш проект.',
    price: '350 руб.',
    exact: true,
  },
  {
    icon: <Plus className="w-5 h-5" />,
    title: 'Индивидуальный запрос',
    desc: 'Не нашли нужную услугу? Напишите нам — обсудим и рассчитаем стоимость.',
    price: 'по запросу',
    exact: false,
  },
];

export default function AddOns() {
  return (
    <section id="addons" className="py-24 bg-black border-t border-white/10 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-gray-500 text-xs uppercase tracking-widest">Дополнения</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-3 text-white">
            ДОП. ТОВАРЫ
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl">
            Дополнения и расширения для ваших проектов.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-3">
          {addons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex items-center gap-4 p-5 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/30 transition-all">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-semibold leading-tight mb-0.5">{item.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed line-clamp-2">{item.desc}</div>
              </div>

              {/* Price + button */}
              <div className="flex-shrink-0 flex flex-col items-end gap-2">
                <span className={`text-xs font-bold px-2.5 py-1 border ${item.exact ? 'border-white/30 text-white' : 'border-white/20 text-gray-300'}`}>
                  {item.price}
                </span>
                <a
                  href="https://t.me/moraroxprog_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  title="Заказать"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
