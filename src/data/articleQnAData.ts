export interface QnAItem {
  question: string;
  answer: string;
}

// 1. Dedicated Q&A for Guide Articles (Learning Articles)
export const guideArticleQnA: Record<string, QnAItem[]> = {
  'why-bark-at-strangers': [
    {
      question: 'Why does my dog bark at strangers outside the window, but acts friendly at the dog park?',
      answer: 'This is known as barrier frustration and territorial alertness. Inside your home or behind a window, the dog perceives an impenetrable boundary that restricts their natural impulse to investigate. Because the mail carrier or passerby always walks away shortly after, the dog learns that their barking "drove the intruder off," reinforcing the window behavior. In an open park, without walls or barriers, that defensive territorial pressure vanishes.'
    },
    {
      question: 'Should I let strangers feed treats directly to my fearful barking dog?',
      answer: 'Usually no! When a fearful dog smells food held by a stranger, they often step forward beyond their emotional comfort zone to grab it. Once the treat is eaten, the dog suddenly realizes how close they are to the scary person, which frequently causes a panic-induced bark or snap (the "treat-and-retreat" trap). Instead, have the stranger gently toss the treat BEHIND the dog so approaching is never pressured.'
    },
    {
      question: 'How long does counter-conditioning typically take to reduce stranger barking?',
      answer: 'For mild alert barking, noticeable improvement happens within 2 to 4 weeks of consistent management (window film, white noise, and "Go to Mat" protocols). For deep-seated fear or traumatic histories, neurochemical rewiring typically requires 2 to 4 months of gradual sub-threshold exposure paired with high-value rewards.'
    },
    {
      question: 'Does petting and comforting my dog while they bark reward the fear?',
      answer: 'No. You cannot reinforce an involuntary emotional state like fear with affection. If a child is terrified of thunderstorms, hugging them does not make them "more afraid of thunder." Calming petting and a gentle voice lower heart rate and cortisol. However, avoid high-pitched frantic petting, which conveys human panic.'
    }
  ],

  'understanding-dogs-tail': [
    {
      question: 'Can a dog wag their tail right before biting someone?',
      answer: 'Yes, absolutely. A wagging tail simply indicates emotional arousal and intent to interact—not necessarily friendliness. A high, stiff, rapidly vibrating tail held like an antenna, combined with a frozen stance, hard unblinking stare, and closed mouth, is a high-level warning of an impending defensive bite.'
    },
    {
      question: 'Does an asymmetrical left-biased wag always mean a dog is stressed?',
      answer: 'Peer-reviewed studies by Italian neuroscientists (Prof. Giorgio Vallortigara) demonstrated that dogs wag more to the left when experiencing negative emotional withdrawal (e.g. facing an unfamiliar dominant dog or scary stimulus), governed by the right brain hemisphere. While subtle to human eyes, other dogs perceive this asymmetry instantly and respond with increased heart rates.'
    },
    {
      question: 'How do docked or naturally tailless breeds (like French Bulldogs or Boxers) communicate?',
      answer: 'Dogs without tails or with docked nubs face distinct communication hurdles with other dogs. They must compensate using rump wiggles, ear orientation, facial expressions, and overall body tension. In dog parks, unfamiliar dogs often need extra seconds to read a tailless dog’s intentions.'
    },
    {
      question: 'What does a low, slow tail wag mean compared to a high, fast wag?',
      answer: 'A low tail wag sweeping slowly between the hocks communicates cautious deference, submission, or insecurity—asking the other individual for gentle peace. In contrast, a high, fast wag indicates intense arousal, confidence, and heightened alertness.'
    }
  ],

  'why-dogs-lick-owners': [
    {
      question: 'Is it hygienic or safe to let my dog lick my face and hands?',
      answer: 'Occasional hand licking is generally harmless for healthy adults, provided you wash your hands afterward. However, dogs explore soil, animal waste, and their own anatomy, carrying bacteria such as Capnocytophaga and Pasteurella. Never allow dogs to lick open wounds, broken skin, or mucous membranes (eyes, lips), especially around immunocompromised individuals, infants, or the elderly.'
    },
    {
      question: 'How do I stop my dog from compulsively licking my legs, clothes, or couch cushions?',
      answer: 'Compulsive or repetitive licking is often an autonomic coping mechanism for stress, gastrointestinal discomfort (nausea/acid reflux), or boredom. To stop it, gently get up and walk away without scolding (removing attention), and replace the target with an approved oral enrichment tool like a frozen KONG or a Lickimat with Greek yogurt.'
    },
    {
      question: 'Can excessive licking be a medical sign of physical pain or nausea in dogs?',
      answer: 'Yes. Veterinary studies show that sudden bursts of lip-smacking, air-licking, or obsessively licking floors/carpets (known as ELS or Excessive Licking of Surfaces) are linked to gastrointestinal disorders like inflammatory bowel disease, pancreatitis, or dental toothache in over 60% of cases.'
    },
    {
      question: 'Why does my dog lick my hands more intensely when I return home from work?',
      answer: 'Your hands are packed with sweat glands containing salt, sebum, and microscopic scent traces of everywhere you visited during the day. Licking your hands serves a dual purpose: a friendly social greeting that releases oxytocin, combined with an olfactory "information scan" of your day.'
    }
  ],

  'stop-excessive-barking': [
    {
      question: 'Do shock collars or citronella spray collars stop barking permanently?',
      answer: 'While punitive collars may temporarily suppress barking out of panic, they fail to resolve the underlying emotional driver (fear, territorial alarm, or isolation distress). Worse, dogs often associate the sudden electric shock or choking spray with whatever they were looking at (such as an innocent child or passing dog), turning alarm barking into dangerous fear-aggression.'
    },
    {
      question: 'How do I handle demand barking when my dog barks at me during dinner or while on the phone?',
      answer: 'Demand barking persists because it worked in the past. To extinguish it, enforce zero reward: instantly freeze, cross your arms, turn your back, and avoid eye contact the second barking starts. When the dog remains quiet for 3 consecutive seconds, mark with "Yes" and reward. Teach an alternate cue beforehand, such as "Go Lie on Your Mat with a Chew."'
    },
    {
      question: 'What is the most effective way to stop alert barking at night?',
      answer: 'Nighttime alert barking is usually triggered by nocturnal wildlife sounds or unfamiliar shadows. Use a white noise machine or low-volume classical music in the bedroom, close blackout curtains to eliminate headlights and shadows, and keep the dog sleeping in your bedroom where they feel secure and settled.'
    },
    {
      question: 'Why does shouting "Quiet!" or "No!" never work?',
      answer: 'To a canine ear, loud, sharp vocalizations from an owner sound like aggressive, excited barking. When you yell, your dog assumes: "Fantastic, the whole human family is joining me to bark at this threat together!" Calm, whisper-quiet cues disrupt the arousal cycle far more effectively.'
    }
  ],

  'help-separation-anxiety': [
    {
      question: 'Will adopting a second dog cure my first dog’s separation anxiety?',
      answer: 'In the vast majority of clinical cases, no. True separation anxiety is almost always hyper-attachment to specific human family members, not general loneliness for canines. In fact, bringing home a second dog often results in the new dog learning the anxious distress behaviors of the resident dog through behavioral contagion.'
    },
    {
      question: 'Should I crate a dog with severe separation anxiety while I am away?',
      answer: 'Never crate a dog with separation anxiety unless they already consider the crate their beloved sanctuary. Separation anxiety frequently co-occurs with confinement distress; panic-stricken dogs regularly break teeth, bloody their paw pads, and shred crate bars trying to escape. Baby gates or dog-proofed open rooms are far safer.'
    },
    {
      question: 'Do calming treats, weighted shirts (ThunderShirts), or pheromone diffusers cure separation anxiety?',
      answer: 'These tools can take the edge off mild distress (reducing anxiety by 10-15%), but they are supportive aids, not a cure. The only scientifically validated cure is systematic, sub-threshold desensitization where absences are built second by second without pushing the dog into panic.'
    },
    {
      question: 'How do I differentiate true separation anxiety from normal puppy boredom destruction?',
      answer: 'Boredom destruction happens casually and intermittently: the dog chews a shoe, naps, plays with a ball, and happily devours a stuffed chew toy while you are gone. Separation anxiety is acute panic: destruction is concentrated at exits (doorframes, blinds), vocalization begins within minutes of departure, and the dog refuses even fresh steak until you return.'
    }
  ],

  'how-dogs-communicate-body-language': [
    {
      question: 'What is the very first subtle warning signal a dog gives before ever growling?',
      answer: 'Long before a dog growls, they offer subtle calming signals: a rapid tongue flick over the nose, a sudden head turn away from the stimulus, slow deliberate blinking, or a stiff muscular freeze lasting just half a second. Recognizing these micro-signals allows you to de-escalate well before vocal warnings arise.'
    },
    {
      question: 'Why do dogs yawn when they are not tired or sleepy?',
      answer: 'Canine yawning out of context is an appeasement or calming signal. When facing social tension, an overly enthusiastic child, or a veterinary examination, a dog yawns to communicate: "I feel uncomfortable and peaceful; please give me room." It also physically increases blood oxygen to help the dog regulate nervous tension.'
    },
    {
      question: 'How can I easily tell if two dogs are playing safely or actually fighting?',
      answer: 'Look for reciprocal role reversal: in healthy play, the chaser becomes the chased, the dog on top takes turns rolling on their back, and both dogs take brief 1-second "breather pauses." Their bodies remain loose and curved. In a real fight, bodies are straight and rigid, vocalizations are guttural and constant, and movements are relentless with zero turn-taking.'
    },
    {
      question: 'What does "whale eye" look like and what action should you take immediately?',
      answer: '"Whale eye" occurs when a dog turns their head away but cuts their eyes sideways toward you, exposing the white crescent sclera of the eyeball. It indicates severe anxiety or perceived threat. Freeze immediately, avoid looking directly into their eyes, do not reach toward them, and take a slow, gentle step backward to give the dog breathing room.'
    }
  ]
};

