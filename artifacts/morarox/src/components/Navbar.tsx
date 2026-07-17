import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import logoImg from '@assets/IMG_0549_1784248813685.jpeg';

const navLinks = [
  { name: 'Услуги', href: '#services' },
  { name: 'Доп. товары', href: '#addons' },
  { name: 'Отзывы', href: '#reviews' },
  { name: 'О нас', href: '#about' },
  { name: 'Контакты', href: '#contact' },
  { name: 'Наши проекты', href: '/projects' },
];

function NavLink({
  link,
  index,
  onClick,
  mobile = false,
}: {
  link: { name: string; href: string };
  index: number;
  onClick?: () => void;
  mobile?: boolean;
}) {
  const [, navigate] = useLocation();

  const isPage = link.href.startsWith('/');

  if (mobile) {
    return (
      <button
        onClick={() => {
          onClick?.();
          if (isPage) navigate(link.href);
          else window.location.hash = link.href.replace('#', '');
        }}
        className="text-left text-gray-300 hover:text-white py-2 border-b border-white/5 text-sm w-full"
      >
        {link.name}
      </button>
    );
  }

  if (isPage) {
    return (
      <motion.button
        key={link.name}
        onClick={() => navigate(link.href)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08 }}
        className="text-sm text-gray-400 hover:text-white transition-colors relative group"
      >
        {link.name}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
      </motion.button>
    );
  }

  return (
    <motion.a
      key={link.name}
      href={link.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="text-sm text-gray-400 hover:text-white transition-colors relative group"
    >
      {link.name}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src={logoImg} alt="Morarox Prog" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-bold text-lg tracking-tight text-white">
            MORAROX <span className="text-gray-400">PROG</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <NavLink key={link.name} link={link} index={i} />
          ))}
          <a
            href="https://t.me/moraroxprog_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-sm px-5 py-2 bg-white text-black font-bold hover:bg-gray-200 transition-all"
          >
            Заказать
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.name}
                  link={link}
                  index={i}
                  mobile
                  onClick={() => setMenuOpen(false)}
                />
              ))}
              <a
                href="https://t.me/moraroxprog_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-center px-5 py-3 bg-white text-black font-bold text-sm"
              >
                Заказать
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
