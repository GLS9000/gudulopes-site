# START HERE — Gudu Lopes site: context for a new Claude session

_Written 2026-07-24, at the end of the build+launch conversation, to bring a
fresh Claude (e.g. in Claude Cowork / a personal-account Project) fully up to
speed. Read this together with **HANDOFF.md** (in the site folder), which covers
the site's structure, editing, and deploy steps in detail. This file adds the
things that only exist in the build conversation: the live deployment reality,
the working setup, the mistakes we hit, the artist's real data, and the
decisions already locked in._

---

## 0. TL;DR for the new session

- The site is **already built and LIVE** at **https://gudulopes.com** (secure).
- Source of truth is the **GitHub repo `GLS9000/gudulopes-site`**, NOT any zip.
- It's a **static site: plain HTML + one CSS file + one small JS file. No build
  step, no framework.** Keep it that way — it must stay editable from GitHub's
  web editor and GitHub Desktop.
- The owner is **not a developer** (comfortable copy-pasting; ex-WordPress).
  Keep everything simple and explain GitHub/DNS mechanics plainly.
- Most remaining work is **the owner adding content themselves** (video links,
  song stories, cover images) via clearly-marked `<!-- EDIT: -->` spots.

---

## 1. How the owner now works (important — avoid "two sources of truth")

The live site lives in GitHub. The recommended setup going forward:

1. **GitHub Desktop** has the repo cloned to a local folder = the single synced
   copy. (Repo: `GLS9000/gudulopes-site`, branch `main`.)
2. **Claude Cowork is pointed at that same local folder** to read/edit files.
3. Loop each session: **Pull** (get latest) → edit → check the **Changes** list
   → **Commit to main** → **Push**. Site updates in ~1 minute.

Golden rules to state/enforce:
- **Pull before editing** (the owner sometimes also edits on github.com).
- **Edit in ONE place** going forward (the synced folder) to avoid conflicts.
- **Editing files alone does nothing to the live site until Push.**
- Claude cannot see the folder/Cowork/Desktop unless the files are actually in
  its workspace — confirm files are present before assuming.

---

## 2. Live deployment reality (as-built)

- **Repo:** `GLS9000/gudulopes-site` (public). Username: **GLS9000**.
- **Live URLs:** https://gudulopes.com and https://www.gudulopes.com (redirects),
  plus the origin https://gls9000.github.io/gudulopes-site/.
- **Custom domain** set in repo Settings → Pages. A **`CNAME`** file in the repo
  contains `gudulopes.com`. **Do not delete it** (deleting breaks the domain).
- **HTTPS: Enforced** (ticked in Settings → Pages).
- **DNS (registrar: GoDaddy):**
  - 4× `A` `@` → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
  - `CNAME` `www` → `gls9000.github.io`
  - `NS` ×2 and `SOA` left untouched (core plumbing).
  - The domain previously **forwarded to `artist.link/gudulopes`** (a Caffeine
    aggregator); that **forwarding was removed** to free the domain. The
    aggregator page still exists at its own artist.link URL — it's just no longer
    what gudulopes.com shows.

---

## 3. Gotchas we already hit (don't repeat)

- **GitHub web drag-and-drop silently skips folders.** The first upload dropped
  `css/`, `js/`, `assets/`, so the site loaded unstyled (black text, giant
  icons) until they were re-uploaded from *inside* each folder. If ever uploading
  via the web again: upload subfolder files from within the folder on GitHub and
  verify the path (e.g. `css/style.css`) appears. (Using GitHub Desktop avoids
  this entirely.)
- **Boku page cover filename:** the Boku no Sekai page loads
  **`assets/images/kompas-cover.jpg`** (the Kompas single art, which itself reads
  "Boku no Sekai"), NOT `boku-cover.jpg`. If dedicated Boku art arrives later,
  save it as `kompas-cover.jpg` or update the one `<img src>` on that page.
- **Printing/PDF-ing the dark site looks broken** (browsers don't print
  backgrounds). That's a print artifact, not a site bug.

---

## 4. Decisions locked in (don't silently reverse these)

- **Umbrella-with-wings brand:** everything under the single name **Gudu Lopes**.
  Projects are "wings": *The Four Doors of the Mind* (orchestral hip-hop) and
  *Boku no Sekai* (Dutch/Flemish rap, made as the alias **G-Tone / Anubis**, but
  the site identity stays Gudu Lopes). The composer is always Gudu Lopes.
- **Mood:** dark, cinematic. Colours are CSS variables in `:root` at the top of
  `css/style.css` — palette changes are one-line edits there.
- **Homepage streaming card = Spotify, Apple Music, YouTube only.** Bandcamp is
  in the **footer sitewide** (and is the primary button on the Boku page), NOT in
  the hero card. (Amazon/YouTube-Music/"other platforms" were removed.)
- **Nav = 3 items:** Home · The Four Doors · Boku no Sekai. The four door pages
  hang off the Four Doors page (breadcrumb + prev/next).
