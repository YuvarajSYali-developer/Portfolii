# Design Guidelines for Yuvaraj S Yali Portfolio

## Design Approach: Reference-Based

**Primary References:** Linear (clean typography & spacing), Vercel (developer aesthetic), Stripe (clarity & professionalism)

**Design Principle:** Create a sophisticated developer portfolio that balances technical credibility with visual polish. The design should feel like a product showcase rather than a traditional resume site.

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 15 6% 9% (slate-950)
- Surface: 217 33% 17% (slate-800)
- Text Primary: 210 20% 98%
- Text Secondary: 215 20% 65%
- Accent Primary: 189 94% 43% (cyan-500)
- Accent Hover: 188 86% 53% (cyan-400)

**Light Mode:**
- Background: 0 0% 100%
- Surface: 210 20% 98%
- Text Primary: 222 47% 11%
- Text Secondary: 215 16% 47%
- Accent Primary: 189 94% 43%
- Accent Hover: 191 91% 36%

### B. Typography

**Font Stack:**
- Primary: Inter (400, 500, 600, 700)
- Headings: Poppins (600, 700) for impact
- Code/Tech: JetBrains Mono for tech stack badges

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Titles: text-3xl md:text-4xl font-semibold
- Card Titles: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small Text: text-sm

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Card padding: p-6 md:p-8
- Element gaps: gap-6 md:gap-8

**Container Strategy:**
- Max width: max-w-7xl mx-auto px-6 md:px-8
- Content width: max-w-4xl for text-heavy sections
- Full bleed: Use w-full for hero and featured sections

### D. Component Library

**Navigation:**
- Fixed top navbar with backdrop blur (backdrop-blur-lg bg-slate-950/80)
- Logo left, nav links center, theme toggle + CTA right
- Mobile: Hamburger menu with slide-in drawer
- Active state: Cyan underline indicator

**Hero Section:**
- Full viewport height (min-h-screen) with gradient overlay
- Large hero image of workspace/code setup (blurred background)
- Centered content with animated text reveal
- Dual CTAs: "View Projects" (solid cyan) + "Download Resume" (outline with blur backdrop)
- Floating stats cards: "5+ Projects", "3 Certifications", "2 Active Internships"

**Project Cards:**
- Glass-morphism effect: backdrop-blur-md bg-slate-800/50 border border-slate-700
- Hover: Lift effect (hover:-translate-y-2) + cyan glow shadow
- Layout: Thumbnail top (16:9), title, 2-line description, tech badges, KPI metric, action buttons
- Tech badges: Pill-shaped, small icons + text, gray with cyan on hover

**Skill Pills:**
- Grouped by category with subtle dividers
- Icon + label format
- Interactive hover: Scale + cyan accent border

**Timeline Component:**
- Vertical line with cyan dots for milestones
- Alternating left-right layout on desktop
- Card-based entries with role, company, duration, key achievements

**Contact Form:**
- Floating labels on focus
- Cyan accent on active input borders
- Success/error states with smooth transitions
- Serverless submission with loading spinner

**Footer:**
- Three-column grid: About/Quick Links/Social
- Social icons: Hover scale + cyan color
- Newsletter signup inline form

### E. Animations

**Minimal & Purposeful:**
- Page transitions: Fade in content on load (duration-300)
- Scroll reveals: Fade up on viewport enter (intersection observer)
- Hover states: Scale 1.05 for cards, translate-y-2 for lift
- Theme toggle: Smooth 200ms transition
- NO parallax, NO excessive scroll animations

---

## Page-Specific Layouts

**Home Page:**
1. Hero: Full viewport with workspace image, animated tagline, floating stat cards
2. Featured Projects: 3-column grid (1 col mobile), top 3 projects with large cards
3. Skills Snapshot: Icon grid with hover interactions, "View All" link to About
4. Testimonials: 2-column grid with endorsement cards (Shivamogga Smart City)
5. Quick Contact: Inline form with CTA

**Projects Page:**
- Filter tabs: All/Web Dev/IoT/Design
- Masonry grid layout (2-3 columns)
- Each card shows project thumbnail, detailed metrics, tech stack, links
- Search bar with instant filter

**About Page:**
- Hero: Profile image left, bio right (split layout)
- Skills: Organized in expandable categories with progress indicators
- Certifications: Badge grid with credential links
- Fun facts: Personal touch with icons

**Resume Page:**
- Interactive timeline as hero
- Downloadable PDF button (prominent, cyan)
- Experience cards with company logos
- Education section minimal

**Contact Page:**
- Split layout: Form left (60%), Contact info + map right (40%)
- Social links prominent
- Availability status indicator

---

## Images

**Hero Section:** 
- Large background image: Modern workspace setup with dual monitors showing code/design work, slightly blurred with dark overlay (opacity-70)
- Alternative: Abstract gradient mesh in cyan/slate tones

**Project Cards:**
- Screenshot or mockup for each project (16:9 ratio)
- CivilInc: Dashboard screenshot
- Chess Analyzer: Analytics dashboard
- Quick Byte: Figma mockup
- Smart Valve: Hardware setup photo
- AHMS: Map/dashboard hybrid

**About Page:**
- Professional headshot or creative developer portrait (circular, 300px)

**Placement Strategy:**
- All images use object-cover with dark overlay for text readability
- Lazy loading for performance
- Optimized formats (WebP with fallbacks)

---

## Accessibility & Performance

- Semantic HTML5: header, nav, main, section, article, footer
- ARIA labels for all interactive elements
- Keyboard navigation: Visible focus rings (ring-2 ring-cyan-400)
- Color contrast: WCAG AAA compliance
- Skip to content link
- Reduced motion support (@media prefers-reduced-motion)

---

## Responsive Breakpoints

- Mobile: < 640px (single column, stacked layout)
- Tablet: 640px - 1024px (2-column grids)
- Desktop: > 1024px (3-column grids, full layouts)