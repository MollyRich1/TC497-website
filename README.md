# Molly Rich — Portfolio Website

**Computer Science Student | University of Michigan**

> *"I blend research, design, and engineering to shape the what and deliver the how."*

A personal portfolio site built from scratch with vanilla HTML, CSS, and JavaScript — no framework, no build step. The design is deliberately editorial: warm paper tones, a serif/sans type pairing, and hairline rules instead of cards and shadows.

## 🔗 Links

[**View the live site**](https://mollyrich1.github.io/Portfolio/) · [Download résumé](Molly_Rich_Resume.pdf)

## 👩‍💻 About

I'm a senior at the University of Michigan studying Computer Science, passionate about blending creativity and technology to bring ideas to life. Originally from Scottsdale, Arizona, I chose Michigan to grow beyond my comfort zone and join an environment that challenges me to become my best self.

Outside of academics I stay inspired through fitness, running, and sewing — habits that sharpen my discipline and fuel my creativity.

## 🛠️ Skills

**Product & Design** — Figma, Linear, Jira
**Data & Analytics** — SQL, Python, Excel
**Engineering** — JavaScript, C/C++, React, Flask, Django, CSS, Bootstrap, Git

## 🏆 Featured Projects

### Quack!
An MHacks hackathon project that helps users solve coding problems through playful, intuitive explanations, using AI as a teaching assistant.
**React · Python · AI** — [Code](https://github.com/muhrauf12/Quack-)

### Epsilon Eta
Designed and developed a responsive website for Epsilon Eta, highlighting recruitment, leadership, and chapter initiatives.
**HTML/CSS · JavaScript · Figma** — [Live site](https://www.epsilonetaumich.org/) · [Code](https://github.com/MollyRich1/Eta_Umich)

### Tau Epsilon Kappa
As Web Development Chair, refreshed the chapter site with a retro-futurism inspired rush page while improving reliability through bug fixes and ongoing maintenance.
**HTML/CSS · JavaScript · Responsive Design** — [Live site](https://tauepsilonkappa.com/) · [Code](https://github.com/tauepsilonkappa/tauepsilonkappa.github.io)

## 🎯 Campus Involvement

**Tau Epsilon Kappa** — Web Development Chair, VP Internal Affairs
Led website updates and organized professional and social events to strengthen chapter culture.

**The Michigan Daily** — Data Team Manager, Web & Data Team
Drove the idea-to-publication process for data stories, blending analysis with storytelling impact.

**Claude Builder Club** — Builder
Build real applications alongside peers using Claude Code, from prototyping features to shipping projects.

## 🎨 Design Notes

The site went through a deliberate redesign away from template defaults:

- **One continuous surface.** A single warm `#faf8f5` paper background runs the full page, with hairline rules marking section boundaries instead of alternating background fills.
- **Type as the accent.** Instrument Serif for display headings paired with Inter for body copy. There is no accent color — links are ink with underlines.
- **No cards.** Projects and involvement entries sit directly on the page, separated by rules rather than floating in shadowed rounded rectangles.
- **Design tokens.** The warm neutral ramp and both type families are defined once as CSS custom properties in `:root`, so the palette can be retuned in one place.

## ⚙️ Technical Notes

**Stack:** Semantic HTML5, CSS3 (Grid and Flexbox), vanilla JavaScript. Icons from Font Awesome, type from Google Fonts.

**Features:**
- Fixed navigation with a mobile hamburger menu and smooth scrolling
- Scroll-triggered fade-in animations via the Intersection Observer API
- Contact form wired to EmailJS with client-side validation and inline status feedback
- Responsive layouts at 768px and 480px breakpoints
- Résumé download

**Running locally:** there's no build step, so any static server works:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

**Deployment:** GitHub Pages serves `main` at the repository root. Pushing to `main` publishes automatically.

## 🌿 Branches

Alternate hero treatments explored during the redesign are preserved for reference:

| Branch | Treatment |
|---|---|
| `main` | Editorial — warm paper, serif display, accentless |
| `redesign/hero-dark` | Slate ink with a blue accent |
| `redesign/hero-michigan` | Michigan navy with a maize accent |
| `redesign/hero-radial` | Single-hue radial glow with a dot grid |

## 📞 Contact

**Email:** mollyri@umich.edu
**LinkedIn:** [linkedin.com/in/molly-rich-8ab403294](https://www.linkedin.com/in/molly-rich-8ab403294/)
**GitHub:** [github.com/MollyRich1](https://github.com/MollyRich1)
**Location:** Ann Arbor, MI · Scottsdale, AZ
