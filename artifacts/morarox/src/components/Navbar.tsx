import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'System', href: '#about' },
    { name: 'Architecture', href: '#skills' },
    { name: 'Deployments', href: '#projects' },
    { name: 'Initialize', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-border/50 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Terminal className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
          <span className="font-mono font-bold text-xl tracking-tighter text-white">
            morarox<span className="text-primary animate-pulse">_</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="text-primary/50 mr-2 opacity-0 group-hover:opacity-100 transition-opacity">{'>'}</span>
              {link.name}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            href="#contact"
            className="ml-4 font-mono text-xs px-4 py-2 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-background transition-all"
          >
            EXECUTE
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
