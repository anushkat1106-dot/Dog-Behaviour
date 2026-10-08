import React from 'react';
import { commonProblems, ProblemItem } from '../data/dogData';
import { DogImage } from './DogImage';
import { AlertCircle, ArrowRight } from 'lucide-react';

interface CommonProblemsProps {
  onSelectProblem: (problem: ProblemItem) => void;
}

export const CommonProblems: React.FC<CommonProblemsProps> = ({ onSelectProblem }) => {
  return (
    <section id="problems" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <span>Humane Behaviour Solutions</span>
          <span aria-hidden="true">·</span>
          <span>Root-Cause Resolution</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Common Behaviour Problems
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
          Behavior problems are not malicious acts of rebellion. They are distress signals, genetic predispositions,
          or learned survival strategies. Address the root cause with gentle, scientifically proven protocols.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {commonProblems.map((prob) => (
          <div
            key={prob.id}
            onClick={() => onSelectProblem(prob)}
            className="group bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <DogImage
                src={prob.image}
                alt={prob.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#234231] text-[10px] font-bold rounded-md shadow-2xs uppercase tracking-wider">
                  Behaviour Challenge
                </span>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                  {prob.title}
                </h3>
                <p className="text-xs text-[#5C4F44] mt-2 leading-relaxed line-clamp-3">
                  {prob.shortDesc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-semibold text-[#8C5E3C]">
                <span>View Action Plan</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
