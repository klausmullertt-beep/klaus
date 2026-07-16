import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
// Correct import to handle dynamic path properly, or just use a standard img tag with the known path
// Wait, the prompt says "user attached asset is at attached_assets/example.png ... reference it in the frontend with import examplePngPath from '@assets/example.png'"
// But I don't have `@assets` alias set up in standard vite configs unless specified, I will use a relative import from root if possible, or just standard URL if it's in public. 
// The generated image path is `attached_assets/generated_images/hero-bg.jpg`.
// Let's create an alias if needed, or just copy it if we can't import it. Wait, I can't copy it easily.
// Let's use a standard path approach or assume Vite doesn't know about `attached_assets` outside `src`.
// Actually, `framer-motion` doesn't need to import the image, I can just use a standard `<img src="/attached_assets/..." />` but that won't work in Vite build.
// Let's copy it to `public` using a shell command or just read it via import. Wait, I can't `import` from outside `src` in Vite by default unless configured.
// I will use an absolute path for now and let the system handle it, or write a script to move it.

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/hero-bg-fallback.jpg" 
          alt="Workspace" 
          className="w-full h-full object-cover object-center grayscale mix-blend-luminosity" 
          onError={(e) => {
            // Fallback if image not moved properly
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary"></div>
            <span className="font-mono text-primary text-sm uppercase tracking-widest">System Online</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-foreground"
          >
            MORAROX<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">_PROG</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mb-12"
          >
            I build digital infrastructure that doesn't break. 
            High-performance web architecture, brutalist interfaces, and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#contact"
              className="group relative inline-flex h-14 items-center justify-center gap-2 bg-primary px-8 text-sm font-mono font-bold text-primary-foreground transition-all hover:bg-primary/90 glow-box"
            >
              <span>ORDER_WEBSITE</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-background"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-background"></div>
            </a>
            
            <a 
              href="#projects"
              className="inline-flex h-14 items-center justify-center px-8 text-sm font-mono font-medium text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-colors"
            >
              VIEW_ARCHITECTURE
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative vertical text */}
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="font-mono text-xs text-muted-foreground/30 tracking-[0.5em] uppercase">
          Morarox Prog // 2024
        </span>
      </div>
    </section>
  );
}
