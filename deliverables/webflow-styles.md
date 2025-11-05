# Webflow Styles Guide - EfSVP
*Basé sur le chunk #1 (lignes 0-1000) de index.html*

## 1. Styles Globaux

### Typographie
```
Font Primary (Headings): Playfair Display
  - Weights: 400, 500, 600, 700, 800, 900

Font Secondary (Body): Inter
  - Weights: 400, 500, 600, 700, 800

Font Accent: Cormorant
  - Weight: 600 Italic
```

### Couleurs de Base
```
Primary: #b8441e
Secondary: #e8924f
Accent Gold: #d4af37
Dark Brown: #7d2e2e
Dark Grey: #2d2d2d
Cream: #f5e6d3
White: #ffffff
```

### Gradients (Custom CSS)
```css
.gradient-primary {
  background: linear-gradient(135deg, #b8441e 0%, #e8924f 100%);
}

.gradient-gold {
  background: linear-gradient(135deg, #e8924f 0%, #d4af37 100%);
}

.gradient-dark {
  background: linear-gradient(135deg, #2d2d2d 0%, #7d2e2e 100%);
}

.gradient-dark-red {
  background: linear-gradient(135deg, #7d2e2e 0%, #b8441e 100%);
}

.gradient-cream {
  background: linear-gradient(135deg, #f5e6d3 0%, #d4af37 100%);
}
```

## 2. Layout Utilities

### Container
```
.container
  - Max-width: TODO (à déterminer dans CSS)
  - Padding gauche/droite: TODO
  - Centré (margin: auto)
```

### Section
```
.section
  - Padding vertical: TODO (à déterminer dans CSS)
```

### Section Header
```
.section__header
  - Text-align: center
  - Margin-bottom: TODO

.section__title
  - Font: Playfair Display
  - Size: TODO (probablement 2.5-3rem)
  - Weight: 700

.section__subtitle
  - Font: Inter
  - Size: TODO
  - Color: text-secondary
```

## 3. Navigation

### Nav Component
```
.nav
  - Position: sticky/fixed
  - Background: TODO (transparent ou blanc)
  - Z-index: élevé

.nav__container
  - Display: flex
  - Justify: space-between
  - Align: center

.nav__logo
  - Font: Playfair Display
  - Weight: 700

.nav__list
  - Display: flex
  - Gap: TODO

.nav__link
  - Font: Inter
  - Hover: TODO

.nav__cta
  - Class: btn btn--primary-small

.nav__toggle (Mobile)
  - Hamburger menu
  - 3 spans pour lignes
```

## 4. Buttons

### Base Button
```
.btn
  - Display: inline-flex
  - Align-items: center
  - Gap: TODO (pour icône)
  - Padding: TODO
  - Border-radius: TODO
  - Font: Inter
  - Transition: TODO

.btn__icon
  - SVG icon
  - Width/Height: 24px
```

### Variants
```
.btn--primary
  - Background: Primary gradient
  - Color: white

.btn--primary-small
  - Taille réduite pour nav

.btn--hero
  - Taille extra pour hero CTA

.btn--secondary
  - Background: transparent ou surface
  - Border: TODO
  - Color: primary
```

### States
```
[data-glow]
  - Effet de glow au hover (TODO: détails)
```

## 5. Hero Section

### Hero
```
.hero
  - Position: relative
  - Height: 100vh ou TODO
  - Display: flex
  - Align: center
  - Justify: center

.hero__video-container
  - Position: absolute
  - Inset: 0
  - Overflow: hidden

.hero__video-placeholder
  - Fallback background

.hero__overlay
  - Position: absolute
  - Inset: 0
  - Background: rgba overlay pour lisibilité

.hero__content
  - Position: relative
  - Z-index: 1
  - Text-align: center
  - Color: white

.hero__title
  - Font: Playfair Display
  - Size: TODO (grand, responsive)
  - Weight: 700
  - Line-height: TODO

.hero__title-line
  - Display: block

.hero__title-line--primary
  - Style spécial ligne 1

.hero__title-line--secondary
  - Style spécial ligne 2

.hero__subtitle
  - Font: Inter
  - Max-width: TODO (pour lisibilité)
  - Margin: auto

.hero__cta-group
  - Margin-top: TODO

.hero__trust-metrics
  - Display: flex
  - Gap: TODO
  - Justify: center

.hero__metric
  - Text-align: center
  - strong: Font-size grand
  - span: Font-size petit, opacité réduite

.hero__scroll
  - Position: absolute
  - Bottom: TODO
  - Animation: bounce/chevron
```

