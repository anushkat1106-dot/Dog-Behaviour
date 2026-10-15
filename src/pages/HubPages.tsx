import React from 'react';
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
import { usePageSEO } from '../utils/usePageSEO';
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

  usePageSEO({
    title: 'Why Dogs Bark, Wag Tails & Chew: Canine Ethology Guide | CanineMind',
    description: 'Explore root causes of canine barking, tail wagging, jumping, digging, and chewing. Understand ancestral drives and positive guidance for common dog behaviors.',
    canonicalPath: '/b',
    keywords: ['why dogs bark', 'why dogs wag tails', 'why dogs jump', 'canine ethology', 'dog behaviour']
  });

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

  usePageSEO({
    title: 'Canine Body Language Chart: 7 Emotional States Decoded | CanineMind',
    description: 'Learn how to read dog body language accurately: ears, eyes, tail carriage, and posture signals from playful and relaxed to anxious and defensive warning.',
    canonicalPath: '/s',
    keywords: ['dog body language chart', 'canine calming signals', 'reading dog tail ears', 'dog stress signals']
  });

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

  usePageSEO({
    title: 'Common Dog Behaviour Problems & Positive Solutions | CanineMind',
    description: 'Proven positive solutions for excessive barking, separation anxiety, leash pulling, jumping, and destructive chewing without aversive punishment.',
    canonicalPath: '/fix',
    keywords: ['how to stop dog barking', 'fix dog leash pulling', 'dog separation anxiety cure', 'dog chewing furniture']
  });

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

  usePageSEO({
    title: 'Positive Dog Training Methods: Science-Based Guides | CanineMind',
    description: 'Master humane dog training: positive reinforcement, clicker timing, high-value rewards, loose leash walking, and positive puppy socialization protocols.',
    canonicalPath: '/t',
    keywords: ['positive reinforcement dog training', 'clicker training for dogs', 'treat training puppies', 'loose leash walking']
  });

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

  usePageSEO({
    title: 'Dog Breed Behaviour & Temperament Guides: 8 Profiles | CanineMind',
    description: 'Compare behavioral traits, working drives, and exercise requirements across Labradors, Goldens, German Shepherds, Frenchies, Poodles, and more.',
    canonicalPath: '/dog',
    keywords: ['dog breed temperament comparison', 'dog breed behavior profiles', 'golden retriever instincts', 'labrador exercise needs']
  });

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

  usePageSEO({
    title: 'Dog Behaviour by Age: Puppyhood to Senior Milestones | CanineMind',
    description: 'Navigate canine development stages: puppy socialization windows, adolescent boundary testing, adult stability, and senior cognitive care.',
    canonicalPath: '/age',
    keywords: ['dog behavior stages', 'puppy development milestones', 'adolescent dog behavior', 'senior dog care']
  });

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

  usePageSEO({
    title: 'In-Depth Dog Behaviour Articles & Science Guides | CanineMind',
    description: 'Read peer-reviewed canine cognition guides: stranger barking, tail wag direction science, tongue licking psychology, and separation anxiety cures.',
    canonicalPath: '/g',
    keywords: ['dog behaviour articles', 'canine psychology guides', 'why do dogs bark at strangers', 'science of dog tail wag']
  });

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
  usePageSEO({
    title: 'Interactive Dog Decoder: Translate Ears, Tail & Eyes | CanineMind',
    description: 'Select your dog’s ears, eyes, tail, and posture in our interactive decoder to instantly translate what they are feeling and how best to respond.',
    canonicalPath: '/decoder',
    keywords: ['dog decoder tool', 'translate dog body language', 'what is my dog saying', 'canine posture translator']
  });

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
  usePageSEO({
    title: 'Canine Communication Quiz: Test Your Dog Attunement | CanineMind',
    description: 'Take our 5-question dog body language quiz to see how fluently you decode subtle canine calming signals, stress markers, and friendly greetings.',
    canonicalPath: '/quiz',
    keywords: ['dog behaviour quiz', 'test dog body language knowledge', 'canine attunement quiz']
  });

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
  usePageSEO({
    title: 'About CanineMind: Positive Ethology & Science Mission | CanineMind',
    description: 'Discover the science-first philosophy behind CanineMind. We champion evidence-based positive reinforcement, empathy, and fear-free dog stewardship.',
    canonicalPath: '/about',
    keywords: ['about caninemind', 'humane dog training mission', 'positive canine ethology']
  });

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
  usePageSEO({
    title: 'Dog Behaviour Questions & Answers (Q&A) | CanineMind FAQ',
    description: 'Got questions about dog barking, zoomies, tail wagging, or separation anxiety? Search our comprehensive Q&A database for evidence-backed answers.',
    canonicalPath: '/faq',
    keywords: ['dog behaviour questions and answers', 'dog FAQ', 'why do dogs get zoomies', 'is dominance theory real']
  });

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Questions & Answers (Q&A)' }]} />
      </div>
      <FaqSection />
    </div>
  );
};