// 2. Q&A for Core Behaviours (/b/*)
export const behaviourQnA: Record<string, QnAItem[]> = {
  'why-dogs-bark': [
    {
      question: 'Can you train a dog to never bark at all?',
      answer: 'No, nor should you attempt to. Barking is a natural species-typical canine communication tool, equivalent to human talking. The goal of ethical positive training is not zero barking, but reducing frantic, persistent, or fear-based vocalizations to manageable, calm levels.'
    },
    {
      question: 'What is the difference between an alert bark and an alarm bark?',
      answer: 'An alert bark is usually 1 to 2 sharp, distinct "woofs" announcing that something novel has occurred. An alarm bark is rapid, continuous, and lower in pitch, signaling perceived danger and calling the social group to heightened vigilance.'
    },
    {
      question: 'Why does my dog bark when I put on their leash before a walk?',
      answer: 'This is excitement and anticipation barking. The sight of the leash triggers an adrenaline rush. To fix this, practice picking up the leash and putting it away without walking, and only clip the leash when all four paws are stationary on the floor.'
    }
  ],
  'why-dogs-wag-tails': [
    {
      question: 'Why do dogs wag their tail in their sleep?',
      answer: 'Just like humans experience REM sleep, dogs enter deep dream cycles where motor signals leak into twitching paws, soft whuffs, and involuntary tail wags, likely reflecting memories of daytime play or scent tracking.'
    },
    {
      question: 'Do puppies wag their tails from birth?',
      answer: 'No. Newborn puppies cannot wag their tails. Tail wagging begins around 30 to 50 days of age when social communication with littermates and mother becomes biologically necessary for play and appeasement.'
    },
    {
      question: 'What does a tucked tail that still wags slowly mean?',
      answer: 'A tucked tail wagging tentatively beneath the legs signals deep insecurity, submission, and a request for reassurance: "I am vulnerable and mean no harm, please do not hurt me."'
    }
  ],
  'why-dogs-jump': [
    {
      question: 'Why do greeting dogs jump on elderly people and children more often?',
      answer: 'Children and seniors frequently react with high-pitched voices, raised hands, or erratic movements, which dogs perceive as exciting invitation signals. Training a reliable "Sit on Greeting Mat" is essential for vulnerable guests.'
    },
    {
      question: 'Is kneeing a jumping dog in the chest effective?',
      answer: 'No! Kneeing causes severe bruising or cartilage trauma to the dog’s ribcage and often teaches the dog that human greetings are physically dangerous, creating defensive aggression. Use "Four Paws on Floor" positive redirection instead.'
    },
    {
      question: 'How do I train guests not to encourage jumping?',
      answer: 'Before opening the door, instruct guests explicitly: "Please completely ignore Buster until he sits down—no eye contact, no petting, and no baby talk until all four paws are on the rug."'
    }
  ],
  'why-dogs-chew': [
    {
      question: 'At what age does puppy destructive chewing naturally peak?',
      answer: 'Chewing peaks between 4 to 8 months when baby teeth are replaced by 42 adult permanent teeth, causing painful gum swelling. A secondary chewing phase occurs during adolescent jaw strengthening around 10 to 14 months.'
    },
    {
      question: 'Are cooked bones from dinner safe for dogs to chew?',
      answer: 'Never give cooked bones of any kind. Cooking turns bones brittle, causing them to splinter into razor-sharp shards that puncture the stomach wall or cause fatal intestinal blockages.'
    },
    {
      question: 'What chew toys are safest for power chewers?',
      answer: 'Black heavy-duty rubber KONGs, natural whole antlers (monitored for tooth wear), pressed beef collagen sticks, and olive wood or coffee wood chews that fray into soft fibers rather than sharp splinters.'
    }
  ],
  'why-dogs-dig': [
    {
      question: 'How do I build a dedicated dog digging pit in my yard?',
      answer: 'Dedicate a 4x4 foot wooden sandpit filled with child-safe play sand. Bury high-value toys, bully sticks, and rubber balls under the sand and guide your dog there with excitement. Whenever they dig in the sandpit, praise heavily.'
    },
    {
      question: 'Why does my dog dig at the carpet or bed sheets before lying down?',
      answer: 'This is an innate nesting reflex inherited from wild wolves, who scratch away leaves, stones, or warm topsoil to create a clean, contour-fitting hollow bed for sleeping.'
    },
    {
      question: 'Does burying feces in garden holes prevent digging?',
      answer: 'No. This outdated trick usually causes the dog to dig adjacent holes or develop stool-eating habits (coprophagia). Environmental enrichment and sandbox training are far more effective.'
    }
  ]
};