## 6. Audio Section (Bento Grid)

### Bento Grid
```
.bento-grid
  - Display: grid
  - Grid-template-columns: TODO (responsive)
  - Gap: TODO

.bento-item
  - Background: surface
  - Border-radius: TODO
  - Padding: TODO

.bento-item--large
  - Grid-column: span 2 ou TODO

.bento-item--medium
  - Taille standard

.bento-item--card
  - Variant pour info cards
```

### Audio Player
```
.audio-player
  - Composant complexe

.audio-player--featured
  - Version grande avec artwork

.audio-player--standard
  - Version compacte

.audio-player--list
  - Version mini liste

.audio-player__artwork
  - Width/Height: TODO
  - Border-radius: TODO

.audio-player__artwork-placeholder
  - Background: gradient

.audio-player__info
  - Padding: TODO

.audio-player__badge
  - Font-size: small
  - Padding: TODO
  - Background: TODO
  - Border-radius: TODO

.audio-player__title
  - Font: Playfair Display

.audio-player__client
  - Font: Inter
  - Color: text-secondary

.audio-player__controls
  - Display: flex
  - Align: center
  - Gap: TODO

.audio-player__play
  - Button circulaire
  - Background: primary
  - SVG icons (play/pause toggle)

.audio-player__waveform
  - Canvas ou div pour waveform
  - Flex-grow: 1

.audio-player__time
  - Display: flex
  - Gap: TODO
  - Font-size: small
```

### Info Card
```
.info-card
  - Text-align: center
  - Padding: TODO

.info-card__number
  - Font: Playfair Display
  - Size: très grand (3-4rem)
  - Weight: bold

.info-card__title
  - Text-transform: lowercase

.info-card__text
  - Font-size: small

.info-card--accent
  - Background ou border accent
```

### Quote Card
```
.quote-card
  - Padding: TODO

.quote-card__icon
  - SVG quote marks
  - Size: TODO
  - Opacity: TODO

.quote-card__text
  - Font: Cormorant italic ou Inter
  - Font-size: TODO

.quote-card__author
  - Font-style: normal
  - Font-size: small
  - Color: text-secondary
```

## 7. Case Cards (Flagship Cases)

### Case Card
```
.case-card
  - Display: flex ou grid
  - Background: surface
  - Border-radius: TODO
  - Overflow: hidden

.case-card--featured
  - Variante mise en avant

.case-card__visual
  - Position: relative
  - Height: TODO ou aspect-ratio

.case-card__gradient
  - Position: absolute
  - Inset: 0
  - Background: gradient (inline style)

.case-card__badge
  - Position: absolute
  - Top/Left: TODO
  - Background: white/surface
  - Padding: TODO
  - Border-radius: TODO

.case-card__tag-featured
  - Badge spécial "Création phare"

.case-card__content
  - Padding: TODO

.case-card__title
  - Font: Playfair Display
  - Weight: 600

.case-card__client
  - Font: Inter
  - Color: text-secondary

.case-card__story
  - Margin-top: TODO

.case-card__step
  - Margin-bottom: TODO

.case-card__step-title
  - Font-weight: 600
  - Emoji prefix

.case-card__metric
  - Font-weight: 700
  - Color: accent

.case-card__audio-btn
  - Display: flex
  - Align: center
  - Gap: TODO
  - Padding: TODO
  - Background: transparent
  - Border: TODO
  - Hover: TODO
```

## 8. Service Cards

### Service Card
```
.service-card
  - Background: surface
  - Border: TODO
  - Border-radius: TODO
  - Padding: TODO
  - Text-align: center

.service-card--featured
  - Border: accent ou special
  - Background: subtle gradient

.service-card__icon
  - Width/Height: TODO (48px-64px)
  - Margin-bottom: TODO
  - SVG stroke

.service-card__badge
  - Font-size: small
  - Color: accent
  - Font-weight: 600

.service-card__badge--featured
  - Variant pour featured

.service-card__featured-badge
  - Position: absolute top ou label spécial

.service-card__title
  - Font: Playfair Display

.service-card__features
  - List-style: none
  - Padding: 0
  - li: marge entre items

.service-card__cta
  - Button link
  - Display: inline-flex
  - Align: center
  - Gap: TODO
```

