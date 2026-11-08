# Website section audit

## Scope and verified project details

The site is a single-page React/Vite application mounted from `src/App.tsx`; no
client-side route table is configured. School identity and contact fields used
for this work come from `src/data/schoolData.ts`:

- St. Michael's Higher Secondary School, Umsning, Ri Bhoi, Meghalaya
- Nursery to Class XII; Arts, Science, and Commerce
- Meghalaya Board of School Education (MBOSE)
- Contact details and address from `SCHOOL_INFO`

The reference was used for feature ideas and visual direction only. Its college
programmes, copy, and images were not reused.

## Reference feature inventory

| Reference feature | Existing implementation / status | Decision |
|---|---|---|
| Header and navigation | `Navbar` and `AlertBar` are mounted in `App.tsx`; mobile drawer exists. | Preserved. Added direct links to the new academic overview and the existing mission, vision, founder, and principal sections. |
| Hero and featured slides | `HeroSection` includes local image slides and the existing admission form. | Preserved; no second hero added. |
| Quick navigation cards | No equivalent card navigation was mounted. | Added `QuickLinksSection` for Admissions, Academics, Notices, and Campus Life. |
| Welcome / institutional introduction | `InstitutionalSection` has the school introduction and history. | Preserved; duplicate `AboutSection` was not mounted. |
| Core values and educational philosophy | Mission, vision, and `WhyUsSection` cover this purpose. | Preserved; no duplicate values section added. |
| Notice board and announcements | `AlertBar` and the Notices tab in `StudentStaffHub` are mounted. | Preserved; no duplicate notice board added. |
| Vision and mission | Present in `InstitutionalSection`. | Preserved. |
| Principal's message | Present in `InstitutionalSection`, with a school staff photo. | Preserved. A named, approved principal's message still requires school-provided content. |
| Vice-principal / management messages | No verified names, statements, or individual portraits are available in the active site data. | Not added. The inactive faculty data contains placeholder-like records and is not treated as verified leadership information. |
| Academic programmes and school levels | The active `AcademicsSection` presents a simple, responsive photo-led progression from early years through higher secondary, with one admission enquiry action. | Uses local school photos and the school's listed class ranges; avoids the reference school's programme names and brochure/fee handlers. |
| Student activities and events | `StudentLifeSection`, `ResearchSection`, `StudentWorkSection`, and notices cover these purposes. | Preserved; no duplicate activities or events section added. |
| Campus facilities | Campus imagery and activities are present, but a verified facilities list was not found. | No new facility claims added. |
| Why choose the school | `WhyUsSection` uses an editorial photo-and-facts layout for school location, establishment, affiliation, class range, and contact. | Replaced repeated benefit tiles and the previous unverified ranking/statistics with facts sourced from `SCHOOL_INFO`. |
| Frequently asked questions | An FAQ component existed but was not mounted and included unsupported answers. | Reworked and mounted with answers drawn only from `SCHOOL_INFO`. |
| Academic statistics | Other project-stored statistics may appear in existing sections. | Not repeated in the new family highlights; verify any remaining figures before publication. |
| Student / parent testimonials | `AlumniSection` is mounted. | Preserved; the project-stored names and quotations need school confirmation. No testimonials were invented or added. |
| Student app promotion | No confirmed school app or integration was found. | Skipped. |
| Photo gallery and school memories | `StudentWorkSection` includes campus imagery and an interactive gallery. | Preserved; the inactive `GallerySection` was not mounted to avoid duplication. |
| Admission enquiry CTA | Existing hero form and admission modal are mounted. | Preserved; added links reuse the existing modal callback. |
| Contact information and directions | `FooterSection` already provides contact and map links. | Preserved and updated to use the central `SCHOOL_INFO` address, telephone numbers, and email. |
| Multi-column footer | `FooterSection` is mounted. | Preserved; footer links now point to relevant existing sections. Unverified policy-page links were removed rather than presented as working pages. |

## Implementation changes

- Added the missing quick-link navigation cards.
- Restyled the academic section as a photo-led progression and refreshed “Why Us” with a school-community photo and verified school facts, rather than repeated generic cards.
- Reworked and integrated the FAQ.
- Wired navigation and footer links to existing section IDs.
- Used `SCHOOL_INFO` as the source for displayed academic and contact facts.
- Removed the result-checker simulator's behavior that returned fabricated marks
  for arbitrary roll numbers. The hub now explains that online result lookup is
  not connected and directs families to the school.

## Content and integration requiring school follow-up

- Confirm the current contact details and all project-stored figures before
  public launch.
- Replace or approve the unnamed principal message and confirm any founder or
  management wording.
- Confirm student/parent testimonial identities and quotes.
- Confirm the static notices, fee schedule, transport routes, house standings,
  and staff portal details in `schoolData.ts` before treating them as official.
- The admission form is a client-side flow; no admission API or submission
  service is configured in this project.
- No confirmed official social-media URLs or policy-page routes were found.

## Validation

- Browser inspection confirmed the development page serves and its active
  navigation/menu interactions remain available.
- Build and TypeScript commands were attempted, but the sandbox could not start
  commands because local proxy access is disabled. They therefore remain
  unverified in this environment.
