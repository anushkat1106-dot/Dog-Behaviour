import React, { useState } from 'react';
import { breedBehaviors, BreedInfo } from '../data/dogData';
import { DogImage } from './DogImage';
import { Shield, Sparkles } from 'lucide-react';

interface BreedGuideProps {
  onSelectBreed: (breed: BreedInfo) => void;
}

export const BreedGuide: React.FC<BreedGuideProps> = ({ onSelectBreed }) => {
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const groups = [
    { id: 'all', label: 'All Breeds (8)' },
    { id: 'sporting', label: 'Sporting / Gundogs' },
    { id: 'herding', label: 'Herding & Working' },
    { id: 'hound', label: 'Hounds & Companions' }
  ];

  const filteredBreeds = breedBehaviors.filter((b) => {
    if (activeGroup === 'sporting') return b.group.includes('Sporting');
    if (activeGroup === 'herding') return b.group.includes('Herding') || b.group.includes('Working');
    if (activeGroup === 'hound') return b.group.includes('Hound') || b.group.includes('Companion');
    return true;
  });

  return (
    <section id="breeds" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
            <span>Selective Genetics</span>
            <span aria-hidden="true">·</span>
            <span>Ancestral Work & Behavioral Predispositions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
            Dog Breed Behaviour Profiles
          </h2>
          <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
            Every breed carries centuries of selective working breeding—from herding motor patterns to underground quarry burrowing.
            Understanding breed heritage is the key to providing targeted enrichment.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F4EFE6] rounded-xl border border-[#E2D8C3] self-start md:self-auto shrink-0">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeGroup === g.id
                  ? 'bg-white text-[#234231] shadow-2xs font-semibold'
                  : 'text-[#6E5D53] hover:text-[#234231]'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBreeds.map((breed) => (
          <div
            key={breed.id}
            onClick={() => onSelectBreed(breed)}
            className="group bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <DogImage
                src={breed.image}
                alt={breed.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] text-[#E07A5F] font-medium">{breed.group}</span>
                <h3 className="text-lg font-semibold font-display">{breed.name}</h3>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                {/* Temperament traits (unboxed text with separators per design rules) */}
                <div className="text-xs text-[#8C5E3C] font-medium flex flex-wrap gap-1 mb-2">
                  {breed.temperament.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {idx < breed.temperament.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>

                <p className="text-xs text-[#5C4F44] leading-relaxed line-clamp-2">
                  {breed.naturalDrives}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-semibold text-[#8C5E3C]">
                <span>View Instincts & Enrichment</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
