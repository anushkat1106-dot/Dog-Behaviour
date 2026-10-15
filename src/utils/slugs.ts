// Bidirectional mappings for shorter, memorable, unique URLs

export const behaviourSlugMap: Record<string, string> = {
  'why-dogs-bark': 'bark',
  'why-dogs-wag-tails': 'wag',
  'why-dogs-jump': 'jump',
  'why-dogs-chew': 'chew',
  'why-dogs-dig': 'dig'
};

export const signalSlugMap: Record<string, string> = {
  'happy-relaxed': 'relaxed',
  'playful': 'play',
  'anxious': 'anxious',
  'fearful': 'fear',
  'stressed': 'stress',
  'excited': 'excited',
  'aggressive': 'warning'
};

export const problemSlugMap: Record<string, string> = {
  'excessive-barking': 'barking',
  'separation-anxiety': 'anxiety',
  'reactivity-aggression': 'reactivity',
  'leash-pulling': 'pulling',
  'jumping-on-people': 'jumping',
  'destructive-chewing': 'chewing',
  'excessive-digging': 'digging',
  'toilet-training-problems': 'potty'
};

export const trainingSlugMap: Record<string, string> = {
  'positive-reinforcement': 'rewards',
  'treat-training': 'treats',
  'clicker-training': 'clicker',
  'basic-commands': 'commands',
  'socialization': 'social',
  'leash-training': 'leash'
};

export const breedSlugMap: Record<string, string> = {
  'labrador-retriever': 'labrador',
  'golden-retriever': 'golden',
  'german-shepherd': 'shepherd',
  'beagle': 'beagle',
  'poodle': 'poodle',
  'border-collie': 'collie',
  'dachshund': 'dachshund',
  'french-bulldog': 'frenchie'
};

export const ageSlugMap: Record<string, string> = {
  'puppies': 'puppy',
  'adolescent': 'teen',
  'adult': 'adult',
  'senior': 'senior'
};

export const guideSlugMap: Record<string, string> = {
  'why-bark-at-strangers': 'strangers',
  'understanding-dogs-tail': 'tail',
  'why-dogs-lick-owners': 'licking',
  'stop-excessive-barking': 'stop-barking',
  'help-separation-anxiety': 'anxiety',
  'how-dogs-communicate-body-language': 'signals'
};

// URL Generators (Producing short, clean URLs)
export const getBehaviourUrl = (id: string): string => {
  const slug = behaviourSlugMap[id] || id;
  return `/b/${slug}`;
};

export const getSignalUrl = (id: string): string => {
  const slug = signalSlugMap[id] || id;
  return `/s/${slug}`;
};

export const getProblemUrl = (id: string): string => {
  const slug = problemSlugMap[id] || id;
  return `/fix/${slug}`;
};

export const getTrainingUrl = (id: string): string => {
  const slug = trainingSlugMap[id] || id;
  return `/t/${slug}`;
};

export const getBreedUrl = (id: string): string => {
  const slug = breedSlugMap[id] || id;
  return `/dog/${slug}`;
};

export const getAgeStageUrl = (id: string): string => {
  const slug = ageSlugMap[id] || id;
  return `/age/${slug}`;
};

export const getGuideUrl = (id: string): string => {
  const slug = guideSlugMap[id] || id;
  return `/g/${slug}`;
};

// Inverse Resolvers (Accepts both short slug and long id)
const invertMap = (map: Record<string, string>): Record<string, string> => {
  const inverted: Record<string, string> = {};
  for (const [key, val] of Object.entries(map)) {
    inverted[val] = key;
    inverted[key] = key; // Also resolve self
  }
  return inverted;
};

const invertedBehaviour = invertMap(behaviourSlugMap);
const invertedSignal = invertMap(signalSlugMap);
const invertedProblem = invertMap(problemSlugMap);
const invertedTraining = invertMap(trainingSlugMap);
const invertedBreed = invertMap(breedSlugMap);
const invertedAge = invertMap(ageSlugMap);
const invertedGuide = invertMap(guideSlugMap);

export const resolveBehaviourId = (slugOrId: string): string => invertedBehaviour[slugOrId] || slugOrId;
export const resolveSignalId = (slugOrId: string): string => invertedSignal[slugOrId] || slugOrId;
export const resolveProblemId = (slugOrId: string): string => invertedProblem[slugOrId] || slugOrId;
export const resolveTrainingId = (slugOrId: string): string => invertedTraining[slugOrId] || slugOrId;
export const resolveBreedId = (slugOrId: string): string => invertedBreed[slugOrId] || slugOrId;
export const resolveAgeStageId = (slugOrId: string): string => invertedAge[slugOrId] || slugOrId;
export const resolveGuideId = (slugOrId: string): string => invertedGuide[slugOrId] || slugOrId;
