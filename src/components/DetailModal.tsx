import React from 'react';
import { X, CheckCircle2, AlertTriangle, Sparkles, Clock, ArrowRight } from 'lucide-react';
import { DogImage } from './DogImage';
import { DogBehaviourItem, ProblemItem, TrainingMethod, BreedInfo, ArticleItem } from '../data/dogData';

export type ModalPayload =
  | { type: 'behaviour'; data: DogBehaviourItem }
  | { type: 'problem'; data: ProblemItem }
  | { type: 'training'; data: TrainingMethod }
  | { type: 'breed'; data: BreedInfo }
  | { type: 'article'; data: ArticleItem };

interface DetailModalProps {
  payload: ModalPayload | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ payload, onClose }) => {
  if (!payload) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E3DAC8] shadow-2xl relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={
              payload.type === 'behaviour'
                ? payload.data.image
                : payload.type === 'problem'
                ? payload.data.image
                : payload.type === 'training'
                ? payload.data.image
                : payload.type === 'breed'
                ? payload.data.image
                : payload.data.image
            }
            alt="Dog behaviour detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E07A5F]">
              {payload.type === 'behaviour' && 'Canine Ethology Study'}
              {payload.type === 'problem' && 'Behaviour Modification Plan'}
              {payload.type === 'training' && 'Positive Reinforcement Guide'}
              {payload.type === 'breed' && `Breed Heritage: ${payload.data.group}`}
              {payload.type === 'article' && `Educational Article · ${payload.data.readTime}`}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display mt-1 text-white">
              {payload.type === 'behaviour' && payload.data.title}
              {payload.type === 'problem' && payload.data.title}
              {payload.type === 'training' && payload.data.name}
              {payload.type === 'breed' && payload.data.name}
              {payload.type === 'article' && payload.data.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* 1. Core Behaviour Details */}
          {payload.type === 'behaviour' && (
            <>
              <div>
                <h3 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">Scientific Overview</h3>
                <p className="text-sm text-[#4E4137] leading-relaxed">
                  {payload.data.fullExplanation}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0]">
                <h3 className="text-xs font-bold text-[#234231] uppercase tracking-wider mb-3">
                  Why This Instinct Occurs:
                </h3>
                <ul className="space-y-2">
                  {payload.data.whyItHappens.map((reason, idx) => (
                    <li key={idx} className="text-xs text-[#5C4F44] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C5E3C] mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#234231]/5 rounded-xl border border-[#234231]/15 space-y-2">
                  <h4 className="text-xs font-bold text-[#234231] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#234231]" />
                    What To Do (Positive Protocol):
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#4E4137]">
                    {payload.data.whatToDo.map((todo, idx) => (
                      <li key={idx}>• {todo}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#E07A5F]/10 rounded-xl border border-[#E07A5F]/20 space-y-2">
                  <h4 className="text-xs font-bold text-[#A84328] flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#E07A5F]" />
                    What To Avoid:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#6E5D53]">
                    {payload.data.whatToAvoid.map((avoid, idx) => (
                      <li key={idx}>• {avoid}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                <p className="text-xs text-[#6E5D53]">
                  <strong className="text-[#234231]">Ethological Note: </strong>
                  {payload.data.ethologyNote}
                </p>
              </div>
            </>
          )}

          {/* 2. Problem Item Details */}
          {payload.type === 'problem' && (
            <>
              <div>
                <h3 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">Underlying Cause</h3>
                <p className="text-sm text-[#4E4137] leading-relaxed">
                  {payload.data.underlyingCause}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0]">
                <h3 className="text-xs font-bold text-[#234231] uppercase tracking-wider mb-2">Common Environmental Triggers</h3>
                <div className="flex flex-wrap gap-2">
                  {payload.data.triggers.map((trig, idx) => (
                    <span key={idx} className="px-2.5 py-1 text-xs bg-[#FAF7F2] text-[#4E4137] rounded-lg border border-[#E3DAC8]">
                      {trig}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0] space-y-3">
                <h3 className="text-xs font-bold text-[#234231] uppercase tracking-wider">
                  Science-Backed Solution Protocol:
                </h3>
                <ol className="space-y-2">
                  {payload.data.positiveSolution.map((sol, idx) => (
                    <li key={idx} className="text-xs text-[#5C4F44] flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#234231] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="mt-0.5 leading-relaxed">{sol}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] space-y-1.5">
                <h4 className="text-xs font-bold text-[#A84328]">Common Mistakes Owners Make:</h4>
                <ul className="space-y-1 text-xs text-[#6E5D53]">
                  {payload.data.commonMistakes.map((mis, idx) => (
                    <li key={idx}>✕ {mis}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* 3. Training Method Details */}
          {payload.type === 'training' && (
            <>
              <div>
                <h3 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">Core Psychological Principle</h3>
                <p className="text-sm text-[#4E4137] leading-relaxed">
                  {payload.data.corePrinciple}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0]">
                <h3 className="text-xs font-bold text-[#234231] uppercase tracking-wider mb-3">
                  Step-by-Step Training Protocol:
                </h3>
                <ol className="space-y-2.5">
                  {payload.data.stepByStep.map((step, idx) => (
                    <li key={idx} className="text-xs text-[#5C4F44] flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#8C5E3C] text-white flex items-center justify-center shrink-0 font-bold text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="mt-0.5 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#E07A5F] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-[#234231]">Certified Trainer Pro Tip: </span>
                  <span className="text-[#5C4F44]">{payload.data.proTip}</span>
                </div>
              </div>
            </>
          )}

          {/* 4. Breed Details */}
          {payload.type === 'breed' && (
            <>
              <div>
                <h3 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-1">Breed Temperament</h3>
                <p className="text-xs text-[#4E4137] font-medium">
                  {payload.data.temperament.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0]">
                <h3 className="text-xs font-bold text-[#234231] uppercase tracking-wider mb-2">Ancestral Work & Natural Drives</h3>
                <p className="text-xs text-[#5C4F44] leading-relaxed">
                  {payload.data.naturalDrives}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0]">
                <h3 className="text-xs font-bold text-[#234231] uppercase tracking-wider mb-2">Typical Daily Habits</h3>
                <ul className="space-y-1.5 text-xs text-[#5C4F44]">
                  {payload.data.typicalBehaviors.map((tb, idx) => (
                    <li key={idx}>• {tb}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#F0EAE0] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                  <h4 className="text-xs font-bold text-[#234231] mb-1">Recommended Enrichment</h4>
                  <p className="text-xs text-[#5C4F44] leading-relaxed">{payload.data.enrichmentNeeds}</p>
                </div>
                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                  <h4 className="text-xs font-bold text-[#234231] mb-1">Optimal Training Style</h4>
                  <p className="text-xs text-[#5C4F44] leading-relaxed">{payload.data.trainingStyle}</p>
                </div>
              </div>
            </>
          )}

          {/* 5. Article Details */}
          {payload.type === 'article' && (
            <>
              <div className="flex items-center gap-2 text-xs text-[#8C5E3C] font-semibold border-b border-[#F0EAE0] pb-3">
                <span>{payload.data.date}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {payload.data.readTime}
                </span>
              </div>

              <div className="space-y-4 text-sm text-[#4E4137] leading-relaxed">
                {payload.data.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] space-y-2.5">
                <h4 className="text-xs font-bold text-[#234231] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                  Key Takeaways for Dog Owners:
                </h4>
                <ul className="space-y-1.5 text-xs text-[#5C4F44]">
                  {payload.data.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#234231] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {/* Modal Footer Close Button */}
          <div className="pt-4 border-t border-[#F0EAE0] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
