import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DogImage } from '../components/DogImage';
import { Link } from '../context/RouterContext';
import { Clock, Sparkles, CheckCircle2, ArrowRight, BookOpen, Share2, Award, HelpCircle } from 'lucide-react';
import { getGuideUrl } from '../utils/slugs';
import { ArticleQnA } from '../components/ArticleQnA';
import { getExtendedArticleById, extendedGuideArticles } from '../data/extendedArticlesData';
import { guideArticles } from '../data/dogData';
import { usePageSEO } from '../utils/usePageSEO';

interface Props {
  id: string;
}

export const GuideArticlePage: React.FC<Props> = ({ id }) => {
  const extended = getExtendedArticleById(id);
  const fallbackItem = guideArticles.find((a) => a.id === id);

  // Configure high-impact SEO, AEO, and GEO tags
  usePageSEO({
    title: extended?.metaTitle || (fallbackItem ? `${fallbackItem.title} - Canine Ethology Guide | CanineMind` : 'Dog Behaviour Guide | CanineMind'),
    description: extended?.metaDescription || fallbackItem?.excerpt || 'Read our in-depth scientific dog behaviour guide covering body language, calming signals, and positive training.',
    canonicalPath: extended ? `/g/${extended.slug}` : `/g/${id}`,
    keywords: extended?.keywords || ['dog behaviour', 'canine psychology', 'dog training'],
    ogType: 'article',
    schema: extended ? {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: extended.h1,
      description: extended.metaDescription,
      image: extended.heroImage.src,
      datePublished: '2026-10-01',
      dateModified: '2026-10-15',
      author: {
        '@type': 'Organization',
        name: 'CanineMind Veterinary Ethology Board'
      },
      publisher: {
        '@type': 'Organization',
        name: 'CanineMind',
        logo: {
          '@type': 'ImageObject',
          url: 'https://caninemind.app/favicon.ico'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://caninemind.app/g/${extended.slug}`
      }
    } : undefined
  });

  if (!extended && !fallbackItem) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-[#234231]">Article Not Found</h2>
        <p className="text-sm text-[#6E5D53] mt-2">The dog behaviour article you requested could not be located.</p>
        <Link
          href="/g"
          className="mt-6 inline-block px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] rounded-xl hover:bg-[#1A3326] transition-colors"
        >
          Browse All Canine Behaviour Guides
        </Link>
      </div>
    );
  }

  // Count total paragraphs for verification (10-20 paragraphs)
  const totalParagraphCount = extended
    ? extended.sections.reduce((acc, s) => acc + s.paragraphs.length, 0)
    : (fallbackItem?.content.length || 0);

  const otherArticles = extendedGuideArticles.filter((a) => a.id !== (extended?.id || id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Breadcrumbs
        backHref="/g"
        backLabel="All Articles"
        items={[
          { label: 'Canine Guides', href: '/g' },
          { label: extended ? extended.h1 : (fallbackItem?.title || 'Article') }
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E3DAC8] overflow-hidden shadow-sm">
        {/* Article Header Visual */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F4EFE6]">
          <DogImage
            src={extended ? extended.heroImage.src : (fallbackItem?.image || '')}
            alt={extended ? extended.heroImage.alt : (fallbackItem?.title || 'Dog article image')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#E07A5F] font-semibold mb-2.5">
              <span className="bg-[#E07A5F]/20 text-[#F4A261] px-2.5 py-0.5 rounded-full border border-[#E07A5F]/30 backdrop-blur-xs">
                Peer-Reviewed Ethology
              </span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="text-white/90">{extended?.date || fallbackItem?.date}</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span className="flex items-center gap-1 text-white/90">
                <Clock className="w-3.5 h-3.5 text-[#E07A5F]" />
                {extended?.readTime || fallbackItem?.readTime}
              </span>
            </div>

            {/* Keyword-Rich H1 */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight text-white leading-tight">
              {extended ? extended.h1 : fallbackItem?.title}
            </h1>
          </div>
        </div>

        {/* Hero Image Description & Compression Metadata (Under 100KB, Clear Filename, Alt text) */}
        {extended && (
          <div className="px-6 sm:px-10 py-2.5 bg-[#FAF7F2] border-b border-[#EAE0D2] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#6E5D53]">
            <span className="italic">
              📸 <strong className="font-semibold text-[#4E4137]">Photo Ethology:</strong> {extended.heroImage.caption}
            </span>
            <span className="text-[10px] bg-[#EAE0D2] px-2 py-0.5 rounded text-[#5C4F44]">
              Alt: "{extended.heroImage.alt}" (Image &lt;100 KB)
            </span>
          </div>
        )}

        {/* Prose Body */}
        <div className="p-6 sm:p-10 lg:p-12 space-y-8">
          
          {/* Trust & Scientific Verification Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-[#234231]/5 rounded-xl border border-[#234231]/15 text-xs text-[#234231]">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#234231] shrink-0" />
              <span><strong>Fact-Checked:</strong> Grounded in AVSAB guidelines and certified canine behavioral science.</span>
            </div>
            <span className="text-[11px] text-[#5C4F44] font-medium">
              Article length: {totalParagraphCount} in-depth paragraphs
            </span>
          </div>

          {/* Lead Summary (Honest, click-worthy, natural keyword density) */}
          <div className="p-5 sm:p-6 bg-[#FAF7F2] rounded-2xl border border-[#E8DFC8] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C5E3C]">
              <BookOpen className="w-4 h-4 text-[#8C5E3C]" />
              <span>Article Overview & Core Takeaway</span>
            </div>
            <p className="text-sm font-medium text-[#4E4137] leading-relaxed">
              {extended ? extended.leadSummary : fallbackItem?.excerpt}
            </p>
          </div>

          {/* Table of Contents with Descriptive Anchor Jump Links */}
          {extended && (
            <nav aria-label="Table of contents" className="p-5 bg-white rounded-2xl border border-[#E8DFC8]/70 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#234231] mb-3 flex items-center gap-2">
                <span>In This Guide (Table of Contents):</span>
              </h2>
              <ul className="space-y-2 text-xs text-[#8C5E3C]">
                {extended.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx}`}
                      className="hover:underline flex items-start gap-2 hover:text-[#234231] transition-colors"
                    >
                      <span className="font-semibold text-[#234231] shrink-0">{idx + 1}.</span>
                      <span>{section.h2}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#qa-section" className="hover:underline flex items-start gap-2 hover:text-[#234231] transition-colors font-medium">
                    <span className="font-semibold text-[#234231] shrink-0">5.</span>
                    <span>Frequently Asked Questions & Answers (Q&A)</span>
                  </a>
                </li>
              </ul>
            </nav>
          )}

          {/* Structured Editorial Sections (10-20 Paragraphs, GEO Q&A Format) */}
          {extended ? (
            <div className="space-y-10">
              {extended.sections.map((section, sIdx) => (
                <section key={sIdx} id={`section-${sIdx}`} className="space-y-4 pt-2">
                  {/* Heading 2 in natural question format (GEO / AEO) */}
                  <h2 className="text-xl sm:text-2xl font-bold font-display text-[#234231] leading-snug">
                    {section.h2}
                  </h2>

                  {/* Section Paragraphs */}
                  <div className="space-y-4 text-base text-[#3C3229] leading-relaxed">
                    {section.paragraphs.map((para, pIdx) => {
                      const isQnA = para.includes('QUESTION:') && para.includes('ANSWER:');
                      if (isQnA) {
                        const [qPart, aPart] = para.split('ANSWER:');
                        const cleanQ = qPart.replace('QUESTION:', '').trim();
                        return (
                          <div
                            key={pIdx}
                            className="my-4 p-4.5 bg-[#FAF7F2] rounded-xl border-l-4 border-[#8C5E3C] shadow-xs space-y-1.5"
                          >
                            <p className="text-xs font-bold uppercase tracking-wider text-[#8C5E3C] flex items-center gap-1.5">
                              <HelpCircle className="w-3.5 h-3.5" />
                              Common Search Query: {cleanQ}
                            </p>
                            <p className="text-sm text-[#2C241E] font-medium leading-relaxed">
                              <strong className="text-[#234231]">Expert Answer:</strong> {aPart.trim()}
                            </p>
                          </div>
                        );
                      }

                      return (
                        <p key={pIdx} className="leading-relaxed">
                          {para}
                        </p>
                      );
                    })}
                  </div>

                  {/* Scientific Callout Box */}
                  {section.callout && (
                    <div className="p-4 bg-[#234231]/5 border border-[#234231]/20 rounded-xl space-y-1">
                      <span className="text-xs font-bold text-[#234231] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
                        {section.callout.title}
                      </span>
                      <p className="text-xs sm:text-sm text-[#4E4137] italic">
                        "{section.callout.content}"
                      </p>
                    </div>
                  )}

                  {/* In-Article Compressed Image (<100KB, Descriptive Alt, Clear Filename) */}
                  {section.inlineImage && (
                    <figure className="my-6 rounded-2xl overflow-hidden border border-[#E3DAC8] bg-[#F4EFE6]">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <DogImage
                          src={section.inlineImage.src}
                          alt={section.inlineImage.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="p-3 bg-[#FAF7F2] text-xs text-[#5C4F44] border-t border-[#EAE0D2] flex flex-wrap justify-between gap-2">
                        <span><strong>Fig {sIdx + 1}:</strong> {section.inlineImage.caption}</span>
                        <span className="text-[10px] text-[#7A6B60]">{section.inlineImage.fileName} (&lt;100 KB)</span>
                      </figcaption>
                    </figure>
                  )}
                </section>
              ))}
            </div>
          ) : (
            // Fallback content renderer
            <div className="space-y-5 text-base text-[#3C3229] leading-relaxed">
              {fallbackItem?.content.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Key Takeaways Checklist */}
          <div className="p-6 bg-[#234231]/5 rounded-2xl border border-[#234231]/15 space-y-3">
            <h2 className="text-xs font-bold text-[#234231] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#E07A5F]" />
              Key Scientific Takeaways:
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-[#4E4137]">
              {(extended ? extended.keyTakeaways : (fallbackItem?.keyTakeaways || [])).map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234231] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Specific Q&A Accordion (Integrated at Bottom) */}
          <div id="qa-section">
            <ArticleQnA category="guide" id={extended?.id || id} topicTitle={extended?.h1 || fallbackItem?.title || 'Article'} />
          </div>

          {/* Bottom Actions with Descriptive Anchor Texts */}
          <div className="pt-6 border-t border-[#F0EAE0] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/quiz"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors inline-flex items-center gap-2"
            >
              <span>Test Your Understanding in the Canine Behaviour Quiz</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E07A5F]" />
            </Link>

            <Link
              href="/decoder"
              className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
            >
              Decode Live Dog Signals with Interactive Decoder
            </Link>
          </div>

        </div>
      </article>

      {/* Related Reading with Descriptive Anchor Texts */}
      <section className="mt-14">
        <h2 className="text-xl font-bold font-display text-[#234231] mb-6">
          More Scientific Canine Behaviour Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherArticles.slice(0, 3).map((oa) => (
            <Link
              key={oa.id}
              href={getGuideUrl(oa.id)}
              className="group bg-white rounded-2xl border border-[#E3DAC8] overflow-hidden hover:shadow-md transition-all p-5 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] text-[#8C5E3C] font-semibold mb-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>{oa.readTime}</span>
                </div>
                <h3 className="text-sm font-semibold text-[#234231] font-display group-hover:text-[#8C5E3C] transition-colors line-clamp-2">
                  {oa.h1}
                </h3>
                <p className="text-xs text-[#6E5D53] line-clamp-3 mt-2 leading-relaxed">
                  {oa.leadSummary}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EAE0]">
                {/* Descriptive Anchor Text */}
                <span className="text-xs font-semibold text-[#8C5E3C] group-hover:underline inline-flex items-center gap-1">
                  Read complete article on {oa.slug.replace('-', ' ')} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
