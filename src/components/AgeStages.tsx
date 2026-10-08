import React from 'react';
import { ageStages, AgeStage } from '../data/dogData';
import { DogImage } from './DogImage';
import { Clock, CheckCircle } from 'lucide-react';

interface AgeStagesProps {
  onSelectStage?: (stage: AgeStage) => void;
}

export const AgeStages: React.FC<AgeStagesProps> = ({ onSelectStage }) => {
  return (
    <section id="age-stages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Ontogeny & Maturation</span>
          <span aria-hidden="true">·</span>
          <span>From 8 Weeks to Golden Years</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Dog Behaviour Across Life Stages
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
          Canine neural wiring, impulse control, sleep requirements, and social interests evolve dramatically as dogs age.
          Tailor your expectations to their developmental stage.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ageStages.map((stage) => (
          <div
            key={stage.id}
            onClick={() => onSelectStage && onSelectStage(stage)}
            className="group bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <DogImage
                src={stage.image}
                alt={stage.stage}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-medium text-[#E07A5F]">{stage.ageRange}</span>
                <h3 className="text-lg font-semibold font-display">{stage.stage}</h3>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs font-semibold text-[#234231] mb-1.5">Developmental Focus:</p>
                <p className="text-xs text-[#5C4F44] leading-relaxed">
                  {stage.developmentalFocus}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EAE0]">
                <p className="text-[11px] font-bold text-[#8C5E3C] mb-1">Key Daily Behaviours:</p>
                <ul className="space-y-1">
                  {stage.keyBehaviors.map((kb, idx) => (
                    <li key={idx} className="text-[11px] text-[#6E5D53] flex items-start gap-1.5">
                      <span className="text-[#8C5E3C]">•</span>
                      <span>{kb}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 text-right">
                <span className="text-xs font-semibold text-[#8C5E3C] group-hover:underline">
                  View Age Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