- **Door of Sleep is labelled "Album."**
- **Bio says "raised in Antwerp, Belgium."**
- **No mailing list / store / booking yet** (explicitly stage 2).
- **Homepage inline Spotify embed was considered and declined** — keep the page
  fast; the links do the job.
- **No build step / no framework** — vanilla static files only.

---

## 5. Artist facts (source of truth — from the owner, incl. their Notion)

**Bio:** Born in Cape Verde, raised in Antwerp, Belgium; based in Ghent. Began in
1997 with the hip-hop group *Rapperz van de Ronde Tafel* (lyricism + beat-making
from movie-soundtrack samples). Largely self-taught. Signature sound: orchestral
instruments woven through hip-hop rhythm. Pull toward fantasy, sci-fi, anime.

**Release plans (as of Jul 2026):** *Door of Forgetting* releasing this year;
then *Door of Madness* songs mixed & released one by one. *Boku no Sekai* is the
upcoming rap album; **Kompas** is its first single/EP (feat. G-Tone), out on
Bandcamp.

**Links:**
- Spotify: https://open.spotify.com/artist/3lErfSGYrKxq03sB53J5Nc
- Apple Music: https://music.apple.com/be/artist/gudu-lopes/1650259241
- YouTube: https://www.youtube.com/channel/UC9ApbYx-4tsoGPxydhpVU5Q
- Instagram: https://instagram.com/gudu_lopes
- TikTok: https://tiktok.com/@gudulopes
- Facebook: https://facebook.com/people/Gudu-Lopes/61563742814022
- Bandcamp (artist): https://gudulopes.bandcamp.com
- Kompas (EP): https://gudulopes.bandcamp.com/album/kompas

**Tracklists (from the owner's "Finished songs — 4 Doors" sheet).** "(in
progress)" = not finished/released yet:

- **Door of Sleep** (I) — Sleep Tight · Doze & Slide · EMR · Down the Hole ·
  Dreamland Stroll · Lullaby. _(6, all finished; it's "one continuous story.")_
- **Door of Forgetting** (II) — No Escape · Tau · Contemplation · Descent into
  the Abyss · Mist · Will You Let Me Go *(in progress)*.
- **Door of Madness** (III) — A Way Out · Unknown Territory · Voices in My Head
  *(in progress)*.
- **Door of Death** (IV) — Sempiternam · March of the Dead · Over the River Styx ·
  The Gate (of the Lost Souls?) · Memento Mori *(ip)* · Astral Planes *(ip)* ·
  Spirits *(ip)* · Unbearable Pain *(ip)*.

Also mentioned (not yet on the site): a song made **with his mother** (he's the
composer) — a possible future "productions & collaborations" wing.

---

## 6. What's still placeholder / to do (owner fills these)

- **Video IDs:** every song's embed uses `VIDEO_ID` as a placeholder → replace
  with the real YouTube ID (the part after `/embed/`). Owner can paste just the
  ID, or paste a full YouTube iframe (add `loading="lazy"`, set the `title`).
- **Song stories:** each `<div class="track-story"></div>` is empty; owner writes
  the story inside `<p>…</p>`.
- **Cover art still needed:** `forgetting-cover.jpg`, `madness-cover.jpg`,
  `death-cover.jpg`. (Done: `sleep-cover.jpg`, `kompas-cover.jpg`.) Square images.
- **Homepage:** the "Watch" latest-video (`VIDEO_ID`) and an optional caption.
- **Social-share image:** `assets/images/og-image.png` is still a text-only
  branded placeholder — replace with a real photo, 1200×630. (Sleep & Boku pages
  already share their real covers.)
- **Release years / exact song-title wording** — owner's call.
- **Boku page:** optional Bandcamp embed (Bandcamp → Share/Embed → paste iframe).

---

## 7. Image optimisation recipe (do before adding images)

Phone/camera/AI images are far too heavy (the covers arrived at 3780×3780,
~1–3 MB). Target well under ~300 KB.

- **Square covers:** resize to **1000×1000**, JPEG quality ~82, progressive.
  (Sleep 2.9 MB → 224 KB; Kompas 1.1 MB → 62 KB using exactly this.)
- **Social-share (og-image):** 1200×630.
- Keep the whole site small (currently ~0.5 MB) — it's on GitHub Pages free tier.

If Claude has code execution / can run Pillow, it can batch-process these; the
recipe above is what was used originally.

---

## 8. Suggested first move in the new session

1. Confirm the workspace/folder is the **freshly-pulled repo** (contains `CNAME`,
   `index.html` at top level, `css/ js/ assets/`, all the `.html` pages,
   `HANDOFF.md`).
2. Have the owner paste their **list of new ideas** and drop in **new images**.
3. Triage ideas into **quick edits** (text/links/one image → do directly) vs
   **real builds** (new pages/layout → plan first). Then work through them, and
   keep `HANDOFF.md`'s changelog updated as you go.
