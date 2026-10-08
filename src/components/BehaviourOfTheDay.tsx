import React, { useState } from 'react';
import { dailyInsights } from '../data/dogData';
import { Sparkles, ArrowRight, Lightbulb, RefreshCw } from 'lucide-react';

export const BehaviourOfTheDay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dailyInsights.length);
  };

  const item = dailyInsights[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
      <div className="bg-gradient-to-r from-[#F4EFE6] via-[#FAF5EC] to-[#F1E9DC] border border-[#E2D8C3] rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#234231] text-[#FAF7F2] flex items-center justify-center shrink-0 shadow-2xs">
              <Lightbulb className="w-5 h-5 text-[#E07A5F]" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C]">
                <span>Canine Insight of the Day</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#234231]">{item.day} Edition</span>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#234231] mt-0.5 font-display">
                {item.title}
              </h3>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#5C4F44] hover:text-[#234231] bg-white hover:bg-[#FAF7F2] border border-[#DDD3C0] rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#8C5E3C]" />
            <span>Cycle Insights</span>
          </button>
        </div>

        <p className="mt-4 text-sm sm:text-base text-[#4E4137] leading-relaxed pl-0 sm:pl-13">
          "{item.insight}"
        </p>
      </div>
    </section>
  );
};
