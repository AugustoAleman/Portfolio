# LINKS

Nothing outstanding. All three recognitions link out, and every link was checked
for a 200 response before being wired in.

---

## Connected

| Where | Button label (EN / ES) | Destination |
|---|---|---|
| Recognition, CENEVAL | Verify the award / Verificar el reconocimiento | `https://reconocimiento.ceneval.edu.mx/busqueda-de-reconocimientos-2/?resultId=42955` |
| Recognition, Huawei | Read the article / Leer el artículo | `https://conecta.tec.mx/es/noticias/ciudad-de-mexico/educacion/china-alumnos-tec-ccm-son-seleccionados-en-programa-de-ia` |
| Recognition, TecUp 3.0 | See the post / Ver la publicación | `https://www.linkedin.com/posts/grupo-salinas_gruposalinas-tecup3-playmode-activity-7369184486606938112-_n4I` |
| Contact | LinkedIn | `https://www.linkedin.com/in/augusto-aleman` |
| Contact | Email | `oa.alemanesparza@gmail.com` |
| Navbar and contact | Résumé | `/resume.pdf` |
| `og:url` | Site | `https://www.octavio-aleman.me` |

Verified titles at the time of wiring:

- CENEVAL: "Búsqueda de Reconocimientos 2 - Reconocimientos Ceneval"
- Tec de Monterrey: "¡A China! Alumnos Tec CCM son seleccionados en programa de IA Huawei"
- LinkedIn: "#gruposalinas #tecup3 #playmode #aws | Grupo Salinas"

### Two decisions worth knowing about

**The LinkedIn tracking parameters were stripped.** The URL as supplied ended in
`?utm_source=share&utm_medium=member_desktop&rcm=ACoAADh3sjQ...`. That `rcm`
value is a LinkedIn member identifier tied to the account that generated the
share link, so publishing it on a portfolio would put a personal identifier in
the page source for no benefit. The post resolves fine without any of it, which
was confirmed before removing them.

**The labels describe what is on the other side.** The Huawei link goes to a Tec
de Monterrey news article, so it reads "Read the article" rather than "See the
post". Only the CENEVAL one says "Verify", because it is genuinely a verification
page rather than coverage, and that distinction is worth keeping.

---

## How the buttons work

`recognition.items[].externalUrl` and `.sourceLabel` in both locale files. The
component renders the button only when `externalUrl` is set, so setting one back
to `null` removes it cleanly with no gap left behind. `sourceLabel` is the button
text; leave it `null` to fall back to "View" / "Ver".

All three open in a new tab with `rel="noopener noreferrer"`. The button is a
glass pill that fills with the violet gradient on hover, sized 37 px tall on
desktop and 42 px on touch.

Keep labels short, no emoji, no em dashes.

---

## Not linked, by design

- **Certifications** have no section any more. HCIA-AI and INFOTEC IA 1000 are
  mentioned inside the Journey and Recognition text where they explain something;
  the Tec de Monterrey article now backs that story up directly.
- **Case studies** have no external links. This is enterprise work at Grupo
  Salinas, so there is most likely nothing public to point at, and a gated link
  would be worse than none.
- **LinkedIn is the only social network on the site.** GitHub and the rest went
  with the developer-facing framing.
- **The footer no longer links to LinkedIn.** The Contact section already has it
  as a card, and two links to the same profile within a screen of each other read
  as an oversight. The footer is now the copyright on the left and the tagline on
  the right, which keeps the row balanced without inventing a replacement.
