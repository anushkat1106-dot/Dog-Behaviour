import React, { useEffect } from 'react';
import { bodyLanguageStates } from '../data/dogData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { getSignalUrl } from '../utils/slugs';
import { ArticleQnA } from '../components/ArticleQnA';
import { usePageSEO } from '../utils/usePageSEO';

interface Props {
  id: string;
}

export const BodyLanguageDetailPage: React.FC<Props> = ({ id }) => {
  const item = bodyLanguageStates.find((s) => s.id === id);

  usePageSEO({
    title: item ? `${item.emotion} Dog Body Language: Ears, Tail & Posture Cues | CanineMind` : 'Canine Body Language Signals | CanineMind',
    description: item ? `Decode when a dog feels ${item.emotion.toLowerCase()}. Learn how to read ear posture, tail movement, eye tension, and mouth shape accurately.` : 'Detailed visual guide to reading canine emotional body language signals.',
    canonicalPath: item ? getSignalUrl(item.id) : '/s',
    keywords: item ? [item.emotion.toLowerCase() + ' dog', 'dog body language', 'canine signals', 'reading dog ears tail'] : ['dog body language']
  });

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Signal Profile Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The emotional body language state could not be located.</p>
        <Link href="/s" className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl">
          View All Signals
        </Link>
      </div>
    );
  }

  const otherStates = bodyLanguageStates.filter((s) => s.id !== item.id);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/s"
        backLabel="All Signals"
        items={[
          { label: 'Signals', href: '/s' },
          { label: item.emotion }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={item.image}
            alt={item.emotion}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E07A5F] mb-1.5 block">
              Canine Ethogram Profile
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {item.emotion}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div>
            <h2 className="text-xs font-bold text-[#8C5E3C] uppercase tracking-wider mb-3">
              Full Anatomical Micro-Signals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                <p className="text-xs font-bold text-[#234231] mb-1">Ears</p>
                <p className="text-xs text-[#5C4F44] leading-relaxed">{item.ears}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                <p className="text-xs font-bold text-[#234231] mb-1">Eyes & Face</p>
                <p className="text-xs text-[#5C4F44] leading-relaxed">{item.eyes}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                <p className="text-xs font-bold text-[#234231] mb-1">Mouth & Breath</p>
                <p className="text-xs text-[#5C4F44] leading-relaxed">{item.mouth}</p>
              </div>
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8]">
                <p className="text-xs font-bold text-[#234231] mb-1">Tail & Spine</p>
                <p className="text-xs text-[#5C4F44] leading-relaxed">{item.tail}</p>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8]">
            <p className="text-xs font-bold text-[#234231] mb-1">Overall Muscle Tension & Weight Balance</p>
            <p className="text-xs sm:text-sm text-[#5C4F44] leading-relaxed">{item.bodyTension}</p>
          </div>

          <div className="p-6 bg-[#234231]/5 rounded-2xl border border-[#234231]/15 space-y-2">
            <h3 className="text-sm font-bold text-[#234231] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#234231]" />
              Recommended Human Response
            </h3>
            <p className="text-xs sm:text-sm text-[#4E4137] leading-relaxed">
              {item.recommendedAction}
            </p>
          </div>

          {/* Body Language Q&A */}
          <ArticleQnA category="signal" id={item.id} topicTitle={item.emotion} />

          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/decoder"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Test Signals in the Interactive Decoder</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/quiz"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Take Canine Communication Quiz
            </Link>
          </div>

        </div>
      </article>

      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          Compare Other Emotional Signals
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherStates.map((st) => (
            <Link
              key={st.id}
              href={getSignalUrl(st.id)}
              className="group bg-white rounded-xl border border-[#E3DAC8] p-3 text-center hover:border-[#8C5E3C] transition-all block"
            >
              <h3 className="text-xs font-semibold text-[#234231] group-hover:text-[#8C5E3C] transition-colors">
                {st.emotion}
              </h3>
              <span className="text-[10px] font-semibold text-[#8C5E3C] mt-1 block">Read {st.emotion.toLowerCase()} cues →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
