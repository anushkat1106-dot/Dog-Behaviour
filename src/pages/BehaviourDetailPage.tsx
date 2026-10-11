import React, { useEffect } from 'react';
import { coreBehaviours } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link, useRouter } from '../context/RouterContext';
import { CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Compass } from 'lucide-react';

interface Props {
  id: string;
}

export const BehaviourDetailPage: React.FC<Props> = ({ id }) => {
  const { navigate } = useRouter();
  const item = coreBehaviours.find((b) => b.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} - Canine Ethology Guide | CanineMind`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Behaviour Guide Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The behaviour topic you are looking for does not exist.</p>
        <Link href="/behaviour" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          Browse All Behaviours
        </Link>
      </div>
    );
  }

  const relatedBehaviours = coreBehaviours.filter((b) => b.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/behaviour"
        backLabel="All Behaviours"
        items={[
          { label: 'Dog Behaviour', href: '/behaviour' },
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
              href="/training"
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
              href={`/behaviour/${rel.id}`}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                {rel.title}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {rel.shortDesc}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                Read Guide →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