// 3. Q&A for Common Problems (/fix/*)
export const problemQnA: Record<string, QnAItem[]> = {
  'excessive-barking': [
    {
      question: 'How do I stop my dog from barking at the doorbell immediately?',
      answer: 'Record the doorbell sound on your smartphone at 10% volume. Play it while scattering hot dog slivers on the floor. Gradually raise the volume over days until the doorbell sound triggers an expectation of treats rather than defensive panic.'
    },
    {
      question: 'Will getting a second dog stop my barking dog from feeling lonely?',
      answer: 'Usually not. More often than not, the new dog joins in, doubling the noise and creating pack barking. Mental enrichment and puzzle feeders address the root boredom far better.'
    }
  ],
  'separation-anxiety': [
    {
      question: 'Can anti-anxiety medications help with severe separation anxiety?',
      answer: 'Yes! FDA-approved SSRIs (like fluoxetine) prescribed by a veterinarian can lower brain stress baseline enough for desensitization training to take hold. Medication is not a sedative; it is a neurological bridge.'
    },
    {
      question: 'Is it bad to say goodbye to my dog before leaving?',
      answer: 'Long, emotional goodbyes loaded with hugs and sorrowful baby talk elevate the dog’s arousal right before you step out. Departures should be quiet, brief, and non-dramatic.'
    }
  ],
  'reactivity-aggression': [
    {
      question: 'What is a reactivity "threshold"?',
      answer: 'A threshold is the exact physical distance at which your dog notices a trigger (another dog or person) but can still look at you, take a treat, and remain calm. Training must always take place beneath this threshold line.'
    },
    {
      question: 'Does using a muzzle mean my dog is a bad dog?',
      answer: 'Not at all! A well-fitted, basket-style muzzle is a responsible safety tool that provides freedom, prevents bites, and allows the dog to pant, drink water, and receive treats during training.'
    }
  ],
  'leash-pulling': [
    {
      question: 'Why do choke chains or prong collars seem to work fast, and why are they discouraged?',
      answer: 'Aversive collars work by inflicting sharp physical pain on the sensitive nerves and cartilage of the neck. While pain stops the forward surge temporarily, it frequently generates fear, reactivity toward oncoming dogs, and tracheal collapse.'
    },
    {
      question: 'How long should a good loose-leash training session last?',
      answer: 'Short 5 to 10-minute sessions are far more effective than marathon hour-long walks where frustration builds. Finish every session on a high note before mental fatigue sets in.'
    }
  ],
  'jumping-on-people': [
    {
      question: 'What is the fastest way to stop an excited jumper when entering the home?',
      answer: 'Keep a jar of small treats outside your front door. Toss a handful of treats across the floor as you step inside; while your dog is busy vacuuming treats off the rug, you enter peacefully.'
    },
    {
      question: 'Why do dogs jump specifically on visitors who dislike dogs?',
      answer: 'People nervous around dogs often freeze, avoid eye contact, and pull their hands up—which to a dog mimics submissive body language inviting a closer sniff!'
    }
  ],
  'destructive-chewing': [
    {
      question: 'Can bitter apple spray stop chewing permanently?',
      answer: 'Taste deterrents can help protect furniture temporarily, but without providing an appealing approved alternative (like a frozen marrow bone), the dog will simply find an unsprayed section of wood.'
    },
    {
      question: 'Why do dogs specifically chew owner shoes and TV remote controls?',
      answer: 'Shoes and remote controls hold the highest concentration of human hand and foot sweat pheromones. Chewing objects rich with owner scent provides deep emotional security.'
    }
  ],
  'excessive-digging': [
    {
      question: 'Why do Terriers dig more than other dog breeds?',
      answer: 'Terriers were selectively bred for centuries to flush badgers, foxes, and rats from underground burrows. Digging is an innate working motor pattern hardwired into their genetic makeup.'
    },
    {
      question: 'Can lack of exercise cause backyard digging?',
      answer: 'Yes. Digging is a physically taxing, self-reinforcing activity. Dogs with surplus physical energy and boredom routinely dig escape trenches or exploratory holes to entertain themselves.'
    }
  ],
  'toilet-training-problems': [
    {
      question: 'Why is an enzymatic cleaner necessary for indoor urine accidents?',
      answer: 'Standard household soaps only mask odors to human noses. Dogs have olfactory receptors 10,000 times more sensitive; enzymatic cleaners biologically break down uric acid crystals so the dog does not re-mark the spot.'
    },
    {
      question: 'Why do some puppies regress in house training around 7 to 9 months?',
      answer: 'Adolescent hormone surges, growth spurts, and asserting independence often cause temporary potty regression. Re-tighten your potty schedule for two weeks to rebuild clean habits.'
    }
  ]
};

