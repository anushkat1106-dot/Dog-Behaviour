import React, { useState } from 'react';
import { Compass, HelpCircle, CheckCircle2, AlertTriangle, Sparkles, RefreshCcw } from 'lucide-react';

interface DecoderPreset {
  name: string;
  ears: string;
  tail: string;
  eyes: string;
  mouth: string;
  posture: string;
}

const presets: DecoderPreset[] = [
  {
    name: 'Play Invitation',
    ears: 'Forward Alert',
    tail: 'Broad Helicopter Wag',
    eyes: 'Soft Blinking',
    mouth: 'Loose Open Smile',
    posture: 'Play Bow'
  },
  {
    name: 'Stress at the Vet',
    ears: 'Pinned Back Flat',
    tail: 'Tucked Between Legs',
    eyes: 'Whale Eye (Whites Showing)',
    mouth: 'Rapid Panting (Curled Tongue)',
    posture: 'Cowering Flattened'
  },
  {
    name: 'Territorial Alert',
    ears: 'Forward Alert',
    tail: 'Stiff High Flagpole',
    eyes: 'Hard Direct Stare',
    mouth: 'Tight Closed Wrinkled Muzzle',
    posture: 'Stiff Frozen Forward'
  },
  {
    name: 'Peaceful Living Room',
    ears: 'Relaxed Natural',
    tail: 'Loose Gentle Sweep',
    eyes: 'Soft Blinking',
    mouth: 'Loose Open Smile',
    posture: 'Loose & Soft'
  }
];

