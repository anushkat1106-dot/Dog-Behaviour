import React, { useState } from 'react';
import { bodyLanguageStates, BodyLanguageState } from '../data/dogData';
import { DogImage } from './DogImage';
import { Info, CheckCircle2 } from 'lucide-react';

interface BodyLanguageGridProps {
  onSelectState?: (state: BodyLanguageState) => void;
}

export const BodyLanguageGrid: React.FC<BodyLanguageGridProps> = ({ onSelectState }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedState, setSelectedState] = useState<BodyLanguageState | null>(bodyLanguageStates[0]);

  const categories = [
    { id: 'all', label: 'All Signals (7)' },
    { id: 'positive', label: 'Joy & Play' },
    { id: 'warning', label: 'Stress & Caution' }
  ];

  const filteredStates = bodyLanguageStates.filter((item) => {
    if (activeTab === 'positive') return ['happy-relaxed', 'playful', 'excited'].includes(item.id);
    if (activeTab === 'warning') return ['anxious', 'fearful', 'stressed', 'aggressive'].includes(item.id);
    return true;
  });

  return (
    <section id="body-language" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
            <span>Visual Ethogram</span>
            <span aria-hidden="true">·</span>
            <span>Canine Non-Verbal Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
            Dog Body Language Decoded
          </h2>
          <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
            Dogs "talk" with subtle muscle shifts long before they bark or growl.
            Learn the complete silhouette of all 7 primary canine emotional states.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4EFE6] rounded-xl border border-[#E2D8C3] self-start md:self-auto shrink-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-white text-[#234231] shadow-2xs font-semibold'
                  : 'text-[#6E5D53] hover:text-[#234231]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 7 States */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStates.map((state) => {
          const isSelected = selectedState?.id === state.id;
          return (
            <div
              key={state.id}
              onClick={() => {
                setSelectedState(state);
                if (onSelectState) onSelectState(state);
              }}
              className={`group bg-white rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer flex flex-col ${
                isSelected
                  ? 'border-[#234231] ring-2 ring-[#234231]/10 shadow-md'
                  : 'border-[#E3DAC8] hover:border-[#8C5E3C] shadow-2xs hover:shadow-sm'
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <DogImage
                  src={state.image}
                  alt={state.emotion}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-lg font-semibold font-display">
                    {state.emotion}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-[#5C4F44] leading-relaxed">
                  {state.description}
                </p>

                <div className="pt-3 border-t border-[#F0EAE0] space-y-1 text-[11px] text-[#6E5D53]">
                  <p><strong className="text-[#234231]">Tail:</strong> {state.tail}</p>
                  <p><strong className="text-[#234231]">Ears:</strong> {state.ears}</p>
                </div>

                <div className="pt-2 text-right">
                  <span className="text-[11px] font-semibold text-[#8C5E3C] group-hover:underline">
                    View Anatomy Cues →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expanded Inspector Panel for the Selected State */}
      {selectedState && (
        <div className="mt-10 bg-[#FAF7F2] border border-[#DDD3C0] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <div className="w-full lg:w-48 aspect-[4/3] rounded-xl overflow-hidden shrink-0 border border-[#E3DAC8]">
              <DogImage
                src={selectedState.image}
                alt={selectedState.emotion}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E8DFC8] pb-3">
                <div>
                  <span className="text-xs font-semibold text-[#8C5E3C]">Body Language Profile</span>
                  <h3 className="text-2xl font-bold font-display text-[#234231]">
                    {selectedState.emotion}
                  </h3>
                </div>
                <div className="text-xs text-[#5C4F44]">
                  Full ethogram posture analysis
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-3 bg-white rounded-xl border border-[#E3DAC8]">
                  <p className="font-bold text-[#234231] mb-1">Ears</p>
                  <p className="text-[#5C4F44]">{selectedState.ears}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E3DAC8]">
                  <p className="font-bold text-[#234231] mb-1">Eyes & Face</p>
                  <p className="text-[#5C4F44]">{selectedState.eyes}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E3DAC8]">
                  <p className="font-bold text-[#234231] mb-1">Mouth & Breath</p>
                  <p className="text-[#5C4F44]">{selectedState.mouth}</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E3DAC8]">
                  <p className="font-bold text-[#234231] mb-1">Tail & Spine</p>
                  <p className="text-[#5C4F44]">{selectedState.tail}</p>
                </div>
              </div>

              <div className="p-4 bg-[#234231]/5 rounded-xl border border-[#234231]/15 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#234231] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#234231]">What you should do: </span>
                  <span className="text-[#4E4137]">{selectedState.recommendedAction}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
