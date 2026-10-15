import React, { useEffect } from 'react';
import { ageStages } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getAgeStageUrl } from '../utils/slugs';
import { ArticleQnA } from '../components/ArticleQnA';

interface Props {
  id: string;
}

export const AgeStageDetailPage: React.FC<Props> = ({ id }) => {
  const item = ageStages.find((a) => a.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.stage} (${item.ageRange}) - Behaviour & Needs | CanineMind`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Stage Profile Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The life stage profile you are looking for does not exist.</p>
        <Link href="/age" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          View All Life Stages
        </Link>
      </div>
    );
  }

  const otherStages = ageStages.filter((a) => a.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/age"
        backLabel="All Life Stages"
        items={[
          { label: 'Life Stages', href: '/age' },
          { label: item.stage }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={item.image}
            alt={item.stage}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E07A5F] mb-1.5 block">
              Developmental Window: {item.ageRange}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {item.stage}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
              {item.developmentalFocus}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div>
            <h2 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-3">
              Hallmark Behaviours During This Phase
            </h2>
            <div className="space-y-3">
              {item.keyBehaviors.map((kb, idx) => (
                <div key={idx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#8C5E3C] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#4E4137] leading-relaxed">{kb}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#234231]/5 rounded-2xl border border-[#234231]/15 space-y-2.5">
              <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#234231]" />
                Recommended Daily Enrichment
              </h3>
              <ul className="space-y-2 text-xs text-[#4E4137]">
                {item.recommendedEnrichment.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#234231] font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] space-y-2.5">
              <h3 className="text-sm font-bold text-[#8C5E3C] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C5E3C]" />
                Essential Tips for Owners
              </h3>
              <ul className="space-y-2 text-xs text-[#5C4F44]">
                {item.tipsForOwners.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8C5E3C] font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Age Stage Q&A */}
          <ArticleQnA category="age" id={item.id} topicTitle={`${item.stage} (${item.ageRange})`} />

          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/t"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Positive Life Skill Training</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/age"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              View All Age Stages
            </Link>
          </div>

        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          Compare Other Life Stages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherStages.map((os) => (
            <Link
              key={os.id}
              href={getAgeStageUrl(os.id)}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <span className="text-[11px] text-[#E07A5F] font-medium">{os.ageRange}</span>
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors mt-0.5">
                {os.stage}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {os.developmentalFocus}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                Read Stage Details →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
