import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Check, Copy } from 'lucide-react';
import { getQnAForArticle, QnAItem } from '../data/articleQnAData';

interface ArticleQnAProps {
  category: 'guide' | 'behaviour' | 'problem' | 'training' | 'signal' | 'breed' | 'age';
  id: string;
  topicTitle?: string;
  customItems?: QnAItem[];
}

export const ArticleQnA: React.FC<ArticleQnAProps> = ({
  category,
  id,
  topicTitle,
  customItems
}) => {
  const items = customItems || getQnAForArticle(category, id);
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!items || items.length === 0) {
    return null;
  }

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenIndices(items.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  const handleCopy = (idx: number, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const allOpen = openIndices.length === items.length;

  return (
    <section
      aria-labelledby="article-qna-heading"
      className="mt-10 pt-8 border-t border-[#E8DFC8]"
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide mb-1">
            <HelpCircle className="w-4 h-4 text-[#E07A5F]" />
            <span>Questions & Answers</span>
          </div>
          <h2
            id="article-qna-heading"
            className="text-xl sm:text-2xl font-bold font-display text-[#234231] tracking-tight"
          >
            {topicTitle
              ? `Q&A: What Owners Ask About ${topicTitle}`
              : 'Q&A: Key Questions & Expert Answers'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6E5D53] mt-1 max-w-2xl">
            Evidence-based ethological guidance and practical advice from canine behaviorists.
          </p>
        </div>

        {/* Expand / Collapse All control */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
          {allOpen ? (
            <button
              type="button"
              onClick={collapseAll}
              className="text-xs font-medium text-[#8C5E3C] hover:text-[#234231] px-3 py-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE0D2] transition-colors cursor-pointer"
            >
              Collapse all
            </button>
          ) : (
            <button
              type="button"
              onClick={expandAll}
              className="text-xs font-medium text-[#234231] hover:text-[#182F23] px-3 py-1.5 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE0D2] transition-colors cursor-pointer"
            >
              Expand all ({items.length})
            </button>
          )}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          const isCopied = copiedIdx === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-white border-[#DDD3C0] shadow-sm'
                  : 'bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] border-[#E3DAC8]'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234231]/30"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xs font-bold font-mono text-[#8C5E3C] mt-0.5 shrink-0">
                    Q{idx + 1}.
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#234231] font-display leading-snug">
                    {item.question}
                  </span>
                </div>
                <div className="p-1 rounded-md text-[#8C5E3C] shrink-0 mt-0.5">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#234231]' : ''
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#4E4137] leading-relaxed border-t border-[#F0EAE0]/80">
                  <div className="pl-6 pt-2 space-y-3">
                    <p>{item.answer}</p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#8C5E3C] border-t border-[#F5EFE6]">
                      <span className="italic">Canine Ethology & Positive Guidance</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(idx, `Q: ${item.question}\nA: ${item.answer}`)
                        }
                        className="inline-flex items-center gap-1 hover:text-[#234231] px-2 py-1 rounded transition-colors"
                        title="Copy answer to clipboard"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 font-medium">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy answer</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
