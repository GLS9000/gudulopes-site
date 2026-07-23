/* Mobile navigation toggle — no libraries, no build step.
   If JavaScript is disabled, all content is still reachable by scrolling; the
   menu simply won't open on mobile. Nothing critical depends on this script. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!links.classList.contains('open'));
  });

  // Tap a link → close
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  // Escape → close
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
