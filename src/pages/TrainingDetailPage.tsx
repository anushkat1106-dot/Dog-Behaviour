import React, { useEffect } from 'react';
import { trainingMethods } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { CheckCircle2, Sparkles, ArrowRight, Award } from 'lucide-react';
import { getTrainingUrl } from '../utils/slugs';

interface Props {
  id: string;
}

export const TrainingDetailPage: React.FC<Props> = ({ id }) => {
  const item = trainingMethods.find((t) => t.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.name} - Dog Training Technique | CanineMind`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Training Method Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The training guide you are looking for does not exist.</p>
        <Link href="/t" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          View All Training Methods
        </Link>
      </div>
    );
  }

  const otherMethods = trainingMethods.filter((t) => t.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/t"
        backLabel="All Training"
        items={[
          { label: 'Positive Training', href: '/t' },
          { label: item.name }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E07A5F] mb-1.5 block">
              Humane Training Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {item.name}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
              {item.tagline}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div>
            <h2 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">
              Core Behavioural Psychology Principle
            </h2>
            <p className="text-base text-[#4E4137] leading-relaxed">
              {item.corePrinciple}
            </p>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0] space-y-4">
            <h2 className="text-lg font-bold font-display text-[#234231]">
              Step-by-Step Training Protocol
            </h2>
            <ol className="space-y-3">
              {item.stepByStep.map((step, idx) => (
                <li key={idx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#8C5E3C] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#4E4137] leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0]">
            <h2 className="text-sm font-bold text-[#234231] uppercase tracking-wider mb-3">
              Proven Long-Term Benefits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {item.benefits.map((b, idx) => (
                <div key={idx} className="p-4 bg-[#234231]/5 rounded-xl border border-[#234231]/15 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234231] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#234231] font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-[#E07A5F] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#234231] mb-0.5">Certified Trainer Pro Tip</p>
              <p className="text-xs text-[#5C4F44] leading-relaxed">{item.proTip}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/quiz"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Test Your Knowledge in the Quiz</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/g"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Read Full Articles
            </Link>
          </div>

        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          Explore Other Training Techniques
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherMethods.slice(0, 4).map((om) => (
            <Link
              key={om.id}
              href={getTrainingUrl(om.id)}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                {om.name}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {om.tagline}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                View Technique →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
