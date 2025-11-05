# Migration Webflow - Guide Principal
*"Ce que je fais dans Webflow, dans l'ordre"*

**Projet** : En français s'il vous plaît (EfSVP)
**Plan Webflow** : Site CMS
**Temps estimé** : 8-12 heures (hors contenus photo/audio)
**Difficulté** : Intermédiaire

---

## Vue d'ensemble

Ce guide vous accompagne pas à pas pour reconstruire le site EfSVP dans Webflow, du projet vide jusqu'à la mise en ligne avec DNS configuré.

**Livrables disponibles** :
- `/deliverables/design-tokens.json` → Palette & système
- `/deliverables/content/` → Tous les textes
- `/deliverables/cms-import/` → CSV prêts à importer
- `/deliverables/webflow-styles.md` → Guide complet des classes
- `/deliverables/webflow-build-checklist.md` → Checklist détaillée
- `/deliverables/dns-webflow.md` → Configuration domaine

---

## Phase 1 : Création Projet (15 min)

### 1.1 Nouveau Projet

1. Dashboard Webflow → **New Project**
2. Nom : `EfSVP - En français s'il vous plaît`
3. Plan : **Site CMS** (requis pour Collections)

### 1.2 Settings Généraux

**Site Settings > General** :
- Site Name : `En français s'il vous plaît`
- Time Zone : `Europe/Paris`
- Language : `French (fr)`

**Site Settings > SEO** :
- Title : `En français s'il vous plaît | Création narrative & musicale sur-mesure`
- Description : `Studio de création narrative et musicale pour vos événements clés. Écriture, composition, performance live. Angers, Pays de la Loire.`

**Site Settings > Favicon** :
- Uploader `/favicon.svg`

---

## Phase 2 : Design System (30-45 min)

### 2.1 Typographie

**Site Settings > Fonts** :

Ajouter Google Fonts :
1. **Playfair Display** : weights 400, 500, 600, 700, 800, 900
2. **Inter** : weights 400, 500, 600, 700, 800
3. **Cormorant** : weight 600 italic

**Body (All Pages)** :
- Font : Inter
- Size : 17px (équivalent clamp base)
- Line height : 1.5

**All Headings** :
- Font : Playfair Display

### 2.2 Couleurs Projet

**Site Settings > Design > Color Swatches** :

Créer swatches :
- `Primary` : #b95a40
- `Bg` : #fbf8f3
- `Text` : #1d2c3b
- `Text Secondary` : #4a5568
- `Surface` : #faf6f0
- `Accent Camel` : #c39d6b
- `Border` : #ddd5c8

### 2.3 Custom CSS (Design Tokens)

**Site Settings > Custom Code > Head Code** :

```html
<style>
:root {
  /* Copier TOUT le contenu de src/styles/design-tokens.css ici */
  /* Ou au minimum les variables essentielles : */
  --primary: #b95a40;
  --bg: #fbf8f3;
  --text: #1d2c3b;
  --container-max: 1280px;
  --space-4: 1rem;
  --space-8: 2rem;
  --radius-md: 12px;
  --shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  /* etc. */
}

/* Classes gradient */
.gradient-primary {
  background: linear-gradient(135deg, #b8441e 0%, #e8924f 100%);
}
.gradient-gold {
  background: linear-gradient(135deg, #e8924f 0%, #d4af37 100%);
}
.gradient-dark {
  background: linear-gradient(135deg, #2d2d2d 0%, #7d2e2e 100%);
}
</style>
```

---

## Phase 3 : Collections CMS (45-60 min)

### 3.1 Collection "Projects"

**CMS > New Collection** :
- Nom : `Projects`
- Slug : `projects`

**Champs** :
1. `Name` (Text, required) - Déjà créé
2. `Client` (Plain Text)
3. `Year` (Plain Text)
4. `Summary` (Rich Text)
5. `Tag` (Plain Text) - Ex: "Hymne officiel"
6. `Category` (Option) - Values: institutions, entreprises, spectacles
7. `Client Filter` (Option) - Values: institution, entreprise, spectacle
8. `Type Filter` (Option) - Values: brand, mediation, immersive
9. `Gradient` (Plain Text) - Pour CSS inline
10. `Image 1` (Image)
11. `Image 2` (Image, optional)
12. `Image 3` (Image, optional)

**Import CSV** :
- Cliquer **Import** (icône flèche)
- Uploader `/cms-import/projects.csv`
- Mapper colonnes
- Vérifier 6 projets importés

### 3.2 Collection "FAQ"

**CMS > New Collection** :
- Nom : `FAQ`
- Slug : `faq`

**Champs** :
1. `Name` (Text, required) - Sera la question
2. `Question` (Plain Text)
3. `Answer` (Rich Text)
4. `Order` (Number)

**Import CSV** :
- Uploader `/cms-import/faq.csv`
- Vérifier 8 questions importées

