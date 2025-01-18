export function createSynthTone(frequency: number) {
  const audioContext = new (window.AudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  // Configure oscillator
  oscillator.type = 'square'; // Change to 'square', 'sawtooth', or 'triangle' for different sounds
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);

  // Configure gain for smooth release
  gainNode.gain.setValueAtTime(0.5, audioContext.currentTime); // Volume
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1); // Fade out

  // Connect nodes and start
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1); // Play for 1 second
}