# ASSETS NEEDED

Four photographs are live. Nothing else is waiting on an image: the Outside Work
tiles are drawn artwork by design, not placeholders, and the case study motifs
are permanent.

---

## Still wanted

### Open Graph image — the only real gap

| Field | Value |
|---|---|
| **Filename** | `public/og-image.png` |
| **Dimensions** | **1200 × 630 px** (exact) |
| **Where used** | `og:image` in `public/index.html`, already wired |
| **Content** | Name, "AI Manager", and either the portrait or a plain dark violet card |

This is what appears when the link is shared on LinkedIn, which is where the site
will mostly be opened from.

### Optional: a native dark-background portrait

The hero portrait is a real photograph of you at Huawei's campus and it works, so
this is a refinement, not a fix. A shot taken against a dark or plain background
would need no grading and would hold more detail in the face.

| Field | Value |
|---|---|
| **Replaces** | `public/portrait.jpg`, same filename, no code change |
| **Ratio** | **3:4**, locked by the frame |
| **Resolution** | Min 900 × 1200 px |
| **Crop** | Head and upper body, eyes in the upper third |
| **Background** | Dark and plain, or softly blurred. Avoid bright or high-chroma. |

### Optional: case study imagery

Each case study has an `image` field (`work.items[].image`, currently `null`)
that would fill the left panel where the drawn motif sits. Only add what is
cleared for public use. The motifs are designed to stand in permanently, so
leaving these empty costs nothing. The most plausible candidate is a photograph
from an adoption workshop, showing the room or the screen rather than
identifiable participants.

---

## In use

Originals live in `/Users/augusto/Documents/Project_me/assets/`. The files in
`public/` are cropped and lightly graded copies, so the originals stay untouched.

| Source | Web file | Where | Treatment |
|---|---|---|---|
| `profile_picture.heic` | `public/portrait.jpg` | Hero portrait | Cropped to 3:4, overcast sky pulled down with a vertical falloff, gentle vignette. Colour left largely intact. |
| `ceneval.heic` | `public/recognition/ceneval.jpg` | Recognition, tall card | Cropped to 4:3 keeping the subject high |
| `huawei.heic` | `public/recognition/huawei.jpg` | Recognition, upper right | Cropped in to hold both the subject and the full "Huawei Training Center" sign |
| `judge.jpg` | `public/recognition/tecup.jpg` | Recognition, lower right | Light crop, `focus: 68% 40%` so the judging panel stays in frame |

All four render as full-bleed imagery under a glass caption, with a scrim, a
soft-light tint and a slow zoom on hover.

**From the file metadata:** the Huawei photograph is GPS-tagged in Hangzhou and
dated 21 May 2024, which is why the site says "May 2024" rather than just "2024".
The graduation photograph is GPS-tagged in Mexico City and dated 6 May 2024,
noted as an open item in `CONTENT_NEEDED.md` rather than used, since a graduation
photo does not by itself date the CENEVAL award.

---

## Removed by decision

`cooking.heic` and `painting.jpg` were integrated and then taken back out, along
with `public/personal/`. The Outside Work tiles now carry drawn artwork instead:
each has its own hue, a breathing glow behind the motif, a fine grid texture and
a pointer-tracked sheen. The motif colours are driven by CSS custom properties
(`--motif-stroke`, `--motif-faint`, `--motif-cool`, `--motif-glow`, `--tile-glow`,
`--tile-line`) set per hobby in `global.css`, so retuning a tile is a colour
change, not a redraw.

If you ever want photographs back there, `personal.items[].image` still works;
the component just needs the `<img>` branch restored in `PersonalSection.js`.

---

## Appendix: how the web files were produced

Requires Pillow. Paths relative to `Portfolio/portfolio/`, with `$SRC` the folder
holding the HEIC files converted to JPEG.

```python
from PIL import Image, ImageEnhance, ImageDraw, ImageFilter

# Recognition: keep the colour, only take the edge off the brightness.
def light(im, bright=0.88, sat=0.96, contrast=1.04):
    im = ImageEnhance.Color(im).enhance(sat)
    im = ImageEnhance.Brightness(im).enhance(bright)
    return ImageEnhance.Contrast(im).enhance(contrast)

light(ceneval_crop, 0.86, 0.94)   # crop (235, 0, 2315, 1560),  width 1500
light(huawei_crop,  0.88, 1.00)   # crop (636, 545, 2998, 2317), width 1500
light(judge_crop,   0.94, 1.02)   # crop (8, 0, 1313, 979),      width 1305
```

The hero portrait needs more, because it was shot under a bright overcast sky:

```python
p = Image.open(f'{SRC}/profile_picture.jpg').convert('RGB')
p = p.crop((350, 900, 2670, 3993)).resize((900, 1200), Image.LANCZOS)
W, H = p.size
p = ImageEnhance.Color(p).enhance(0.92)
p = ImageEnhance.Brightness(p).enhance(0.90)
p = ImageEnhance.Contrast(p).enhance(1.06)
deep = Image.new('RGB', (W, H), (24, 19, 44))

# vertical falloff: the sky sits at the top, so weight the darkening there
grad = Image.new('L', (1, H))
for y in range(H):
    grad.putpixel((0, y), int(max(0, min(255, 150 * (1 - y / H) ** 2.0))))
p = Image.composite(Image.blend(p, deep, 0.85), p, grad.resize((W, H)))

# gentle elliptical vignette centred on the subject
vig = Image.new('L', (W, H), 0)
ImageDraw.Draw(vig).ellipse((-W * 0.34, 0, W * 1.34, H * 1.45), fill=255)
vig = vig.filter(ImageFilter.GaussianBlur(170))
p = Image.composite(p, Image.blend(p, deep, 0.55), vig)
p.save('public/portrait.jpg', quality=90, optimize=True, progressive=True)
```

Two things not to repeat: masking the sky by luminance leaves a halo around the
hair and blotches the face, and an aggressive desaturation pass (anything below
about 0.85) drains the photographs to grey against the dark page.

HEIC to JPEG on macOS, no extra tooling:

```
sips -s format jpeg -s formatOptions 95 input.heic --out output.jpg
```
