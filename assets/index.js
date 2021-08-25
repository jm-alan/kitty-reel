import addAnimations from './addAnimations.js';
import buildReel from './buildReel.js';
import makeKitties from './makeKitties.js';

document.addEventListener('DOMContentLoaded', async () => {
  buildReel();
  await makeKitties();
  addAnimations();
});
