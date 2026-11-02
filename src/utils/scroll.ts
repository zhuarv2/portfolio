/**
 * Smoothly scrolls to a section using an ease-out curve,
 * and triggers a subtle slide animation on the target section.
 */
export function scrollToSection(targetId: string, duration = 750) {
  const element = document.getElementById(targetId);
  if (!element) return;

  const headerOffset = 72; // Height of fixed header plus breathing room
  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = element.getBoundingClientRect().top + startY - headerOffset;
  const distance = targetY - startY;

  // Don't animate if already at the target
  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  // Ease-out Quartic curve for buttery smooth deceleration
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

  // Trigger the subsection ease-out slide animation
  element.classList.remove('section-slide-animate');
  // Trigger DOM reflow to restart CSS animation reliably
  void element.offsetWidth;
  element.classList.add('section-slide-animate');

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutQuart(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Update hash in URL without jumping
      if (window.location.hash !== `#${targetId}`) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  }

  requestAnimationFrame(step);
}