// 4. Q&A for Positive Training Methods (/t/*)
export const trainingQnA: Record<string, QnAItem[]> = {
  'positive-reinforcement': [
    {
      question: 'Does positive reinforcement training mean you never tell your dog "No"?',
      answer: 'No. Positive reinforcement means you focus on actively reinforcing what you WANT the dog to do, rather than relying on pain or intimidation to suppress errors. You still set firm boundaries and prevent unwanted behaviors through smart environmental management.'
    },
    {
      question: 'Will I have to carry treats in my pocket forever?',
      answer: 'No. Once a behavior is reliably learned, you transition from continuous reinforcement (treating every time) to variable reinforcement (treating unpredictably), while integrating real-life rewards like opening the door for walks, throwing a ball, or verbal praise.'
    }
  ],
  'treat-training': [
    {
      question: 'How do I prevent my dog from gaining weight during treat training?',
      answer: 'Measure your dog’s daily kibble ration in the morning and reserve 30% of it for training rewards throughout the day. When using high-value treats like chicken or hot dog, keep portions the size of a green pea and deduct calories from their dinner bowl.'
    },
    {
      question: 'What if my dog is not food-motivated?',
      answer: 'All animals are food-motivated by biology—if a dog refuses food, they are usually either stressed above threshold, physically full, or the treat quality is too low for the environment. Test higher-value stinky treats like roast beef or string cheese in quiet settings.'
    }
  ],
  'clicker-training': [
    {
      question: 'Can I say "Good boy!" instead of using a clicker?',
      answer: 'You can use a verbal marker like "Yes!", but a mechanical clicker has three scientific advantages: it has pinpoint microsecond timing, sounds identical every single time, and lacks emotional tone like human impatience.'
    },
    {
      question: 'What should I do if my dog is frightened of the clicker sound?',
      answer: 'Muffle the clicker by keeping it inside your pocket, wrapping a piece of tape over the metal tongue, or using a soft ballpoint pen click until the dog forms a happy food association.'
    }
  ],
  'basic-commands': [
    {
      question: 'What is the most critical life-saving command every dog should master?',
      answer: 'The Emergency Recall ("Come!"). A 100% reliable recall protects dogs from traffic, rattlesnakes, aggressive off-leash dogs, and getting lost. Always reward recalls with an extraordinary jackpot reward.'
    },
    {
      question: 'Why does my dog obey commands in the living room but ignore them at the park?',
      answer: 'Dogs are context-specific learners. A dog who knows "Sit" in a quiet kitchen has not generalized the skill to a park with running squirrels. You must systematically proof behaviors in gradually more distracting environments.'
    }
  ],
  'socialization': [
    {
      question: 'Does socialization mean letting my puppy play with every dog we meet?',
      answer: 'No! That is a common mistake that creates hyper-reactive, frustrated dogs who drag their owners toward every canine. The true goal of socialization is NEUTRALITY—teaching the dog to remain relaxed and attentive to you in the presence of distractions.'
    },
    {
      question: 'When does the critical puppy socialization window close?',
      answer: 'Ethological science shows the primary neurodevelopmental window closes around 14 to 16 weeks of age. Novel positive exposures during this early timeframe leave a permanent imprint on adult emotional resilience.'
    }
  ],
  'leash-training': [
    {
      question: 'Should I use a retractable (flexi) leash for loose-leash training?',
      answer: 'No. Retractable leashes teach dogs that constant forward pulling is rewarded with more line. They also pose severe burn injuries, snap hazards, and give handlers zero tactile control near traffic.'
    },
    {
      question: 'What is a "Sniffari" and why is it beneficial?',
      answer: 'A Sniffari is a decompression walk on a 10-15 foot long lead where the dog leads the way at their own pace and explores scent trails freely. Sniffing stimulates the olfactory bulb and lowers canine cortisol significantly.'
    }
  ]
};

