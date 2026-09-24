## 1. Site Info

SITE_TYPE: Local Public Safety & Emergency Training Provider
HTML_LANG: en

## 2. Visual Identity & Brand Soul

*   **Brand DNA Extraction:** The identity is built on high-trust emergency services authority. Rooted in the gold-amber (#FFC314 / #F59E0B) and deep obsidian slate (#121316) from KRE Security LLC's public safety training division, modernized with clean crisp medical whites, tactical charcoal surfaces, and amber warning highlights.
*   **Color Strategy:** High-contrast, life-safety palette. Crisp white and soft warm slate backgrounds for dense educational content, deep obsidian for authoritative anchor blocks (Hero, Accreditation Banner, Footer), and rich amber-gold as the high-visibility primary action and credential accent.
*   **Creative Concept:** "Certified Field Readiness" — a structured, authoritative emergency training interface that balances official AHA/Red Cross curriculum rigor with accessible hands-on community and corporate training throughout Eastern Pennsylvania.
*   **Repeated Motif / Evidence-Bearing Signature:** "Cadence Marker" — an amber safety tick combined with official accreditation framing (subtle double-stroke border accents, clean credential pills, and county dispatch tags) applied to program cards, instructor credentials, and quote callouts.
*   **Signature Restraint:** Restrained mechanical borders and crisp accreditation badge rows. No gratuitous glowing gradients or synthetic UI counters; authority is established solely through real institutional affiliations (AHA, Red Cross, OSHA, ASHI, NFPA, PA Key Registry) and clear course tracks.
*   **Human Labels / Metadata Grammar:** Direct, functional labeling derived entirely from index.md: "Serving Eastern Pennsylvania", "AHA & Red Cross Approved Curriculums", "Custom Fit for Business & Industry", "Volunteer Fire Dept Relief-Approved".
*   **Linework Discipline:** Crisp structural border dividers in `border-border` and `border-dark-border`. Linework frames containers and badges cleanly without ever cutting through text or imagery.
*   **Copy Naturalness:** Direct, grounded, and reassuring tone honoring the original emergency service background of the instructors.

```
---DESIGN_MD_START---
## Visual Theme
High-trust, tactical life-safety educational portal. Clean crisp white and deep obsidian surfaces punctuated by emergency amber-gold highlights, structured typography, and prominent official accreditation seals.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(220 20% 14%)
- muted-foreground: hsl(218 11% 42%)
- border: hsl(220 13% 91%)
- surface: hsl(210 20% 98%)
- primary: hsl(43 96% 48%)
- primary-foreground: hsl(0 0% 8%)
- primary-hover: hsl(43 96% 40%)
- secondary: hsl(220 18% 16%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(220 18% 24%)
- dark-background: hsl(220 18% 10%)
- dark-foreground: hsl(0 0% 98%)
- dark-muted-foreground: hsl(218 12% 70%)
- dark-border: hsl(220 16% 20%)
- success: hsl(142 76% 36%)
- error: hsl(0 72% 51%)
- warning: hsl(38 92% 50%)
- amber-subtle: hsl(43 96% 94%)
- favicon-color: #F59E0B

## Typography
- Headlines: plus-jakarta-sans — authoritative, clear, contemporary grotesque with strong structural clarity
- Body: inter — ultra-legible, neutral, and accessible for dense training curriculums and regulatory details
- Scale: standard

## Components
- Motif: "Cadence Marker" — clean 2px amber accent lines, structured accreditation cards, and territorial county pills with `rounded-md` radius discipline
- Buttons: solid high-contrast pill/rounded-md shapes; primary in bold amber with dark high-legibility text (`bg-primary text-primary-foreground font-semibold shadow-sm hover:bg-primary-hover`), secondary with crisp slate borders
- Containers: clean white or slate cards with subtle 1px border (`border-border`), soft inner padding, and crisp header markers
- Accent architecture: amber lives on primary action buttons, key stat bullet markers, active course tags, and territorial dispatch badges; obsidian dark backgrounds anchor the Hero, Instructor Pedigree, and Footer
- Sections: py-12 md:py-20 rhythm with alternating clean white, tinted slate surface, and authoritative dark obsidian sections
- Motion: CSS-only subtle hover transitions on course cards (`transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`) and mobile drawer slide

## Do's and Don'ts
- DO showcase the official accreditation logos (AHA, Red Cross, OSHA, ASHI, NFPA, PA Key) on clean contrasting backgrounds
- DO display the emergency phone number (484-334-3577) prominently in the nav, hero, and quote sections
- DO present all 9 distinct training programs clearly so businesses and healthcare workers find their required certification immediately
- DON'T use pure black (#000000) or jarring yellow (#FFC314) without balanced tone modernization
- DON'T hide the Hamburg/Lenhartsville PA local address and multi-county regional coverage
- DON'T invent artificial reviews, stars, or unverified statistical counters
---DESIGN_MD_END---
```

## 3. Sections

1. Header id="header" (Navigation component)
   → Top emergency utility strip with service counties + phone number (484-334-3577) + main brand nav with dropdown for Programs We Offer and direct Quote action.

2. Hero id="hero": DARK section (bg-dark-background, text-dark-foreground), layout: asymmetric-poster
   → content: Main headline "First Aid and CPR Certification Provided by KRE Security LLC", subhead "We Will Custom Fit Any Safety Program To Fit Your Business Model!", phone CTA + Quote CTA, regional coverage pills (Berks, Lehigh, Schuylkill, Lancaster, Lebanon, Montgomery, Chester, Bucks, Northampton, Carbon, Dauphin, Center City Philadelphia), paired with large training photo (Image 6) showing instructors in live CPR manikin session.

3. Accreditation & Regulatory Seals id="accreditations": LIGHT section (bg-surface, text-foreground), layout: proof-dashboard
   → content: Official curriculum compliance statement ("AHA and Red Cross Approved First Aid Training and CPR Certification Class taught in accordance with all rules, regulations, and standards"), featuring official logo assets: American Heart Association (Image 3/4), American Red Cross (Image 5), OSHA (Image 2), ASHI Approved Training Center (Image 13), NFPA Member (Image 11), and PA Key Registry Details (Image 8). Note on PA Volunteer Fire Department relief-approved training.

4. Programs We Offer id="programs": LIGHT section (bg-background, text-foreground), layout: object-catalog
   → content: Comprehensive grid of all 9 certified courses from index.md:
     - Heartsaver First Aid
     - Heartsaver CPR/AED
     - Friends & Family CPR Certification
     - BLS for Healthcare Providers (AHA / BLS Family of courses)
     - Pediatric First Aid
     - Bloodborne Pathogen Training (in accordance with OSHA 1910.1030 standard)
     - Fire Extinguisher Training (in-classroom safety instruction on use & operation)
     - PennDOT Flagger Certification
     - Red Cross CPR & First Aid Courses
     Each card with scope summary, target audience (healthcare providers, lay rescuers, businesses, daycares), and direct quote request affordance.

5. About & Practical Training Methodology id="about": LIGHT section (bg-surface, text-foreground), layout: image-led-editorial
   → content: "ABOUT OUR CPR & FIRST AID TRAINING Serving Eastern Pennsylvania", 35+ years of combined field and academic teaching experience, ongoing training in educational environments, certified teaching backgrounds & security clearances, and introduction of up-to-date realistic CPR, First Aid, and AED tools/manikins. Accompanied by classroom training photo (Image 7) and training video embed (CDN video).

6. 5 Reasons First Aid Training is Essential id="why-first-aid": LIGHT section (bg-background, text-foreground), layout: process-rail
   → content: "5 Reasons Learning First Aid is Important for Anyone to Know" (verbatim points from index.md):
     1. First Aid Saves Lives (Red Cross survey insights)
     2. Reduce Recovery Time (early intervention & deep cut bleeding management)
     3. Prioritize Injuries (treat the most pressing first)
     4. Save a Trip to the Hospital (smart assessment at home vs ER)
     5. Keep Your Family Safe (increased awareness and confidence for kids & family).

7. Meet Our Safety Training Instructor id="instructor": DARK section (bg-dark-background, text-dark-foreground), layout: founder-pov
   → content: Jarrod K. Emes (Owner and Instructor, Director of Security for KRE Security LLC). 20+ years Emergency Services / Fire Rescue / Emergency Management experience, municipal hazard mitigation planner, Alvernia College BA in Criminal Justice (Minor in Sociology), Saint Michael Archangel Award (2007), Berks Technical Institute Criminal Justice Advisory Board Member, former Deputy Coroner for Schuylkill County, Berks County Juvenile Detention Center & Dept of Emergency Services Special Projects Officer. Certified Instructor in AHA CPR, First Aid, Phazzer Non-Lethal, PA Act 235 Lethal Weapons Agent. Featured in Reading Eagle article "Post-9/11, A New World Emerges for Security". Paired with instructor photo (Image 9).

8. Service Area & Regional Reach id="service-area": LIGHT section (bg-surface, text-foreground), layout: location/trust panel
   → content: "OUR CPR CERTIFICATION & FIRST AID CLASSES SERVE:" regional service breakdown. Specific Pennsylvania cities and hubs: Reading, Pottsville, Allentown, Bethlehem, Easton, Lancaster, Lebanon, Pottstown, Philadelphia, Canton, Williamsport, Danville. Paired with regional map graphic (Image 10) and on-site corporate traveling dispatch details.

9. Contact & Custom Quote id="contact": LIGHT section (bg-background, text-foreground), layout: conversion footer
   → content: "CONTACT US FOR A QUOTE" interactive quote request form (Name, Organization, Phone, Email, Program of Interest, Estimated Group Size, Notes), direct call line (484-334-3577), email (jemes@kresecurity.com), Training Facility Address: 16600 Pottsville Pike, Hamburg, PA 19526, Main Office Address: 301 Chris Drive, Lenhartsville, PA 19534. Newsletter sign up box ("Stay Updated with Eastern PA Educators"). Payment notice: "We Are Fully Licensed and Insured. We Accept All Major Credit Cards and Payment Plans."

10. Footer (Footer component)
   → Dark obsidian footer with KRE Security public safety badge, certified training locations, complete program directory links, compliance statements, and copyright.

## 4. Layout Archetypes

HERO_TEXT_FIT: headline="First Aid and CPR Certification"; longest_token="Certification" (13 chars); chosen_architecture+text_zone=asymmetric-poster + lg:w-7/12 (60% width); chosen_scale=text-h1 default; fit_decision=text-h1 fits in chosen hero with 60% text zone and dedicated headline measure

HERO DECISION RECEIPT:
FIRST_VIEWPORT_JOB: Establish immediate authority as Pennsylvania's certified emergency CPR & First Aid educators with direct phone dispatch, corporate custom training guarantee, and authentic hands-on classroom imagery.
HERO_DECISION: chosen architecture = asymmetric-poster; candidates considered = [proof-dashboard (excellent for badges but delays visual manikin training context), immersive-place (risks text readability over the low-contrast carpet photo), split-composition (risks generic 50/50 look)]; native anchor = hands-on CPR manikin instruction + regional county coverage dispatch; DOM consequence = 7-col text zone with amber badge pill, bold h1, immediate tel/quote actions, and county tags, paired with 5-col framed high-res classroom training photo (Image 6) with certified KRE public safety training tag; source/asset support = Image 6 (1905x591) + scraped county coverage list + phone 484-334-3577; main risk = horizontal banner image cropping on desktop; mitigation = framed aspect-ratio card with subtle border and inner badge overlay; second composition moment = structured 9-card interactive curriculum matrix with dedicated AHA/OSHA badges.

FIRST_VIEWPORT_ARCHITECTURE: asymmetric-poster

## 5. Navigation

NAV_ARCHITECTURE: two-tier-local-utility
NAV_HERO_CONTRACT: flow-below-solid

**Top Utility Bar (Dark Charcoal `bg-[#121316]` text-white text-xs py-2):**
- Left: Regional Coverage marquee: "Serving Berks • Lehigh • Schuylkill • Lancaster • Lebanon • Montgomery • Chester • Bucks • Northampton • Carbon • Dauphin • Philadelphia"
- Right: Direct Phone affordance: "CALL TODAY: 484-334-3577" (tel link with phone icon) | "Hamburg Training Facility: 16600 Pottsville Pike"

**Main Navigation Bar (Solid `bg-dark-background/95 backdrop-blur-md` border-b border-dark-border sticky top-0 z-50):**
- Logo: Site logo (Image 1 or KRE Division of Public Safety Training Badge) styled at `h-12 md:h-14 w-auto object-contain`. Since the logo has an obsidian background and gold text, it integrates seamlessly into the dark navigation.
- Nav Links:
  - Home (`#hero`)
  - About (`#about`)
  - Programs We Offer (Dropdown containing: Heartsaver First Aid, Heartsaver CPR AED, Friends & Family CPR, BLS for Healthcare Providers, Pediatric First Aid, Bloodborne Pathogens, Fire Extinguisher, PennDOT Flagger, Red Cross Courses -> all pointing to `#programs`)
  - Accreditations (`#accreditations`)
  - Instructor (`#instructor`)
  - Service Area (`#service-area`)
  - Security Services (`https://www.kresecurity.com/` - external link with icon)
- Right Action: "Get Quote" button (`bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-md hover:bg-primary-hover transition-colors text-sm shadow-sm`).
- Mobile Menu: Solid slide-down drawer with clear grouped links and one-tap emergency call button.

## 6. Footer

- Background: `bg-dark-background` with `border-t border-dark-border`
- Layout: 4-column structured footer:
  - Column 1: Brand & Credential badge (Eastern PA Educators / KRE Security LLC Division of Public Safety Training), licensing notice ("We Are Fully Licensed and Insured. We Accept All Major Credit Cards and Payment Plans."), emergency phone & email.
  - Column 2: Certified Programs (Heartsaver First Aid/CPR, BLS Healthcare Provider, Pediatric First Aid, Fire Extinguisher, Bloodborne Pathogen, PennDOT Flagger).
  - Column 3: Training & Administrative Locations (Hamburg Training Center: 16600 Pottsville Pike, Hamburg PA 19526; Lenhartsville Main Office: 301 Chris Drive, Lenhartsville PA 19534; Regional Dispatch in Reading, Allentown, Bethlehem, Lancaster, Philadelphia).
  - Column 4: Regulatory Accreditations (American Heart Association, American Red Cross, OSHA Standard 1910.1030, ASHI, NFPA, PA Key Registry, PA Volunteer Fire Relief Approved).
- Bottom bar: Copyright ©2026 Eastern PA Educators. First Aid Training & CPR Certification Training in Eastern PA. Privacy Policy, Terms of Service, ADA Accessibility.

## 7. Files

MODIFY:
- `src/config/site.ts`
- `src/components/Navigation.astro`
- `src/components/Footer.astro`

CREATE:
- `src/components/home/Hero.astro`
- `src/components/home/Accreditations.astro`
- `src/components/home/Programs.astro`
- `src/components/home/AboutTraining.astro`
- `src/components/home/WhyFirstAid.astro`
- `src/components/home/InstructorProfile.astro`
- `src/components/home/ServiceArea.astro`
- `src/components/home/ContactQuote.astro`

## 8. Image Assignment & Sizing

1. **Logo (Image 1, 843x325px landscape / Image 12, 84x90px):** Main Navigation & Footer header. Display at `h-12 md:h-14 w-auto object-contain`. Sits naturally on dark navbar.
2. **Hero Classroom CPR Session (Image 6, 1905x591px landscape):** Hero right/bottom asymmetric column. Display within a framed container at `w-full max-h-[460px] object-cover rounded-lg border border-dark-border shadow-xl`.
3. **Accreditation Marks (Images 2, 3, 4, 5, 8, 11, 13):**
   - OSHA Logo (Image 2, 100x29px) -> Light container card, max-w-[120px] h-auto.
   - AHA Logo (Image 3/4, 122x60px) -> Light container card, max-w-[130px] h-auto.
   - American Red Cross Logo (Image 5, 114x112px) -> Light container card, max-w-[90px] h-auto.
   - NFPA Member Logo (Image 11, 79x90px) -> Light container card, max-w-[80px] h-auto.
   - ASHI Training Center Logo (Image 13, 67x70px) -> Light container card, max-w-[70px] h-auto.
   - PA Key Registry Graphic (Image 8, 228x330px portrait) -> Accreditations proof card, max-w-[180px] h-auto rounded border shadow-sm.
4. **Classroom Instruction Detail (Image 7, 526x294px landscape):** About Training section. Display in a framed container `max-w-[526px] w-full h-auto rounded-lg border border-border shadow-md`.
5. **CDN Video (526x294px mp4):** Embedded alongside Image 7 in the About Training section with native video controls and poster thumbnail.
6. **Jarrod K. Emes Portrait (Image 9, 174x244px portrait):** Instructor Section. Display in an authoritative profile card with `max-w-[200px] w-full h-auto rounded-lg border-2 border-primary/40 shadow-lg`.
7. **Regional Service Area Map (Image 10, 969x508px landscape):** Service Area section. Display within a card `max-w-[720px] w-full h-auto rounded-lg border border-border shadow-md`.

## 9. Build Efficiency

Execute all updates systematically:
1. Update `src/config/site.ts` with brand metadata, links, contact details, and program index.
2. Create all modular section components in `src/components/home/`.
3. Update `Navigation.astro` and `Footer.astro` with complete two-tier utility layout and contrast pairing.
4. Verify accessibility contrast on amber buttons (`text-black font-semibold`) and test responsive menu behavior.

## 10. Final Anti-Template QA

- **No generic 50/50 placeholder hero:** The hero combines a multi-county dispatch ticker, direct 484 phone badge, and genuine classroom training photo with KRE Division of Public Safety accreditation badges.
- **Accreditation clarity:** All 6 verified certifying bodies (American Heart Association, American Red Cross, OSHA, ASHI, NFPA, PA Key) are given genuine structural weight.
- **Course comprehensiveness:** Every single course from index.md (BLS Healthcare Provider, Heartsaver CPR/AED, Pediatric, Flagger, Fire Extinguisher, Bloodborne Pathogen) has its own clear card with specific regulatory notes.
- **Real founder credentials:** Jarrod K. Emes's verified 20-year background (Deputy Coroner, Fire/Rescue, Reading Eagle profile, St. Michael Archangel Award) is rendered with editorial dignity rather than generic marketing claims.
- **Functional conversion:** Contact section includes exact training facility address in Hamburg, PA and administrative office in Lenhartsville, PA with phone, email, and custom business quote fields.

## 7. Image Sizing Rules

**CRITICAL: Never upscale images - causes blur/pixelation.**

| Image Type | Rule | Example |
|------------|------|---------|
| Logo (nav) | max-h-8 to max-h-12, w-auto | `class="h-10 w-auto"` |
| Logo (footer) | Same or slightly larger | `class="h-12 w-auto"` |
| Hero | Full width ONLY if image >= 1200px wide AND landscape | `class="w-full object-cover"` |
| Portrait (tall) | Constrain to actual width, never w-full | `class="max-w-[Xpx] h-auto object-cover"` |
| Content | Never exceed original dimensions | Use max-w-[Xpx] |
| Cards | Fixed aspect ratio | `class="aspect-video object-cover"` |
| Small images (<400px) | Use in cards/thumbnails only | `class="max-w-[Xpx] object-cover"` |

### Detected Images

- **Logo** Logo: Main site logo from branding (843x325px): Use h-8 to h-12 with w-auto. Never stretch.
- **SMALL** Section: ABOUT OUR CPR & FIRST AID TRAINING  [Serving Eastern Pennsylvania](/\#servicearea) | About (100x29px): Use in card/thumbnail only. Set max-w-[100px].
- **SMALL** Section: ABOUT OUR CPR & FIRST AID TRAINING  [Serving Eastern Pennsylvania](/\#servicearea) | About (122x60px): Use in card/thumbnail only. Set max-w-[122px].
- Section: FIRST AID AND CPR CERTIFICATION  CLASSES | Anchor 1: Use object-cover, respect original size.
- **SMALL** Section: FIRST AID AND CPR CERTIFICATION  CLASSES | Anchor 1 (114x112px): Use in card/thumbnail only. Set max-w-[114px].
- Section: [First Aid and CPR Certification](/) | We Will Custom Fit Any Safety Program (1905x591px): Use object-cover, respect original size.
- **SMALL** Section: ABOUT OUR CPR & FIRST AID TRAINING  [Serving Eastern Pennsylvania](/\#servicearea) | Our CPR certification and first aid instructors have over 35 years of experience in the field and ac (526x294px): Use in card/thumbnail only. Set max-w-[526px].
- **SMALL** Section: ABOUT OUR CPR & FIRST AID TRAINING  [Serving Eastern Pennsylvania](/\#servicearea) | Our CPR certification and first aid instructors have over 35 years of experience in the field and ac (228x330px): Use in card/thumbnail only. Set max-w-[228px].
- **SMALL** Section: MEET OUR SAFETY TRAINING INSTRUCTOR | Owner and Instructor (174x244px): Use in card/thumbnail only. Set max-w-[174px].
- Section: OUR CPR CERTIFICATION & FIRST AID CLASSES SERVE: | 1. First Aid Saves Lives. Based on a Red Cross survey, over half of deaths can be prevented if more  (969x508px): Use object-cover, respect original size.
- **SMALL** Firecrawl image extraction (79x90px): Use in card/thumbnail only. Set max-w-[79px].
- **SMALL** Firecrawl image extraction (84x90px): Use in card/thumbnail only. Set max-w-[84px].
- **SMALL** Firecrawl image extraction (67x70px): Use in card/thumbnail only. Set max-w-[67px].

**NEVER set width/height larger than original_width/original_height from fetch_scraped_image.**