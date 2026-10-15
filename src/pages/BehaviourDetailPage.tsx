import React, { useEffect } from 'react';
import { coreBehaviours } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { CheckCircle2, AlertTriangle, ArrowRight, Compass, HelpCircle, Sparkles, BookOpen } from 'lucide-react';
import { getBehaviourUrl } from '../utils/slugs';
import { ArticleQnA } from '../components/ArticleQnA';
import { usePageSEO } from '../utils/usePageSEO';

interface Props {
  id: string;
}

export const BehaviourDetailPage: React.FC<Props> = ({ id }) => {
  const item = coreBehaviours.find((b) => b.id === id);

  usePageSEO({
    title: item ? `${item.title} - Canine Ethology & Behaviour Guide | CanineMind` : 'Dog Behaviour Guide | CanineMind',
    description: item ? `Learn why dogs perform ${item.title.toLowerCase()}, decode underlying evolutionary causes, and discover positive reinforcement solutions.` : 'Explore comprehensive canine ethology and behavior guides.',
    canonicalPath: item ? getBehaviourUrl(item.id) : '/b',
    keywords: item ? [
      item.title.toLowerCase(),
      'dog behaviour',
      'canine ethology',
      'dog psychology',
      ...(item.subsections ? item.subsections.map(s => s.h2.toLowerCase()) : [])
    ] : ['dog behaviour']
  });

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Behaviour Guide Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The behaviour topic you are looking for does not exist.</p>
        <Link href="/b" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          Browse All Behaviours
        </Link>
      </div>
    );
  }

  const relatedBehaviours = coreBehaviours.filter((b) => b.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/b"
        backLabel="All Behaviours"
        items={[
          { label: 'Dog Behaviour', href: '/b' },
          { label: item.title }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        {/* Hero Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E07A5F] mb-1.5 block">
              Canine Ethology Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
              {item.shortDesc}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Scientific Overview */}
          <div>
            <h2 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">
              Scientific Ethological Overview
            </h2>
            <p className="text-base text-[#4E4137] leading-relaxed">
              {item.fullExplanation}
            </p>
          </div>

          {/* Quick-Jump Subheadings Table of Contents */}
          {item.subsections && item.subsections.length > 0 && (
            <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8]">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#8C5E3C]" />
                <span className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider">
                  In-Depth Subsections in This Guide
                </span>
              </div>
              <p className="text-xs text-[#6E5D53] mb-3">
                Explore specialized ethological breakdowns and solutions for specific vocalization contexts:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {item.subsections.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[#DDD3C0] hover:border-[#8C5E3C] hover:bg-[#F5EFE6] text-xs font-semibold text-[#234231] hover:text-[#8C5E3C] transition-all shadow-2xs"
                  >
                    <span>{sub.h2}</span>
                    <span className="text-[#8C5E3C]">↓</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Why It Happens */}
          <div className="pt-6 border-t border-[#F0EAE0]">
            <h2 className="text-lg font-bold font-display text-[#234231] mb-4">
              Evolutionary Reasons & Daily Triggers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {item.whyItHappens.map((reason, idx) => (
                <div key={idx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#8C5E3C] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs text-[#5C4F44] leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Subheadings (e.g. Why do dogs bark at midnight? & Why do dogs bark at vehicles?) */}
          {item.subsections && item.subsections.map((sub) => (
            <section
              key={sub.id}
              id={sub.id}
              className="pt-8 border-t border-[#F0EAE0] scroll-mt-6"
            >
              <div className="flex items-center gap-2 mb-2">
                {sub.badge && (
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#E07A5F]/15 text-[#A84328]">
                    {sub.badge}
                  </span>
                )}
                <span className="text-xs font-semibold text-[#8C5E3C]">Canine Science Investigation</span>
              </div>

              {/* Exact H2 Heading requested by user */}
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#234231] tracking-tight mb-3">
                {sub.h2}
              </h2>

              <p className="text-sm sm:text-base font-medium text-[#234231]/95 leading-relaxed mb-4 bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DFC8]">
                {sub.intro}
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4E4137] leading-relaxed">
                {sub.paragraphs.map((para, pIdx) => {
                  const isQA = para.startsWith('QUESTION:');
                  if (isQA) {
                    const parts = para.split('ANSWER:');
                    const qText = parts[0].replace('QUESTION:', '').trim();
                    const aText = parts[1]?.trim() || '';
                    return (
                      <div
                        key={pIdx}
                        className="my-5 p-5 bg-[#234231]/5 rounded-2xl border-l-4 border-[#234231] text-xs sm:text-sm"
                      >
                        <p className="font-bold text-[#234231] mb-1.5 flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-[#E07A5F] shrink-0" />
                          <span>{qText}</span>
                        </p>
                        <p className="text-[#5C4F44] leading-relaxed">{aText}</p>
                      </div>
                    );
                  }
                  return <p key={pIdx}>{para}</p>;
                })}
              </div>

              {sub.image && (
                <div className="my-6 rounded-2xl overflow-hidden border border-[#E3DAC8] bg-[#F4EFE6]">
                  <DogImage
                    src={sub.image.src}
                    alt={sub.image.alt}
                    className="w-full aspect-[21/9] sm:aspect-[2.5/1] object-cover"
                  />
                  <p className="p-3 text-xs text-[#6E5D53] bg-white border-t border-[#E8DFC8] italic">
                    {sub.image.caption}
                  </p>
                </div>
              )}

              {sub.keyTakeaways && sub.keyTakeaways.length > 0 && (
                <div className="mt-5 p-5 bg-white rounded-2xl border border-[#E2D8C3] shadow-xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C5E3C] mb-3">
                    Key Takeaways: {sub.h2}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C4F44]">
                    {sub.keyTakeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#234231] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {sub.qnaSection && (
                <div className="mt-4 p-4 rounded-xl bg-[#FBF7F0] border border-[#E8DFC8] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-[#234231] block mb-1">
                      Quick Q&A: {sub.qnaSection.question}
                    </span>
                    <span className="text-[#5C4F44] leading-relaxed">
                      {sub.qnaSection.answer}
                    </span>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Do and Avoid */}
          <div className="pt-6 border-t border-[#F0EAE0] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#234231]/5 rounded-2xl border border-[#234231]/15 space-y-3">
              <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#234231]" />
                Positive Science-Backed Action Plan
              </h3>
              <ul className="space-y-2 text-xs text-[#4E4137]">
                {item.whatToDo.map((todo, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#234231] font-bold mt-0.5">•</span>
                    <span>{todo}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#E07A5F]/10 rounded-2xl border border-[#E07A5F]/20 space-y-3">
              <h3 className="text-sm font-bold text-[#A84328] flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#E07A5F]" />
                Common Human Errors to Avoid
              </h3>
              <ul className="space-y-2 text-xs text-[#6E5D53]">
                {item.whatToAvoid.map((avoid, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#E07A5F] font-bold mt-0.5">✕</span>
                    <span>{avoid}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ethology quote note */}
          <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E2D8C3] flex items-start gap-3.5">
            <Compass className="w-5 h-5 text-[#8C5E3C] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#234231] mb-0.5">Ethological Field Note</p>
              <p className="text-xs text-[#5C4F44] leading-relaxed">{item.ethologyNote}</p>
            </div>
          </div>

          {/* Behaviour Q&A */}
          <ArticleQnA category="behaviour" id={item.id} topicTitle={item.title} />

          {/* Next steps */}
          <div className="pt-8 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/decoder"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Decode Your Dog's Micro-Signals</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/t"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Explore Positive Training Methods
            </Link>
          </div>

        </div>
      </article>

      {/* Explore Other Behaviours */}
      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          More Canine Behaviour Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {relatedBehaviours.slice(0, 4).map((rel) => (
            <Link
              key={rel.id}
              href={getBehaviourUrl(rel.id)}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                {rel.title}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {rel.shortDesc}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                Read full {rel.title.toLowerCase()} guide & Q&A →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