export const DogDecoder: React.FC = () => {
  const [ears, setEars] = useState<string>('Forward Alert');
  const [tail, setTail] = useState<string>('Broad Helicopter Wag');
  const [eyes, setEyes] = useState<string>('Soft Blinking');
  const [mouth, setMouth] = useState<string>('Loose Open Smile');
  const [posture, setPosture] = useState<string>('Play Bow');

  const earOptions = ['Relaxed Natural', 'Forward Alert', 'Pinned Back Flat', 'Swiveling Restlessly'];
  const tailOptions = ['Loose Gentle Sweep', 'Broad Helicopter Wag', 'Stiff High Flagpole', 'Tucked Between Legs'];
  const eyeOptions = ['Soft Blinking', 'Whale Eye (Whites Showing)', 'Hard Direct Stare', 'Avoidant Turned Away'];
  const mouthOptions = ['Loose Open Smile', 'Tight Closed Wrinkled Muzzle', 'Rapid Panting (Curled Tongue)', 'Lip Licking / Yawning'];
  const postureOptions = ['Play Bow', 'Loose & Soft', 'Stiff Frozen Forward', 'Cowering Flattened'];

  const applyPreset = (preset: DecoderPreset) => {
    setEars(preset.ears);
    setTail(preset.tail);
    setEyes(preset.eyes);
    setMouth(preset.mouth);
    setPosture(preset.posture);
  };

  // Determine synthesis
  const getInterpretation = () => {
    // Check fear/anxiety
    if (tail === 'Tucked Between Legs' || eyes === 'Whale Eye (Whites Showing)' || posture === 'Cowering Flattened') {
      return {
        emotion: 'High Fear & Insecurity',
        badge: 'High Stress Alert',
        accentColor: '#D9534F',
        meaning: 'Your dog is overwhelmed, frightened, and feeling trapped. They are making themselves small and desperately seeking safety.',
        doThis: [
          'Create immediate distance between your dog and whatever is causing the fear.',
          'Never force eye contact, petting, or hugs right now.',
          'Speak softly in an even, calm tone and let them retreat to their crate or safe bed.'
        ],
        avoidThis: 'Never corner, grab, or scold a fearful dog—fear easily escalates into defensive biting.'
      };
    }

    // Check defensive warning
    if (eyes === 'Hard Direct Stare' || posture === 'Stiff Frozen Forward' || tail === 'Stiff High Flagpole' || mouth === 'Tight Closed Wrinkled Muzzle') {
      return {
        emotion: 'Heightened Vigilance / Defensive Freeze',
        badge: 'Caution & Space Required',
        accentColor: '#E07A5F',
        meaning: 'Your dog is emotionally aroused and actively assessing a perceived threat or guarding a resource. A still, stiff body is a critical warning.',
        doThis: [
          'Freeze yourself calmly, do not stare directly back.',
          'Turn sideways slowly to show non-threatening posture and gently back away.',
          'If guarding an item, do not snatch it—toss a high-value treat far away to trade from distance.'
        ],
        avoidThis: 'Do not scream, punish, or advance into their personal space.'
      };
    }

    // Check play
    if (posture === 'Play Bow' || tail === 'Broad Helicopter Wag') {
      return {
        emotion: 'Joyful & Playful Social Invitation',
        badge: 'Positive Connection',
        accentColor: '#234231',
        meaning: 'Your dog feels safe, enthusiastic, and is extending a clear invitation to engage in fun social play or a training game.',
        doThis: [
          'Bring out an interactive toy for a game of fetch or structured tug-of-war.',
          'Engage with cheerful verbal praise or practice fun trick shaping.',
          'Observe play pauses: good play naturally includes brief 3-second breathing breaks.'
        ],
        avoidThis: 'Avoid over-arousal where play becomes frantic without listening to basic pause cues.'
      };
    }

    // Check calming signals
    if (mouth === 'Lip Licking / Yawning' || eyes === 'Avoidant Turned Away' || ears === 'Swiveling Restlessly') {
      return {
        emotion: 'Mild Stress & Appeasement Signals',
        badge: 'De-escalation Requested',
        accentColor: '#8C5E3C',
        meaning: 'Your dog is uncomfortable with current social pressure and is politely offering "calming signals" asking for quiet space.',
        doThis: [
          'Lower the energy in the room: pause vigorous petting or asking for endless commands.',
          'Offer a relaxing lick mat or chew toy to activate parasympathetic calming.',
          'Step back a few paces to give them breathing room.'
        ],
        avoidThis: 'Do not mistake lip-licking or yawning for hunger or boredom.'
      };
    }

    // Default relaxed
    return {
      emotion: 'Content, Relaxed & Receptive',
      badge: 'Balanced & Serene',
      accentColor: '#234231',
      meaning: 'Your dog is in an optimal parasympathetic state: calm, secure, and physically comfortable in their environment.',
      doThis: [
        'Ideal time for gentle bonding strokes on the chest and shoulder (avoid patting top of head).',
        'Great state for peaceful grooming, nail inspection, or restful naps.',
        'Quietly reward calm settlement with an occasional kibble drop between their paws.'
      ],
      avoidThis: 'Avoid abruptly startling them out of a deep sleep with loud noises.'
    };
  };

  const currentResult = getInterpretation();

  return (
    <section id="decoder" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <div className="bg-[#FFFFFF] border border-[#E3DAC8] rounded-3xl p-6 sm:p-10 shadow-sm">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E3C] tracking-wide">
            <Compass className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>Interactive Canine Decoder</span>
            <span aria-hidden="true">·</span>
            <span>Real-time Ethological Translation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#234231] font-display mt-2 tracking-tight">
            "What Is My Dog Trying to Tell Me?"
          </h2>
          <p className="text-base text-[#5C4F44] mt-2 leading-relaxed">
            Dogs communicate primarily through micro-signals in their ears, eyes, tail, and body tension.
            Select what you observe on your dog to instantly decipher their emotional state and learn how to respond.
          </p>
        </div>

        {/* Quick Presets */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-[#7A6A5E] mr-1">Try common scenarios:</span>
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => applyPreset(preset)}
              className="px-3 py-1.5 text-xs font-medium bg-[#F4EFE6] hover:bg-[#EBE2D3] text-[#4E4137] rounded-lg border border-[#DDD3C0] transition-colors cursor-pointer"
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Decoder Workspace: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 pt-8 border-t border-[#E8DFC8]/70">
          
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Ears */}
            <div>
              <label className="block text-xs font-semibold text-[#6E5D53] tracking-wide mb-2">
                1. Ear Position
              </label>
              <div className="grid grid-cols-2 gap-2">
                {earOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setEars(opt)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      ears === opt
                        ? 'bg-[#234231] text-white border-[#234231] shadow-2xs'
                        : 'bg-[#FAF7F2] text-[#4E4137] border-[#E2D8C3] hover:border-[#8C5E3C]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Tail */}
            <div>
              <label className="block text-xs font-semibold text-[#6E5D53] tracking-wide mb-2">
                2. Tail Carriage & Wag Style
              </label>
              <div className="grid grid-cols-2 gap-2">
                {tailOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setTail(opt)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      tail === opt
                        ? 'bg-[#234231] text-white border-[#234231] shadow-2xs'
                        : 'bg-[#FAF7F2] text-[#4E4137] border-[#E2D8C3] hover:border-[#8C5E3C]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Eyes */}
            <div>
              <label className="block text-xs font-semibold text-[#6E5D53] tracking-wide mb-2">
                3. Eye Contact & Expression
              </label>
              <div className="grid grid-cols-2 gap-2">
                {eyeOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setEyes(opt)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      eyes === opt
                        ? 'bg-[#234231] text-white border-[#234231] shadow-2xs'
                        : 'bg-[#FAF7F2] text-[#4E4137] border-[#E2D8C3] hover:border-[#8C5E3C]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Mouth */}
            <div>
              <label className="block text-xs font-semibold text-[#6E5D53] tracking-wide mb-2">
                4. Mouth & Respiration
              </label>
              <div className="grid grid-cols-2 gap-2">
                {mouthOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setMouth(opt)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      mouth === opt
                        ? 'bg-[#234231] text-white border-[#234231] shadow-2xs'
                        : 'bg-[#FAF7F2] text-[#4E4137] border-[#E2D8C3] hover:border-[#8C5E3C]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Posture */}
            <div>
              <label className="block text-xs font-semibold text-[#6E5D53] tracking-wide mb-2">
                5. Overall Body Posture & Weight
              </label>
              <div className="grid grid-cols-2 gap-2">
                {postureOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setPosture(opt)}
                    className={`px-3 py-2 text-xs font-medium rounded-xl border text-left transition-all cursor-pointer ${
                      posture === opt
                        ? 'bg-[#234231] text-white border-[#234231] shadow-2xs'
                        : 'bg-[#FAF7F2] text-[#4E4137] border-[#E2D8C3] hover:border-[#8C5E3C]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Live Decoded Result */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="sticky top-24 bg-[#FAF7F2] border border-[#DFD4BF] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
              
              <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-4">
                <div>
                  <span className="text-xs font-semibold text-[#8C5E3C]">Ethological Diagnosis</span>
                  <h3 className="text-2xl font-bold font-display text-[#234231] mt-0.5">
                    {currentResult.emotion}
                  </h3>
                </div>
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full text-white shrink-0"
                  style={{ backgroundColor: currentResult.accentColor }}
                >
                  {currentResult.badge}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold text-[#6E5D53]">What Your Dog Is Experiencing:</h4>
                <p className="text-sm text-[#4E4137] mt-1.5 leading-relaxed">
                  {currentResult.meaning}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#E8DFC8]">
                <h4 className="text-xs font-bold text-[#234231] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#234231]" />
                  <span>Recommended Action (What to do now):</span>
                </h4>
                <ul className="space-y-1.5">
                  {currentResult.doThis.map((step, idx) => (
                    <li key={idx} className="text-xs text-[#5C4F44] flex items-start gap-2">
                      <span className="text-[#8C5E3C] font-semibold mt-0.5">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-white/80 rounded-xl border border-[#E3DAC8] flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-[#E07A5F] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-[#A84328]">What to avoid:</p>
                  <p className="text-xs text-[#6E5D53] mt-0.5 leading-relaxed">
                    {currentResult.avoidThis}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
