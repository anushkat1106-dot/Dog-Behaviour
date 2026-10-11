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

function AppContent() {
  const { path, params } = useRouter();
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

  // Route Renderer
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

    // 2. Behaviours
    if (path.startsWith('/behaviour/')) {
      const id = path.replace('/behaviour/', '').split('/')[0];
      return <BehaviourDetailPage id={id} />;
    }
    if (path === '/behaviour') {
      return <BehaviourHubPage />;
    }

    // 3. Body Language
    if (path.startsWith('/body-language/')) {
      const id = path.replace('/body-language/', '').split('/')[0];
      return <BodyLanguageDetailPage id={id} />;
    }
    if (path === '/body-language') {
      return <BodyLanguageHubPage />;
    }

    // 4. Common Problems
    if (path.startsWith('/problems/')) {
      const id = path.replace('/problems/', '').split('/')[0];
      return <ProblemDetailPage id={id} />;
    }
    if (path === '/problems') {
      return <ProblemsHubPage />;
    }

    // 5. Training
    if (path.startsWith('/training/')) {
      const id = path.replace('/training/', '').split('/')[0];
      return <TrainingDetailPage id={id} />;
    }
    if (path === '/training') {
      return <TrainingHubPage />;
    }

    // 6. Breeds
    if (path.startsWith('/breeds/')) {
      const id = path.replace('/breeds/', '').split('/')[0];
      return <BreedDetailPage id={id} />;
    }
    if (path === '/breeds') {
      return <BreedsHubPage />;
    }

    // 7. Life Stages
    if (path.startsWith('/age-stages/')) {
      const id = path.replace('/age-stages/', '').split('/')[0];
      return <AgeStageDetailPage id={id} />;
    }
    if (path === '/age-stages') {
      return <AgeStagesHubPage />;
    }

    // 8. Learning Guides
    if (path.startsWith('/guides/')) {
      const id = path.replace('/guides/', '').split('/')[0];
      return <GuideArticlePage id={id} />;
    }
    if (path === '/guides') {
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
            href="/guides"
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
