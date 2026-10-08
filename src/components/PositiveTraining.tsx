import React, { useState } from 'react';
import { trainingMethods, TrainingMethod } from '../data/dogData';
import { DogImage } from './DogImage';
import { Award, Check, Sparkles, ChevronRight } from 'lucide-react';

interface PositiveTrainingProps {
  onSelectMethod: (method: TrainingMethod) => void;
}

export const PositiveTraining: React.FC<PositiveTrainingProps> = ({ onSelectMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState<TrainingMethod>(trainingMethods[0]);

  return (
    <section id="training" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <Award className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Modern Canine Pedagogy</span>
          <span aria-hidden="true">·</span>
          <span>Fear-Free & Evidence-Based</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Positive Dog Training Techniques
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
          Outdated punishment and "dominance" create anxious, unpredictable pets.
          Reward-based training creates eager, joyful partners who understand exactly what is asked of them.
        </p>
      </div>

      {/* Featured Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Method Picker List */}
        <div className="lg:col-span-5 space-y-2.5">
          {trainingMethods.map((method) => {
            const isSelected = selectedMethod.id === method.id;
            return (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#234231] text-white border-[#234231] shadow-xs'
                    : 'bg-white hover:bg-[#FAF7F2] text-[#2C241E] border-[#E3DAC8]'
                }`}
              >
                <div>
                  <h3 className={`text-sm sm:text-base font-semibold ${isSelected ? 'text-white' : 'text-[#234231]'}`}>
                    {method.name}
                  </h3>
                  <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-white/80' : 'text-[#6E5D53]'}`}>
                    {method.tagline}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 ml-2 ${isSelected ? 'text-[#E07A5F]' : 'text-[#A89A8E]'}`} />
              </div>
            );
          })}
        </div>

        {/* Selected Method Deep View Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E3DAC8] p-6 sm:p-8 shadow-sm">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-[#E3DAC8]">
            <DogImage
              src={selectedMethod.image}
              alt={selectedMethod.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-5">
            <div>
              <span className="text-xs font-semibold text-[#8C5E3C]">Methodology Breakdown</span>
              <h3 className="text-2xl font-bold font-display text-[#234231] mt-0.5">
                {selectedMethod.name}
              </h3>
              <p className="text-sm text-[#5C4F44] mt-2 leading-relaxed">
                {selectedMethod.corePrinciple}
              </p>
            </div>

            {/* Step by step */}
            <div className="pt-4 border-t border-[#F0EAE0]">
              <h4 className="text-xs font-bold text-[#234231] tracking-wide mb-3">
                Step-by-Step Training Protocol:
              </h4>
              <ol className="space-y-2">
                {selectedMethod.stepByStep.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5C4F44]">
                    <span className="w-5 h-5 rounded-full bg-[#FAF5EC] text-[#8C5E3C] font-bold flex items-center justify-center shrink-0 border border-[#E3DAC8] text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pro Tip */}
            <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-[#234231]">Certified Trainer Pro Tip: </span>
                <span className="text-[#5C4F44]">{selectedMethod.proTip}</span>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => onSelectMethod(selectedMethod)}
                className="px-4 py-2 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE1D3] rounded-lg border border-[#DDD3C0] transition-colors cursor-pointer"
              >
                Expand Comprehensive Guide →
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
