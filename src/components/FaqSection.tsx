import React, { useState, useMemo } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles, Check, Copy, ArrowRight } from 'lucide-react';
import { homePageQnAList, HomeQnAItem } from '../data/articleQnAData';
import { Link } from '../context/RouterContext';

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // First 2 open by default
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Q&As' },
    { id: 'barking', label: 'Barking & Vocal' },
    { id: 'body-language', label: 'Body Language' },
    { id: 'training', label: 'Training Science' },
    { id: 'health-ethology', label: 'Ethology & Play' }
  ];

  const filteredQnAs = useMemo(() => {
    return homePageQnAList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenIndices(filteredQnAs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  const handleCopy = (idx: number, item: HomeQnAItem) => {
    navigator.clipboard?.writeText(`Q: ${item.question}\nA: ${item.answer}`);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const allOpen = filteredQnAs.length > 0 && openIndices.length === filteredQnAs.length;

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <HelpCircle className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Canine Q&A & Expert Knowledge Base</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Questions & Answers: Expert Canine Advice
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 max-w-xl mx-auto">
          Clear, scientifically validated explanations for everyday pet questions from dog owners around the world.
        </p>

        {/* Search bar for quick answers */}
        <div className="mt-6 max-w-md mx-auto relative">
          <Search className="w-4 h-4 text-[#8C5E3C] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., barking, zoomies, tail, alpha)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-[#E3DAC8] rounded-xl text-[#234231] placeholder-[#A89A8E] focus:outline-none focus:ring-2 focus:ring-[#234231]/30 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C5E3C] hover:text-[#234231]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mt-5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenIndices([0]);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#234231] text-white shadow-xs'
                    : 'bg-[#F4EFE6] text-[#5C4F44] hover:bg-[#EAE1D2] hover:text-[#234231]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Strip: Count + Expand/Collapse */}
      <div className="flex items-center justify-between text-xs text-[#6E5D53] mb-4 px-1">
        <span>
          Showing <strong className="text-[#234231]">{filteredQnAs.length}</strong> questions & answers
        </span>
        {filteredQnAs.length > 0 && (
          <button
            type="button"
            onClick={allOpen ? collapseAll : expandAll}
            className="text-[#8C5E3C] hover:text-[#234231] font-medium transition-colors cursor-pointer"
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        )}
      </div>

      {/* Accordions */}
      {filteredQnAs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-[#E3DAC8] p-8">
          <HelpCircle className="w-8 h-8 text-[#A89A8E] mx-auto mb-2" />
          <p className="text-sm font-semibold text-[#234231]">No questions found matching "{searchQuery}"</p>
          <p className="text-xs text-[#6E5D53] mt-1">Try searching for keywords like "bark", "leash", "zoomies", or reset filters.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-[#234231] rounded-lg cursor-pointer"
          >
            Show All Questions
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredQnAs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            const isCopied = copiedIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#DDD3C0] shadow-sm'
                    : 'bg-white hover:bg-[#FAF7F2]/50 border-[#E3DAC8]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#234231]/30"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-bold font-mono text-[#8C5E3C] mt-0.5 shrink-0">
                      Q{idx + 1}.
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-semibold text-[#234231] font-display block leading-snug">
                        {faq.question}
                      </span>
                      <span className="text-[11px] text-[#8C5E3C] mt-1 block">
                        Category: {faq.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C5E3C] transition-transform duration-200 shrink-0 mt-0.5 ${
                      isOpen ? 'rotate-180 text-[#234231]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5C4F44] leading-relaxed border-t border-[#F0EAE0] pt-4">
                    <div className="pl-6 space-y-3">
                      <p className="leading-relaxed">{faq.answer}</p>
                      <div className="pt-3 flex items-center justify-between text-[11px] text-[#8C5E3C] border-t border-[#F5EFE6]">
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#E07A5F]" />
                          Scientifically Reviewed
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopy(idx, faq)}
                          className="inline-flex items-center gap-1 hover:text-[#234231] px-2 py-1 rounded transition-colors cursor-pointer"
                          title="Copy question and answer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700 font-medium">Copied to clipboard</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Q&A</span>
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
      )}

      {/* Bottom callout to Articles */}
      <div className="mt-8 p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold text-[#234231] uppercase tracking-wider">
            Looking for In-Depth Guides?
          </p>
          <p className="text-xs text-[#6E5D53] mt-0.5">
            Every learning article and behaviour guide features a dedicated topic Q&A at the bottom.
          </p>
        </div>
        <Link
          href="/g"
          className="px-4 py-2 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
        >
          <span>Explore All Articles</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
        </Link>
      </div>

    </section>
  );
};
