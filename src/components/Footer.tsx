import React, { useState } from 'react';
import { Mail, CheckCircle2, Heart } from 'lucide-react';

interface FooterProps {
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDisclaimer }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#234231] text-[#FAF7F2] border-t border-[#1C3527] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top zone: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl font-bold font-display text-white tracking-tight">
              CanineMind
            </span>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              An evidence-based educational portal helping dog owners decode body language, understand canine ethology, and cultivate lifelong trust through positive reinforcement.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Social icons */}
              <a
                href="#social-instagram"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#social-youtube"
                aria-label="YouTube"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="#social-facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 bg-white/5 rounded-2xl p-6 border border-white/10">
            <h4 className="text-base font-semibold text-white font-display">
              Weekly Canine Ethology Newsletter
            </h4>
            <p className="text-xs text-white/70 mt-1">
              Join 40,000+ dog lovers receiving one actionable, positive training tip every Friday morning.
            </p>

            {subscribed ? (
              <div className="mt-4 p-3 bg-white/10 rounded-xl flex items-center gap-2 text-xs text-emerald-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! You are subscribed to weekly canine insights.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-xs focus:outline-hidden focus:ring-1 focus:ring-[#E07A5F] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#FAF7F2] hover:bg-white rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Subscribe Free
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs">
          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3">Dog Behaviour</p>
            <ul className="space-y-2 text-white/70">
              <li><a href="#understanding" className="hover:text-white transition-colors">Why Dogs Bark</a></li>
              <li><a href="#understanding" className="hover:text-white transition-colors">Tail Wagging Science</a></li>
              <li><a href="#understanding" className="hover:text-white transition-colors">Chewing & Digging</a></li>
              <li><a href="#decoder" className="hover:text-white transition-colors">Canine Decoder</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3">Positive Training</p>
            <ul className="space-y-2 text-white/70">
              <li><a href="#training" className="hover:text-white transition-colors">Positive Reinforcement (R+)</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Clicker Timing</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Loose-Leash Walking</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Bite Inhibition</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3">Learning & Guides</p>
            <ul className="space-y-2 text-white/70">
              <li><a href="#guides" className="hover:text-white transition-colors">Dog Behaviour Guides</a></li>
              <li><a href="#breeds" className="hover:text-white transition-colors">Breed Instincts</a></li>
              <li><a href="#age-stages" className="hover:text-white transition-colors">Puppyhood to Senior</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">Canine Attunement Quiz</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white uppercase tracking-wider mb-3">About & Legal</p>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About Our Mission</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><button onClick={onOpenDisclaimer} className="hover:text-white transition-colors text-left cursor-pointer">Safety Disclaimer</button></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy: CanineMind respects your privacy. We do not sell or track your personal behavioral searches.'); }} className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60">
          <p>© {new Date().getFullYear()} CanineMind Education. Built for compassionate dog owners worldwide.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#E07A5F] fill-[#E07A5F]" />
            <span>and science-backed ethology</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
