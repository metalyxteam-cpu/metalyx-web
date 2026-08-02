import React from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter text-white">
                METALYX
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              India's premium managed fabrication marketplace. We connect you with verified experts and manage your project from quotation to completion with uncompromised quality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About METALYX</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Project Portfolio</Link></li>
              <li><Link href="/partners" className="hover:text-primary transition-colors">Become a Partner</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
              <li><Link href="/cookies-policy" className="hover:text-white transition-colors">Cookies Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest industry insights and platform updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
              />
              <Button type="submit" className="rounded-l-none px-4">
                <ArrowRight size={16} />
              </Button>
            </form>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
              <p>Email: metalyx.team@gmail.com</p>
              <p>Phone: +91 9898323876</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2025 METALYX. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built for India <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-br from-orange-500 via-white to-green-500"></span>
          </p>
        </div>
      </div>
    </footer>
  );
}