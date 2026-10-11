import React, { useEffect } from 'react';
import { commonProblems } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert } from 'lucide-react';

interface Props {
  id: string;
}

export const ProblemDetailPage: React.FC<Props> = ({ id }) => {
  const item = commonProblems.find((p) => p.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} - Positive Solutions & Guide | CanineMind`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Behaviour Guide Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The behaviour challenge you are looking for does not exist.</p>
        <Link href="/problems" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          View All Behaviour Challenges
        </Link>
      </div>
    );
  }

  const otherProblems = commonProblems.filter((p) => p.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/problems"
        backLabel="All Challenges"
        items={[
          { label: 'Common Problems', href: '/problems' },
          { label: item.title }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E07A5F] mb-1.5 block">
              Behaviour Modification Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
              {item.shortDesc}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Root cause */}
          <div>
            <h2 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">
              The Real Underlying Cause (Why It Happens)
            </h2>
            <p className="text-base text-[#4E4137] leading-relaxed">
              {item.underlyingCause}
            </p>
          </div>

          {/* Triggers */}
          <div className="pt-6 border-t border-[#F0EAE0]">
            <h2 className="text-sm font-bold text-[#234231] uppercase tracking-wider mb-3">
              Common Environmental Triggers
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {item.triggers.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-xs bg-[#FAF7F2] text-[#4E4137] rounded-xl border border-[#E3DAC8] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Solutions step by step */}
          <div className="pt-6 border-t border-[#F0EAE0] space-y-4">
            <h2 className="text-lg font-bold font-display text-[#234231]">
              Evidence-Based Positive Solutions
            </h2>
            <div className="space-y-3">
              {item.positiveSolution.map((sol, idx) => (
                <div key={idx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#234231] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#4E4137] leading-relaxed">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pitfalls */}
          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] space-y-2.5">
            <h3 className="text-xs font-bold text-[#A84328] uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#E07A5F]" />
              Common Owner Mistakes to Avoid:
            </h3>
            <ul className="space-y-1.5 text-xs text-[#6E5D53]">
              {item.commonMistakes.map((mis, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#A84328] font-bold">✕</span>
                  <span>{mis}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom actions */}
          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/training"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Learn Positive Reinforcement Tools</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/guides"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Browse Deep-Dive Guides
            </Link>
          </div>

        </div>
      </article>

      {/* Other problems */}
      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          More Common Behaviour Challenges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherProblems.slice(0, 4).map((op) => (
            <Link
              key={op.id}
              href={`/problems/${op.id}`}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                {op.title}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {op.shortDesc}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                View Solutions →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
