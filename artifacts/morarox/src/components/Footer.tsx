import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <Terminal className="w-5 h-5" />
            <span className="font-mono font-bold tracking-tighter">morarox_</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-mono text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
            <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
            <a href="https://t.me/morarox" className="hover:text-primary transition-colors">TELEGRAM</a>
            <a href="#" className="hover:text-primary transition-colors">PGP KEY</a>
          </div>

          <div className="font-mono text-xs text-muted-foreground opacity-50">
            &copy; {new Date().getFullYear()} MORAROX PROG. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
