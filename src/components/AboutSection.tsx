import React from 'react';
import { Heart, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import trainingImg from '../assets/images/dog_positive_reinforcement_training_1791426706108.jpg';
import { DogImage } from './DogImage';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="bg-[#FFFFFF] border border-[#E3DAC8] rounded-3xl p-8 sm:p-12 shadow-xs overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-[#E3DAC8] shadow-sm">
                <DogImage
                  src={trainingImg}
                  alt="Dog trainer using positive reinforcement treats with an attentive dog"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="mt-4 p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                <p className="text-xs text-[#6E5D53] italic">
                  "The question isn't whether your dog is listening to you—it is whether you have learned how to listen to your dog."
                </p>
                <p className="text-[11px] font-semibold text-[#8C5E3C] mt-1">
                  — Modern Canine Ethology Philosophy
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
              <Heart className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>About Dog Behaviour</span>
              <span aria-hidden="true">·</span>
              <span>The Science of Mutual Trust</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display tracking-tight leading-snug">
              Why Canine Communication Matters
            </h2>

            <p className="text-base text-[#5C4F44] leading-relaxed">
              For thousands of years, dogs have walked alongside humanity as our most devoted companions.
              Yet, because they navigate our complex human world without verbal speech, preventable misunderstandings
              frequently lead to stress, frustration, and behavioral fallout.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EAE2D2] space-y-2">
                <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E07A5F]" />
                  Empathy Over Domination
                </h3>
                <p className="text-xs text-[#5C4F44] leading-relaxed">
                  Moving past obsolete "alpha" myths replaces fear and intimidation with clear cooperative communication and mutual respect.
                </p>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#EAE2D2] space-y-2">
                <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#234231]" />
                  A Lifelong Friendship
                </h3>
                <p className="text-xs text-[#5C4F44] leading-relaxed">
                  When a dog knows their subtle calming signals are heard, their nervous system relaxes—creating a confident, joyful family pet.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#7A6A5E] leading-relaxed pt-2">
              Our educational platform compiles peer-reviewed insights from certified veterinary behaviourists,
              applied animal ethologists, and humane trainers worldwide.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
