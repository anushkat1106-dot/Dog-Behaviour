import React from 'react';
import { guideArticles, ArticleItem } from '../data/dogData';
import { DogImage } from './DogImage';
import { BookOpen, Clock, ArrowUpRight } from 'lucide-react';

interface LearningArticlesProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const LearningArticles: React.FC<LearningArticlesProps> = ({ onSelectArticle }) => {
  return (
    <section id="guides" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
          <BookOpen className="w-3.5 h-3.5 text-[#E07A5F]" />
          <span>Dog Behaviour Guide</span>
          <span aria-hidden="true">·</span>
          <span>In-Depth Educational Articles</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
          Deep-Dive Learning Articles
        </h2>
        <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
          Comprehensive, science-backed guides explaining canine cognition, communication subtleties,
          and practical step-by-step home adjustments.
        </p>
      </div>

      {/* Grid of 6 Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {guideArticles.map((art) => (
          <article
            key={art.id}
            onClick={() => onSelectArticle(art)}
            className="group bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <DogImage
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              <div className="absolute top-3 right-3">
                <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs text-[#234231] flex items-center justify-center shadow-xs group-hover:bg-[#234231] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                {/* Metadata: clean unboxed text with typographic separators (anti-pill discipline) */}
                <div className="flex items-center gap-2 text-xs text-[#8C5E3C] font-medium mb-2.5">
                  <span>{art.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A89A8E]" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#5C4F44] mt-2.5 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#F0EAE0] flex items-center justify-between text-xs font-semibold text-[#8C5E3C]">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};
