import React from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-card relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto bg-background border border-border p-1">
          <div className="border border-border/50 p-8 md:p-12 relative overflow-hidden">
            {/* Terminal header */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-card border-b border-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
              <div className="w-3 h-3 rounded-full bg-accent/80"></div>
              <div className="w-3 h-3 rounded-full bg-primary/80"></div>
              <div className="mx-auto font-mono text-[10px] text-muted-foreground">morarox@system:~</div>
            </div>

            <div className="pt-8 text-center">
              <Terminal className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                READY TO <span className="text-primary glow-text">INITIALIZE?</span>
              </h2>
              <p className="font-mono text-sm text-muted-foreground mb-12 max-w-md mx-auto">
                Stop settling for slow, generic websites. Let's build something that runs circles around your competition.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://t.me/morarox"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-16 items-center justify-center gap-3 bg-primary px-10 text-base font-mono font-bold text-primary-foreground transition-all hover:bg-primary/90 glow-box group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>DM @MORAROX</span>
              </motion.a>

              <div className="mt-8 flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="animate-pulse w-2 h-2 bg-primary rounded-full inline-block"></span>
                <span>STATUS: ACCEPTING NEW CLIENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
