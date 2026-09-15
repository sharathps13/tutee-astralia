# Photo credits

All four photographs are Australian subjects sourced from Wikimedia Commons.
Unlike the New Zealand page — where all four happened to be CC0 — **every image
here is CC BY, so the footer credit line is a licence obligation, not a
courtesy**. It is rendered from the `data-photo-credit` element and generated
from `PHOTO_CREDIT` in `_tooling/localise_au.py`. If you swap any photo, update
this file **and** that constant, then re-run `localise_au.py`,
`assemble.py australia` and `build_unipage.py australia`.

CC BY-SA, NC and ND images were deliberately avoided, as on the UK, Canadian,
Irish, German and New Zealand pages.

Each file was cropped and resized from the Commons original with `sips`. The
output dimensions match the New Zealand, German, Irish and Canadian files, which
in turn match the slots, so the layout cannot shift.

**No photograph has an identifiable person as its subject** — the same rule the
other five pages follow. The Sydney Quadrangle hero does contain incidental
figures crossing a lawn about seventy metres from the camera; they are
unidentifiable at the delivered 1200 px width and the frame is dominated by the
building, which is the subject. Two otherwise good candidates were rejected on
this rule and its companion (no dominant commercial branding): a Paddington
shopfront street with a pedestrian filling the foreground, and Melbourne's
Southbank promenade, which is wall-to-wall retail signage.

---

## students-campus.jpg — hero (`#home`), 1200×1143

> **The filename does not describe the subject**, and it is kept because
> `students-campus.jpg` is a literal key in the compiled stylesheet — the class
> `bg-[url('/assets/img/photos/students-campus.jpg')]` plus the matching escaped
> selector and `url()` in `assets/css/main.css`, and the `<link rel="preload">`
> in the page shell. Renaming the file means editing all of those together;
> `verify_site.py` fails on a mismatch, the browser fails silently.

- **Depicts:** the Main Quadrangle and clock tower of the University of Sydney —
  Australia's oldest university and its most recognisable university building,
  the direct counterpart of the UK page's Radcliffe Camera, Ireland's Campanile
  and New Zealand's Otago Clocktower.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Main_Quadrangle,_University_of_Sydney_(cropped).jpg
- **Author / photographer:** Jason Tong
- **Licence:** CC BY 2.0 — https://creativecommons.org/licenses/by/2.0
- **Attribution required:** **yes**
- **Crop:** original 7360×3128 (a 2.35:1 panorama) → `sips -c 3128 3284
  --cropOffset 0 2500` (1.0499:1) → resized to 1200×1143, quality 82.
  **The x offset is load-bearing:** a centred crop of this panorama puts the
  clock tower left of centre and pulls a group seated on the lawn hard against
  the left edge of the frame. Anchoring at x=2500 pushes that group away from
  the edge, sets the tower and the archway on the vertical axis, and takes in
  the fig tree and the eastern cloister on the right instead.
- **Why 1.05:1 and not the panorama:** the hero panel measures about
  **596×584 CSS px on desktop (1.02:1) and 319×292 on mobile (1.09:1)** —
  essentially square at every breakpoint. The div is `bg-cover bg-center`, so a
  2.35:1 file would have well over half its width thrown away.
- **Safe to reshape:** referenced only as a CSS `background-image` and a
  `<link rel="preload">` — there is no `<img>` tag for it on either page, so its
  ratio has no effect on layout.

## team-working.jpg — `#relocate` ("The Pathway to Settlement"), 1400×933

- **Depicts:** Winthrop Hall and the Undercroft cloister across James Oval at the
  University of Western Australia, Crawley, Perth.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:AUS_Perth,_Central_Business_District,_University_of_Western_Australia_0116.jpg
- **Author / photographer:** -wuppertaler
- **Licence:** CC BY 4.0 — https://creativecommons.org/licenses/by/4.0
- **Attribution required:** **yes**
- **Crop:** original 3929×2947 (4:3) → `sips -c 2619 3929 --cropOffset 0 0`
  (exact 3:2, **anchored at the top**) → resized to 1400×933, quality 82.
  Anchoring at the top rather than centring keeps the tower and the tree canopy
  and throws away a band of empty lawn, which is the only thing a centred crop
  would have gained.
- **Note:** this image is rendered with `w-full h-auto object-cover`, so **its
  aspect ratio drives the layout**. Any replacement must also be 3:2.

## family.jpg — `#relocate` ("Relocating with Your Family?"), 1400×1050

- **Depicts:** the Sydney central business district seen across the harbour, with
  the Opera House and the Sydney Harbour Bridge to the right of frame.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Sydney_-_Sydney_Harbour_Bridge_%26_Opera_House_%26_Skyline_(4158056861).jpg
- **Author / photographer:** eyeintim
- **Licence:** CC BY 2.0 — https://creativecommons.org/licenses/by/2.0
- **Attribution required:** **yes**
- **Crop:** original 3072×2304 (already 4:3) → `sips -c 1350 1800 --cropOffset
  745 636` (a tighter 4:3 window, **not centred**) → resized to 1400×1050,
  quality 82. **The offset is load-bearing:** the slot renders at `h-[300px]`
  (`lg:h-[350px]`) on desktop and `h-[180px]` on mobile with `object-cover`, and
  a centred crop of the full original puts the skyline in the upper third with
  open water filling the rest. Taking a shorter window centred on source y≈1420
  drops most of the sky and most of the foreground water and leaves the city,
  the Opera House and the bridge on the horizontal axis of the visible band.
- **Why this subject:** a place people live rather than people, the same trade
  the UK page makes with Notting Hill, Canada with Cabbagetown, Ireland with the
  Georgian doors, Germany with Quedlinburg and New Zealand with Queenstown.

## australia-city.jpg — `#universities` panel background, 1400×933

- **Depicts:** the Melbourne skyline over the Shrine of Remembrance forecourt and
  the Kings Domain, looking north up Swanston Street.
- **Commons file page:** https://commons.wikimedia.org/wiki/File:Melbourne_city_skyline_in_January_2015.jpg
- **Author / photographer:** Francisco Anzola
- **Licence:** CC BY 2.0 — https://creativecommons.org/licenses/by/2.0
- **Attribution required:** **yes**
- **Crop:** original 5856×3769 → `sips -c 3769 5653` (centred, exact 3:2) →
  resized to 1400×933, quality 82.
- **Note:** this file is referenced by a Tailwind arbitrary-value class,
  `bg-[url('/assets/img/photos/australia-city.jpg')]`, which is a literal key
  into the compiled stylesheet. Renaming the file means editing **both** the
  class in the HTML and the escaped selector plus `url()` in
  `assets/css/main.css`. `verify_site.py` fails on a mismatch; the browser fails
  silently. That rule was renamed from `newzealand-city.jpg` when this page was
  scaffolded from the New Zealand assets.

---

## Combined credit line (as rendered in the footer)

> Photography: University of Sydney Main Quadrangle © Jason Tong (CC BY 2.0);
> Melbourne skyline © Francisco Anzola (CC BY 2.0); Sydney Harbour © eyeintim
> (CC BY 2.0); University of Western Australia, Winthrop Hall © -wuppertaler
> (CC BY 4.0). Via Wikimedia Commons.

Generated from `PHOTO_CREDIT` in `_tooling/localise_au.py` — change it there and
rebuild, never in the built HTML.
