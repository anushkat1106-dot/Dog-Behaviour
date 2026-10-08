import React, { useState } from 'react';
import { quizQuestions } from '../data/dogData';
import { Sparkles, CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

export const BehaviourQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const currentQ = quizQuestions[currentStep];

  const handleSelectOption = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswers({ ...selectedAnswers, [currentStep]: index });
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  // Calculate score
  const totalScore = Object.entries(selectedAnswers).reduce((acc, [step, optIdx]) => {
    const q = quizQuestions[Number(step)];
    return acc + (q?.options[optIdx]?.score || 0);
  }, 0);

  const maxScore = quizQuestions.length * 2; // 10 points

  return (
    <section id="quiz" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="bg-[#FAF7F2] border border-[#DDD3C0] rounded-3xl p-6 sm:p-10 shadow-xs">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Interactive Self-Assessment</span>
            <span aria-hidden="true">·</span>
            <span>Ethological Knowledge Check</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
            How Well Do You Speak "Dog"?
          </h2>
          <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
            Test your understanding of canine signals, stress markers, and modern positive training responses.
            Discover your canine attunement score with immediate educational insights.
          </p>
        </div>

        {!quizCompleted ? (
          <div className="bg-white rounded-2xl border border-[#E3DAC8] p-6 sm:p-8 shadow-2xs max-w-3xl mx-auto">
            {/* Step progress (anti-pill unboxed text) */}
            <div className="flex items-center justify-between text-xs text-[#8C5E3C] font-semibold border-b border-[#F0EAE0] pb-4 mb-6">
              <span>Question {currentStep + 1} of {quizQuestions.length}</span>
              <span className="text-[#6E5D53]">{currentQ.context}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-[#234231] font-display leading-snug mb-6">
              {currentQ.question}
            </h3>

            {/* Options list */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentStep] === idx;
                const isCorrect = opt.score === 2;

                let borderStyle = 'border-[#E3DAC8] hover:border-[#8C5E3C] bg-white';
                if (showExplanation) {
                  if (isSelected && isCorrect) {
                    borderStyle = 'border-[#234231] bg-[#234231]/5 text-[#234231]';
                  } else if (isSelected && !isCorrect) {
                    borderStyle = 'border-[#D9534F] bg-[#D9534F]/5 text-[#A84328]';
                  } else if (isCorrect) {
                    borderStyle = 'border-[#234231] bg-[#234231]/5 text-[#234231]';
                  }
                } else if (isSelected) {
                  borderStyle = 'border-[#234231] bg-[#FAF7F2]';
                }

                return (
                  <button
                    key={idx}
                    disabled={showExplanation}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-start gap-3 ${borderStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-[#F4EFE6] text-[#6E5D53] font-bold flex items-center justify-center shrink-0 text-xs">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="mt-0.5 leading-relaxed flex-1">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation reveal */}
            {showExplanation && (
              <div className="mt-6 p-4 rounded-xl bg-[#FAF7F2] border border-[#E3DAC8] space-y-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  {currentQ.options[selectedAnswers[currentStep] || 0]?.score === 2 ? (
                    <span className="text-xs font-bold text-[#234231] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#234231]" />
                      Correct Understanding!
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-[#A84328] flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-[#D9534F]" />
                      Educational Insight:
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#5C4F44] leading-relaxed">
                  {currentQ.options[selectedAnswers[currentStep] || 0]?.explanation}
                </p>

                <div className="pt-2 text-right">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>{currentStep < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Quiz Results View */
          <div className="bg-white rounded-2xl border border-[#E3DAC8] p-8 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#234231]/10 text-[#234231] mx-auto flex items-center justify-center">
              <Award className="w-8 h-8 text-[#E07A5F]" />
            </div>

            <div>
              <span className="text-xs font-semibold text-[#8C5E3C]">Assessment Complete</span>
              <h3 className="text-3xl font-bold font-display text-[#234231] mt-1">
                Your Canine Attunement Score
              </h3>
              <p className="text-4xl font-extrabold text-[#234231] font-display mt-3">
                {totalScore} <span className="text-xl text-[#7A6A5E] font-normal">/ {maxScore} pts</span>
              </p>
            </div>

            <p className="text-sm text-[#5C4F44] max-w-lg mx-auto leading-relaxed">
              {totalScore >= 8
                ? 'Outstanding! You have a sophisticated grasp of canine calming signals, threshold management, and positive reinforcement science.'
                : totalScore >= 5
                ? 'Great foundation! You understand key instincts, but brushing up on subtle appeasement signals (like lip-licking and stiff freezes) will take your bond even further.'
                : 'A great learning opportunity! Dog body language is often counter-intuitive. Exploring our guide articles above will help replace old myths with modern ethology.'}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#8C5E3C]" />
                <span>Retake Quiz</span>
              </button>
              <a
                href="#guides"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors shadow-xs"
              >
                Explore More Learning Guides
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
