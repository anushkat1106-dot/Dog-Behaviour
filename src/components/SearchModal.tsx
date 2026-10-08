import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, BookOpen, Compass, AlertCircle, Award } from 'lucide-react';
import {
  coreBehaviours,
  commonProblems,
  trainingMethods,
  breedBehaviors,
  guideArticles,
  DogBehaviourItem,
  ProblemItem,
  TrainingMethod,
  BreedInfo,
  ArticleItem
} from '../data/dogData';
import { ModalPayload } from './DetailModal';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPayload: (payload: ModalPayload) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPayload
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const results: {
      id: string;
      title: string;
      category: string;
      snippet: string;
      payload: ModalPayload;
    }[] = [];

    // Search core behaviours
    coreBehaviours.forEach((b) => {
      if (b.title.toLowerCase().includes(q) || b.shortDesc.toLowerCase().includes(q) || b.fullExplanation.toLowerCase().includes(q)) {
        results.push({
          id: b.id,
          title: b.title,
          category: 'Core Behaviour',
          snippet: b.shortDesc,
          payload: { type: 'behaviour', data: b }
        });
      }
    });

    // Search problems
    commonProblems.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.shortDesc.toLowerCase().includes(q) || p.underlyingCause.toLowerCase().includes(q)) {
        results.push({
          id: p.id,
          title: p.title,
          category: 'Behaviour Problem',
          snippet: p.shortDesc,
          payload: { type: 'problem', data: p }
        });
      }
    });

    // Search training methods
    trainingMethods.forEach((t) => {
      if (t.name.toLowerCase().includes(q) || t.tagline.toLowerCase().includes(q) || t.corePrinciple.toLowerCase().includes(q)) {
        results.push({
          id: t.id,
          title: t.name,
          category: 'Training Technique',
          snippet: t.tagline,
          payload: { type: 'training', data: t }
        });
      }
    });

    // Search breeds
    breedBehaviors.forEach((br) => {
      if (br.name.toLowerCase().includes(q) || br.group.toLowerCase().includes(q) || br.naturalDrives.toLowerCase().includes(q)) {
        results.push({
          id: br.id,
          title: br.name,
          category: 'Dog Breed',
          snippet: `${br.group} · ${br.naturalDrives}`,
          payload: { type: 'breed', data: br }
        });
      }
    });

    // Search articles
    guideArticles.forEach((a) => {
      if (a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)) {
        results.push({
          id: a.id,
          title: a.title,
          category: 'Learning Guide',
          snippet: a.excerpt,
          payload: { type: 'article', data: a }
        });
      }
    });

    return results;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-[#E3DAC8] shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFC8] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#8C5E3C]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search behaviours, barking, tail wag, separation anxiety, breeds..."
            className="w-full text-sm sm:text-base text-[#234231] placeholder:text-[#A89A8E] focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#8C5E3C] hover:text-[#234231] cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-[#F4EFE6] hover:bg-[#EAE0D2] flex items-center justify-center text-[#5C4F44] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#7A6A5E]">
              <p className="font-semibold text-[#4E4137]">Popular searches:</p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                {['Barking', 'Separation Anxiety', 'Clicker Training', 'Golden Retriever', 'Play Bow', 'Leash Pulling'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E3DAC8] text-[#5C4F44] hover:text-[#234231] hover:border-[#8C5E3C] transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#7A6A5E]">
              No guides found for "{query}". Try searching "barking", "chewing", or "retriever".
            </div>
          ) : (
            searchResults.map((res) => (
              <div
                key={res.id}
                onClick={() => {
                  onSelectPayload(res.payload);
                  onClose();
                }}
                className="p-3.5 rounded-xl hover:bg-[#FAF7F2] border border-transparent hover:border-[#E3DAC8] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#8C5E3C]">
                    <span>{res.category}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#234231] font-display mt-0.5 group-hover:text-[#8C5E3C] transition-colors">
                    {res.title}
                  </h4>
                  <p className="text-xs text-[#6E5D53] line-clamp-1 mt-0.5">
                    {res.snippet}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C4B7A6] group-hover:text-[#8C5E3C] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
              </div>
            ))
          )}
        </div>

        {/* Footer tip */}
        <div className="px-5 py-3 bg-[#FAF7F2] border-t border-[#E8DFC8] flex items-center justify-between text-[11px] text-[#7A6A5E]">
          <span>Press ESC to close</span>
          <span>{searchResults.length} topics found</span>
        </div>

      </div>
    </div>
  );
};
