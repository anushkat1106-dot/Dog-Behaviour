import React from 'react';
import { Compass, BookOpen, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_dog_owner_bond_1791426677848.jpg';
import { DogImage } from './DogImage';

interface HeroProps {
  onExploreBehaviour: () => void;
  onExploreTraining: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBehaviour, onExploreTraining }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
              <span>Canine Ethology & Humane Science</span>
              <span aria-hidden="true">·</span>
              <span>100% Force-Free Education</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#234231] font-display leading-[1.12] text-balance">
              Understand Your Dog. <br className="hidden sm:inline" />
              <span className="text-[#8C5E3C] italic font-normal">Build a Stronger Bond.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#5C4F44] leading-relaxed max-w-2xl">
              Learn what your dog's body language, emotions, and behaviours are really telling you.
              Replace guesswork with evidence-based canine psychology and reward-based communication.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreBehaviour}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#E07A5F]" />
                <span>Explore Dog Behaviour</span>
              </button>

              <button
                onClick={onExploreTraining}
                className="px-6 py-3.5 text-sm font-semibold text-[#234231] bg-white hover:bg-[#F4EFE6] border border-[#DDD3C0] rounded-xl transition-all shadow-2xs hover:shadow-sm cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#8C5E3C]" />
                <span>Learn Training Tips</span>
              </button>
            </div>

            {/* Adjacent Trust Points */}
            <div className="pt-6 border-t border-[#E8DFC8]/70 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-2xl font-bold font-display text-[#234231]">30+</p>
                <p className="text-xs text-[#7A6A5E] mt-0.5">Ethological Guides</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-[#8C5E3C]">100%</p>
                <p className="text-xs text-[#7A6A5E] mt-0.5">Positive R+ Methods</p>
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-[#234231]">7</p>
                <p className="text-xs text-[#7A6A5E] mt-0.5">Emotional States Decoded</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Decorative warm aura glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E07A5F]/20 via-[#8C5E3C]/10 to-[#234231]/10 rounded-3xl filter blur-xl opacity-70 group-hover:opacity-100 transition duration-700" />
              
              <div className="relative bg-white p-2.5 rounded-2xl border border-[#E3DAC8] shadow-sm overflow-hidden">
                <DogImage
                  src={heroImg}
                  alt="A happy golden retriever dog affectionately bonding with its smiling owner in a sunlit meadow"
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
                <div className="p-4 bg-[#FAF7F2] rounded-lg mt-2 border border-[#EBE4D5]/80 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#234231]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#234231]">
                    <Heart className="w-4 h-4 text-[#E07A5F] fill-[#E07A5F]/20" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-[#234231]">Communication Precedes Behavior</h2>
                    <p className="text-xs text-[#6E5D53] mt-0.5 leading-relaxed">
                      "A calm, well-understood dog is not a suppressed dog—they are an animal whose communicative signals are heard and respected."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
