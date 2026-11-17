# Tutee Connect — Study in Australia

The Australia landing page for Tutee Connect (Study | Immigration): a dark
"midnight" one-page site with live city clocks, a city-match tool, the 5-step
route, the post-study pathway, intake planner, QS 2027 universities, loan
partners, stories, FAQ, the Tutee AI chat and a "book a free call" chat that
turns into a WhatsApp message. Plain static files: no build step, nothing to
install.

## Files

```
index.html                    the landing page (inline CSS, loads libs.js + index.js)
index.js                      everything the page does
libs.js                       bundled libraries (GSAP + ScrollTrigger + Flip, SplitType,
                              canvas-confetti, Atropos, Lenis, CountUp, simplex-noise)
tsparticles.slim.bundle.min.js  star background, loaded only on capable desktops
universities.html             University Explorer (QS 2027, top 30) + universities.js
scenes.html                   alternative version with animated Australian scenes in the
                              background (uses index_au.js instead of index.js)
logo.png, mark.png            Tutee Connect logo and round mark (also the favicon)
hero-*.webp, city-*.webp      photos; the -m.webp files are smaller copies for phones
img/aus-*.webp                Destinations reel photos
partners/                     loan partner logos
netlify.toml                  Netlify settings and security headers
serve.py                      local preview server
```

`assets/` and `netlify/functions/enquiry.mjs` belong to the previous version of
the page. The new pages don't use them; they are left in place so nothing else
breaks and can be removed later.

## Preview locally

```bash
python3 serve.py          # http://localhost:8000
```

or double-click `Start Local Server.command` (Mac).

## Deploying

Netlify publishes the folder as-is (`publish = "."`).

`netlify.toml` changed for this version: the Content-Security-Policy now
allows Google Fonts (`fonts.googleapis.com` for the stylesheet,
`fonts.gstatic.com` for the font files) and blob workers (`worker-src 'self'
blob:`, used by the confetti library). Scripts stay strict
(`script-src 'self'`): the pages have no inline scripts or inline event
handlers. The file's header says its canonical copy lives in
`_tooling/netlify/netlify.toml`; copy the change there too, or the installer
will put the old policy back.

Don't run the old `_tooling` builders for Australia (`assemble.py australia`,
`build_unipage.py australia`): they would overwrite `index.html` and
`universities.html` with the previous design.

## Phones

Everything below 768px wide gets the phone layout (designed for an iPhone SE,
375×667, and up):

- bottom action bar (Tutee AI · Book a free call · WhatsApp)
- list menu
- sections sized to about one screen
- long lists as swipe rows (cities, services, the route, loan partners, stories, news)
- the pathway as a swipe carousel
- compact University Explorer cards

Phones turned sideways get a compact top bar.

## Things that behave differently outside claude.ai

The page was built and previewed as a Claude artifact. Two features use
artifact-only services and fall back automatically on the real site:

- **Tutee AI** answers from its built-in knowledge base (visas, costs, intakes,
  cities, universities, work, family, loans, contact). Inside claude.ai it can
  also hand harder questions to Claude; on the real site those go to the
  counsellor hand-off (WhatsApp / call back) instead.
- **"What's new down under"** (live news relay) reads from the artifact's
  database. On the real site it shows the official sources (Home Affairs,
  Study Australia, Department of Education) instead of live stories.

## Before launch

- Visa charges, the 485 charge, wages and the financial-capacity figure
  (A$29,710) change often. Re-check them on immi.homeaffairs.gov.au before
  each intake.
- Photos are from Wikimedia Commons under CC BY / CC BY-SA. The credit line
  shown with each photo is a licence requirement, so keep the credits.
- Rankings are the QS World University Rankings 2027 (published 18 June 2026).
