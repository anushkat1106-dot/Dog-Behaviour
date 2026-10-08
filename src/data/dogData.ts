// Generated local image paths
import heroImg from '../assets/images/hero_dog_owner_bond_1791426677848.jpg';
import playfulImg from '../assets/images/dog_body_language_playful_1791426691662.jpg';
import trainingImg from '../assets/images/dog_positive_reinforcement_training_1791426706108.jpg';
import stressImg from '../assets/images/dog_stress_signals_1791426722278.jpg';
import retrieverImg from '../assets/images/dog_breed_retriever_1791426733479.jpg';

export interface DogBehaviourItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  category: 'core' | 'emotion' | 'problem' | 'training' | 'age' | 'breed';
  fullExplanation: string;
  whyItHappens: string[];
  whatToDo: string[];
  whatToAvoid: string[];
  ethologyNote: string;
}

export interface BodyLanguageState {
  id: string;
  emotion: string;
  description: string;
  image: string;
  ears: string;
  tail: string;
  eyes: string;
  mouth: string;
  bodyTension: string;
  recommendedAction: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  triggers: string[];
  underlyingCause: string;
  positiveSolution: string[];
  commonMistakes: string[];
}

export interface TrainingMethod {
  id: string;
  name: string;
  tagline: string;
  image: string;
  corePrinciple: string;
  stepByStep: string[];
  benefits: string[];
  proTip: string;
}

export interface AgeStage {
  id: string;
  stage: string;
  ageRange: string;
  image: string;
  keyBehaviors: string[];
  developmentalFocus: string;
  recommendedEnrichment: string[];
  tipsForOwners: string[];
}