### 3.3 Collection "Stats" (Optionnel)

Si vous voulez CMS pour les stats :

**Champs** :
1. `Name` (Text) - Label
2. `Value` (Plain Text)
3. `Order` (Number)

Sinon : hard-coder les 4 stats directement dans la page.

---

## Phase 4 : Construction Page Home (3-5h)

**Créer nouvelle page** : `Home` (déjà existe par défaut)

### 4.1 Navigation (30 min)

**Structure** :
- Nav (sticky, bg white on scroll)
  - Container
    - Logo (lien #hero, text "EfSVP")
    - Menu (ul > 4 li)
    - CTA button

**Classes principales** (voir `webflow-styles.md`) :
- `.nav` : position fixed, z-index 1100
- `.nav__container` : max-width 1280px, flex space-between
- `.nav__logo` : Playfair Display, bold
- `.nav__link` : Inter, hover underline
- `.btn.btn--primary-small` : CTA

**Interactions** :
- Sticky : trigger scroll, change bg opacity
- Mobile : toggle menu (display none → flex)

### 4.2 Hero Section (45 min)

**Contenu** (voir `/content/home.json` > hero) :
- Vidéo background (MP4 + WebM)
- Overlay gradient
- Titre 2 lignes
- Sous-titre
- CTA button
- 3 métriques

**Structure** :
```
Section.hero
  Div.hero__video-container
    Video (sources MP4 + WebM, autoplay muted loop)
    Div.hero__overlay
  Div.hero__content
    H1.hero__title
      Span ligne 1
      Span ligne 2
    P.hero__subtitle
    Link.btn.btn--primary (vers #contact)
    Div.hero__trust-metrics (3 divs)
  Button.hero__scroll (chevron SVG, lien #creations)
```

**Styling** :
- Hero : height 100vh, position relative
- Content : position absolute, z-index 1, centered
- Video : object-fit cover, full width/height

### 4.3 Sections Créations, Cases, Services (voir checklist)

**Pour chaque section** :
1. Créer structure HTML (div.section > div.container)
2. Ajouter header (h2 + subtitle)
3. Ajouter grille de cartes
4. Styler selon `webflow-styles.md`

**Astuce** : Utiliser Symbols pour cards réutilisables.

### 4.4 Portfolio avec Filtres (1h)

**Structure** :
```
Section#portfolio
  Container
    Header
    Div.filters (2 groupes de boutons)
    Div.portfolio__grid
      Collection List (Projects)
        Collection Item (portfolio-card)
```

**Filtres dynamiques** :
- Option A : Finsweet CMS Filter (addon gratuit)
- Option B : Custom JS (voir `webflow-build-checklist.md`)

**Liaison CMS** :
- Image : lier au champ `Image 1`
- Title : lier au champ `Name`
- Client : lier au champ `Client`
- Description : lier au champ `Summary`
- Data attributes : `data-client="{Client Filter}"`, `data-type="{Type Filter}"`

### 4.5 Process, Testimonials, FAQ, Contact

**Process** : 4 divs, contenu statique (voir `/content/home.json`)

**Testimonials** : Swiper carousel (Custom Code) ou Webflow Slider

**FAQ** : Collection List FAQ, accordion avec interactions Webflow

**Contact** : Form Webflow natif, styling custom

---

## Phase 5 : Interactions & Animations (1-2h)

**Interactions à créer** :

1. **Nav Sticky** :
   - Trigger : Scroll (>100px)
   - Action : Change bg opacity, reduce padding

2. **Scroll Reveal** :
   - Elements `[data-scroll]`
   - Trigger : Scroll into view
   - Animation : Fade + translateY

3. **Hover Lift** :
   - Cards `[data-lift]`
   - Trigger : Hover
   - Animation : translateY(-8px) + shadow

4. **FAQ Accordion** :
   - Trigger : Click question
   - Action : Toggle answer height, rotate icon

5. **Mobile Menu** :
   - Trigger : Click hamburger
   - Action : Slide menu, fade overlay

**Durées** : 0.25s cubic-bezier(0.22, 0.9, 0.24, 1)

---

## Phase 6 : Assets Upload (30 min)

**Assets Manager** :

1. Créer dossier `/videos`
2. Uploader `efsvp-hero.mp4` et `.webm`
3. Lier vidéos dans Hero section

**Images portfolio** (optionnel) :
- Si Option B (vraies images) : uploader dans `/images/portfolio`
- Lier dans Collection Items

**Optimisation** :
- Vidéos < 5MB
- Images WebP, < 500KB
- Lazy loading activé (images below fold)

---

## Phase 7 : SEO & Performance (45 min)

### 7.1 Pages Settings

**Home page** :
- Title : (déjà fait en Phase 1)
- Description : (déjà fait)
- OG Image : uploader image 1200x630px (ou utiliser favicon)

### 7.2 Alt Texts

Vérifier toutes les images ont alt :
- Images CMS : utiliser champ dynamique `{Name}`
- Images statiques : alt descriptif

### 7.3 Performance

**Settings > Performance** :
- Minify HTML, CSS, JS : ✅
- Responsive images : ✅
- Lazy loading : ✅

**Check Lighthouse** (après publish) :
- Target : > 90 Desktop, > 80 Mobile
- LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Phase 8 : Page /experience (15 min)

**Nouvelle page** : `/experience`

**Structure simple** :
```
Section.hero-dark
  Container
    H1 "En construction"
    P "Bientôt : espace d'écoute interactive"
    Link.btn "Retour à l'accueil" (vers /)
```

**Styling** :
- Background : gradient dark (#0f141a → #141e26)
- Text : white
- Centered, min-height 80vh

**Note** : Pas d'audio player à ce stade (futur).

---

## Phase 9 : QA & Tests (1h)

**Checklist** (voir `/check-qa.md` pour détails) :

- [ ] Responsive (Desktop 1920, 1440, 1280 / Tablet 768 / Mobile 375)
- [ ] Nav sticky fonctionne
- [ ] Tous liens internes (anchors) fonctionnent
- [ ] Formulaire contact envoie emails
- [ ] Filtres portfolio fonctionnent (tous groupes)
- [ ] Interactions smooth (pas de lag)
- [ ] Hover states visibles
- [ ] Focus states accessibles (tab navigation)
- [ ] Alt texts présents
- [ ] Contraste couleurs AA (4.5:1 min)
- [ ] Vidéo hero se charge (fallback si erreur)

**Navigateurs** :
- Chrome, Firefox, Safari, Edge (dernières versions)

---

## Phase 10 : Publication & DNS (1-2h)

### 10.1 Publish Webflow

1. **Publish** (bouton top-right)
2. Choisir plan Hosting (CMS Site)
3. Site publié sur `*.webflow.io`

### 10.2 Custom Domain

1. **Project Settings > Hosting**
2. **Add Custom Domain** : `efsvp.fr`
3. Noter DNS records Webflow fournit

### 10.3 Configuration DNS OVH

**Suivre** : `/dns-webflow.md`

**Résumé** :
- A record `@` → `75.2.70.75`
- CNAME `www` → `proxy-ssl.webflow.com`
- MX records : **ne pas toucher** (emails OVH)

**Propagation** : 30 min - 2h

### 10.4 SSL

Webflow génère certificat Let's Encrypt auto.

**Activer** :
- Redirect HTTP → HTTPS : ✅
- HSTS : ✅

---

## Post-Migration

### Monitoring

**Outils** :
- Google Search Console : soumettre sitemap
- Google Analytics : ajouter tracking (Settings > Integrations)
- Webflow Analytics : inclus dans plan

**Sitemap** : Auto-généré par Webflow (`/sitemap.xml`)

### Maintenance

**Mensuel** :
- Vérifier certificat SSL (auto-renew)
- Backup export code (Designer > Export)
- Vérifier formulaires fonctionnent

**Contenu** :
- Ajouter nouveaux projets via CMS
- Mettre à jour FAQ si besoin

---

## Troubleshooting Courant

**Vidéo hero ne charge pas** :
- Vérifier formats MP4 + WebM uploadés
- Vérifier autoplay muted loop

**Filtres portfolio ne marchent pas** :
- Vérifier data attributes correctement liés
- Vérifier JS custom code (si pas Finsweet)

**Formulaire ne reçoit pas emails** :
- Vérifier email notif dans Form Settings
- Vérifier spam folder

**Site lent** :
- Compresser vidéos/images
- Vérifier lazy loading actif
- Check Webflow Performance tab

---

## Ressources

**Docs** :
- Webflow University : https://university.webflow.com
- Webflow Community : https://forum.webflow.com
- Design Tokens : `/deliverables/design-tokens.json`
- Styles Guide : `/deliverables/webflow-styles.md`

**Support** :
- Webflow Support : support@webflow.com
- OVH Support : https://help.ovhcloud.com

---

## Timeline Recap

| Phase | Temps | Cumul |
|-------|-------|-------|
| 1. Projet & Settings | 15 min | 15 min |
| 2. Design System | 45 min | 1h |
| 3. Collections CMS | 60 min | 2h |
| 4. Page Home | 5h | 7h |
| 5. Interactions | 2h | 9h |
| 6. Assets | 30 min | 9h30 |
| 7. SEO/Perf | 45 min | 10h15 |
| 8. Page /experience | 15 min | 10h30 |
| 9. QA | 1h | 11h30 |
| 10. DNS & Publish | 2h | 13h30 |

**Total** : ~12-14h (hors création contenus photo/audio)

---

**Bon courage ! 🚀**

Pour questions : référez-vous aux docs détaillées dans `/deliverables/`.
