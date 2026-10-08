import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <aside aria-label="Veterinary and behavioral disclaimer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
      <div className="bg-[#FAF5EC] border-l-4 border-[#8C5E3C] border-y border-r border-[#E5DAC6] rounded-xl p-5 sm:p-6 shadow-2xs">
        <div className="flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-[#8C5E3C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#8C5E3C] tracking-wide uppercase">
              Veterinary & Behavioural Safety Disclaimer
            </h4>
            <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
              This website provides general educational information about dog behaviour and is not a substitute for advice from a qualified veterinarian, certified dog trainer, or veterinary behaviourist. Serious aggression, sudden behaviour changes, or potential medical problems should be evaluated by a professional.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
