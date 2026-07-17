import React from 'react';
import { Send, Mail, Phone } from 'lucide-react';
import logoImg from '@assets/IMG_0549_1784248813685.jpeg';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Morarox Prog" className="w-9 h-9 rounded-full object-cover" />
              <span className="font-bold text-white tracking-tight">MORAROX PROG</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Разрабатываем сайты, Telegram-боты, VK-боты и мини-игры с 2018 года.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-widest mb-4">Навигация</div>
            <ul className="space-y-2">
              {[
                { label: 'Услуги', href: '#services' },
                { label: 'Отзывы', href: '#reviews' },
                { label: 'О нас', href: '#about' },
                { label: 'Контакты', href: '#contact' },
                { label: 'Политика конфиденциальности', href: '/privacy' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-gray-500 hover:text-white text-xs transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-gray-400 text-xs uppercase tracking-widest mb-4">Контакты</div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/moraroxprog_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-white text-xs transition-colors"
                >
                  <Send className="w-3 h-3" />
                  @moraroxprog_bot
                </a>
              </li>
              <li>
                <a
                  href="mailto:moraroxprog@gmail.com"
                  className="flex items-center gap-2 text-gray-500 hover:text-white text-xs transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  moraroxprog@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+37125391503"
                  className="flex items-center gap-2 text-gray-500 hover:text-white text-xs transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  +371 25 391 503
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Morarox Prog. Все права защищены.
          </p>
          <a href="/privacy" className="text-gray-600 hover:text-white text-xs transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
