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

(function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) return;
  document.querySelectorAll('a[href*="open.spotify.com"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var webUrl = link.href;
      var m = webUrl.match(/open\.spotify\.com\/(artist|album|track|playlist)\/([A-Za-z0-9]+)/);
      if (!m) return;                 // unrecognised link: behave normally
      e.preventDefault();
      var appUrl = 'spotify:' + m[1] + ':' + m[2];
      var didHide = false;
      function onHide() { didHide = true; }   // app opened -> cancel fallback
      document.addEventListener('visibilitychange', onHide);
      window.addEventListener('pagehide', onHide);
      window.location.href = appUrl;           // try the app
      setTimeout(function () {                  // fall back if app didn't open
        document.removeEventListener('visibilitychange', onHide);
        window.removeEventListener('pagehide', onHide);
        if (!didHide) window.location.href = webUrl;
      }, 1200);
    });
  });
})();

(function () {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (!isMobile) return;
  document.querySelectorAll('a[href*="music.apple.com"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var webUrl = link.href;
      var appUrl = webUrl.replace(/^https?:\/\//, 'music://'); // Apple Music app scheme
      e.preventDefault();
      var didHide = false;
      function onHide() { didHide = true; }        // app opened -> cancel fallback
      document.addEventListener('visibilitychange', onHide);
      window.addEventListener('pagehide', onHide);
      window.location.href = appUrl;                // try the app
      setTimeout(function () {                       // fall back if app didn't open
        document.removeEventListener('visibilitychange', onHide);
        window.removeEventListener('pagehide', onHide);
        if (!didHide) window.location.href = webUrl;
      }, 1200);
    });
  });
})();