// 5. Q&A for Body Language Signals (/s/*)
export const signalQnA: Record<string, QnAItem[]> = {
  'happy-relaxed': [
    {
      question: 'How do you distinguish a truly relaxed dog from a shut-down, depressed dog?',
      answer: 'A relaxed dog has soft, fluid body movement, gentle rhythmic breathing, loose facial muscles, and soft blinking eyes. A shut-down (learned helplessness) dog is rigid, motionless, avoids eye contact, and displays tight closed lips with shallow breathing.'
    }
  ],
  'playful': [
    {
      question: 'Why do dogs sneeze during intense rough-and-tumble play?',
      answer: 'Play-sneezing is a deliberate communication signal! Dogs let out a sharp staccato sneeze during wrestling or chasing to reassure their partner: "I am playing rough, but this is 100% play, not real fighting."'
    }
  ],
  'anxious': [
    {
      question: 'What should I do when my dog displays subtle anxiety cues like lip-licking?',
      answer: 'Notice what stimulus changed in the environment. Calmly increase distance between your dog and that stimulus, avoid crowding or cornering the dog, and give them time to decompress without forcing physical contact.'
    }
  ],
  'fearful': [
    {
      question: 'Why do some fearful dogs snap or bite when someone tries to pet them gently?',
      answer: 'When a frightened dog feels trapped (such as on a short leash or in a corner), their evolutionary "flight" option is blocked. Their remaining defense mechanism is "fight" to force the scary person to back away.'
    }
  ],
  'stressed': [
    {
      question: 'What is the "wet-dog shake-off" when the dog is completely dry?',
      answer: 'The dry shake-off is an autonomic reset switch. Dogs vigorously shake from head to tail immediately after a stressful event (like greeting a tense dog or veterinary exam) to release muscular tension and reset adrenaline.'
    }
  ],
  'excited': [
    {
      question: 'Can a dog be too excited to learn during training?',
      answer: 'Yes! High arousal impairs the prefrontal cortex in dogs just as in humans. If your dog is trembling, vocalizing frantically, and unable to focus, lower the arousal first with a scattering of kibble on the grass.'
    }
  ],
  'aggressive': [
    {
      question: 'Why should you never punish a dog for growling?',
      answer: 'A growl is a dog’s smoke alarm. If you punish the growl, the dog learns that warning humans is dangerous—so next time, they stay silent and bite without warning. Always thank the dog for communicating and remove the trigger.'
    }
  ]
};

