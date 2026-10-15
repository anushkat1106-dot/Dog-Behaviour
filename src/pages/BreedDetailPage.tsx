import React, { useEffect } from 'react';
import { breedBehaviors } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { getBreedUrl } from '../utils/slugs';

interface Props {
  id: string;
}

export const BreedDetailPage: React.FC<Props> = ({ id }) => {
  const item = breedBehaviors.find((b) => b.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.name} - Breed Behaviour & Instincts | CanineMind`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Breed Profile Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The dog breed profile you are looking for does not exist.</p>
        <Link href="/dog" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          View All Breeds
        </Link>
      </div>
    );
  }

  const otherBreeds = breedBehaviors.filter((b) => b.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/dog"
        backLabel="All Breeds"
        items={[
          { label: 'Dog Breeds', href: '/dog' },
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
              {item.group} Group
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {item.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs sm:text-sm text-white/90 font-medium">
              {item.temperament.map((t, idx) => (
                <React.Fragment key={t}>
                  <span>{t}</span>
                  {idx < item.temperament.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div>
            <h2 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-2">
              Ancestral Work & Natural Instincts
            </h2>
            <p className="text-base text-[#4E4137] leading-relaxed">
              {item.naturalDrives}
            </p>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0]">
            <h2 className="text-lg font-bold font-display text-[#234231] mb-3">
              Typical Daily Behavioural Tendencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {item.typicalBehaviors.map((tb, idx) => (
                <div key={idx} className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                  <p className="text-xs text-[#5C4F44] leading-relaxed">{tb}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0] grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] space-y-2">
              <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                Recommended Mental & Physical Enrichment
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
                {item.enrichmentNeeds}
              </p>
            </div>

            <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] space-y-2">
              <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#8C5E3C]" />
                Optimal Training Style & Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">
                {item.trainingStyle}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/decoder"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Decode This Breed's Body Signals</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/dog"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Compare Other Dog Breeds
            </Link>
          </div>

        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          More Dog Breed Profiles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherBreeds.slice(0, 4).map((ob) => (
            <Link
              key={ob.id}
              href={getBreedUrl(ob.id)}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors">
                {ob.name}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {ob.group} · {ob.temperament.join(', ')}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                View Breed Instincts →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
