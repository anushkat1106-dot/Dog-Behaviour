import React from 'react';
import { coreBehaviours, DogBehaviourItem } from '../data/dogData';
import { DogImage } from './DogImage';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface UnderstandingBehaviourProps {
  onSelectItem: (item: DogBehaviourItem) => void;
}

export const UnderstandingBehaviour: React.FC<UnderstandingBehaviourProps> = ({ onSelectItem }) => {
  return (
    <section id="understanding" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <span>Core Canine Psychology</span>
          <span aria-hidden="true">·</span>
          <span>Instinctive Drives & Origins</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Understanding Dog Behaviour
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
          Behaviours we consider "problematic" or "mysterious" are almost always natural evolutionary instincts.
          Discover the scientific reasons behind your dog’s most common daily habits.
        </p>
      </div>

      {/* Grid of Behaviour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {coreBehaviours.map((item, index) => (
          <div
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            {/* Visual Header */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <DogImage
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-medium tracking-wide">Ethology Guide 0{index + 1}</span>
                <span className="text-xs bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-white font-medium flex items-center gap-1">
                  Learn <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C4F44] mt-2.5 leading-relaxed line-clamp-3">
                  {item.shortDesc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-semibold text-[#8C5E3C]">
                <span>Tap to view full protocol</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