// 6. Q&A for Dog Breeds (/dog/*)
export const breedQnA: Record<string, QnAItem[]> = {
  'labrador-retriever': [
    {
      question: 'Why do Labradors seem perpetually hungry and food-obsessed?',
      answer: 'Genetic research at the University of Cambridge discovered that roughly 25% of Labradors carry a mutation in the POMC gene, which disables the brain’s neural satiety switch, making them feel genuinely hungry around the clock.'
    },
    {
      question: 'How do you prevent a Labrador from chewing everything in sight?',
      answer: 'Channel their natural retrieving drive! Provide a rotation of durable rubber toys, teach a formal "Hold and Bring" game, and ensure daily scent exercise to fulfill working instinct.'
    }
  ],
  'golden-retriever': [
    {
      question: 'What is "soft mouth" in Golden Retrievers?',
      answer: 'Golden Retrievers were selectively bred to retrieve delicate waterfowl without puncturing skin. With gentle reinforcement, Goldens can carry raw eggs in their mouth without cracking the shell.'
    },
    {
      question: 'Do Golden Retrievers make good guard dogs?',
      answer: 'Generally no. Goldens are renowned for their indiscriminate friendliness and low territorial drive; they are far more likely to greet an intruder with a wagging tail and a plush toy than defend a doorway.'
    }
  ],
  'german-shepherd': [
    {
      question: 'Why do German Shepherds tend to be vocal alert barkers?',
      answer: 'GSDs possess intense pastoral and territorial guard drives. Without structured mental jobs and firm socialization, their vigilance can develop into perimeter hyper-alertness and reactivity.'
    },
    {
      question: 'How much daily mental exercise does a German Shepherd require?',
      answer: 'A GSD requires at least 60 to 90 minutes of structured daily activity, with a heavy emphasis on cognitive problem-solving: nosework, obedience routines, and agility rather than mindless running.'
    }
  ],
  'beagle': [
    {
      question: 'Can you ever train a Beagle to walk reliably off-leash in open areas?',
      answer: 'It is extremely difficult. Beagles have over 220 million olfactory receptors; once a scent trail catches their nose, the auditory brain pathways literally shut down. Safe long-lines and enclosed parks are recommended.'
    },
    {
      question: 'What causes the distinctive Beagle "baying" sound?',
      answer: 'The bay is an acoustic hound bark designed to carry across miles of dense forest to notify human huntsmen where game has been treed or tracked.'
    }
  ],
  'poodle': [
    {
      question: 'Are Poodles really among the smartest dog breeds?',
      answer: 'Yes, Poodles rank alongside Border Collies in cognitive problem-solving. They learn new commands in fewer than 5 repetitions and anticipate handler routines with uncanny speed.'
    },
    {
      question: 'What happens if a Poodle is under-stimulated?',
      answer: 'Bored Poodles turn their intelligence toward mischief: unlocking doors, opening cabinets, unzipping backpacks, and organizing their own entertainment.'
    }
  ],
  'border-collie': [
    {
      question: 'What is the "Border Collie Stare" (the Eye)?',
      answer: 'The Eye is a predatory motor pattern retained through selective breeding. The dog fixes a hypnotic, unblinking glare on livestock to intimidate and control flock movement without biting.'
    },
    {
      question: 'Can a Border Collie live happily in a city apartment?',
      answer: 'Yes, but ONLY if the owner provides hours of rigorous cognitive work: agility, trick training, disc sports, and scent trials. Physical running alone will only build an athletic dog who still feels mentally frustrated.'
    }
  ],
  'dachshund': [
    {
      question: 'Why are Dachshunds notoriously stubborn to house-train?',
      answer: 'Earthdog breeds possess strong independent minds and an intense dislike of wet, cold grass. Using covered outdoor potty areas and high-value liver treats accelerates bathroom training.'
    },
    {
      question: 'How do you protect a Dachshund’s fragile back from IVDD?',
      answer: 'Intervertebral Disc Disease (IVDD) affects roughly 1 in 4 Dachshunds. Prevent spinal strain by using furniture ramps, avoiding high couch jumps, using a harness instead of a collar, and keeping body weight trim.'
    }
  ],
  'french-bulldog': [
    {
      question: 'Why do French Bulldogs make unique vocal sounds and grumbles?',
      answer: 'Frenchies are known for comical "talking" yawns and snorts, caused by a shortened brachycephalic airway paired with their affectionate, communicative social nature.'
    },
    {
      question: 'What precautions must French Bulldog owners take in warm weather?',
      answer: 'Their shortened nasal passages prevent effective panting and cooling. French Bulldogs are prone to rapid heatstroke; exercise should be restricted during hot hours, and indoor AC must be available.'
    }
  ]
};

