# Gudu Lopes — Website Handover & Maintenance Log

_Last updated: 2026-07-23 (v3 — umbrella/wings rebuild)_

Written so anyone — a future web designer, or Gudu with no coding background —
can understand, run, deploy, and edit this site with zero prior context. To just
change text, a video, a story, or a cover image, jump to
[§10 How to edit this site yourself](#10-how-to-edit-this-site-yourself-no-coding).

---

## 1. Overview

Official website of **Gudu Lopes** — composer and producer born in Cape Verde,
raised in Antwerp, Belgium, based in Ghent. Everything on the site lives under
the single name **Gudu Lopes**; his different musical projects are presented as
"wings" of one identity:

- **The Four Doors of the Mind** — cinematic orchestral hip-hop. A four-album
  concept series: I Sleep, II Forgetting, III Madness, IV Death.
- **Boku no Sekai** — Dutch/Flemish rap (made under the alias **G-Tone /
  Anubis**, but kept under the Gudu Lopes umbrella on the site). Opened by the
  single & EP *Kompas*.

**Primary goal:** get visitors listening fast (Spotify / Apple Music / YouTube),
then route them into whichever "world" fits them.

**Tech:** fully static — HTML + one CSS file + one tiny JS file. No framework, no
build step, no server, no database. Hosted free on **GitHub Pages**, served at
the custom domain **gudulopes.com** (registrar: GoDaddy).

**The maintainer is not a developer** and edits through GitHub's web editor.
Keep every change copy-paste simple; do not introduce build tools.

---

## 2. Site structure (information architecture)

```
Home (index.html) ── hub: listen card + two "world" cards + latest video + bio
├── The Four Doors (four-doors.html) ── wing overview, links the 4 album pages
│   ├── door-of-sleep.html        (I)   — released; 6 songs
│   ├── door-of-forgetting.html   (II)  — releasing this year; 5 songs + 1 coming
│   ├── door-of-madness.html      (III) — next; 2 songs + 1 coming
│   └── door-of-death.html        (IV)  — in progress; 4 songs + 4 coming
└── Boku no Sekai (boku-no-sekai.html) ── rap wing; Kompas on Bandcamp
```

Top nav is three items: **Home · The Four Doors · Boku no Sekai**. Individual
door pages hang off the Four Doors page (with a breadcrumb + prev/next links).

Each **door page** is an album layout: cover art + tracklist at the top, then one
**video + story block per song**, in track order.

---

## 3. File & folder structure

```text
gudulopes-site/
├── index.html                # Home hub
├── four-doors.html           # Four Doors wing overview
├── door-of-sleep.html        # Album page (I)
├── door-of-forgetting.html   # Album page (II)
├── door-of-madness.html      # Album page (III)
├── door-of-death.html        # Album page (IV)
├── boku-no-sekai.html        # Rap wing (Kompas / Bandcamp)
├── 404.html                  # Branded "page not found"
├── css/style.css             # All styling; colour palette in :root at the top
├── js/script.js              # Mobile menu only (open/close, Esc to close). Site works without it.
├── assets/images/
│   ├── og-image.png          # 1200×630 social-share image (PLACEHOLDER — replace with a photo)
│   ├── favicon.png           # 512×512 tab icon + apple-touch-icon
│   ├── favicon-32.png        # 32×32 tab icon (now referenced)
│   ├── sleep-cover.jpg       # ✅ EMBEDDED — Door of Sleep cover (1000×1000, optimised)
│   ├── kompas-cover.jpg      # ✅ EMBEDDED — used as the Boku no Sekai / Kompas cover
│   ├── forgetting-cover.jpg  # ‹— still to upload; page shows a text placeholder until then
│   ├── madness-cover.jpg     # ‹— still to upload
│   └── death-cover.jpg       # ‹— still to upload
├── CNAME                     # One line: gudulopes.com
├── .nojekyll                 # Tells GitHub Pages to skip its Jekyll build
├── robots.txt                # Allows indexing; points to sitemap
├── sitemap.xml               # Lists all 7 public pages
└── HANDOFF.md                # This document
```

The nav and footer are **copied into every page** (deliberate — see §7). Editable
spots are marked with `<!-- EDIT: ... -->` comments.

---

## 4. Running it locally

Quick look: double-click `index.html`. To behave like the live site, from inside
the folder with Python installed:

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. `Ctrl + C` stops it.

---

## 5. Deploying & updating on GitHub Pages

### 5a. First-time setup (once)
1. Free account at <https://github.com>.
2. **New repository** → name it (e.g. `gudulopes-site`) → **Public** → Create.
3. **uploading an existing file** → drag in all files/folders → Commit.
4. **Settings → Pages** → Source: **Deploy from a branch** → **main** / **/(root)** → Save.
5. Live in ~1 min at `https://YOUR-USERNAME.github.io/gudulopes-site/`.

### 5b. Connecting gudulopes.com (registrar: GoDaddy)
> gudulopes.com currently points to the old smart-link/aggregator page. These
> steps repoint it to this site. Do this as part of launch.

**GitHub:** Settings → Pages → *Custom domain* → `gudulopes.com` → Save (the
`CNAME` file already matches).
**GoDaddy:** My Products → domain → **DNS** → remove old root A/forwarding
records, then add:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | YOUR-USERNAME.github.io |

DNS takes minutes–hours. Then GitHub → Settings → Pages → tick **Enforce HTTPS**.

### 5c. Everyday updates
Edit files directly on github.com (§10). Each commit republishes within ~1 min.
**Free-tier limits** (easily met — site is well under 1 MB): static files only,
~1 GB repo, 100 GB/month bandwidth. Any dynamic feature (mailing list, form,
store) must be a third-party embed.

---

## 6. Third-party services

| Service | Used for | Where it lives | Cost |
|---|---|---|---|
| **GitHub Pages** | Hosting | GitHub account → repo → Settings → Pages | Free |
| **GoDaddy** | Domain `gudulopes.com` + DNS | GoDaddy account → DNS | Renewal only |
| **Google Fonts** | Cinzel + Lato | `<link>` in each page `<head>`; no account/key | Free |
| **YouTube** | Video embeds | Public video IDs; no key | Free |
| **Bandcamp** | Kompas listen/sale link (Boku page + footer) | gudulopes.bandcamp.com | Free |

No API keys, tokens, or passwords exist in the repo. Only credentials are the
ordinary GitHub / GoDaddy logins.

---

## 7. Design decisions & rationale

- **Umbrella with wings.** One identity (Gudu Lopes); projects are wings routed
  to from the home hub. Lets the rap wing keep its own voice without diluting the
  Four Doors mood, and keeps a single name/brand.
- **Streaming card is the hero; Bandcamp is NOT in it.** The card is the fastest
  path to the flagship catalogue (Spotify/Apple/YouTube). Bandcamp serves a
  different intent (own/buy) and a different project, so it lives in the footer
  sitewide and as the primary button on the Boku page.
- **Nav trimmed to 3 top-level items.** Doors hang off the Four Doors page, so
  mobile nav stays short (earlier build had all four doors in the nav).
- **Door pages are album pages.** Cover + tracklist, then video+story per song.
  Story blocks are empty by default so nothing unfinished ever ships as visible
  text (this was a real earlier bug — see §9).
- **Colours defined once** in `:root` at the top of `css/style.css`.
- **No framework / no build step** — the files on GitHub *are* the site. Most
  important constraint; don't add bundlers/generators.
- **Nav/footer duplicated across pages (trade-off).** Keeps GitHub-editor editing
  possible; cost is repeating a nav change in every file.
- **Accessibility built in:** skip link, `<main>`, `:focus-visible`, `aria-current`,
  `aria-expanded` + Escape-to-close menu, labelled icon links, iframe titles,
  reduced-motion. Measured contrast passes WCAG AA (worst pair 5.37:1).
- **Cover art degrades gracefully:** if a `*-cover.jpg` isn't uploaded yet, the
  page shows a styled text placeholder instead of a broken image.

---

## 8. What still needs YOUR content (do before launch)

These are intentional placeholders waiting on the artist:

- [ ] **Video IDs.** Every video embed uses `VIDEO_ID` as a placeholder and will
  show "Video unavailable" until filled. Replace with real YouTube IDs (§10C).
- [ ] **Song stories.** Each song's `track-story` is empty; write them (§10D).
- [x] **Cover art — Sleep & Kompas/Boku done** (embedded, optimised to 1000×1000).
  Still to upload: `forgetting-cover.jpg`, `madness-cover.jpg`, `death-cover.jpg`
  (square images; §10E). The Boku page uses `kompas-cover.jpg`.
- [x] **Door of Sleep release line = "Album"** (decided). Other doors' release
  lines still editable; add years whenever you like.
- [ ] **Homepage latest video + caption**, and the **social-share image**
  (`og-image.png` is a text placeholder — swap in a real photo, 1200×630).
- [ ] **Song titles** — headings currently use working titles from the project
  sheet; confirm/adjust the exact wording you want shown.
- [ ] **Boku no Sekai** — add the Bandcamp embed and/or more tracks as released.

---

## 9. QA / UX findings — status

From the pre-launch QA and UX/UI reviews (2026-07-23):

**Resolved in this build:** visible placeholder text removed (now empty story
slots); door pages given full footer with socials (no longer dead ends);
per-song video slots so each embed is unique and titled; nav overflow risk
(breakpoint raised to 940px); orphan `favicon-32.png` now referenced;
`apple-touch-icon`, `theme-color`, `og:image` dimensions/alt, `og:site_name`,
JSON-LD `MusicGroup`, `.nojekyll`, custom `404.html`, Escape-to-close menu.

**Deferred / needs artist input:** exact video IDs & stories (§8), cover art
(§8), EP-vs-album wording, bio detail confirmed as "Antwerp, Belgium",
Forgetting/Sleep copy wording. Homepage Spotify inline embed was considered and
**declined** (keeps the page fast; links do the job). Booking email / mailing
list intentionally not built (stage 2).

---

## 10. How to edit this site yourself (no coding)

All in the browser on **github.com**. Open a file → click the **pencil ✏️** →
edit → green **Commit changes**. Live in ~1 min. Only change the words / links /
IDs; leave the `< >` tags alone. Editable spots are marked `<!-- EDIT: ... -->`.

### A) Change text (tagline, bio, intros)
Find the `<!-- EDIT: ... -->` marker and change the words between `>` and `</...>`.

### B) Change a streaming or social link
`index.html` → under `<!-- EDIT: STREAMING LINKS -->` (or footer socials) →
change the address inside `href="..."`.

### C) Add / change a song's video
YouTube URL `https://www.youtube.com/watch?v=aUew0fVNL-Y` → ID is `aUew0fVNL-Y`.
On the door page, find the song and its:
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Sleep Tight" ...></iframe>
```
Replace `VIDEO_ID` with the real ID:
```html
<iframe src="https://www.youtube.com/embed/aUew0fVNL-Y" title="Sleep Tight" ...></iframe>
```
If a song has no video, delete the whole `<div class="video-container">…</div>`.

### D) Write a song's story
Find that song's empty story block:
```html
<div class="track-story"></div>
```
Type the story inside, wrapped in `<p>` tags:
```html
<div class="track-story"><p>This track began as a lullaby I hummed…</p></div>
```

### E) Add or replace cover art
Open `assets/images` → **Add file → Upload files** → upload a **square** image
named exactly (per door): `sleep-cover.jpg`, `forgetting-cover.jpg`,
`madness-cover.jpg`, `death-cover.jpg` (the Boku page uses `kompas-cover.jpg`). Commit — the cover
replaces the placeholder automatically. (For the social-share image, name it
`og-image.png`, ideally 1200×630.)

### F) Add a whole new song block to a door
Copy one existing `<article class="track">…</article>` block, paste it where you
want it, then change the number, the `<h2>` title, the `VIDEO_ID`, and the story.
Also add the song to the `<ol class="tracklist">` at the top of the page.

### G) Change the site colours
`css/style.css` → the `:root` block at the very top holds six colour values with
comments. Change a value, commit, whole site updates.

---

## 11. Changelog

**2026-10-22 — v3.6: streaming card de-duplicated, Bandcamp added**
- The "or streaming my music on" row no longer repeats Spotify and YouTube
  (they are already the two Follow / Subscribe buttons above it). Row is now
  Apple Music · YouTube Music · SoundCloud · **Bandcamp**.
- This replaces the earlier rule "Bandcamp in the footer only, not in the
  card" (owner's decision, 2026-10-22). Bandcamp stays in the footer too.
- Phones (<480px): the four icons sit in a 2 × 2 grid instead of 3 + 1.
- Stylesheet cache version bumped to `v=16` on all pages.

**2026-10-22 — v3.5: v3.4 merged onto the live repo + catalogue fixes**
- The v3.3/v3.4 work below was prepared on an older copy of the site and
  never pushed. Merged by hand onto the live repo, keeping everything added
  since (banners, Idalina page, Sleep stories, real `og-image.png`, new footer).
  The older copy's placeholder `og-image.png`, old footer and old bio were
  **not** brought over.
- **Conductor gap closed** (the v3.4 fix, now actually live): `.hero-figure`
  hides at 1100px, matching `.stream-figure`.
- **Premiere bar:** CSS added. The `<aside>` in `index.html` is shipped
  **commented out** (not live with placeholder text as v3.3 described), so
  nothing shows until you switch it on. Instructions are in the comment.
- Premiere tip and "also add it to the door page" reminder added to the
  homepage Watch comment.
- **"EMR" → "Eyes Moving Rapidly (EMR)"** on Door of Sleep, matching the
  official title.
- **Door of Forgetting in release order:** Mist, No Escape, Descent into the
  Abyss, Tau, Contemplation. "Train Leaving" added as in progress, before the
  finale "Will You Let Me Go".
- Added `REVIEW-2026-10-22.md` (the v3.3 audit, archival). Note: it points to
  `START-HERE_context.md`, which has since been removed, and its open items
  4.1 (og-image) and 4.5 (Watch caption) are now resolved.
- Stylesheet cache version bumped to `v=15` on all pages.

**2026-10-22 — housekeeping (owner)**
- Bio: "Cape Verde" → "Cabo Verde". `START-HERE_context.md` removed from the
  public repo.

**2026-07-28/30 — banners, stories, Idalina Lopes page (owner)**
- Hero banners for Door of Sleep, Door of Forgetting and Boku no Sekai.
- Door of Sleep song stories and streaming buttons filled in.
- Real `og-image.png` (portrait + title card) and homepage Watch caption.
- New page `idalina-lopes.html` (in sitemap, nav and footers).
- Footer redesigned as a grid with the two logos flanking the socials.

_The two entries below were written on the older working copy; their fixes
reached the live site through the 07-30 commits and v3.5 above._

**2026-10-22 — v3.4: conductor breakpoint gap closed**
- **Fixed a 240px window where the conductor figure disappeared.**
  `.hero-figure` hid from `min-width: 860px` while `.stream-figure` only appeared
  from `min-width: 1100px`, so between 860px and 1099px — small laptops, tablets
  in landscape — neither was visible and the hero lost its signature element.
  The hero figure now hides at `1100px`, matching the stream figure, so the two
  hand over at the same point and the conductor is always on screen. **If either
  breakpoint is ever changed, change both.**
  (Moving `.stream-figure` down to 860px instead would have made the
  absolutely-positioned figure overlap the support card at those widths — which
  is presumably why 1100px was chosen for it originally.)
- Documented the recurring release workflow in `REVIEW-2026-10-22.md` §3.4: the
  homepage "Watch" slot is a rotating window holding one video, so each video
  must also be added to its door page or it vanishes from the site when the next
  release displaces it.
- Bumped the stylesheet cache-buster to `style.css?v=14` on all pages.

**2026-10-22 — v3.3: audit fixes + premiere bar**
- **Removed six broken video embeds.** `door-of-madness.html` (2) and
  `door-of-death.html` (4) still contained `embed/VIDEO_ID`, which renders live
  as a black "Video unavailable" box. Each was replaced by a commented-out
  one-line template, so the markup to paste back is still right there when a
  video exists. Tracklists and the "Still to come" blocks already carry the
  status, so nothing was lost visually.
- **Removed four dead `@font-face` rules.** `css/style.css` declared
  `cinzel-700`, `lato-300`, `lato-400italic` and `lato-700italic`, but those
  `.woff2` files were never in `assets/fonts/` — so every page fired four 404s
  and italics fell back to a non-matching system font. Only the three faces that
  exist (`cinzel-400`, `lato-400`, `lato-700`) are now declared; the browser
  synthesises bold display text and italics from them. If true italic/bold-display
  cuts are wanted later, add the `.woff2` files and restore the rules.
- **Deleted two unreferenced images:** `gudu-portrait.png` (706 KB) and
  `gudu-portrait.jpg` (148 KB). Only `gudu-portrait.webp` is used. Image folder
  went from ~1.7 MB to ~848 KB.
- **Added a premiere/announcement bar** (`.premiere-bar` in the CSS, one
  `<aside>` at the top of `index.html`, above the nav). Uses the existing colour
  tokens. The `<aside>` is meant to be deleted after the event; the CSS can stay
  for the next one. **It ships with placeholder date text and `PREMIERE_ID` —
  fill both in or delete the block before pushing.**
- Noted on the homepage "Watch" section that a premiere's video ID can go
  straight into the embed: it shows YouTube's countdown beforehand and becomes
  the finished video afterwards, with nothing to change back.
- Bumped the stylesheet cache-buster to `style.css?v=13` on all pages.

- Corrected the Door of Sleep tracklist in `START-HERE_context.md`: track 6 is
  **In Loving Arms** (confirmed by the owner), not "Lullaby". The site was
  already correct; only the notes were stale.
- Added `REVIEW-2026-10-22.md` — the full audit: every finding, its severity,
  what was fixed here, what is still open, and the premiere-link guidance.

_Still open (needs owner input, deliberately not touched):_ `og-image.png` is
still the text-only placeholder; no Door page has streaming buttons (the Boku
page's `listen-actions` block is the pattern to copy). See
`REVIEW-2026-10-22.md` §4 for the full open list.

**2026-07-23 — v3.2: Sleep labelled "Album"**
- Set Door of Sleep release line to "Album" per artist decision.

**2026-07-23 — v3.1: real covers embedded**
- Added and web-optimised two finished covers: `sleep-cover.jpg` (Door of Sleep)
  and `kompas-cover.jpg` (used for the Boku no Sekai / Kompas page). Resized
  3780×3780 → 1000×1000 (2.9 MB → 224 KB; 1.1 MB → 62 KB).
- Set per-page social-share images: Sleep shares its cover, Boku shares the
  Kompas cover (square 1000×1000 OG dimensions).

**2026-07-23 — v3: umbrella/wings rebuild**
- Restructured to a hub + two wings (Four Doors, Boku no Sekai); all under the
  single "Gudu Lopes" identity.
- New pages: `four-doors.html` (wing overview), `boku-no-sekai.html` (rap wing,
  Kompas/Bandcamp), `404.html`.
- Rebuilt all four door pages as album layouts: cover + tracklist + per-song
  video/story blocks, populated with the real tracklists (Sleep 6; Forgetting 5
  + 1 coming; Madness 2 + 1 coming; Death 4 + 4 coming). Added breadcrumb and
  prev/next links.
- Nav trimmed from 6 items to 3 (Home · The Four Doors · Boku no Sekai).
- Bandcamp added to the sitewide footer.
- Bio set to "Antwerp, Belgium"; bio now mentions the G-Tone/Anubis rap work.
- Applied QA/UX fixes (see §9): empty story slots (no shipped placeholders),
  door-page footers, breakpoint 760→940, favicon-32 referenced,
  apple-touch-icon, theme-color, og:image dims/alt, og:site_name, JSON-LD,
  .nojekyll, 404 page, Escape-to-close menu.
- Cover-art slots with graceful fallback; sitemap updated to 7 pages.

**2026-07-23 — v2: pre-launch QA & UX review (no file changes)**
- External reviews produced a findings list; folded into §8/§9 above.

**2026-07-23 — v1: rebuild from first draft**
- Fixed CSS path; created missing door pages; real streaming links; accent
  lightened to #7d8b97 for WCAG AA. Added bio, Four Doors grid, homepage video,
  footer socials, meta/OG, favicon, CNAME, robots, sitemap, accessible mobile
  menu, EDIT markers. Removed Amazon/Bandcamp/YouTube-Music/"other" buttons.
