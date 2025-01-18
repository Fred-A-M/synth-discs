'use client';
import { createSynthTone } from '../../utils/audioSynth';

const tones = [
  { label: '1', frequency: 261.63 }, // C4
  { label: '2', frequency: 293.66 }, // D4
  { label: '3', frequency: 329.63 }, // E4
  { label: '4', frequency: 349.23 }, // F4
  { label: '5', frequency: 392.00 }, // G4
  { label: '6', frequency: 440.00 }, // A4
];

export default function Buttons() {
  const playTone = (frequency: number) => {
    createSynthTone(frequency);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Synth Tone Buttons</h1>
      <div className="grid grid-cols-3 gap-4">
        {tones.map((tone) => (
          <button
            key={tone.label}
            className="px-6 py-3 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 focus:outline-none"
            onMouseDown={() => playTone(tone.frequency)
            }
          >
            {tone.label}
          </button>
        ))}
      </div>
    </div>
  );
}