export interface BreedInfo {
  id: string;
  name: string;
  group: string;
  image: string;
  temperament: string[];
  naturalDrives: string;
  typicalBehaviors: string[];
  enrichmentNeeds: string;
  trainingStyle: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

// 1. Understanding Dog Behaviour Items
export const coreBehaviours: DogBehaviourItem[] = [
  {
    id: 'why-dogs-bark',
    title: 'Why Dogs Bark',
    shortDesc: 'Vocal communication varies from alarm barks and greeting chirps to boredom and barrier frustration.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    category: 'core',
    fullExplanation: 'Barking is a dog’s primary acoustic vocalization, evolved partly through domestication to communicate with humans. Dogs rarely bark persistently in the wild, but domestic dogs use varied frequencies, pitch, and repetition to signal different internal emotional states.',
    whyItHappens: [
      'Alert & Alarm: High-pitched or rapid repetitive barking when perceiving an environmental intrusion.',
      'Demand & Attention: Short, direct barks aimed at owners when wanting food, a walk, or playtime.',
      'Fear & Defense: Lower-pitched, rumbling barks meant to create distance between themselves and a perceived threat.',
      'Loneliness & Boredom: Monotonous, rhythmic barking sustained over hours when left alone with insufficient mental stimulation.',
      'Playful Arousal: High-pitched staccato yips accompanied by body wiggles during social play.'
    ],
    whatToDo: [
      'Identify the exact trigger before reacting (e.g. delivery trucks, passing dogs, boredom).',
      'Teach an incompatible alternative behavior, such as fetching a designated toy or going to a mat.',
      'Provide regular brain games, scent walks, and puzzle feeders to fulfill natural foraging urges.',
      'Reward calm behavior quietly when dogs pause or remain silent when triggers appear.'
    ],
    whatToAvoid: [
      'Never yell or shout "Quiet!"—your dog perceives human shouting as barking along in excitement.',
      'Avoid punitive shock or citronella bark collars, which mask emotional distress with fear.'
    ],
    ethologyNote: 'Ethologists have found that dogs alter pitch and interval systematically: lower pitch signals threat/defense, while higher pitch signals playfulness or distress.'
  },
  {
    id: 'why-dogs-wag-tails',
    title: 'Why Dogs Wag Their Tails',
    shortDesc: 'A tail wag is not always happiness; it indicates arousal, social intent, and directional brain activation.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    category: 'core',
    fullExplanation: 'Contrary to popular belief, a wagging tail simply signifies emotional arousal and willingness to interact. The speed, height, rigidity, and even the direction of the wag reveal whether the dog feels joyful, ambivalent, or defensive.',
    whyItHappens: [
      'Broad, circular "helicopter" wag with loose hips: Genuine joy, friendly social greeting, and submissive affection.',
      'High, stiff, vibrating wag: Intense focus, heightened vigilance, or potential territorial conflict.',
      'Low, tucked, nervous wag: Deference, appeasement, insecurity, or fear.',
      'Asymmetric right-sided wag: Left-brain activation associated with positive social approach.',
      'Asymmetric left-sided wag: Right-brain activation associated with wariness or withdrawal intent.'
    ],
    whatToDo: [
      'Read the entire body: look at ear posture, eye softness, and spinal tension rather than the tail in isolation.',
      'Give space if the tail is held vertical and stiff like an antenna, especially if the dog is still.',
      'Engage warmly when the wag is accompanied by a relaxed "C-curve" spine and soft, blinking eyes.'
    ],
    whatToAvoid: [
      'Never assume a strange dog is safe to pet just because their tail is moving rapidly.',
      'Do not reprimand a dog displaying appeasement tail sweeps; they are trying to communicate non-threat.'
    ],
    ethologyNote: 'Pioneering studies by Italian neuroscientists (Quaranta et al.) proved that dogs wag bias toward the right when seeing their owner, and bias toward the left when confronted with an unfamiliar dominant dog.'
  },
  {
    id: 'why-dogs-jump',
    title: 'Why Dogs Jump on People',
    shortDesc: 'Canines greet face-to-face as a natural social greeting ritual, seeking proximity and scent cues.',
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80',
    category: 'core',
    fullExplanation: 'From puppyhood, canines greet mothers by licking their muzzles to trigger food regurgitation and display friendly deference. When greeting humans standing upright, dogs jump simply to reach our faces, smell our breath, and engage in social bonding.',
    whyItHappens: [
      'Facial Greeting Drive: Desire to inspect facial pheromones and exchange greetings at eye level.',
      'Reinforced History: Inadvertent reinforcement from people pushing the dog down, talking excitedly, or laughing.',
      'Arousal Spikes: High adrenaline when family members return after hours away.',
      'Barrier Excitement: Dogs pent up behind gates or doors release built-up physical energy upon release.'
    ],
    whatToDo: [
      'Teach "Four Paws on the Floor": withhold attention and eye contact until all paws touch the ground.',
      'Scatter treats on the floor as guests enter so the dog naturally keeps their head lowered.',
      'Teach an alternate high-value greeting behavior, such as grabbing a plush toy or sitting on a greeting mat.'
    ],
    whatToAvoid: [
      'Never knee the dog in the chest, step on back paws, or grab their paws—these cause pain and escalate agitation.',
      'Avoid greeting your dog with high-pitched shrieks at the door if you want a calm entryway.'
    ],
    ethologyNote: 'Jumping is an affiliative greeting ritual. Dogs aren’t trying to "dominate" humans; they are thrilled and physically compensating for human height differences.'
  },
  {
    id: 'why-dogs-chew',
    title: 'Why Dogs Chew',
    shortDesc: 'Chewing releases calming endorphins, cleans teeth, and satisfies innate jaw exercise needs.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
    category: 'core',
    fullExplanation: 'Chewing is an essential biological behavior. Canines explore objects with their mouths like toddlers do with hands. Sustained chewing triggers the release of serotonin and dopamine in the canine brain, actively soothing their nervous system.',
    whyItHappens: [
      'Teething Relief: Puppies aged 3 to 7 months chew vigorously to soothe inflamed gums as adult teeth erupt.',
      'Stress Relief: Dogs gnaw to decompress after exciting walks, stressful vet visits, or when left alone.',
      'Boredom: Lack of sensory stimulation leads dogs to explore furniture, shoes, or drywall.',
      'Nutritional Drive: Seeking calcium, marrow, or scent-rich residues left on personal items.'
    ],
    whatToDo: [
      'Provide a rotating variety of safe, appropriate chew items (nylon bones, rubber toys stuffed with frozen wet food, yak cheese).',
      'Redirect calmly: if the dog grabs a shoe, gently swap it for a high-value bully stick or frozen KONG.',
      'Ensure daily mental enrichment through sniffing games and food puzzles to deplete restless energy.'
    ],
    whatToAvoid: [
      'Never punish a dog after finding chewed items; they cannot connect delayed punishment with past actions.',
      'Avoid brittle cooked bones or items small enough to swallow whole and cause blockages.'
    ],
    ethologyNote: 'Chewing activates the parasympathetic nervous system, lowering heart rate and cortisol. A dog chewing quietly is a dog actively self-soothing.'
  },
  {
    id: 'why-dogs-dig',
    title: 'Why Dogs Dig',
    shortDesc: 'A multi-purpose instinct driven by temperature regulation, scent exploration, caching, and genetics.',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
    category: 'core',
    fullExplanation: 'Digging is deeply rooted in canine evolutionary biology. Wild canids dig dens to birth litters, hollow out cool earth to escape summer heat, excavate rodents, and bury surplus food ("caching"). Domestic breeds such as Terriers and Dachshunds were specifically bred for underground quarry work.',
    whyItHappens: [
      'Thermoregulation: Scratching away topsoil to expose cool subterranean earth on hot days.',
      'Prey Drive: Hearing or smelling moles, earthworms, or insects beneath the turf.',
      'Food Caching: Hiding prized bones or toys for safe keeping against perceived rivals.',
      'Boredom or Isolation: Dogs left alone in backyards dig along fences to relieve frustration or escape.',
      'Comfort Nesting: Circling and digging at blankets, rugs, or dirt before settling down to sleep.'
    ],
    whatToDo: [
      'Provide a designated "dog sandbox" or digging pit with loose soil where toys and treats are buried.',
      'Provide adequate shade, water, and cooling pads if your dog digs during warm weather.',
      'Supervise outdoor yard time and engage in interactive play rather than leaving the dog isolated.'
    ],
    whatToAvoid: [
      'Do not fill holes with feces or water as punitive deterrents; this creates anxiety without addressing root drives.',
      'Never punish an earth-dog breed (Jack Russell, Dachshund) for digging—channel the drive productively instead.'
    ],
    ethologyNote: 'Terriers have anatomical adaptations including spade-like paws and extra shoulder musculature explicitly optimized for digging through soil.'
  }
];

// 2. Dog Body Language Items
export const bodyLanguageStates: BodyLanguageState[] = [
  {
    id: 'happy-relaxed',
    emotion: 'Happy & Relaxed',
    description: 'Loose muscles, soft eyes, gentle rhythmic breathing, open smiling mouth, neutral curved tail.',
    image: retrieverImg,
    ears: 'Resting in natural position, neither pinned back nor stiffly erect.',
    tail: 'Held at natural spine level, sweeping gently from side to side in a soft rhythm.',
    eyes: 'Soft, almond-shaped, blinking gently; no white sclera showing.',
    mouth: 'Slightly open with tongue draped loosely or resting gently closed.',
    bodyTension: 'Limber and fluid; weight distributed evenly across all four paws.',
    recommendedAction: 'Great time for bonding, gentle grooming, cuddle sessions, or introducing new positive experiences.'
  },
  {
    id: 'playful',
    emotion: 'Playful & Joyful',
    description: 'Exaggerated bouncy movements, classic play bow, wiggly hips, eager soft gaze, inviting gestures.',
    image: playfulImg,
    ears: 'Alert and forward-facing, moving playfully with head tilts.',
    tail: 'Held mid-to-high, wagging enthusiastically with broad, sweeping arcs.',
    eyes: 'Bright, lively, focused on the play partner without hardness or fixation.',
    mouth: 'Open mouth with "play face", lips pulled back without tense skin creases.',
    bodyTension: 'Front elbows down, hindquarters up ("play bow"), springing easily from side to side.',
    recommendedAction: 'Engage in a game of fetch, tug-of-war with clear rules, or let them romp with canine playmates.'
  },
  {
    id: 'anxious',
    emotion: 'Anxious & Uncertain',
    description: 'Subtle calming signals: lip licking, yawning out of context, head turned away, tense brow wrinkles.',
    image: stressImg,
    ears: 'Turned slightly back or constantly swiveling to monitor the environment.',
    tail: 'Carried low or tucked slightly below the spine line, slow tentative wagging.',
    eyes: 'Dilated pupils, furrowed brow with subtle "whale eye" (white edges showing).',
    mouth: 'Lips tightly closed or repetitive tongue flicks licking the nose.',
    bodyTension: 'Slightly lowered center of gravity, weight shifted slightly onto back paws.',
    recommendedAction: 'Recognize the trigger, create distance, speak in a reassuring calm voice, and avoid forcing social interactions.'
  },
  {
    id: 'fearful',
    emotion: 'Fearful & Defensive',
    description: 'Cowering close to the floor, trembling, tail tucked tightly against belly, attempting to flee or freeze.',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    ears: 'Flattened completely back against the skull.',
    tail: 'Tucked tightly between the hind legs, clamped against the belly.',
    eyes: 'Wide eyes with prominent white sclera ("whale eye"), looking around nervously.',
    mouth: 'Tight, tense mouth or panting with lips pulled far back (submissive grimace).',
    bodyTension: 'Body curled into a small ball, trembling, sweating paw pads, ducking low.',
    recommendedAction: 'Never trap or corner a fearful dog. Remove the threatening stimulus and allow them to choose a safe sanctuary zone.'
  },
  {
    id: 'stressed',
    emotion: 'Stressed & Overstimulated',
    description: 'Excessive panting in cool weather, drooling, shedding dander, pacing, "wet-dog shake-off" after conflict.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    ears: 'Tense, pinned flat, or pinned sideways.',
    tail: 'Low and stiff, or held rigidly still.',
    eyes: 'Staring blankly or darting rapidly from object to object.',
    mouth: 'Rapid shallow panting with tongue curled like a spatula at the tip, excessive drooling.',
    bodyTension: 'High muscular rigidity, pacing in circles, inability to sit or lie still.',
    recommendedAction: 'Give your dog a quiet retreat away from visitors, loud noises, or hectic crowds. Provide a soothing lick mat.'
  },
  {
    id: 'excited',
    emotion: 'Excited & Aroused',
    description: 'High energy, rapid bounce, alert stance, vocal yips, vibrating tail, quick responsiveness.',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    ears: 'Pricked upright and angled forward, fully focused on the stimulus.',
    tail: 'Carried high, wagging fast and tight in short vibrating strokes.',
    eyes: 'Wide, intense, tracking movement rapidly.',
    mouth: 'Open mouth with fast breathing or high-pitched excited whining.',
    bodyTension: 'Ready to spring into a sprint, bouncy paws, quick weight shifts.',
    recommendedAction: 'Channel the excitement into structured obedience cues (Sit, Down, Touch) before rewarding with toy release.'
  },
  {
    id: 'aggressive',
    emotion: 'Defensive / Agonistic Warning',
    description: 'A frozen body, direct hard stare, curled lips displaying canines, low guttural growl, raised hackles.',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80',
    ears: 'Rigidly pushed forward or flattened firmly backward, depending on offense vs defense.',
    tail: 'Held stiffly upright and vibrating rigidly, or stiffly low and locked.',
    eyes: 'Hard unblinking stare with pupils dilated, piercing direct eye contact.',
    mouth: 'Wrinkled nose bridge, curled upper lip displaying teeth and incisors, low growl.',
    bodyTension: 'Completely frozen, weight leaning forward onto toes; piloerection (hackles raised).',
    recommendedAction: 'DO NOT approach, yell, or make direct eye contact. Slowly turn sideways, freeze, and back away smoothly without running.'
  }
];

// 3. Common Behaviour Problems
export const commonProblems: ProblemItem[] = [
  {
    id: 'excessive-barking',
    title: 'Excessive Barking',
    shortDesc: 'Non-stop vocalizing triggered by passersby, doorbell rings, boredom, or barrier frustration.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    triggers: ['Doorbell or knocks', 'Dogs walking past windows', 'Being left alone in yard', 'Owner preparing dinner'],
    underlyingCause: 'Under-stimulation, territorial guarding, or learned behavior where barking historically yielded human reactions.',
    positiveSolution: [
      'Manage the environment: apply translucent privacy film to lower window panes to remove visual triggers.',
      'Teach a "Go to Place" command with high-value treats whenever the doorbell rings.',
      'Acknowledge and redirect: say "Thank you" once calmly, toss kibble away from the door to reward silence.'
    ],
    commonMistakes: ['Yelling at the dog, which mimics barking.', 'Opening the door or giving food when the dog is actively barking.']
  },
  {
    id: 'separation-anxiety',
    title: 'Separation Anxiety',
    shortDesc: 'Panic disorder triggered by being alone, characterized by distress vocalization, pacing, and door scratching.',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    triggers: ['Keys jingling', 'Putting on work shoes/coat', 'Owner stepping through the exit door'],
    underlyingCause: 'Genuine clinical panic, not spite. The dog lacks emotional coping tools and fears survival without their social attachment figure.',
    positiveSolution: [
      'Gradual systematic desensitization: practice leaving for intervals below the dog’s panic threshold (e.g. 5 seconds, 30 seconds).',
      'Desensitize pre-departure cues: pick up car keys or put on your coat, then sit on the sofa without leaving.',
      'Consult a certified separation anxiety trainer (CSAT) or veterinary behaviourist for supportive anti-anxiety medication if severe.'
    ],
    commonMistakes: ['Confining the dog to a small crate if they suffer from confinement panic.', 'Scolding the dog upon returning home for accidents or chewed doors.']
  },
  {
    id: 'reactivity-aggression',
    title: 'Reactivity & Aggression',
    shortDesc: 'Lunging, barking, or snapping at other dogs, unfamiliar humans, or moving bicycles while on leash.',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80',
    triggers: ['Oncoming leashed dogs', 'Strangers wearing hats or carrying umbrellas', 'Bicycles, skateboards, runners'],
    underlyingCause: 'Usually fear-based self-defense. The leash prevents natural flight options, so the dog puts on a fierce display to drive the scary stimulus away.',
    positiveSolution: [
      'Determine the dog’s threshold distance (e.g. 30 feet away where they can look without reacting).',
      'Use the Look-At-That (LAT) counter-conditioning game: dog glances at trigger, hears a marker click, and receives a high-value reward.',
      'Create emergency U-turn protocols: happily say "This way!" and jog in the opposite direction before the dog reacts.'
    ],
    commonMistakes: ['Jerk on leash or choke collars, which pairs the sight of dogs with physical neck pain, worsening the fear.']
  },
  {
    id: 'leash-pulling',
    title: 'Leash Pulling',
    shortDesc: 'Dragging owners down the street in a frantic rush to reach scents, parks, and other dogs.',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    triggers: ['Fast-paced human walking', 'Exciting neighborhood smells', 'Open park spaces'],
    underlyingCause: 'Opposition reflex (dogs naturally push into opposing pressure) combined with a faster natural walking speed than humans.',
    positiveSolution: [
      'Use a well-fitted Y-shaped front-clip harness to gently steer forward momentum without straining the trachea.',
      'The "Red Light, Green Light" rule: whenever the leash goes taut, freeze into a tree. Move forward ONLY when tension slacks.',
      'Reward heavily at your seamline: continuously feed tasty treats right next to your thigh while walking.'
    ],
    commonMistakes: ['Jerking the dog back aggressively, which only triggers the opposition reflex to pull harder forward.']
  },
  {
    id: 'jumping-on-people',
    title: 'Jumping on People',
    shortDesc: 'Vaulting excitedly onto guests, family members, and strangers in greetings.',
    image: 'https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?auto=format&fit=crop&w=800&q=80',
    triggers: ['Guests entering the front doorway', 'Owners returning from work', 'Friendly strangers on sidewalks'],
    underlyingCause: 'Natural desire to reach human faces for greeting combined with intense social arousal.',
    positiveSolution: [
      'Teach "Sit = Say Please": greeting and chest scratches only occur when all four paws remain planted on the rug.',
      'Scatter food on the entryway rug before opening the door to keep the dog’s nose glued to the floor.',
      'Step calmly to the side and fold arms, turning away until the dog puts paws down, then reward instantly.'
    ],
    commonMistakes: ['Pushing the dog away with hands, which the dog interprets as wrestling and playful engagement.']
  },
  {
    id: 'destructive-chewing',
    title: 'Destructive Chewing',
    shortDesc: 'Gnawing through baseboards, furniture legs, shoes, remotes, and drywall.',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80',
    triggers: ['Puppy teething phase', 'Long stretches of inactivity', 'Scented human clothing left accessible'],
    underlyingCause: 'Physical discomfort from teething, pent-up mental frustration, or lack of approved oral enrichment.',
    positiveSolution: [
      'Puppy-proof living areas: keep shoes, remotes, and cables strictly out of reach in closed cabinets.',
      'Provide frozen rubber toys loaded with peanut butter, kefir, canned dog food, or soaked kibble.',
      'Calmly trade forbidden objects for high-value approved chews like coffee-wood sticks or collagen chews.'
    ],
    commonMistakes: ['Punishing a dog hours after they chewed an item; dogs cannot link retrospective anger to past behavior.']
  },
  {
    id: 'excessive-digging',
    title: 'Excessive Digging',
    shortDesc: 'Excavating craters across lawn, flowerbeds, and along fence perimeters.',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
    triggers: ['Hot summer sunshine', 'Moles or chipmunks under turf', 'Prolonged solo backyard time'],
    underlyingCause: 'Seeking cool earth, chasing subterranean rodents, or self-entertaining due to boredom.',
    positiveSolution: [
      'Build a dedicated dog sandpit filled with playground sand; bury toys there to make it the most rewarding spot.',
      'Offer outdoor shade, elevated cooling beds, and fresh cold water on warm days.',
      'Never leave energetic dogs unsupervised in the yard for hours without engaging tasks.'
    ],
    commonMistakes: ['Putting chicken wire or feces in holes, which usually causes dogs to just dig 6 inches to the left.']
  },
  {
    id: 'toilet-training-problems',
    title: 'Toilet Training Problems',
    shortDesc: 'Accidents indoors, regression during adolescence, or failure to communicate the urge to eliminate.',
    image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80',
    triggers: ['Excitement or submissive urination', 'Sudden routine shifts', 'Hidden urinary tract infections (UTI)'],
    underlyingCause: 'Incomplete house-training foundation, inadequate bathroom intervals, or underlying medical infection.',
    positiveSolution: [
      'Rule out medical issues first with a clean urinalysis at your local veterinary clinic.',
      'Take puppies out on a strict schedule: upon waking, after eating, after playing, and every 60–90 minutes.',
      'Reward heavily with a tasty treat immediately outside within 2 seconds of urination.',
      'Thoroughly clean past accidents with enzymatic cleaner to eliminate lingering pheromone scents.'
    ],
    commonMistakes: ['Rubbing the dog’s nose in the accident—this only teaches them to eliminate secretly behind the sofa!']
  }
];

// 4. Positive Dog Training
export const trainingMethods: TrainingMethod[] = [
  {
    id: 'positive-reinforcement',
    name: 'Positive Reinforcement (R+)',
    tagline: 'Adding a desirable stimulus immediately after a behavior to increase the likelihood it recurs.',
    image: trainingImg,
    corePrinciple: 'Animals repeat behaviors that result in pleasant outcomes. By rewarding desirable choices, we build voluntary cooperation without fear or intimidation.',
    stepByStep: [
      'Clearly define the target behavior you want to see (e.g. sitting politely instead of jumping).',
      'Capture or lure the behavior using high-value rewards.',
      'Mark the exact moment of success with a crisp verbal marker like "Yes!" or a clicker.',
      'Deliver the reward within 1 to 2 seconds of the marker.',
      'Gradually fade food lures into hand signals and verbal cues once the motion is predictable.'
    ],
    benefits: ['Fosters enthusiasm for learning', 'Deepens mutual trust and bond', 'Prevents fear-induced aggression'],
    proTip: 'The reward must be valuable from the dog’s perspective: real roasted chicken or cheese beats dry cardboard kibble during challenging distractions.'
  },
  {
    id: 'treat-training',
    name: 'Treat Training & High-Value Rewards',
    tagline: 'Using food as a biological currency to shape cognitive focus and positive emotional associations.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    corePrinciple: 'Food directly stimulates the parasympathetic nervous system and triggers dopamine release in the reward pathways of the brain.',
    stepByStep: [
      'Establish a 3-tier food hierarchy: Low (daily kibble), Medium (biscuit/freeze-dried liver), High (boiled chicken/hot dog/string cheese).',
      'Match reward value to distraction levels: low value at home, highest value in busy dog parks.',
      'Keep treat portions pea-sized so the dog can swallow immediately without interrupting training rhythm.',
      'Shift over time from continuous reinforcement (treat every time) to variable reinforcement (treat randomly) once mastered.'
    ],
    benefits: ['Fastest method to teach new muscle memories', 'Counteracts negative emotional states (fear/anxiety)'],
    proTip: 'Use a silicone treat pouch on your hip to ensure rewards are delivered instantly without awkward fumbling in coat pockets.'
  },
  {
    id: 'clicker-training',
    name: 'Clicker Training',
    tagline: 'A precision acoustic marker that pinpoints the exact micro-second a desired behavior occurs.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    corePrinciple: 'The distinct mechanical "click" acts as a conditioned bridge between the dog’s correct action and the arrival of the reward, eliminating verbal ambiguity.',
    stepByStep: [
      '"Charge the clicker": Click once, give a treat. Repeat 15 times until the dog perks their ears at the sound.',
      'Watch for the exact split-second of desired action (e.g. elbows touching the mat for a Down).',
      'Click during the movement, not after it is finished.',
      'Follow every single click with a food reward—a click is an ironclad promise of food.'
    ],
    benefits: ['Pinpoint mechanical precision', 'Accelerates complex behavior shaping', 'Neutral tone unclouded by human frustration'],
    proTip: 'Never use the clicker to get the dog’s attention like a whistle. The click only occurs AFTER the behavior happens.'
  },
  {
    id: 'basic-commands',
    name: 'Core Life Skills (Sit, Stay, Recall)',
    tagline: 'Essential communicative cues that keep dogs safe, focused, and confident in the human world.',
    image: retrieverImg,
    corePrinciple: 'Commands are not about dominance; they are a shared vocabulary that provides clarity and prevents dangerous misunderstandings.',
    stepByStep: [
      'Sit: Hold a treat close to the nose, move it slowly back over the forehead; as the head goes up, the rump sinks down. Mark and reward.',
      'Stay (The 3 Ds): Build Duration first (5s, 10s), then Distraction (bouncing ball), and finally Distance (taking 5 steps back).',
      'Emergency Recall: Pair a distinctive word (e.g. "Here!") with a jackpot reward of high-value meat. Never call your dog to you for a punishment or bath.'
    ],
    benefits: ['Prevents vehicle accidents and lost dogs', 'Provides clear impulse control in stimulating environments'],
    proTip: 'Always release your dog from a stay with a dedicated terminal release cue like "Free!" or "Okay!" so they know when the task is finished.'
  },
  {
    id: 'socialization',
    name: 'Canine Socialization & Exposure',
    tagline: 'Building confident, neutral, and resilient dogs through positive low-stress exposure.',
    image: playfulImg,
    corePrinciple: 'True socialization does NOT mean greeting every dog and human. It means teaching your dog to remain calm and neutral in diverse environments.',
    stepByStep: [
      'Expose young dogs to 100+ novel surfaces, sounds, sights, and scents between weeks 8 and 16.',
      'Maintain distance: let your dog observe construction equipment, bicycles, and horses from a safe, comfortable radius.',
      'Feed delicious treats during new sensory encounters to forge positive neural associations.',
      'Allow the dog full freedom to retreat if they express hesitation—never force physical contact.'
    ],
    benefits: ['Prevents adult fear-based reactivity', 'Creates adaptable family companions comfortable in cafes and transit'],
    proTip: 'Quality beats quantity: one calm, positive experience at a distance is worth 100 overwhelming, chaotic dog park scuffles.'
  },
  {
    id: 'leash-training',
    name: 'Loose-Leash Walking',
    tagline: 'Walking together in harmony without tension, jerking, or strained collar pull.',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    corePrinciple: 'Walking calmly next to humans is an unnatural skill for an animal that naturally trots at 8 mph and stops every 5 feet to smell messages in the grass.',
    stepByStep: [
      'Fit a comfortable ergonomic Y-harness that keeps shoulder joints unrestricted.',
      'Practice loose-leash pacing indoors or in a quiet driveway first before tackling stimulating city sidewalks.',
      'Keep the leash in a loose "J-loop". Deliver treats continuously at your hip seam when the leash remains slack.',
      'Incorporate "Sniffaris": dedicated walk segments where the dog is free to sniff anything they want without hurry.'
    ],
    benefits: ['Prevents tracheal damage and neck strain', 'Reduces walk-related stress for both dog and owner'],
    proTip: 'Sniffing lowers canine heart rates significantly. A 20-minute sniffing walk tires a dog’s brain far more effectively than a 45-minute brisk march.'
  }
];

// 5. Dog Behaviour by Age
export const ageStages: AgeStage[] = [
  {
    id: 'puppies',
    stage: 'Puppyhood',
    ageRange: '8 Weeks to 6 Months',
    image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80',
    keyBehaviors: [
      'Needle-sharp mouthing and play-biting as they explore textures and jaw pressure.',
      'Short bursts of "zoomies" followed by sudden 18–20 hours of daily sleep.',
      'Curiosity paired with the sensitive critical socialization window (8–16 weeks).'
    ],
    developmentalFocus: 'Positive environmental exposure, bite inhibition training, gentle house-training, and cooperative veterinary handling.',
    recommendedEnrichment: ['Licking mats with frozen yogurt', 'Soft plush puzzle toys', 'Snuffle mats with tiny puppy kibble', 'Cardboard box destruction games'],
    tipsForOwners: [
      'Puppies need up to 20 hours of sleep daily; overtired puppies become bitey and hyperactive.',
      'Never punish mouthing; redirect teeth to a soft plush toy or frozen carrot.'
    ]
  },
  {
    id: 'adolescent',
    stage: 'Adolescent Dogs',
    ageRange: '6 Months to 18–24 Months',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    keyBehaviors: [
      'Sudden selective deafness to previously known commands.',
      'Secondary fear periods: sudden suspicion of familiar objects (trash cans, statues).',
      'Surging hormones, increased interest in territorial scent marking, and boundary testing.'
    ],
    developmentalFocus: 'Patience, consistent management, reinforcing impulse control games, and reinforcing recall before off-leash freedom.',
    recommendedEnrichment: ['Long-line scent walks in open fields', 'Flirt pole games for impulse control', 'Complex puzzle feeders', 'Agility tunnels and balance beams'],
    tipsForOwners: [
      'Adolescence is when the highest number of dogs are surrendered to shelters; remember this is a normal brain reorganization phase that will pass.',
      'Step back training criteria: make tasks easier and reward more generously during hormone surges.'
    ]
  },
  {
    id: 'adult',
    stage: 'Adult Dogs',
    ageRange: '2 Years to 7 Years',
    image: retrieverImg,
    keyBehaviors: [
      'Emotional maturity and predictable behavioral temperament.',
      'Social selectivity: many adults shift from dog-social to dog-tolerant or dog-selective.',
      'Strong attachment to established household daily routines.'
    ],
    developmentalFocus: 'Maintaining physical conditioning, mental wellness, ongoing enrichment, and fine-tuning life skills.',
    recommendedEnrichment: ['Nosework / K9 scent tracking games', 'Trick training titles and parkour', 'Hiking and swimming sessions', 'Interactive hide-and-seek games'],
    tipsForOwners: [
      'Do not force your adult dog to play with chaotic adolescent dogs at public dog parks if they prefer quiet strolls.',
      'Prevent routine stagnation by changing walking routes and introducing new trick games.'
    ]
  },
  {
    id: 'senior',
    stage: 'Senior Dogs',
    ageRange: '7+ Years (varies by breed size)',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    keyBehaviors: [
      'Slower movements, longer sleep cycles, and stiffness upon waking.',
      'Heightened sensitivity to temperature swings and cold damp weather.',
      'Potential cognitive dysfunction signs: night pacing, vocalizing, disorientation.'
    ],
    developmentalFocus: 'Orthopedic comfort, joint support, gentle cognitive stimulation, and frequent low-impact mobility.',
    recommendedEnrichment: ['Low-speed sniffing walks on grassy lawns', 'Gentle food puzzles that require minimal standing', 'Warm massage and tactile petting', 'Non-slip rug pathways on slick floors'],
    tipsForOwners: [
      'Behavioral changes in seniors (grumpiness, accidents) are almost always medical pain rather than bad attitude.',
      'Schedule bi-annual vet checks to monitor kidney function, dental health, and arthritis pain management.'
    ]
  }
];

// 6. Dog Breed Behaviour
export const breedBehaviors: BreedInfo[] = [
  {
    id: 'labrador-retriever',
    name: 'Labrador Retriever',
    group: 'Sporting / Gundog',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    temperament: ['Outgoing', 'Even-tempered', 'Food-motivated', 'Affectionate'],
    naturalDrives: 'Bred to retrieve waterfowl from icy water; intense drive to hold objects in mouth and please human handlers.',
    typicalBehaviors: [
      'Carrying slippers, pillows, or sticks everywhere as greeting gifts.',
      'Extreme love of water, puddles, and mud.',
      'High enthusiasm for food, making them wonderful to train but prone to obesity.'
    ],
    enrichmentNeeds: 'Water fetch, retrieve-and-hold games, dummy training, and slow-feeder bowls.',
    trainingStyle: 'Responds phenomenally to positive food rewards and enthusiastic praise.'
  },
  {
    id: 'golden-retriever',
    name: 'Golden Retriever',
    group: 'Sporting / Gundog',
    image: retrieverImg,
    temperament: ['Gentle', 'Intelligent', 'Devoted', 'Joyful'],
    naturalDrives: 'Soft-mouth retrieving, human collaboration, and highly social bonding.',
    typicalBehaviors: [
      'Gentle "soft mouth" carrying of delicate objects.',
      'Deep empathetic sensitivity to owner emotional cues.',
      'Prolonged puppy-like playfulness lasting well into adulthood.'
    ],
    enrichmentNeeds: 'Fetch, dock diving, therapy dog work, scent tracking, and cooperative trick training.',
    trainingStyle: 'Thrives under soft, encouraging guidance; shuts down if subjected to harsh shouting or punitive corrections.'
  },
  {
    id: 'german-shepherd',
    name: 'German Shepherd',
    group: 'Herding / Working',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5455?auto=format&fit=crop&w=800&q=80',
    temperament: ['Loyal', 'Courageous', 'Hyper-alert', 'Work-oriented'],
    naturalDrives: 'Pastoral tending and protective guardian instincts; intense desire for structured tasks and clear guidance.',
    typicalBehaviors: [
      'Shadowing owners room to room as personal bodyguard.',
      'Alert barking at perimeter noises or unfamiliar figures.',
      'High reactivity potential if mental exercise needs are neglected.'
    ],
    enrichmentNeeds: 'Advanced obedience, scent detection, Schutzhund/IGP sport, and agility obstacle courses.',
    trainingStyle: 'Demands clear, fair, consistent communication and structured positive task assignments.'
  },
  {
    id: 'beagle',
    name: 'Beagle',
    group: 'Hound (Scenthound)',
    image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=800&q=80',
    temperament: ['Curious', 'Merry', 'Determined', 'Independent'],
    naturalDrives: 'Pack hunting by scent; 220+ million olfactory receptors prioritize ground scents over human verbal cues.',
    typicalBehaviors: [
      'The famous melodious Beagle "bay" bark when hot on a scent trail.',
      'Walking with nose glued to asphalt, oblivious to surrounding sounds.',
      'Ingenious counter-surfing skills when food is within sniffing distance.'
    ],
    enrichmentNeeds: 'Mantrailing, barn hunt, scent discrimination boxes, and long snuffle-walks on extended leads.',
    trainingStyle: 'Keep training sessions short and use high-value smelly treats like stinky cheese or dried tripe.'
  },
  {
    id: 'poodle',
    name: 'Poodle (Standard / Miniature)',
    group: 'Non-Sporting / Gundog origin',
    image: 'https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?auto=format&fit=crop&w=800&q=80',
    temperament: ['Exceptionally Clever', 'Agile', 'Prideful', 'Attentive'],
    naturalDrives: 'Originally German duck retrievers (Pudelhund); rapid cognitive processing and problem-solving capability.',
    typicalBehaviors: [
      'Anticipating owner actions before cues are spoken.',
      'Inventing their own humorous games when bored.',
      'Sensitivity to emotional tension in the home.'
    ],
    enrichmentNeeds: 'Complex multi-step puzzles, dance/freestyle heelwork, trick training, and water retrieve.',
    trainingStyle: 'Requires fast-paced, intellectually engaging sessions; gets bored quickly with mindless repetition.'
  },
  {
    id: 'border-collie',
    name: 'Border Collie',
    group: 'Herding',
    image: playfulImg,
    temperament: ['Hyper-Intelligent', 'Athletic', 'Focused', 'Intense'],
    naturalDrives: 'Predatory motor pattern modified into herding: orient, eye, stalk, chase, but inhibit the bite.',
    typicalBehaviors: [
      'The famous "Border Collie Eye"—intense unblinking predatory gaze.',
      'Herding moving children, bicycles, cars, or running cats if unmanaged.',
      'Obsessive focus on balls or specific interactive toys.'
    ],
    enrichmentNeeds: 'Treibball, agility, flyball, herding clinics, and complex verbal discrimination games (e.g. knowing names of 50+ toys).',
    trainingStyle: 'Needs calm, grounded trainers who emphasize emotional settling and "off-switch" relaxation protocols.'
  },
  {
    id: 'dachshund',
    name: 'Dachshund',
    group: 'Hound (Earthdog)',
    image: 'https://images.unsplash.com/photo-1612195583950-b8fd34c87093?auto=format&fit=crop&w=800&q=80',
    temperament: ['Spunky', 'Clever', 'Stubbornly Brave', 'Devoted'],
    naturalDrives: 'Bred to dig into underground badger setts and confront fierce quarry in total darkness.',
    typicalBehaviors: [
      'Burrowing beneath blankets, cushions, and duvets.',
      'Vigorous alert barking at strange noises or intruders.',
      'Independent tenacity that resists commands if unmotivated.'
    ],
    enrichmentNeeds: 'Burrow tunnels, earthdog scent challenges, blanket foraging games, and low-impact ramps to protect long spines.',
    trainingStyle: 'Requires immense patience, positive reward framing, and short fun sessions that make the dog feel clever.'
  },
  {
    id: 'french-bulldog',
    name: 'French Bulldog',
    group: 'Non-Sporting / Companion',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    temperament: ['Playful', 'Affectionate', 'Comical', 'Charming'],
    naturalDrives: 'Bred as companion lap warmers for lace workers in 19th-century Paris; seeks close human physical contact.',
    typicalBehaviors: [
      'Comic vocal grumbles, snorts, and "singing" yawns.',
      'Velcro attachment to owners’ laps and couches.',
      'Sudden comical bursts of zoomies lasting 3 minutes, followed by heavy naps.'
    ],
    enrichmentNeeds: 'Low-impact snuffle mats, gentle indoor trick games, temperature-controlled play, and chew toys tailored to brachycephalic jaws.',
    trainingStyle: 'Keep it playful and celebratory; never over-exercise or train in warm humid weather due to airway sensitivity.'
  }
];

// 7. Blog / Learning Articles
export const guideArticles: ArticleItem[] = [
  {
    id: 'why-bark-at-strangers',
    title: 'Why Does My Dog Bark at Strangers?',
    readTime: '6 min read',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Decoding the difference between territorial alarm barking, social fear, and barrier frustration when unfamiliar people approach.',
    content: [
      'When your dog barks at an approaching delivery driver or visitor, your first instinct might be frustration. But to understand why dogs react this way, we have to examine the situation through canine evolutionary psychology.',
      '1. The Alarm & Territorial Driver: To a dog, your home is their core safety territory. When an unfamiliar silhouette appears at the door, an alert bark is a natural alarm designed to alert the pack. When the mail carrier leaves 30 seconds later, the dog believes their barking successfully chased the intruder away—a powerful self-reinforcing loop.',
      '2. Fear and Social Uncertainty: Dogs who weren’t adequately socialized to diverse humans (people wearing sunglasses, bulky winter coats, beards, or carrying packages) often bark defensively to create spatial distance. Their body language will usually show weight leaning backward, ears pinned, and a tucked tail.',
      '3. The Solution Protocol: Rather than shouting "Stop barking!" (which dogs interpret as humans joining the chorus), implement environmental management and counter-conditioning. Use window film so dogs can’t fixate on passersby. When guests arrive, give your dog a designated "Place" mat equipped with a frozen lick mat before the doorbell rings. Reward silence calmly, and allow the dog to observe guests at their own comfort level.'
    ],
    keyTakeaways: [
      'Shouting "No!" mimics pack barking and escalates excitement.',
      'The mail carrier leaving reinforces the dog’s belief that barking drove the intruder away.',
      'Teach a "Go to Mat" cue and pair visitor arrival with high-value food scatter games.'
    ]
  },
  {
    id: 'understanding-dogs-tail',
    title: 'Understanding Your Dog’s Tail: Beyond the Wag',
    readTime: '5 min read',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Tail movement is a sophisticated emotional broadcast. Learn how carriage height, wag speed, and lateral asymmetry communicate subtle intent.',
    content: [
      'The myth that "a wagging tail means a happy dog" is one of the most common causes of preventable dog bites. In reality, a tail wag simply signals physiological arousal and social interaction readiness.',
      'Carriage Height: A tail held at neutral spine level reflects a relaxed emotional state. A tail held high and vertical like a flagpole indicates intense focus, vigilance, or potential territorial conflict. Conversely, a tail clamped down low between the hind legs signals deep fear, appeasement, and a desire to make oneself small.',
      'Wag Speed and Breadth: Broad, loose wags that swing the dog’s entire hips ("helicopter wags") signal genuine social joy and submissive friendliness. In contrast, a rapid, stiff, short-amplitude twitching wag indicates high adrenaline and should be treated with caution.',
      'The Asymmetric Brain Effect: Groundbreaking research has demonstrated that dogs wag more to the right when experiencing positive, approach-oriented emotions (like seeing their owner), and more to the left when experiencing negative, withdrawal-oriented emotions (like seeing an unfamiliar dominant dog).'
    ],
    keyTakeaways: [
      'A wagging tail indicates arousal, not guaranteed happiness.',
      'Stiff vertical wagging warrants immediate caution and space.',
      'Right-biased wags reflect positive social approach; left-biased wags reflect withdrawal or uncertainty.'
    ]
  },
  {
    id: 'why-dogs-lick-owners',
    title: 'Why Do Dogs Lick Their Owners?',
    readTime: '4 min read',
    date: 'Oct 2026',
    image: heroImg,
    excerpt: 'From ancestral puppy feeding rituals and pheromone grooming to comforting stress releases—what canine licking truly means.',
    content: [
      'Does your dog shower your hands, face, or ankles with affectionate licks the moment you sit down? Canine licking is a versatile communicative tool layered with evolutionary history.',
      'Ancestral Greetings: In wild canid packs, returning hunting adults are greeted by puppies eagerly licking the corners of their muzzles. This instinctive greeting stimulates regurgitation of food. In domestic dogs, muzzle-licking persists as a ritualized signal of friendly deference and affection.',
      'Tasting Human Scent & Salt: Dogs possess an acute sense of taste and smell via the Jacobson’s organ. Human skin carries subtle salts, mineral secretions, and personal pheromones that provide comforting sensory data about where you have been and how you are feeling.',
      'Endorphin Release: Repetitive licking triggers the release of endorphins in the canine brain, helping anxious dogs soothe their nervous systems during quiet moments.',
      'When Is It a Problem? If licking becomes compulsive, focused on inanimate objects (pillows, carpets), or is accompanied by whining, it may signal nausea, gastrointestinal discomfort, or compulsive stress disorder.'
    ],
    keyTakeaways: [
      'Muzzle-licking is a friendly greeting passed down from ancestral puppy rituals.',
      'Licking releases calming endorphins in your dog’s brain.',
      'Sudden compulsive floor or carpet licking may indicate gastrointestinal nausea.'
    ]
  },
  {
    id: 'stop-excessive-barking',
    title: 'How to Stop Excessive Barking: Positive Science',
    readTime: '7 min read',
    date: 'Oct 2026',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    excerpt: 'A comprehensive, humane guide to ending nuisance barking through root-cause diagnosis, trigger thresholds, and incompatible behaviors.',
    content: [
      'Persistent barking is one of the most frustrating challenges dog owners face. Many owners try quick fixes like citronella collars or ultrasonic devices, only to discover that these create increased anxiety, reactivity, or depression.',
      'Step 1: Environmental Management: You cannot train a dog who is continuously rehearsing the problem. If your dog barks out the bay window, apply temporary frosted window film or close the blinds. If they bark in the backyard, supervise potty trips on leash rather than leaving them alone to patrol.',
      'Step 2: Meeting Physical & Cognitive Needs: A dog who has slept all day with zero mental engagement will find their own entertainment—and barking at tree leaves is free fun. Introduce daily 20-minute scent walks ("Sniffaris"), lick mats, and hide-and-seek games.',
      'Step 3: Train an Incompatible Behavior (DRI): A dog cannot jump on the couch and bark out the window if they are lying quietly on a mat in the kitchen licking a frozen peanut butter KONG. Teach a solid "Go to Bed" cue and reward quiet settlement generously.',
      'Step 4: The "Thank You" Protocol: When your dog gives a single alert bark at the mail truck, calmly say "Thank you," toss three pieces of high-value cheese away from the window, and praise them for turning their head toward you. You acknowledge the alert and immediately redirect attention.'
    ],
    keyTakeaways: [
      'Manage sightlines with window film to prevent rehearsal.',
      'Provide daily scent games to drain restless cognitive energy.',
      'Reward incompatible behaviors like lying on a designated mat.'
    ]
  },
  {
    id: 'help-separation-anxiety',
    title: 'How to Help a Dog With Separation Anxiety',
    readTime: '8 min read',
    date: 'Oct 2026',
    image: stressImg,
    excerpt: 'Step-by-step desensitization protocols, sub-threshold departures, and proven ways to build true home-alone confidence.',
    content: [
      'Separation anxiety is not spite, revenge, or poor discipline. It is a genuine panic disorder analogous to a human experiencing severe claustrophobia or an agoraphobic panic attack.',
      'Recognizing True Separation Anxiety: Common symptoms include frantic vocalizing (howling/whining) within 15 minutes of departure, drooling, pacing, scratching at exit doors or window sills, and refusing high-value food while alone.',
      'The Golden Rule of Desensitization: You must keep absences strictly SUB-THRESHOLD. If your dog panics at 30 seconds of separation, leaving them for 45 seconds will undo your progress. Begin by walking to the door, turning the handle, and stepping back without leaving.',
      'Desensitizing "Departure Cues": Dogs learn the sequence of departure: picking up your keys, putting on your work shoes, grabbing your bag. Practice picking up keys and sitting on the couch to watch TV. When cues lose their predictability, departure panic drops.',
      'Modern Technology & Professional Support: Use a home pet camera to monitor your dog’s heart rate and body language in real time. Work closely with a certified separation anxiety trainer (CSAT) who can design micro-step absence plans tailored to your dog.'
    ],
    keyTakeaways: [
      'Separation anxiety is clinical panic, never spite or bad manners.',
      'All alone-time practice must stay strictly beneath the dog’s panic threshold.',
      'Desensitize pre-departure cues like jingling keys and putting on coats.'
    ]
  },
  {
    id: 'how-dogs-communicate-body-language',
    title: 'How Dogs Communicate With Body Language',
    readTime: '6 min read',
    date: 'Oct 2026',
    image: playfulImg,
    excerpt: 'The subtle ladder of canine communication: understanding calming signals, stress markers, and how to avoid bite escalations.',
    content: [
      'Dogs are master non-verbal communicators. In fact, long before a dog ever growls or snaps, they have typically offered dozens of subtle body language signals that went unnoticed by humans.',
      'The Canine "Ladder of Aggression": Norwegian ethologist Turid Rugaas identified that dogs use appeasement gestures called "calming signals" to de-escalate tension. When these signals are ignored, stress escalates up the ladder.',
      'Step 1: Early Calming Signals: Yawning when not tired, blinking repeatedly, licking the nose/lips, turning the head away, slow sniffing of the floor.',
      'Step 2: Mild Stress: Stiffening body posture, clamping ears back, lowering the tail, lifting one front paw in hesitation.',
      'Step 3: Escalated Warnings: Freezing completely still, direct hard stare, low growling, curling the upper lip to flash teeth.',
      'Never Punish the Growl: A growl is a dog’s smoke alarm. If you punish a dog for growling, you remove the smoke alarm without putting out the fire—creating a dog who bites without warning in the future.'
    ],
    keyTakeaways: [
      'Lip-licking and yawning out of context are early de-escalation signals.',
      'A freeze or stiff body is a clear red flag requiring immediate spatial distance.',
      'Never punish a growl—it is a vital boundary warning that prevents bites.'
    ]
  }
];

// 8. Daily Behaviour Insights ("Behaviour of the Day")
export const dailyInsights = [
  {
    day: 'Monday',
    title: 'The "Play Bow" Ethology',
    insight: 'When a dog drops their front elbows while keeping their rear in the air, they are issuing a canine meta-signal: "Whatever rough play happens next is only in fun, not real aggression."',
    icon: 'paw'
  },
  {
    day: 'Tuesday',
    title: 'The Power of the Sniffari',
    insight: 'Sniffing lowers a dog’s pulse and cortisol levels within 10 minutes. A 15-minute scent-driven stroll expends more mental energy than a 45-minute continuous jog.',
    icon: 'wind'
  },
  {
    day: 'Wednesday',
    title: 'Why Yawning Isn’t Just Tiredness',
    insight: 'Canines yawn out of context when feeling mildly anxious or when attempting to calm an excited person or dog nearby. It is a classic appeasement signal.',
    icon: 'smile'
  },
  {
    day: 'Thursday',
    title: 'The Wet-Dog Shake-Off',
    insight: 'Notice your dog shaking their coat vigorously when dry? That’s an autonomic "reset switch" canines use to release adrenaline right after a tense encounter or training session.',
    icon: 'sparkles'
  },
  {
    day: 'Friday',
    title: 'Whale Eye Warning',
    insight: 'When a dog turns their head away but cuts their eyes sideways so the white sclera becomes visible ("whale eye"), they are communicating significant discomfort and asking for space.',
    icon: 'eye'
  },
  {
    day: 'Saturday',
    title: 'Soft Mouth vs Hard Mouth',
    insight: 'Bite inhibition is learned between weeks 5 and 10 from littermates. When a puppy bites too hard, littermates yelp and pause play, teaching the pup to calibrate jaw pressure.',
    icon: 'heart'
  },
  {
    day: 'Sunday',
    title: 'Licking Lips in Cool Weather',
    insight: 'A quick tongue flick over the nose when food is not present is an appeasement signal signaling "I am peaceful, please do not pressure me."',
    icon: 'check'
  }
];

// 9. Interactive Quiz Questions
export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    text: string;
    score: number; // 0, 1, 2
    explanation: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'A friend visits your home. Your dog approaches with ears slightly back, licking their lips, and holding their tail low while wagging gently. What is your dog communicating?',
    context: 'Observing subtle greeting cues',
    options: [
      {
        text: 'They are completely joyful and begging to be hugged tightly around the neck.',
        score: 0,
        explanation: 'Incorrect. Hugging a dog displaying lip-licking and low tail posture can escalate anxiety into defensive behavior.'
      },
      {
        text: 'They are feeling uncertain or mildly anxious, offering appeasement signals to ensure the visitor is safe.',
        score: 2,
        explanation: 'Spot on! Lip-licking, low tail carriage, and slightly pinned ears are classic appeasement gestures asking for calm and gentle space.'
      },
      {
        text: 'They are trying to dominate the visitor and claim authority over the doorway.',
        score: 0,
        explanation: 'Incorrect. Dominance theory has been debunked in modern ethology. This posture communicates deference and cautious hesitation.'
      }
    ]
  },
  {
    id: 2,
    question: 'Your dog is chewing on a bone. When you walk near them, they suddenly freeze stiff and look at you sideways without moving their head. What should you do?',
    context: 'Recognizing potential resource guarding',
    options: [
      {
        text: 'Immediately pry their mouth open and snatch the bone away to prove you are the alpha.',
        score: 0,
        explanation: 'Dangerous! Snatching the bone confirms the dog’s fear that you are a thief, which can trigger an escalation to a bite.'
      },
      {
        text: 'Pause, avoid direct eye contact, back up gently, and return with a higher-value treat (like roasted chicken) to trade from a safe distance.',
        score: 2,
        explanation: 'Excellent! The "freeze" is an explicit warning sign. Respecting the warning and setting up fair trades builds lifelong trust.'
      },
      {
        text: 'Yell "Bad dog!" loudly so they drop the bone in shame.',
        score: 0,
        explanation: 'Incorrect. Punishment creates fear and teaches the dog to skip the warning freeze and bite immediately next time.'
      }
    ]
  },
  {
    id: 3,
    question: 'While out on a walk, your dog spots another dog 50 feet away. Your dog drops into a play bow (elbows on the ground, rear up, wagging tail, relaxed open mouth). What does this mean?',
    context: 'Deciphering play invitations',
    options: [
      {
        text: 'They are preparing to launch an aggressive attack on the oncoming dog.',
        score: 0,
        explanation: 'Incorrect. Aggression is characterized by forward weight, stiff legs, closed lips, and rigid posturing—the opposite of a play bow.'
      },
      {
        text: 'They are issuing a friendly, enthusiastic invitation to engage in reciprocal social play.',
        score: 2,
        explanation: 'Correct! The play bow is the universal canine meta-signal indicating that upcoming romping or chasing is all in good fun.'
      },
      {
        text: 'They are physically exhausted and cannot walk any farther.',
        score: 0,
        explanation: 'Incorrect. A tired dog will lie flat on their belly or flank rather than holding a dynamic play bow pose.'
      }
    ]
  },
  {
    id: 4,
    question: 'Your dog barks relentlessly at the mail carrier every afternoon. What is the most scientifically effective long-term solution?',
    context: 'Solving barrier and alert barking',
    options: [
      {
        text: 'Apply frosted window film so your dog cannot see the mail carrier, and teach a "Go to Mat for High-Value Treats" alternative behavior.',
        score: 2,
        explanation: 'Perfect! Environmental management removes trigger rehearsal, while positive reinforcement provides an enjoyable alternative job.'
      },
      {
        text: 'Put a shock collar on the dog so they get zapped every time they bark at the window.',
        score: 0,
        explanation: 'Counterproductive and inhumane. Aversive devices link the sight of innocent humans with painful neck shocks, often breeding fear-aggression.'
      },
      {
        text: 'Shout "Quiet!" at the top of your lungs every time they start barking.',
        score: 0,
        explanation: 'Ineffective. Shouting sounds like loud barking to your dog, convincing them that the whole family is barking at the intruder together.'
      }
    ]
  },
  {
    id: 5,
    question: 'You return home from work and find your dog has chewed up an old slipper while you were away. How should you respond?',
    context: 'Addressing destructive chewing aftermath',
    options: [
      {
        text: 'Shove the chewed slipper in their face so they understand what they did wrong hours ago.',
        score: 0,
        explanation: 'Counterproductive. Dogs have a 2-second associative memory window. They only know you are angry now, which induces fear of your arrival.'
      },
      {
        text: 'Silently clean up the mess without scolding, put footwear inside closed closets, and leave frozen stuffed food toys next time.',
        score: 2,
        explanation: 'Spot on! Canine memory cannot connect delayed punishment with past actions. Management and proactive oral enrichment are the true cures.'
      },
      {
        text: 'Lock them in the bathroom for 3 hours as a disciplinary "time out".',
        score: 0,
        explanation: 'Incorrect. Solitary isolation produces anxiety and does nothing to teach appropriate chewing choices.'
      }
    ]
  }
];

