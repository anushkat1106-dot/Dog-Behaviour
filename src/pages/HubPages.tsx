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
import {
  getBehaviourUrl,
  getSignalUrl,
  getProblemUrl,
  getTrainingUrl,
  getBreedUrl,
  getAgeStageUrl,
  getGuideUrl
} from '../utils/slugs';

export const BehaviourHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Behaviour - Barking, Wagging, Jumping | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Dog Behaviour' }]} />
      </div>
      <UnderstandingBehaviour onSelectItem={(item) => navigate(getBehaviourUrl(item.id))} />
    </div>
  );
};

export const BodyLanguageHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Body Signals Decoded - 7 Emotional States | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Body Language Signals' }]} />
      </div>
      <BodyLanguageGrid onSelectState={(state) => navigate(getSignalUrl(state.id))} />
    </div>
  );
};

export const ProblemsHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Behaviour Problem Solutions | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Common Behaviour Fixes' }]} />
      </div>
      <CommonProblems onSelectProblem={(prob) => navigate(getProblemUrl(prob.id))} />
    </div>
  );
};

export const TrainingHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Positive Dog Training Techniques | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Positive Training' }]} />
      </div>
      <PositiveTraining onSelectMethod={(meth) => navigate(getTrainingUrl(meth.id))} />
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
      <BreedGuide onSelectBreed={(breed) => navigate(getBreedUrl(breed.id))} />
    </div>
  );
};

export const AgeStagesHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Behaviour by Age - Puppy to Senior | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Life Stages' }]} />
      </div>
      <AgeStages onSelectStage={(stage) => navigate(getAgeStageUrl(stage.id))} />
    </div>
  );
};

export const GuidesHubPage: React.FC = () => {
  const { navigate } = useRouter();
  useEffect(() => {
    document.title = 'Dog Behaviour Guides & Articles | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Learning Guides' }]} />
      </div>
      <LearningArticles onSelectArticle={(art) => navigate(getGuideUrl(art.id))} />
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
    document.title = 'Dog Behaviour Quiz - Test Your Attunement | CanineMind';
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
    document.title = 'About Dog Behaviour & Mission | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About CanineMind' }]} />
      </div>
      <AboutSection />
    </div>
  );
};

export const FaqHubPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Dog Questions | CanineMind';
  }, []);

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />
      </div>
      <FaqSection />
    </div>
  );
};
