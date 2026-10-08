import React, { useState, useEffect } from 'react';
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
import { DetailModal, ModalPayload } from './components/DetailModal';
import { SearchModal } from './components/SearchModal';
import {
  DogBehaviourItem,
  ProblemItem,
  TrainingMethod,
  BreedInfo,
  ArticleItem,
  AgeStage
} from './data/dogData';

export default function App() {
  const [activeModalPayload, setActiveModalPayload] = useState<ModalPayload | null>(null);
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
        setActiveModalPayload(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C241E] selection:bg-[#E07A5F]/20 selection:text-[#234231]">
      
      {/* Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuiz={() => handleScrollTo('quiz')}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreBehaviour={() => handleScrollTo('understanding')}
          onExploreTraining={() => handleScrollTo('training')}
        />

        {/* 2. Behaviour of the Day Feature */}
        <BehaviourOfTheDay />

        {/* 3. "What Is My Dog Trying to Tell Me?" Interactive Canine Decoder */}
        <DogDecoder />

        {/* 4. Understanding Dog Behaviour (Bark, Wag, Jump, Chew, Dig) */}
        <UnderstandingBehaviour
          onSelectItem={(item: DogBehaviourItem) =>
            setActiveModalPayload({ type: 'behaviour', data: item })
          }
        />

        {/* 5. Dog Body Language (7 Emotional States) */}
        <BodyLanguageGrid />

        {/* 6. Common Behaviour Problems */}
        <CommonProblems
          onSelectProblem={(prob: ProblemItem) =>
            setActiveModalPayload({ type: 'problem', data: prob })
          }
        />

        {/* 7. Positive Dog Training Techniques */}
        <PositiveTraining
          onSelectMethod={(method: TrainingMethod) =>
            setActiveModalPayload({ type: 'training', data: method })
          }
        />

        {/* 8. Dog Behaviour by Age */}
        <AgeStages
          onSelectStage={(stage: AgeStage) => {
            // Can display age details in alert or smooth scroll
            handleScrollTo('age-stages');
          }}
        />

        {/* 9. Dog Breed Behaviour */}
        <BreedGuide
          onSelectBreed={(breed: BreedInfo) =>
            setActiveModalPayload({ type: 'breed', data: breed })
          }
        />

        {/* 10. Interactive Behaviour Quiz */}
        <BehaviourQuiz />

        {/* 11. Blog / Learning Section: "Dog Behaviour Guide" */}
        <LearningArticles
          onSelectArticle={(art: ArticleItem) =>
            setActiveModalPayload({ type: 'article', data: art })
          }
        />

        {/* 12. About Dog Behaviour Section */}
        <AboutSection />

        {/* 13. FAQ Section */}
        <FaqSection />

        {/* 14. Safety / Medical Disclaimer */}
        <DisclaimerBanner />
      </main>

      {/* 15. Comprehensive Footer */}
      <Footer onOpenDisclaimer={() => handleScrollTo('faq')} />

      {/* Global Modals */}
      <DetailModal
        payload={activeModalPayload}
        onClose={() => setActiveModalPayload(null)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPayload={(payload) => setActiveModalPayload(payload)}
      />

    </div>
  );
}
