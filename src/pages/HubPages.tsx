import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { UnderstandingBehaviour } from '../components/UnderstandingBehaviour';
import { BodyLanguageGrid } from '../components/BodyLanguageGrid';
import { CommonProblems } from '../components/CommonProblems';
import { PositiveTraining } from '../components/PositiveTraining';
import { AgeStages } from '../components/AgeStages';
import { BreedGuide } from '../components/BreedGuide';
import { LearningArticles } from '../components/LearningArticles';
import { DogDecoder } from '../components/DogDecoder';
import { BehaviourQuiz } from '../components/BehaviourQuiz';
import { AboutSection } from '../components/AboutSection';
import { FaqSection } from '../components/FaqSection';
import { useRouter } from '../context/RouterContext';

export const BehaviourHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Understanding Dog Behaviour - Barking, Wagging, Jumping | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Dog Behaviour' }]} />
      </div>
      <UnderstandingBehaviour onSelectItem={(item) => navigate(`/behaviour/${item.id}`)} />
    </div>
  );
};

export const BodyLanguageHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Body Language Decoded - 7 Emotional States | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Dog Body Language' }]} />
      </div>
      <BodyLanguageGrid onSelectState={(state) => navigate(`/body-language/${state.id}`)} />
    </div>
  );
};

export const ProblemsHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Common Dog Behaviour Problems & Positive Solutions | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Common Problems' }]} />
      </div>
      <CommonProblems onSelectProblem={(prob) => navigate(`/problems/${prob.id}`)} />
    </div>
  );
};

export const TrainingHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Positive Dog Training Techniques (R+) | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Positive Training' }]} />
      </div>
      <PositiveTraining onSelectMethod={(meth) => navigate(`/training/${meth.id}`)} />
    </div>
  );
};

export const BreedsHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Breed Behaviour Profiles & Instincts | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Dog Breeds' }]} />
      </div>
      <BreedGuide onSelectBreed={(breed) => navigate(`/breeds/${breed.id}`)} />
    </div>
  );
};

export const AgeStagesHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Behaviour by Age - Puppies to Seniors | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Life Stages' }]} />
      </div>
      <AgeStages onSelectStage={(stage) => navigate(`/age-stages/${stage.id}`)} />
    </div>
  );
};

export const GuidesHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Behaviour Guide - Educational Articles | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Learning Guides' }]} />
      </div>
      <LearningArticles onSelectArticle={(art) => navigate(`/guides/${art.id}`)} />
    </div>
  );
};

export const DecoderHubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'What Is My Dog Trying to Tell Me? Interactive Decoder | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Canine Decoder' }]} />
      </div>
      <DogDecoder />
    </div>
  );
};

export const QuizHubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Dog Behaviour Quiz - Test Your Canine Attunement | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Behaviour Quiz' }]} />
      </div>
      <BehaviourQuiz />
    </div>
  );
};

export const AboutHubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Dog Behaviour & Our Force-Free Mission | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About' }]} />
      </div>
      <AboutSection />
    </div>
  );
};

export const FaqHubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Canine Questions (FAQ) | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
      </div>
      <FaqSection />
    </div>
  );
};
