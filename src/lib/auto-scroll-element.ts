export function autoScrollElement(element: HTMLElement): void {
  let interval: NodeJS.Timeout | undefined;
  const scrollStartDelay = Math.random() * 1000;

  function stopScrolling() {
    clearInterval(interval);
  }

  setTimeout(() => {
    interval = setInterval(() => {
      if (element) {
        element.scrollLeft += 1;
      }
    }, 100)

    element.addEventListener('wheel', stopScrolling);
    element.addEventListener('touchstart', stopScrolling);
  }, scrollStartDelay);
}