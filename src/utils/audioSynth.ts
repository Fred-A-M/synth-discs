import * as Tone from 'tone';

export function playSynthTone(frequency: number, a: number, d: number, s: number, r: number) {
  const synth = new Tone.PolySynth(Tone.Synth, {
    envelope: {
      attack: a,   // Time for the note to reach full volume
      decay: d,    // Time for the note to transition to sustain level
      sustain: s,  // Volume level while the note is held
      release: r,    // Time for the note to fade out after release
    },
  }).toDestination();

  // Trigger the note
  synth.triggerAttack(frequency);
  return () => {
    synth.triggerRelease(frequency) ;
  };
}