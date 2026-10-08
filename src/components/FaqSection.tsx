import React, { useState } from 'react';
import { faqs } from '../data/dogData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <HelpCircle className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Answers to Common Canine Questions
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 max-w-xl mx-auto">
          Clear scientific explanations for everyday pet questions from dog owners around the world.
        </p>
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-[#234231] font-display">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#8C5E3C] transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5C4F44] leading-relaxed border-t border-[#F0EAE0] pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