// 7. Q&A for Age Stages (/age/*)
export const ageStageQnA: Record<string, QnAItem[]> = {
  'puppy': [
    {
      question: 'How much sleep do puppies really need every day?',
      answer: 'Young puppies need 18 to 20 hours of sleep per 24-hour cycle! An overtired puppy cannot self-regulate and becomes hyperactive, biting ankles, throwing tantrums, and ignoring cues. Enforce quiet crate naps every 1-2 hours.'
    },
    {
      question: 'How do I teach a puppy gentle "bite inhibition"?',
      answer: 'When puppy teeth touch human skin too hard, freeze completely, let out a calm high-pitched "Ouch!", and pause play for 10 seconds. When play resumes, offer a soft toy. This mimics how littermates teach jaw control.'
    }
  ],
  'adolescent': [
    {
      question: 'Why did my previously obedient adolescent dog suddenly start ignoring commands?',
      answer: 'During canine adolescence (6 to 18 months), massive brain reorganization and testosterone/estrogen surges occur. The prefrontal cortex undergoes synaptic pruning, creating temporary memory deficits and impulse control challenges. Stay patient, lower criteria, and reinforce generously.'
    },
    {
      question: 'What are adolescent "secondary fear periods"?',
      answer: 'Between 6 and 14 months, dogs experience brief 1 to 3-week phases where familiar objects (like a fire hydrant or coat rack) suddenly appear terrifying. Never force the dog forward; allow them to investigate at their own pace with treats.'
    }
  ],
  'adult': [
    {
      question: 'Is it normal for adult dogs to stop enjoying hectic dog parks?',
      answer: 'Yes! While puppies are "dog-social" (loving every dog), most adult dogs naturally transition to "dog-tolerant" or "dog-selective." Mature canines prefer quiet strolls with familiar canine friends over chaotic free-for-alls.'
    },
    {
      question: 'How do I keep an adult dog mentally sharp and engaged?',
      answer: 'Introduce canine sports like scentwork, teach 1 new complex trick each month, rotate puzzle feeders, and replace boring sidewalk walks with exploratory "Sniffaris" in new natural parks.'
    }
  ],
  'senior': [
    {
      question: 'How can I tell if my senior dog’s behavioral change is pain or cognitive decline?',
      answer: 'Sudden grumpiness, hesitation to climb stairs, reluctance to sit, or accidents near doors are almost always physical arthritis pain rather than bad attitude. Schedule a veterinary pain assessment; modern joint therapies work wonders.'
    },
    {
      question: 'What is Canine Cognitive Dysfunction (CCD) and how is it managed?',
      answer: 'CCD is canine Alzheimer’s, marked by the DISHA acronym: Disorientation, altered Interactions, Sleep-wake cycle changes, House soiling, and Activity changes. Antioxidant diets, SAMe supplements, and gentle routines help manage symptoms.'
    }
  ]
};

// 8. Expanded Home Page Q&A List with Categorization
export interface HomeQnAItem extends QnAItem {
  category: 'all' | 'barking' | 'body-language' | 'training' | 'health-ethology';
  categoryLabel: string;
}

export const homePageQnAList: HomeQnAItem[] = [
  {
    category: 'body-language',
    categoryLabel: 'Body Language & Bonding',
    question: 'Why does my dog follow me everywhere, even into the bathroom?',
    answer: 'Dogs are cooperative social animals by evolution. Following you ("velcro dog" behavior) indicates healthy attachment, security seeking, and curiosity about your routines. As long as they do not panic when left alone, it is an affectionate expression of trust and pack bonding.'
  },
  {
    category: 'training',
    categoryLabel: 'Training Science',
    question: 'Is dominance and the "Alpha Wolf" theory valid for training modern dogs?',
    answer: 'No. Modern veterinary ethology and animal behavior science have thoroughly debunked the alpha dominance model. The original 1940s study was conducted on unrelated wolves held in forced artificial captivity. In natural wild packs, wolf families operate cooperatively: parents guide offspring through guidance and teaching, never violent dominance.'
  },
  {
    category: 'body-language',
    categoryLabel: 'Body Language & Bonding',
    question: 'Why does my dog lean their full body weight against my legs?',
    answer: 'Body leaning is an affectionate tactile behavior. Similar to a canine hug, leaning against trusted humans provides deep sensory comfort, expresses closeness, and triggers oxytocin (the bonding hormone) release in both dog and owner.'
  },
  {
    category: 'health-ethology',
    categoryLabel: 'Canine Ethology',
    question: 'How do I know if two dogs are playing safely or actually fighting?',
    answer: 'Healthy dog play features reciprocal role reversal (taking turns chasing and lying down), self-handicapping (larger dogs playing gently), bouncy curved body posture, play bows, and natural pauses. Real fights feature rigid stillness, sustained locked bites, and tense unblinking eyes.'
  },
  {
    category: 'health-ethology',
    categoryLabel: 'Canine Ethology',
    question: 'Why does my dog get the "zoomies" late in the evening or after a bath?',
    answer: 'Zoomies (scientifically called Frenetic Random Activity Periods or FRAPs) are natural physiological bursts of energy release. They commonly occur after periods of physical restraint (like a bath or groom), when the evening temperature cools, or when discharging built-up adrenaline.'
  },
  {
    category: 'barking',
    categoryLabel: 'Barking & Communication',
    question: 'Why does my dog bark incessantly whenever the doorbell rings?',
    answer: 'The doorbell is an acoustic trigger signaling an intrusion into the dog’s core safety territory. Because the visitor or delivery driver walks away shortly after, the dog believes their barking successfully defended the home. Counter-conditioning with a "Go to Mat" protocol rewires this response.'
  },
  {
    category: 'barking',
    categoryLabel: 'Barking & Communication',
    question: 'Does a wagging tail always mean a dog is happy and safe to approach?',
    answer: 'No! A wagging tail only signals emotional arousal and intent to engage. A high, stiff, rapidly vibrating wag accompanied by a still body and direct stare is a serious defensive warning. Always assess the whole dog: eyes, ears, mouth, and muscle tension.'
  },
  {
    category: 'training',
    categoryLabel: 'Training Science',
    question: 'Why is positive reinforcement more effective than punitive correction collars?',
    answer: 'Positive reinforcement creates clear understanding and voluntary cooperation without side effects. Aversive tools (shock or prong collars) rely on fear and pain, which suppress outward symptoms while dramatically increasing underlying cortisol, often triggering dangerous redirect bites.'
  },
  {
    category: 'body-language',
    categoryLabel: 'Body Language & Bonding',
    question: 'What does it mean when a dog yawns or licks their lips when not eating?',
    answer: 'Out-of-context yawning and lip-licking are classic "calming signals" (appeasement gestures). Canines use them to communicate mild stress or politely ask an approaching human or dog to give them space and lower physical pressure.'
  },
  {
    category: 'training',
    categoryLabel: 'Training Science',
    question: 'How do I stop my puppy from nipping and biting hands during playtime?',
    answer: 'Puppies explore the world through their mouths. When teeth contact skin, freeze into a statue, emit a calm "Ouch!", and withdraw attention for 10 seconds. Then immediately redirect their teeth onto an appropriate chew toy or frozen KONG.'
  },
  {
    category: 'health-ethology',
    categoryLabel: 'Canine Ethology',
    question: 'When should I consult a certified professional veterinary behaviourist?',
    answer: 'Seek a board-certified veterinary behaviourist (DACVB) or certified clinical animal behaviourist if your dog displays sudden unprovoked aggression, severe panic during thunderstorms or fireworks, intense resource guarding that escalates to biting, self-mutilation, or sudden dramatic personality shifts.'
  },
  {
    category: 'barking',
    categoryLabel: 'Barking & Communication',
    question: 'Why does my dog bark at other dogs on leash, but plays fine off-leash at daycare?',
    answer: 'This is classic "barrier frustration" or leash reactivity. When restrained by a 6-foot tether, a dog cannot execute their natural curved greeting ritual or choose flight if feeling unsure. The restriction creates adrenaline spikes that explode outward as lunging and barking.'
  }
];