## 9. Portfolio Section

### Portfolio
```
.portfolio__stats
  - Display: flex
  - Align: center
  - Justify: center
  - Gap: TODO

.portfolio__stat
  - Font: Playfair Display
  - Size: grand
  - Weight: bold
  - [data-counter]: animation de compteur

.portfolio__separator
  - Margin: 0 1rem
```

### Filters
```
.filters
  - Display: flex
  - Flex-wrap: wrap
  - Gap: TODO
  - Justify: center

.filters__group
  - Display: flex
  - Gap: TODO

.filter
  - Padding: TODO
  - Border: TODO
  - Border-radius: TODO (pill shape)
  - Background: transparent
  - Transition: TODO

.filter.is-active
  - Background: primary
  - Color: white

.filter:hover
  - Border-color: primary ou transform
```

### Portfolio Grid
```
.portfolio__grid
  - Display: grid
  - Grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
  - Gap: TODO
```

### Portfolio Card
```
.portfolio-card
  - Position: relative
  - Background: surface
  - Border-radius: TODO
  - Overflow: hidden
  - [data-category]: pour filtrage JS
  - [data-client]: pour filtrage JS
  - [data-type]: pour filtrage JS

.portfolio-card__visual
  - Position: relative
  - Height: TODO ou aspect-ratio (16:9 ?)

.portfolio-card__overlay
  - Position: absolute
  - Inset: 0
  - Background: gradient overlay

.portfolio-card__color
  - Position: absolute
  - Inset: 0
  - Background: gradient (inline style)

.portfolio-card__content
  - Padding: TODO

.portfolio-card__tag
  - Display: inline-block
  - Font-size: small
  - Padding: TODO
  - Background: TODO
  - Border-radius: TODO

.portfolio-card__title
  - Font: Playfair Display
  - Weight: 600

.portfolio-card__client
  - Font-weight: 600

.portfolio-card__year
  - Color: text-secondary

.portfolio-card__description
  - Font-size: small
  - Line-height: TODO
```

## 10. Utility Classes

### Animations/Interactions
```
[data-scroll]
  - Élément avec scroll animation (Intersection Observer)

[data-lift]
  - Hover lift effect (transform: translateY)

[data-glow]
  - Hover glow effect

[data-reveal="scale"]
  - Scale reveal animation

[data-counter]
  - Compteur animé

[data-scroll-to]
  - Scroll smooth vers section
```

### Accessibility
```
.skip-link
  - Position: absolute
  - Top: -100%
  - Focus: top: 0 (visible)

.sr-only
  - Screen reader only
  - Position: absolute
  - Width: 1px
  - Height: 1px
  - Clip: rect(0,0,0,0)
```

### Grid System
```
TODO (à compléter chunk #2)
- Chercher grid-12 ou grid system
```

### Spacing
```
TODO (à compléter chunk #2)
- stack-16, stack-24, etc.
- gap utilities
```

## 11. Composants Manquants (TODO Chunk #2)

- Process section
- FAQ section
- Contact form
- Footer
- Testimonials (si autre que quote card)
- Stats section dédiée
- Team section (si présente)
- Modal/Lightbox (si présent)

## Notes d'Implémentation Webflow

1. **Collections Recommandées** :
   - Projects (portfolio items)
   - Audio Tracks
   - Case Studies
   - Services
   - FAQ items

2. **Custom Code Nécessaire** :
   - Audio player (WaveSurfer.js ou similaire)
   - Filtres portfolio avec animation
   - Scroll animations (Intersection Observer)
   - Compteurs animés
   - Video background avec fallback

3. **Interactions Webflow** :
   - Nav sticky avec background change
   - Hover states (lift, glow)
   - Mobile menu toggle
   - Filter active state

4. **Responsive Breakpoints** :
   - Desktop: 1440px+
   - Tablet: 768px-1439px
   - Mobile: <768px
   - (À confirmer dans le CSS)

---

*Document généré à partir du chunk #1. Nécessite complétion avec chunks suivants pour les sections manquantes et détails CSS précis.*