// 10. Frequently Asked Questions
export const faqs = [
  {
    question: 'Why does my dog follow me everywhere, even into the bathroom?',
    answer: 'Dogs are social, cooperative pack animals by evolution. Following you ("velcro dog" behavior) indicates attachment, security seeking, and curiosity about what you are doing. As long as they do not panic when left alone, it is a healthy sign of bonding.'
  },
  {
    question: 'Is dominance and the "Alpha Wolf" theory valid for training dogs?',
    answer: 'No. Modern veterinary ethology and animal behavior science have thoroughly debunked the alpha theory. The original 1940s wolf study was conducted on unrelated wolves held in forced artificial captivity. In natural wild packs, wolf families operate like human families: parents guide their offspring through care, cooperation, and teaching—not violent dominance.'
  },
  {
    question: 'Why does my dog lean their full body weight against my legs?',
    answer: 'Body leaning is an affectionate tactile behavior. Similar to a canine hug, leaning against trusted humans provides sensory comfort, expresses closeness, and releases oxytocin (the bonding hormone) in both dog and owner.'
  },
  {
    question: 'How do I know if two dogs are playing safely or actually fighting?',
    answer: 'Healthy dog play features reciprocal role reversal (one chases, then the other chases; one is on top, then takes turns lying down), self-handicapping (larger dogs playing gently with smaller ones), bouncy loose body language, play bows, and brief natural pauses. Real fights feature rigid stillness, high-pitched screaming yelps, sustained locked bites, and tense unblinking eyes.'
  },
  {
    question: 'Why does my dog get the "zoomies" late in the evening or after a bath?',
    answer: 'Zoomies (scientifically called Frenetic Random Activity Periods or FRAPs) are natural bursts of energetic release. They commonly occur after periods of restraint (like a bath or groom), when temperature drops in the evening, or when releasing built-up adrenaline.'
  },
  {
    question: 'When should I consult a certified professional veterinary behaviourist?',
    answer: 'You should seek a board-certified veterinary behaviourist (DACVB) or certified clinical animal behaviourist if your dog displays sudden unprovoked aggression, severe panic during thunderstorms or fireworks, intense resource guarding that escalates to biting, self-mutilation (chewing paws raw), or sudden dramatic personality shifts.'
  }
];
