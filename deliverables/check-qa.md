# Checklist QA - 30 Points de Contrôle

**Projet** : EfSVP - Webflow Migration
**Version** : 1.0
**Date** : Avant mise en production

---

## 1. Design System & Cohérence Visuelle (8 points)

### 1.1 Couleurs
- [ ] **Palette respectée** : Toutes couleurs utilisées sont dans `design-tokens.json` (pas de couleurs "orphelines")
- [ ] **Contraste texte/fond** : Minimum AA (4.5:1) pour texte body, AAA (7:1) pour texte important
  - Tester avec [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - Texte principal (#1d2c3b) sur fond (#fbf8f3) : ✅ OK
- [ ] **Pas de dégradés hors palette** : Seuls gradients définis dans tokens (primary, gold, dark, etc.)

### 1.2 Typographie
- [ ] **Fonts chargées** : Playfair Display, Inter, Cormorant visibles (pas de fallback system)
- [ ] **Échelle cohérente** : Tailles respectent scale (clamp ou fixed sizes)
- [ ] **Line-heights** : Entre 1.3-1.7 selon contexte (tight pour titres, relaxed pour body)
- [ ] **Pas de texte < 14px** : Minimum 0.875rem (sauf micro-labels justifiés)

### 1.3 Spacing & Layout
- [ ] **Container max-width** : 1280px respecté partout
- [ ] **Spacing scale** : Marges/paddings utilisent multiples de 4px (0.25rem)
  - Pas de valeurs arbitraires (ex: 13px, 37px)

### 1.4 Border Radius & Shadows
- [ ] **Radius cohérents** : xs/sm/md/lg selon hiérarchie (pas de 7px, 15px custom)
- [ ] **Shadows uniformes** : Utilisation shadow scale (xs → 2xl selon élévation)
- [ ] **Pas d'ombres trop dures** : Blur min 4px, opacity < 0.2

---

## 2. Responsive & Cross-Device (5 points)

### 2.1 Breakpoints
- [ ] **Desktop Large (1920px)** : Layout ne casse pas, container centré
- [ ] **Desktop Standard (1440px)** : Expérience optimale
- [ ] **Desktop Small (1280px)** : Container full, pas de scroll horizontal
- [ ] **Tablet (768px)** : Grids passent en 2 colonnes, nav hamburger
- [ ] **Mobile (375px)** : 1 colonne, textes lisibles, boutons tapables (min 44x44px)

### 2.2 Touch Targets
- [ ] **Boutons/links min 44x44px** : Sur mobile, zones touch confortables
- [ ] **Espacement touch** : Min 8px entre éléments cliquables adjacents

---

## 3. Navigation & UX (4 points)

### 3.1 Navigation Principale
- [ ] **Sticky fonctionne** : Nav reste visible au scroll, transition smooth
- [ ] **Active state** : Lien section actuelle visuellement distinct
- [ ] **Mobile menu** : Hamburger toggle, overlay, close icon
- [ ] **Tous liens internes fonctionnent** : Anchors (#hero, #contact) scrollent smooth

### 3.2 Formulaires
- [ ] **Contact form valide** : Email de notification reçu (check spam)
- [ ] **Labels visibles** : Chaque input a label (pas seulement placeholder)
- [ ] **États d'erreur** : Messages clairs si validation échoue
- [ ] **Loading state** : Spinner/feedback pendant envoi

---

## 4. Accessibilité (6 points)

### 4.1 Sémantique HTML
- [ ] **Headings hiérarchie** : H1 unique, H2 → H3 → H4 logique (pas de sauts)
- [ ] **Landmarks ARIA** : `<nav>`, `<main>`, `<footer>`, sections avec aria-labelledby
- [ ] **Alt texts présents** : Toutes images (CMS field ou static alt)
- [ ] **Liens descriptifs** : Pas de "cliquez ici", mais "Découvrir nos projets"

### 4.2 Keyboard Navigation
- [ ] **Tab order logique** : Navigation clavier suit ordre visuel
- [ ] **Focus visible** : Outline ou ring sur tous éléments interactifs (pas de `outline: none` sans alternative)
- [ ] **Skip link** : "Aller au contenu principal" visible au focus (top de page)

---

## 5. Performance (4 points)

### 5.1 Core Web Vitals
- [ ] **LCP < 2.5s** : Largest Contentful Paint (hero image/video)
- [ ] **FID < 100ms** : First Input Delay (interactions réactives)
- [ ] **CLS < 0.1** : Cumulative Layout Shift (pas de "jump" au chargement)

### 5.2 Optimisations
- [ ] **Images lazy-loaded** : Below fold uniquement (hero eager)
- [ ] **Vidéo hero compressée** : < 5MB, autoplay muted, pas de son
- [ ] **Minify CSS/JS** : Webflow settings activés
- [ ] **Fonts preload** : Google Fonts preconnect dans `<head>`

---

## 6. Interactions & Animations (3 points)

### 6.1 Smoothness
- [ ] **Transitions fluides** : 0.2-0.3s, easing cohérent (cubic-bezier)
- [ ] **Pas de lag** : Animations 60fps (utiliser transform/opacity, pas left/top)
- [ ] **Hover states** : Tous boutons/liens ont feedback visuel

### 6.2 Scroll Animations
- [ ] **Reveal on scroll** : Elements `[data-scroll]` fade-in progressivement
- [ ] **Pas d'animations forcées** : Respect `prefers-reduced-motion`

---

## 7. Contenu & SEO (5 points)

### 7.1 Métadonnées
- [ ] **Title unique** : Max 60 caractères, inclut marque
- [ ] **Meta description** : 150-160 caractères, actionnable
- [ ] **OG tags** : og:title, og:description, og:image (1200x630px)
- [ ] **Favicon** : SVG uploadé, visible dans onglet

### 7.2 Contenu
- [ ] **Orthographe FR** : Pas de fautes, ponctuation correcte (guillemets « », espaces insécables)
- [ ] **Hiérarchie claire** : Sections bien titrées, sous-titres descriptifs
- [ ] **CTA visibles** : Boutons d'action au-dessus de la ligne de flottaison

---

## 8. Fonctionnalités Spécifiques (5 points)

### 8.1 Portfolio Filtres
- [ ] **Filtres multi-groupe fonctionnent** : Client + Type combinables
- [ ] **Animation filtre** : Fade/slide smooth lors du tri
- [ ] **Reset filter** : Bouton "Tout" réaffiche tous projets
- [ ] **Pas de projets orphelins** : Chaque projet a au moins 1 tag valide

### 8.2 Collections CMS
- [ ] **Projects liés** : Images, textes affichés correctement
- [ ] **FAQ accordion** : Click expand/collapse fonctionne
- [ ] **Stats dynamiques** : Si CMS, compteurs animés au scroll
- [ ] **Pagination/Load more** (si > 12 projets) : Fonctionnel

### 8.3 Vidéo Hero
- [ ] **Autoplay muted loop** : Vidéo démarre auto (sans son)
- [ ] **Fallback** : Si vidéo fail, image placeholder visible
- [ ] **Mobile optimized** : Vidéo s'adapte, pas de débordement

---

## 9. Cross-Browser (3 points)

### 9.1 Navigateurs Desktop
- [ ] **Chrome** (dernière version) : Layout parfait
- [ ] **Firefox** (dernière version) : Fonts, spacing OK
- [ ] **Safari** (macOS) : Vidéo, gradients, animations OK
- [ ] **Edge** (dernière version) : Pas de bugs spécifiques

### 9.2 Navigateurs Mobile
- [ ] **Safari iOS** : Touch, scroll, forms OK
- [ ] **Chrome Android** : Performance acceptable

---

## 10. Sécurité & Conformité (2 points)

### 10.1 HTTPS & SSL
- [ ] **Certificat SSL valide** : Cadenas vert, pas d'avertissement
- [ ] **Redirect HTTP → HTTPS** : Forcé dans Webflow settings
- [ ] **HSTS activé** : Header Strict-Transport-Security

### 10.2 RGPD & Cookies
- [ ] **Cookie banner** : Affiché au premier visit, options Accepter/Refuser
- [ ] **Pas de tracking sans consentement** : Google Analytics conditionnel
- [ ] **Liens légaux** : Mentions légales, CGV, Confidentialité, RGPD (même si pages TODO)

---

## Workflow de Test

### 1. Pré-Publish (Webflow Preview)
- Tester en mode Preview (bouton "œil")
- Vérifier Desktop + Tablet + Mobile previews
- Cliquer tous les liens, boutons, formulaires

### 2. Staging (Webflow Subdomain)
- Publier sur `*.webflow.io` d'abord
- Tester avec outils :
  - **Lighthouse** (Chrome DevTools) : Performance, Accessibility, SEO
  - **WAVE** : Accessibilité (https://wave.webaim.org/)
  - **WebAIM Contrast** : Couleurs
  - **GTmetrix** : Performance globale

### 3. Production (Custom Domain)
- Après DNS configuré, re-tester sur domaine final
- Vérifier HTTPS fonctionne
- Soumettre sitemap à Google Search Console

---

## Outils Recommandés

**Performance** :
- Lighthouse (Chrome)
- GTmetrix (https://gtmetrix.com)
- WebPageTest (https://www.webpagetest.org)

**Accessibilité** :
- WAVE (https://wave.webaim.org)
- axe DevTools (extension Chrome)
- Contrast Checker (https://webaim.org/resources/contrastchecker/)

**Cross-Browser** :
- BrowserStack (payant, tests multi-devices)
- LambdaTest (alternative)
- Ou tests manuels (Chrome, Firefox, Safari, Edge)

**SEO** :
- Google Search Console
- Screaming Frog (audit crawl)
- Meta Tags Inspector (https://metatags.io)

---

## Priorités Bugs

**P0 (Bloquant - Fix avant production)** :
- Formulaire ne fonctionne pas
- SSL invalide
- Contenu manquant (404)
- Layout cassé mobile
- Contraste < AA

**P1 (Majeur - Fix ASAP post-prod)** :
- Animations lag
- Filtres ne marchent pas
- Vidéo ne charge pas
- Performance < 80 Lighthouse mobile

**P2 (Mineur - Backlog)** :
- Hover states manquants
- Typos
- Spacing 2-3px off
- Animation timing perfectible

---

## Validation Finale

Avant DNS switch, **3 personnes** testent :
1. Designer (cohérence visuelle)
2. Dev (fonctionnalités, performance)
3. Client ou QA externe (UX, contenu)

**Checklist signée** : Tous points validés ✅

**Go-Live** : DNS configuration + monitoring 48h post-launch

---

**Note** : Cette checklist est un guide. Adapter selon besoins spécifiques projet et feedback utilisateurs.