// Helper to look up Q&As for any article type and ID
export function getQnAForArticle(category: 'guide' | 'behaviour' | 'problem' | 'training' | 'signal' | 'breed' | 'age', id: string): QnAItem[] {
  switch (category) {
    case 'guide':
      return guideArticleQnA[id] || guideArticleQnA['why-bark-at-strangers'] || [];
    case 'behaviour':
      return behaviourQnA[id] || [
        {
          question: `Why does my dog display this specific behaviour?`,
          answer: `This behaviour is an evolved canine instinct rooted in natural communication, sensory exploration, or emotional regulation. Providing healthy outlets and clear positive redirection resolves unwanted expressions.`
        },
        {
          question: `When should an owner be concerned about this behaviour?`,
          answer: `If the behaviour becomes compulsive, interferes with daily sleep and eating, or escalates into distress, consultation with a certified force-free trainer or veterinary behaviourist is recommended.`
        }
      ];
    case 'problem':
      return problemQnA[id] || [
        {
          question: `What is the most common mistake owners make with this issue?`,
          answer: `Punishing the dog after the fact or shouting. Dogs cannot connect retrospective human frustration to past actions; environmental management and positive reinforcement of alternative behaviours are required.`
        },
        {
          question: `How long does it take to see positive changes?`,
          answer: `Consistent daily management and counter-conditioning typically show noticeable progress within 2 to 4 weeks.`
        }
      ];
    case 'training':
      return trainingQnA[id] || [
        {
          question: `Why is this training technique scientifically recommended?`,
          answer: `It builds voluntary cooperation through positive reinforcement without fear or physical intimidation, preserving the dog's trust and eagerness to learn.`
        },
        {
          question: `How often should I practice this method?`,
          answer: `Short, upbeat 3 to 5-minute sessions conducted 2-3 times daily are far more effective than long, exhausting sessions.`
        }
      ];
    case 'signal':
      return signalQnA[id] || [
        {
          question: `What should an owner do when observing this body signal?`,
          answer: `Acknowledge the emotional state, respect the dog's boundaries, avoid crowding, and reward calm, de-escalating choices.`
        }
      ];
    case 'breed':
      return breedQnA[id] || [
        {
          question: `What is the primary natural drive for this breed?`,
          answer: `This breed was selectively shaped over centuries with distinct predatory or working instincts. Fulfilling these drives with dedicated enrichment prevents destructive household habits.`
        }
      ];
    case 'age':
      return ageStageQnA[id] || [
        {
          question: `What is the most important developmental priority for this stage?`,
          answer: `Balancing physical comfort with age-appropriate mental enrichment, consistent life skills, and compassionate support as their brain and body mature.`
        }
      ];
    default:
      return [];
  }
}
