const { fetch } = window;

export default async () => {
  const kitties = [];
  const { count } = await (await fetch('/kittyCount')).json();
  for (let i = 1; i <= count; i++) {
    const litterBox = document.createElement('div');
    litterBox.classList.add('litterbox');
    const kittyPic = document.createElement('img');
    kittyPic.src = `/photos/${i}.jpg`;
    kittyPic.classList.add('kitty');
    litterBox.appendChild(kittyPic);
    kitties.push(litterBox);
  }
  kitties.sort(() => 0.5 - Math.random());
  const reel = document.getElementById('kitty-reel');
  for (const kitty of kitties) reel.appendChild(kitty);
};
