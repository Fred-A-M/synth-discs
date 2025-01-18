import * as Tone from 'tone';

export function playSynthTone(frequency: number) {
  const synth = new Tone.PolySynth(Tone.Synth, {
    envelope: {
      attack: 0.01,   // Time for the note to reach full volume
      decay: 0.2,    // Time for the note to transition to sustain level
      sustain: 0.8,  // Volume level while the note is held
      release: 6,    // Time for the note to fade out after release
    },
  }).toDestination();

  // Trigger the note
  synth.triggerAttack(frequency);
  return () => {
    synth.triggerRelease(frequency) ;
  };
}