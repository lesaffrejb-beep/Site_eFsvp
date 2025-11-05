# Webflow Build Checklist - EfSVP
*Document brouillon basé sur le chunk #1 (lignes 0-1000)*

## Phase 1 : Configuration Projet

### 1.1 Création du Projet
- [ ] Créer nouveau projet Webflow "En français s'il vous plaît"
- [ ] Configurer le plan (CMS nécessaire pour Collections)
- [ ] Configurer le domaine personnalisé

### 1.2 Styles Globaux
- [ ] **Typographie**
  - [ ] Ajouter Google Font : Playfair Display (400, 500, 600, 700, 800, 900)
  - [ ] Ajouter Google Font : Inter (400, 500, 600, 700, 800)
  - [ ] Ajouter Google Font : Cormorant (600 italic)
  - [ ] Définir Body font : Inter
  - [ ] Définir Heading font : Playfair Display

- [ ] **Couleurs Projet**
  - [ ] Primary : #b8441e
  - [ ] Secondary : #e8924f
  - [ ] Accent : #d4af37
  - [ ] Dark Brown : #7d2e2e
  - [ ] Dark Grey : #2d2d2d
  - [ ] Cream : #f5e6d3
  - [ ] TODO : Définir Background, Surface, Text colors (chunk #2)

- [ ] **Custom CSS (Embed)**
  - [ ] Ajouter gradients (voir webflow-styles.md section Gradients)
  - [ ] Ajouter animations keyframes si nécessaire
  - [ ] Ajouter utility classes pour [data-scroll], [data-lift], etc.

### 1.3 Assets
- [ ] Uploader favicon.svg
- [ ] Uploader vidéo hero : efsvp-hero.mp4
- [ ] Uploader vidéo hero : efsvp-hero.webm
- [ ] TODO : Autres assets (chunk #2)

---

## Phase 2 : Collections CMS

### 2.1 Collection "Projects" (Portfolio)
**Champs requis** :
- [ ] Name (Text) - Titre du projet
- [ ] Slug (Text) - Auto-généré
- [ ] Tag (Text) - Ex: "Hymne officiel", "Récit narratif"
- [ ] Client (Text) - Ex: "Département Maine-et-Loire"
- [ ] Year (Text) - Ex: "2024"
- [ ] Description (Rich Text) - Description courte
- [ ] Category (Option) - Values: institutions, entreprises, spectacles
- [ ] Client Filter (Option) - Values: institution, entreprise, spectacle
- [ ] Type Filter (Option) - Values: brand, mediation, immersive
- [ ] Visual Gradient (Text) - CSS gradient code
- [ ] Featured (Switch) - Bool

**Données à importer (CSV)** :
```csv
Name,Tag,Client,Year,Description,Category,Client Filter,Type Filter,Visual Gradient
"La force de la douceur","Hymne officiel","Département Maine-et-Loire","2024","Hymne officiel célébrant l'identité et les valeurs du département. Performance inaugurale devant 500 invités.","institutions","institution","brand","linear-gradient(135deg, #b8441e 0%, #e8924f 100%)"
"Série promotionnelle agricole","Récit narratif","Destination Angers / SIVAL","2025","Récits musicaux pour valoriser l'innovation agricole lors du plus grand salon européen.","entreprises","institution","brand","linear-gradient(135deg, #e8924f 0%, #d4af37 100%)"
"25 ans & passation","Anniversaire","Atelier Lacour","2024","Métaphore de la forêt pour célébrer un quart de siècle et préparer la transmission.","entreprises","entreprise","brand","linear-gradient(135deg, #2d2d2d 0%, #7d2e2e 100%)"
"Histoires de résilience","Portraits","Réseau Cocagne","2024","Collectage et mise en musique de parcours de réinsertion pour un réseau national.","institutions","institution","mediation","linear-gradient(135deg, #f5e6d3 0%, #d4af37 100%)"
```

### 2.2 Collection "Audio Tracks"
**Champs requis** :
- [ ] Name (Text) - Titre du track
- [ ] Client (Text) - Client
- [ ] Year (Text) - Année
- [ ] Badge (Text) - Ex: "Hymne officiel"
- [ ] Duration (Text) - Ex: "3:45"
- [ ] Audio File (File) - Fichier audio
- [ ] Featured (Switch) - Bool
- [ ] Sample ID (Text) - ID pour JS (ex: "sample-1")

### 2.3 Collection "Case Studies" (Flagship Cases)
**Champs requis** :
- [ ] Name (Text) - Titre du case
- [ ] Client (Text) - Client
- [ ] Year (Text) - Année
- [ ] Badge (Text) - Type de projet
- [ ] Category (Option) - institutions, entreprises, spectacles
- [ ] Problem (Rich Text) - Section Problème
- [ ] Approach (Rich Text) - Section Approche
- [ ] Effect (Rich Text) - Section Effet
- [ ] Visual Gradient (Text) - CSS gradient
- [ ] Featured (Switch) - Bool
- [ ] Featured Label (Text) - Ex: "Création phare"

**Données à importer (CSV)** :
```csv
Name,Client,Year,Badge,Category,Problem,Approach,Effect,Visual Gradient,Featured
"SIVAL — L'innovation agricole racontée","Destination Angers","2025","Série narrative","institutions","Comment valoriser l'innovation agricole au-delà des chiffres et communiqués, lors du plus grand salon européen du secteur ?","Série de récits musicaux courts (3-5 min) mettant en lumière des histoires humaines d'innovateurs. Collectage sur site, composition sur mesure, diffusion lors des conférences.","8 récits diffusés auprès de 2 000+ visiteurs. Reprise média (France Bleu, Ouest-France). NPS client : 9.2/10.","linear-gradient(135deg, #e8924f 0%, #d4af37 100%)",false
```

### 2.4 Collection "Services"
**Champs requis** :
- [ ] Name (Text) - Titre du service
- [ ] Price (Text) - Ex: "À partir de 1 200€"
- [ ] Feature 1 (Text)
- [ ] Feature 2 (Text)
- [ ] Feature 3 (Text)
- [ ] Icon SVG (Code) - Code SVG de l'icône
- [ ] Featured (Switch) - Bool
- [ ] Featured Label (Text) - Ex: "Notre signature"
- [ ] Order (Number) - Pour tri

### 2.5 Collection "FAQ"
- [ ] Question (Text)
- [ ] Answer (Rich Text)
- [ ] Category (Option) - Si nécessaire
- [ ] Order (Number)
- [ ] TODO : Remplir après lecture chunk #2

### 2.6 Collection "Stats"
- [ ] Label (Text) - Ex: "Représentations"
- [ ] Value (Text) - Ex: "60+"
- [ ] Context (Text) - Ex: "depuis 2022"
- [ ] Order (Number)

---

## Phase 3 : Structure des Pages

### 3.1 Page Home (/)

#### Section : Navigation
- [ ] Créer Symbol "Navigation"
- [ ] Logo text "EfSVP" avec lien #hero
- [ ] Menu avec 4 liens : Créations, Portfolio, Process, FAQ
- [ ] CTA button "Démarrer votre projet" → #contact
- [ ] Mobile toggle (hamburger)
- [ ] TODO : Sticky behavior avec Interaction

#### Section : Hero
- [ ] Container full-width, full-height
- [ ] Background video (MP4 + WebM sources)
- [ ] Overlay gradient pour lisibilité
- [ ] Titre 2 lignes :
  - "Vous avez déjà écrit l'histoire."
  - "Nous la mettons en scène avec mesure."
- [ ] Sous-titre descriptif
- [ ] CTA principal "Partagez votre histoire"
- [ ] 3 métriques de confiance (60+, 15+, 1200€)
- [ ] Bouton scroll chevron (lien vers #creations)

#### Section : Audio Bento Grid (#creations)
- [ ] Section header : titre + sous-titre
- [ ] Grid container (CSS Grid ou Flex)
- [ ] 3 Audio players (liés à Collection Audio Tracks)
  - [ ] 1 Featured (large)
  - [ ] 2 Standard/Compact
- [ ] 2 Info cards (3 formats, 60+ représentations)
- [ ] 1 Quote card avec citation
- [ ] CTA "Découvrir tous nos projets"
- [ ] TODO : Intégrer WaveSurfer.js ou audio player custom

#### Section : Flagship Cases (#cases)
- [ ] Section header
- [ ] Grid 3 colonnes (ou 1 col mobile)
- [ ] Collection List : Case Studies (limit: 3)
- [ ] Card template :
  - Visual avec gradient (inline style binding)
  - Badge
  - Titre + client + année
  - 3 steps : Problème, Approche, Effet
  - Audio button (scroll to #creations)
- [ ] CTA "Voir tous les projets"

#### Section : Services (#services)
- [ ] Section header
- [ ] Grid 4 colonnes (2 col tablet, 1 col mobile)
- [ ] Collection List : Services
- [ ] Card template :
  - Icon SVG
  - Badge prix
  - Titre
  - Liste features (3 items)
  - CTA "Découvrir"
  - Featured variant style

#### Section : Portfolio (#portfolio)
- [ ] Section header avec stats animées
- [ ] Filters :
  - Groupe CLIENT (Tout, Institutions, Entreprises, Spectacles)
  - Groupe TYPE (Tous, Hymnes & marque, Spectacles, Formats immersifs)
  - TODO : Logique JS pour filtrage multi-groupe
- [ ] Grid portfolio (masonry ou grid)
- [ ] Collection List : Projects
- [ ] Card template :
  - Visual avec gradient
  - Overlay
  - Tag
  - Titre + client + année
  - Description
  - Data attributes pour filtres

#### Section : Process
- [ ] TODO (chunk #2)

#### Section : FAQ
- [ ] TODO (chunk #2)

#### Section : Contact
- [ ] TODO (chunk #2)

#### Section : Footer
- [ ] TODO (chunk #2)

### 3.2 Page Expérience (/experience)
**EN CONSTRUCTION**

- [ ] Créer page /experience
- [ ] Hero sombre simple
  - [ ] Titre : "Expérience" ou "En construction"
  - [ ] Texte : "Cette section est en cours de préparation."
  - [ ] CTA : "Retour à l'accueil" → /
- [ ] Utiliser gradient dark ou darkRed
- [ ] Style minimaliste, cohérent avec le design system

---

## Phase 4 : Interactions Webflow

### 4.1 Navigation
- [ ] Scroll trigger : sticky nav avec background change
- [ ] Mobile menu : toggle open/close avec animation
- [ ] Active link state selon section visible

### 4.2 Hero
- [ ] Scroll button animation (bounce chevron)
- [ ] Trust metrics : reveal avec scale ou fade-up

### 4.3 Scroll Animations
- [ ] Elements [data-scroll] : fade-up ou fade-in on scroll
- [ ] Elements [data-reveal="scale"] : scale animation
- [ ] Stagger animations pour grids

### 4.4 Hover States
- [ ] Cards [data-lift] : translateY(-8px) au hover
- [ ] Buttons : scale ou glow effect
- [ ] Filters : border-color change, background fill

### 4.5 Portfolio Filters
- [ ] Click filter : toggle active class
- [ ] Filter projects selon data-client et data-type
- [ ] Animation fade ou slide pour showing/hiding
- [ ] TODO : Custom JS si filtrage complexe (multi-groupe)

### 4.6 Audio Players
- [ ] Play/Pause toggle
- [ ] Waveform progress (WaveSurfer.js)
- [ ] Time update
- [ ] TODO : Intégration avec Collection

### 4.7 Stats Counters
- [ ] Elements [data-counter] : animated count-up
- [ ] Trigger on scroll into view

---

## Phase 5 : Custom Code

### 5.1 Head Code (Avant </head>)
```html
<!-- Preload fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Schema.org JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "En français s'il vous plaît",
  ...
}
</script>
```

### 5.2 Body Code (Avant </body>)
```html
<!-- WaveSurfer.js pour audio players -->
<script src="https://unpkg.com/wavesurfer.js"></script>

<!-- Custom JS -->
<script>
  // Portfolio filters
  // Audio players
  // Scroll animations
  // Stats counters
</script>
```

### 5.3 Custom CSS (Embed)
```css
/* Gradients */
.gradient-primary { ... }

/* Animations */
@keyframes fadeInUp { ... }

/* Utilities */
[data-lift]:hover { transform: translateY(-8px); }

/* Accessibility */
.skip-link { ... }
.sr-only { ... }
```

---

## Phase 6 : SEO & Performance

### 6.1 SEO
- [ ] Page title : "En français s'il vous plaît | Création narrative & musicale sur-mesure"
- [ ] Meta description (voir content/home.json)
- [ ] Meta keywords
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Canonical URL
- [ ] Alt text pour toutes les images
- [ ] Aria-labels pour boutons/liens

### 6.2 Performance
- [ ] Compresser vidéo hero (< 5MB idéalement)
- [ ] Lazy load pour vidéo et images below fold
- [ ] Minify CSS/JS custom
- [ ] Utiliser WebP pour images (si présentes)
- [ ] Tester Core Web Vitals
- [ ] TODO : Preloader (voir HTML lignes 273-279)

### 6.3 Accessibility
- [ ] Skip link "Aller au contenu principal"
- [ ] Aria labels sur navigation
- [ ] Focus states visibles
- [ ] Contraste couleurs suffisant (WCAG AA)
- [ ] Keyboard navigation
- [ ] Screen reader friendly

---

## Phase 7 : Testing

### 7.1 Responsive
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px)
- [ ] Orientation portrait/landscape

### 7.2 Navigateurs
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 7.3 Fonctionnalités
- [ ] Navigation sticky
- [ ] Mobile menu toggle
- [ ] Audio players play/pause
- [ ] Portfolio filters (tous les groupes)
- [ ] Scroll animations
- [ ] Hover states
- [ ] Forms (TODO chunk #2)
- [ ] Links (internal anchors + external)

### 7.4 Performance
- [ ] Lighthouse score (> 90 Desktop, > 80 Mobile)
- [ ] Temps de chargement (< 3s)
- [ ] LCP, FID, CLS (Core Web Vitals)

---

## Phase 8 : Déploiement

- [ ] Vérifier toutes les collections sont remplies
- [ ] Vérifier tous les liens fonctionnent
- [ ] Configurer domaine custom
- [ ] Configurer SSL
- [ ] Publier le site
- [ ] Soumettre sitemap à Google Search Console
- [ ] Configurer analytics (si souhaité)

---

## TODO - Compléments Chunk #2

Les sections suivantes nécessitent la lecture du chunk #2 pour être complétées :

- [ ] Section Process complète
- [ ] Section FAQ complète (questions/réponses)
- [ ] Section Contact (formulaire, infos)
- [ ] Footer (liens, social, légal)
- [ ] Tokens CSS manquants (spacing, shadows, border-radius)
- [ ] Autres pages éventuelles
- [ ] Images additionnelles
- [ ] Contenus textes manquants

---

## Notes d'Implémentation

### Priorités
1. **Phase 1-2** : Configuration + Collections (fondation)
2. **Phase 3** : Build sections visibles dans chunk #1
3. **Phase 4-5** : Interactions + Custom code
4. **Phase 6-8** : Optimisation + Testing + Deploy

### Difficultés Anticipées
- **Audio player custom** : WaveSurfer.js nécessite JS custom, pas natif Webflow
- **Filtres portfolio multi-groupe** : Logic complexe, possiblement Finsweet ou JS custom
- **Video background** : Optimiser taille fichier, fallback image
- **Gradients dynamiques** : Utiliser inline styles ou custom CSS classes

### Outils Recommandés
- **Finsweet Attributes** : Pour filtrage CMS avancé
- **GSAP ou Anime.js** : Pour animations complexes (alternative interactions Webflow)
- **WaveSurfer.js** : Audio waveform
- **Lottie** : Animations vector (si nécessaire)

---

*Checklist brouillon basée sur chunk #1. Sera complétée avec chunk #2 pour sections manquantes.*
