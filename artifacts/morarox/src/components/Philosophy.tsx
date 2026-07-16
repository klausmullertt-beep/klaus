import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap } from 'lucide-react';

export default function Philosophy() {
  const tenets = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "ZERO LATENCY",
      desc: "Every millisecond counts. No bloat, no unnecessary abstractions. Only pure, unadulterated performance."
    },
    {
      icon: <Shield className="w-6 h-6 text-secondary" />,
      title: "FORTIFIED",
      desc: "Security isn't a feature, it's a baseline. Architectures built to withstand hostile environments."
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent" />,
      title: "MACHINE SYMPATHY",
      desc: "Writing code that hardware actually wants to execute. Understanding the stack from V8 down to the silicon."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card relative z-10 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
              OPERATIONAL <br/>
              <span className="text-primary">PHILOSOPHY</span>
            </h2>
            <div className="space-y-6 font-mono text-sm text-muted-foreground">
              <p>
                Most modern web development is a layered cake of dependencies, frameworks, and polyfills. It's fragile. It's slow. It breaks when you look at it wrong.
              </p>
              <p>
                I don't build cakes. I build engines.
              </p>
              <p>
                As an independent contractor going by the handle <span className="text-foreground font-bold">morarox</span>, I construct digital products that are resilient, fast, and visually striking. I don't use templates. Every architecture is bespoke.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-mono text-primary font-bold">M</span>
              </div>
              <div>
                <div className="font-mono text-foreground font-bold text-sm">MORAROX_PROG</div>
                <div className="font-mono text-muted-foreground text-xs">LEAD ARCHITECT</div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {tenets.map((tenet, i) => (
              <motion.div
                key={tenet.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-background border border-border hover:border-primary/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {tenet.icon}
                </div>
                <div className="mb-4">{tenet.icon}</div>
                <h3 className="font-mono font-bold text-foreground mb-2 tracking-tight">{tenet.title}</h3>
                <p className="text-sm text-muted-foreground">{tenet.desc}</p>
                
                {/* Decorative border elements */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary/50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-primary/50 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
