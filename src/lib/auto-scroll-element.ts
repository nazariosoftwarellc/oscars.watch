export function autoScrollElement(element: HTMLElement): void {
  let interval: NodeJS.Timeout | undefined;
  const scrollStartDelay = Math.random() * 1000;
  let scrollingRight = true;

  function stopScrolling() {
    clearInterval(interval);
  }

  setTimeout(() => {
    interval = setInterval(() => {
      if (element.scrollLeft >= element.scrollWidth - element.clientWidth) {
        scrollingRight = false;
      }
      if (element.scrollLeft <= 0) {
        scrollingRight = true;
      }
      const scrollAmount = scrollingRight ? 1 : -1;
      element.scrollLeft += scrollAmount;
    }, 100);

    element.addEventListener('wheel', stopScrolling);
    element.addEventListener('touchstart', stopScrolling);
  }, scrollStartDelay);
}
