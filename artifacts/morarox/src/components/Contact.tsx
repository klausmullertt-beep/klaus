import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-500 text-xs uppercase tracking-widest">Связаться с нами</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-3 mb-6 text-white">
            ГОТОВЫ НАЧАТЬ?
          </h2>
          <p className="text-gray-400 mb-10 text-sm leading-relaxed">
            Напишите нам в Telegram-бот — расскажите о вашем проекте, 
            и мы свяжемся с вами в течение нескольких часов.
          </p>

          <a
            href="https://t.me/moraroxprog_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] mb-12"
          >
            <Send className="w-4 h-4" />
            Написать в Telegram
          </a>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-white/10">
            <a
              href="mailto:moraroxprog@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              moraroxprog@gmail.com
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a
              href="tel:+37125391503"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              +371 25 391 503
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
