const intervals = {};

export default () => {
  document.querySelectorAll('.kitty').forEach(kitty => {
    kitty.addEventListener('click', () => {
      if (intervals[kitty.src]) {
        clearInterval(intervals[kitty.src]);
        delete intervals[kitty.src];
        kitty.style.border = '';
      } else {
        intervals[kitty.src] = setInterval(() => {
          const toSet = [
            () => (kitty.style.top = `${Math.random() * 200}px`),
            () => (kitty.style.top = `${-(Math.random() * 200)}px`),
            () => (kitty.style.left = `${Math.random() * 200}px`),
            () => (kitty.style.left = `${-(Math.random() * 200)}px`)
          ];
          kitty.style.border = `10px solid rgb(${Math.random * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
          const toInvoke = Math.round(Math.random() * 3);
          toSet[toInvoke]();
        }, Math.random() * 1000);
      }
    });
  });
};
