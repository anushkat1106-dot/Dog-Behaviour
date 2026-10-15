import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter, Link } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BehaviourOfTheDay } from './components/BehaviourOfTheDay';
import { DogDecoder } from './components/DogDecoder';
import { UnderstandingBehaviour } from './components/UnderstandingBehaviour';
import { BodyLanguageGrid } from './components/BodyLanguageGrid';
import { CommonProblems } from './components/CommonProblems';
import { PositiveTraining } from './components/PositiveTraining';
import { AgeStages } from './components/AgeStages';
import { BreedGuide } from './components/BreedGuide';
import { LearningArticles } from './components/LearningArticles';
import { BehaviourQuiz } from './components/BehaviourQuiz';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Dedicated Detail Pages
import { BehaviourDetailPage } from './pages/BehaviourDetailPage';
import { BodyLanguageDetailPage } from './pages/BodyLanguageDetailPage';
import { ProblemDetailPage } from './pages/ProblemDetailPage';
import { TrainingDetailPage } from './pages/TrainingDetailPage';
import { BreedDetailPage } from './pages/BreedDetailPage';
import { AgeStageDetailPage } from './pages/AgeStageDetailPage';
import { GuideArticlePage } from './pages/GuideArticlePage';

// Hub Pages
import {
  BehaviourHubPage,
  BodyLanguageHubPage,
  ProblemsHubPage,
  TrainingHubPage,
  BreedsHubPage,
  AgeStagesHubPage,
  GuidesHubPage,
  DecoderHubPage,
  QuizHubPage,
  AboutHubPage,
  FaqHubPage
} from './pages/HubPages';

// Slug Resolvers for Short URLs
import {
  resolveBehaviourId,
  resolveSignalId,
  resolveProblemId,
  resolveTrainingId,
  resolveBreedId,
  resolveAgeStageId,
  resolveGuideId
} from './utils/slugs';

