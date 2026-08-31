# CONTENT NEEDED

Three parts: what this pass removed, what earlier passes removed and why, and
what is still open.

All copy lives in `src/locales/en.js` and `src/locales/es.js`. Change a value in
both files and the site updates. No component edits needed.

---

## Part 1: removed in this pass, by request

| Removed | Where it went |
|---|---|
| **Case study: real-time operational analysis for SPEI transactions** | Not lost. It is now a line inside the AI Consultant milestone in the Journey. |
| **Case study: financial education platform with a virtual assistant** | Same, folded into the AI Consultant milestone. |
| **Two Leadership cards.** Six became four: use-case definition and business translation merged into one, cross-functional coordination and stakeholder management merged into another. | Nothing dropped in substance; the four remaining cards carry the same ground in fewer words. |
| **Three Journey milestones.** Seven became four. | The degree and the 2023 Data Analytics specialization are now one "Foundation" entry. Huawei and CENEVAL are now one 2024 entry. The separate "Now" entry merged into the AI Manager entry. |
| **The Certifications drawer**, and the `journey.certifications` data with it | HCIA-AI now appears where it means something, inside the 2024 milestone explaining how the Huawei selection happened. INFOTEC IA 1000 appears there and in the Huawei recognition. The Leadership Diploma is not mentioned on the site any more; it is on the CV. |
| **Timeline prose.** Each milestone was cut to one or two sentences. | Nothing factual dropped. The AI Consultant entry no longer itemises SPEI, the education platform and the technology evaluations; it says "applied AI and software delivery in financial services" instead. Those specifics live in the CV. |
| **Outside Work photographs.** Cooking and painting were integrated, then removed by request. | The tiles are now drawn artwork with their own colour, glow and texture. See `ASSETS_NEEDED.md`. |
| **The hero "Domains" mark**, which read "Financial services, biomedical". | Replaced with "Working with / Directors and business teams". Naming two domains implied the list was complete when it is not. The domains still appear in Career Highlights and in the case studies, where they have room to be specific. |
| **The footer LinkedIn link.** | Duplicate of the Contact card. See `LINKS_NEEDED.md`. |

The page is about 15% shorter as a result, which was the point.

---

## Part 2: removed in the previous pass, and still out

The rule: the updated CV is the primary source. Anything it does not support was
removed or softened rather than rephrased.

| Claim | Why it went | To bring it back |
|---|---|---|
| **"40% reduction in QA cycle time"** | Not in the updated CV in any form. It was the hardest number on the site, so leaving it unverified was the biggest credibility risk. | Confirm the figure, what it measured, over what period. |
| **"Re-Architecting a Core Platform"**: a .NET monolith broken into microservices, moved to serverless, with test automation | The whole project is absent from the CV, and the old site claimed you "led the migration end to end". | Add it to the CV first, with employer, dates and your actual role. |
| **IELTS Band 8**, **Sprachdiplom KMK** | Neither is on the updated CV. | Add to the CV, then to the site. |
| **AgentCore**, **Hugging Face**, **ElevenLabs**, **LangChain**, **Docker**, **Power BI**, **C# / .NET** | None appear in the CV's skills. AWS Bedrock, multi-agent systems, PyTorch and Scikit-learn are there and are kept. | Add to the CV skills section. |
| **"Defined the KPIs used to measure and improve operational quality"** | Not in the CV. | Confirm if true. |
| Enablement audiences **Legal, Finance, Marketing, Technology** | The CV says "directors and business teams" and "directors and managers". Naming departments was invented detail. | Name them here if specific functions really were covered. |

Softened rather than removed: "I managed the full build" became "I contributed to
the build" for the financial education platform, because the CV says
*contributed to*; "I set the direction and own delivery" became "I lead these
initiatives", because *led* is what the CV says; AI Manager start moved from
March to **April 2025** and AI Consultant from September to **October 2024**, to
match the CV.

**Three of the three case studies carry no Outcome heading except the first.**
The CV states no outcome for the microcredit and biomedical initiatives, so
rather than invent one the field renders nothing. That is deliberate, not an
oversight.

---

## Part 3: still open

### Geography

The site now groups by country so a city can appear without a claimed purpose.

| Place | On the site as | Status |
|---|---|---|
| Mexico City | Mexico, "Base" | CV-backed |
| San Diego | United States, "Client and project work" | CV-backed, it names San Diego stakeholders explicitly |
| **Dallas** | United States, under the same country-level note | **No supporting detail anywhere.** The country note covers it honestly, but if something specific happened there it should be on the CV first. |
| Hangzhou | China, "Huawei AI training program" | CV-backed, and the photo metadata confirms it |
| **Shenzhen** | China, under the same country-level note | **No supporting detail.** The portrait's GPS puts you at Huawei's Songshan Lake campus near Shenzhen on 24 May 2024, three days after the Hangzhou photo, so the trip clearly covered both. Nothing about what you did there is documented, so nothing is claimed. |

Neither Dallas nor Shenzhen has an invented purpose attached. If you want them
to say more, the detail has to come from you.

### Open items

| # | Item | Where | What is needed |
|---|---|---|---|
| 1 | **English level conflict** | `global.languages[1]` | The site says **C2** because you specified it. The CV says **C1**. A recruiter reading both will notice. Pick one and make them match. |
| 2 | **Mandarin A1** | `global.languages[3]` | On the site at your instruction, not on the CV. Add it there or drop it here. |
| 3 | **CENEVAL month** | `recognition.items[0].date` | Reads "2024". The graduation photo is dated 6 May 2024 in Mexico City, but a graduation photo does not date the award itself. Confirm the month and it can read "May 2024" like the Huawei entry. |
| 4 | **Outcome for two case studies** | `work.items[1].outcome`, `work.items[2].outcome` | Both `null`. If the microcredit or biomedical initiatives produced a result you can state and defend, one sentence each would strengthen the section more than anything else on this list. |
| 5 | **Scale of the enablement programs** | `enablement`, `highlights.items[1]` | Accurate but unquantified. Number of people, sessions or business units would be the concrete detail the section lacks. Do not estimate. |
| 6 | **Team size** | `leadership` | Nothing claims a headcount, because the CV states none. If you have led a specific number of people, that is a strong and easily verified leadership signal. |
| 7 | **Dallas and Shenzhen context** | `global.regions` | See the table above. |

### Deliberately empty

These render correctly with nothing:

- `work.items[].image` on all three case studies. The drawn motifs are permanent
  artwork, not placeholders.
- `personal.items[].image` on all three hobbies. The tiles are drawn artwork by
  design now, not slots waiting for photographs.

---

## Editing notes

- **Both locale files, always.** English and Spanish are native copy, not
  translations, but they must stay factually identical.
- **No em dashes.** The whole site uses commas, colons, periods and parentheses.
  There are zero in the current copy and none should be added.
- **No emoji** anywhere in copy, labels, navigation, metadata or buttons.
- **Case study cards must load collapsed.** `WorkCard` mounts with
  `useState(false)` and there is no prop to override it. Keep it that way.
- **Résumé:** `public/resume.pdf` is the PDF export of `CV AI Leader (EN).docx`,
  refreshed from `CV AI Leader (EN).pdf` in the project root. Replace it with the
  latest export under the same filename; the navbar, the mobile menu and the
  contact card all point at it. There is one PDF for both languages, so a
  Spanish visitor downloads the English CV. If that matters, add
  `public/resume-es.pdf` and point `contact.resume_file` at it in `es.js`.
