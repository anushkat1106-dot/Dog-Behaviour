import React, { useEffect } from 'react';
import { guideArticles } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { getGuideUrl } from '../utils/slugs';

interface Props {
  id: string;
}

export const GuideArticlePage: React.FC<Props> = ({ id }) => {
  const item = guideArticles.find((a) => a.id === id);

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | CanineMind Guide`;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Article Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The dog behaviour article you are looking for does not exist.</p>
        <Link href="/g" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          View All Guide Articles
        </Link>
      </div>
    );
  }

  const otherArticles = guideArticles.filter((a) => a.id !== item.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/g"
        backLabel="All Articles"
        items={[
          { label: 'Guides', href: '/g' },
          { label: item.title }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        {/* Article Header Visual */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs text-[#E07A5F] font-semibold mb-2">
              <span>{item.date}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 text-white/90">
                <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
                {item.readTime}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              {item.title}
            </h1>
          </div>
        </div>

        {/* Prose Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8]">
            <p className="text-sm font-medium text-[#4E4137] italic leading-relaxed">
              "{item.excerpt}"
            </p>
          </div>

          <div className="space-y-5 text-base text-[#3C3229] leading-relaxed">
            {item.content.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-6 bg-[#234231]/5 rounded-2xl border border-[#234231]/15 space-y-3">
            <h2 className="text-xs font-bold text-[#234231] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E07A5F]" />
              Key Takeaways for Dog Owners:
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4E4137]">
              {item.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234231] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/quiz"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Test Your Understanding in the Quiz</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/decoder"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Try the Canine Decoder
            </Link>
          </div>

        </div>
      </article>

      {/* Related Reading */}
      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          More Dog Behaviour Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherArticles.slice(0, 3).map((oa) => (
            <Link
              key={oa.id}
              href={getGuideUrl(oa.id)}
              className="group bg-white rounded-xl border border-[#E3DAC8] overflow-hidden hover:shadow-sm transition-all p-4 block"
            >
              <div className="text-[11px] text-[#8C5E3C] font-semibold mb-1">
                {oa.readTime}
              </div>
              <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors line-clamp-2">
                {oa.title}
              </h3>
              <p className="text-xs text-[#6E5D53] line-clamp-2 mt-1">
                {oa.excerpt}
              </p>
              <span className="text-[11px] font-semibold text-[#8C5E3C] mt-3 inline-block group-hover:underline">
                Read Article →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