function AppContent() {
  const { path } = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut Cmd+K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update default document title when at home
  useEffect(() => {
    if (path === '/') {
      document.title = 'CanineMind - Dog Behaviour & Training Guide';
    }
  }, [path]);

  // Route Renderer with Short Unique URLs
  const renderRoute = () => {
    // 1. Home
    if (path === '/' || path === '') {
      return (
        <>
          <Hero />
          <BehaviourOfTheDay />
          <DogDecoder />
          <UnderstandingBehaviour />
          <BodyLanguageGrid />
          <CommonProblems />
          <PositiveTraining />
          <AgeStages />
          <BreedGuide />
          <BehaviourQuiz />
          <LearningArticles />
          <AboutSection />
          <FaqSection />
        </>
      );
    }

    // 2. Behaviours: short `/b/:slug` or legacy `/behaviour/:id`
    if (path.startsWith('/b/')) {
      const slug = path.replace('/b/', '').split('/')[0];
      return <BehaviourDetailPage id={resolveBehaviourId(slug)} />;
    }
    if (path.startsWith('/behaviour/')) {
      const id = path.replace('/behaviour/', '').split('/')[0];
      return <BehaviourDetailPage id={resolveBehaviourId(id)} />;
    }
    if (path === '/b' || path === '/behaviour') {
      return <BehaviourHubPage />;
    }

    // 3. Body Signals: short `/s/:slug` or legacy `/body-language/:id`
    if (path.startsWith('/s/')) {
      const slug = path.replace('/s/', '').split('/')[0];
      return <BodyLanguageDetailPage id={resolveSignalId(slug)} />;
    }
    if (path.startsWith('/body-language/')) {
      const id = path.replace('/body-language/', '').split('/')[0];
      return <BodyLanguageDetailPage id={resolveSignalId(id)} />;
    }
    if (path === '/s' || path === '/signals' || path === '/body-language') {
      return <BodyLanguageHubPage />;
    }

    // 4. Common Problems / Fixes: short `/fix/:slug` or legacy `/problems/:id`
    if (path.startsWith('/fix/')) {
      const slug = path.replace('/fix/', '').split('/')[0];
      return <ProblemDetailPage id={resolveProblemId(slug)} />;
    }
    if (path.startsWith('/problems/')) {
      const id = path.replace('/problems/', '').split('/')[0];
      return <ProblemDetailPage id={resolveProblemId(id)} />;
    }
    if (path === '/fix' || path === '/problems') {
      return <ProblemsHubPage />;
    }

    // 5. Training: short `/t/:slug` or legacy `/training/:id`
    if (path.startsWith('/t/')) {
      const slug = path.replace('/t/', '').split('/')[0];
      return <TrainingDetailPage id={resolveTrainingId(slug)} />;
    }
    if (path.startsWith('/training/')) {
      const id = path.replace('/training/', '').split('/')[0];
      return <TrainingDetailPage id={resolveTrainingId(id)} />;
    }
    if (path === '/t' || path === '/train' || path === '/training') {
      return <TrainingHubPage />;
    }

    // 6. Breeds: short `/dog/:slug` or legacy `/breeds/:id`
    if (path.startsWith('/dog/')) {
      const slug = path.replace('/dog/', '').split('/')[0];
      return <BreedDetailPage id={resolveBreedId(slug)} />;
    }
    if (path.startsWith('/breeds/')) {
      const id = path.replace('/breeds/', '').split('/')[0];
      return <BreedDetailPage id={resolveBreedId(id)} />;
    }
    if (path === '/dog' || path === '/breeds') {
      return <BreedsHubPage />;
    }

    // 7. Life Stages: short `/age/:slug` or legacy `/age-stages/:id`
    if (path.startsWith('/age/')) {
      const slug = path.replace('/age/', '').split('/')[0];
      return <AgeStageDetailPage id={resolveAgeStageId(slug)} />;
    }
    if (path.startsWith('/age-stages/')) {
      const id = path.replace('/age-stages/', '').split('/')[0];
      return <AgeStageDetailPage id={resolveAgeStageId(id)} />;
    }
    if (path === '/age' || path === '/age-stages') {
      return <AgeStagesHubPage />;
    }

    // 8. Learning Guides / Articles: short `/g/:slug` or legacy `/guides/:id`
    if (path.startsWith('/g/')) {
      const slug = path.replace('/g/', '').split('/')[0];
      return <GuideArticlePage id={resolveGuideId(slug)} />;
    }
    if (path.startsWith('/guides/')) {
      const id = path.replace('/guides/', '').split('/')[0];
      return <GuideArticlePage id={resolveGuideId(id)} />;
    }
    if (path === '/g' || path === '/guides') {
      return <GuidesHubPage />;
    }

    // 9. Interactive Standalone Pages
    if (path === '/decoder') {
      return <DecoderHubPage />;
    }
    if (path === '/quiz') {
      return <QuizHubPage />;
    }
    if (path === '/about') {
      return <AboutHubPage />;
    }
    if (path === '/faq') {
      return <FaqHubPage />;
    }

    // 10. Fallback 404 Not Found Page
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-[#E07A5F]">Page Not Found</span>
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#234231] mt-2">
          Lost the Scent Trail? (404)
        </h1>
        <p className="text-sm text-[#5C4F44] mt-3 max-w-md mx-auto leading-relaxed">
          The page or URL you requested does not exist or may have moved. Explore our core canine sections below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#234231] hover:bg-[#1A3326] rounded-xl transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/g"
            className="px-5 py-2.5 text-xs font-semibold text-[#234231] bg-[#F4EFE6] hover:bg-[#EAE0D2] rounded-xl border border-[#DDD3C0] transition-colors"
          >
            Browse Guides
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#E07A5F]/20 selection:text-[#234231]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="flex-1">
        {renderRoute()}
        <DisclaimerBanner />
      </main>

      <Footer />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
