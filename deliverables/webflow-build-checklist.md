# Webflow Build Checklist — EfSVP
**Plan de reconstruction étape par étape dans Webflow**

---

## 📋 Vue d'ensemble

Ce document détaille l'ordre exact des opérations pour reconstruire le site EfSVP dans Webflow, de A à Z, sans rien oublier.

**Durée estimée :** 8-12 heures de travail concentré
**Prérequis :** Compte Webflow (plan CMS minimum), accès au domaine enfrancaissvp.fr sur OVH

---

## 🎨 PHASE 1 : Configuration Projet & Design System (2h)

### 1.1 Créer le Projet Webflow

- [ ] Créer nouveau projet : **"En français s'il vous plaît"**
- [ ] Plan : **CMS Plan** (minimum pour Collections)
- [ ] Template de départ : **Blank Site**

### 1.2 Paramètres Projet

- [ ] **Project Settings** > **General** :
  - Nom du site : `En français s'il vous plaît`
  - Timezone : `Europe/Paris`

- [ ] **Project Settings** > **SEO** :
  - Site Title : `En français s'il vous plaît | Création narrative & musicale sur-mesure`
  - Meta Description : `Studio de création narrative et musicale pour vos événements clés. Écriture, composition, performance live. Angers, Pays de la Loire.`

- [ ] **Project Settings** > **Fonts** :
  - Ajouter **Playfair Display** : weights `400, 500, 600, 700, 800, 900`
  - Ajouter **Inter** : weights `400, 500, 600, 700, 800`
  - Ajouter **Cormorant** : `italic 600`

### 1.3 Créer la Palette de Couleurs (Swatches)

Ouvrir **Style Manager** > **Swatches**, créer ces couleurs :

**Principales :**
- [ ] `Primary` : `#b95a40`
- [ ] `Primary Hover` : `#d16d52`
- [ ] `Primary Active` : `#a04a32`
- [ ] `Secondary` : `#8a8a68`
- [ ] `Accent Camel` : `#c39d6b`
- [ ] `Accent Beige` : `#e6d9c3`
- [ ] `Accent Gold` : `#f3b47a`

**Texte :**
- [ ] `Ink` : `#1d2c3b`
- [ ] `Charcoal` : `#2d3748`
- [ ] `Text Secondary` : `#4a5568`
- [ ] `Text Tertiary` : `#6b7280`
- [ ] `Muted` : `#9ca3af`
- [ ] `Text Inverse` : `#fefefe`

**Fonds :**
- [ ] `Parchment` : `#fbf8f3`
- [ ] `Sand` : `#faf6f0`
- [ ] `Sand Deep` : `#f0e9dc`
- [ ] `Surface Elevated` : `#ffffff`
- [ ] `BG Dark` : `#0f141a`
- [ ] `BG Dark 2` : `#141e26`

**Bordures :**
- [ ] `Border` : `#ddd5c8`
- [ ] `Border Strong` : `#c5b9a8`
- [ ] `Ring` : `#e8c4b4`

### 1.4 Configurer les Styles Globaux

**Body (All Paragraphs) :**
- [ ] Font : `Inter`
- [ ] Size : `17px` (Desktop), `16px` (Mobile)
- [ ] Line Height : `1.7`
- [ ] Color : `Ink`
- [ ] Background : `Parchment`

**H1 (All H1 Headings) :**
- [ ] Font : `Playfair Display`
- [ ] Weight : `700`
- [ ] Size : `60px` (Desktop), `40px` (Tablet), `32px` (Mobile)
- [ ] Line Height : `1.1`
- [ ] Letter Spacing : `-0.02em`
- [ ] Color : `Ink`

**H2, H3, H4 :**
- [ ] Configurer selon `webflow-styles.md` (voir doc)

**All Links :**
- [ ] Color : `Ink`
- [ ] Hover Color : `Primary`
- [ ] Transition : `color 0.25s ease`
- [ ] Text Decoration : `none`

### 1.5 Créer les Classes Utilitaires

Créer ces classes selon `webflow-styles.md` :

**Layout :**
- [ ] `.container` : max-width 1280px, padding 24px, margin auto
- [ ] `.section` : padding vertical 96px (responsive)
- [ ] `.section--dark` : background BG Dark
- [ ] `.section--surface` : background Sand

**Grids :**
- [ ] `.grid-12` : grid 12 colonnes
- [ ] `.grid-2`, `.grid-3` : grids responsives

**Stacks :**
- [ ] `.stack-8`, `.stack-12`, `.stack-16`, `.stack-24`, `.stack-32`

**Boutons :**
- [ ] `.btn` : base button
- [ ] `.btn--primary` : CTA principal (avec hover states)
- [ ] `.btn--primary-small` : version compacte
- [ ] `.btn--secondary` : bouton secondaire
- [ ] `.btn--hero` : CTA hero large

**Cards :**
- [ ] `.card` : card de base avec hover lift
- [ ] `.card--flat` : sans shadow
- [ ] `.card--dark` : pour fonds sombres

**Badges & Chips :**
- [ ] `.badge`, `.badge--primary`, `.badge--camel`, `.badge--outline`
- [ ] `.chip` : pill badges avec hover

**Text Utilities :**
- [ ] `.text-muted`, `.text-tertiary`, `.text-inverse`, `.text-center`
- [ ] `.text-lg`, `.text-xl`, `.text-2xl`
- [ ] `.serif`, `.italic-accent`

**Spacing & Radius :**
- [ ] `.mt-0` → `.mt-32`, `.mb-0` → `.mb-32`
- [ ] `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-xl`, `.rounded-full`

**Shadows :**
- [ ] `.shadow-sm`, `.shadow-md`, `.shadow-lg`, `.shadow-lift`

### 1.6 Ajouter la Texture Grain (Custom Code)

- [ ] **Project Settings** > **Custom Code** > **Head Code** :

```html
<style>
body {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03' /%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 300px 300px;
}
</style>
```

---

## 🗂️ PHASE 2 : Créer les Collections CMS (1h)

### 2.1 Collection "Projects"

- [ ] **CMS** > **New Collection** : `Projects`
- [ ] Ajouter les champs :
  - `Name` (Text, auto) : **Title**
  - `Slug` (Text, auto)
  - `Client` (Plain Text)
  - `Year` (Number)
  - `Badge` (Plain Text) — ex: "Hymne officiel"
  - `Summary` (Rich Text)
  - `Tags` (Plain Text) — séparés par virgules
  - `Featured` (Switch) — pour marquer projets phares
  - `Images` (Multi-Image) — galerie photos projet
  - `Thumbnail` (Image) — image miniature

- [ ] **Collection Settings** :
  - Collection Template Page : Activer
  - Collection URL : `/projets/[slug]`

### 2.2 Collection "FAQ"

- [ ] **CMS** > **New Collection** : `FAQ`
- [ ] Ajouter les champs :
  - `Name` (Text, auto) : **Question**
  - `Answer` (Rich Text)
  - `Order` (Number) — pour trier manuellement

- [ ] **Collection Settings** :
  - Collection Template Page : Désactiver (pas besoin de pages individuelles)

### 2.3 Collection "Stats"

- [ ] **CMS** > **New Collection** : `Stats`
- [ ] Ajouter les champs :
  - `Name` (Text, auto) : **Label**
  - `Value` (Plain Text) — ex: "60+"
  - `Order` (Number)

- [ ] **Collection Settings** :
  - Collection Template Page : Désactiver

---

## 📥 PHASE 3 : Importer les Données CMS (30min)

### 3.1 Importer les Projets

- [ ] **Projects Collection** > **Import**
- [ ] Uploader `/deliverables/cms-import/projects.csv`
- [ ] Mapper les colonnes CSV aux champs Webflow
- [ ] Valider l'import (6 projets)

### 3.2 Importer la FAQ

- [ ] **FAQ Collection** > **Import**
- [ ] Uploader `/deliverables/cms-import/faq.csv`
- [ ] Mapper les colonnes
- [ ] Valider l'import (8 questions)

### 3.3 Importer les Stats

- [ ] **Stats Collection** > **Import**
- [ ] Uploader `/deliverables/cms-import/stats.csv`
- [ ] Mapper les colonnes
- [ ] Valider l'import (4 stats)

---

## 🖼️ PHASE 4 : Uploader & Lier les Assets (1h)

### 4.1 Uploader les Logos & Favicons

- [ ] **Assets Manager** > Upload :
  - `/deliverables/assets/efsvp-logo.svg`
  - `/deliverables/assets/favicon.svg`

- [ ] **Project Settings** > **SEO** > **Favicon** :
  - Uploader `favicon.svg` ou générer favicon 32x32 PNG

### 4.2 Uploader les Images de Projets

**Note :** Actuellement, pas d'images disponibles. Quand elles seront prêtes :

- [ ] Uploader toutes les images dans **Assets Manager**
- [ ] Respecter le naming selon `/deliverables/assets-map.json`
- [ ] Format : **WebP**, max **1600px** largeur, qualité **85%**

### 4.3 Lier les Images aux Projets CMS

Pour chaque projet dans la Collection Projects :

- [ ] Éditer le projet
- [ ] Ajouter l'image `Thumbnail`
- [ ] Ajouter les images dans `Images` (Multi-Image)
- [ ] Publier

---

## 🏗️ PHASE 5 : Construire les Sections de la Page d'Accueil (4-5h)

### 5.1 Navigation (Header)

- [ ] Créer un **Navbar** en sticky (position fixed top)
- [ ] Ajouter logo `EfSVP` à gauche
- [ ] Menu central :
  - Créations
  - Portfolio
  - Process
  - FAQ
- [ ] CTA à droite : `.btn.btn--primary-small` "Démarrer votre projet"
- [ ] Hamburger menu pour mobile
- [ ] Background : `BG Dark`, color : `Text Inverse`
- [ ] Height : `76px`
- [ ] Z-index : `1100`

### 5.2 Section Hero

**Structure :**
- [ ] Section full-height (100vh)
- [ ] Background : Video ou image placeholder
- [ ] Overlay sombre (gradient)
- [ ] Contenu centré verticalement

**Contenu :**
- [ ] H1 : 2 lignes (voir `copy-deck.md`)
- [ ] Paragraph subtitle
- [ ] CTA `.btn.btn--primary.btn--hero`
- [ ] 3 métriques (stats cards) en grille
- [ ] Bouton scroll-down (chevron animé) en bas

**Copier les textes depuis :** `/deliverables/content/copy-deck.md` > Hero

### 5.3 Section Audio / Créations

- [ ] Container + Section padding
- [ ] Header : H2 + Subtitle
- [ ] Bento Grid (CSS Grid, colonnes asymétriques)
- [ ] Cards pour :
  - Audio player 1 (large featured)
  - Info card "3 formats"
  - Audio player 2
  - Quote card
  - Audio player 3
  - Stats card "60+ représentations"
- [ ] CTA en bas : "Découvrir tous nos projets"

**Note Audio :** Pour l'instant, laisser des placeholders. Audio sera intégré plus tard.

### 5.4 Section Flagship Cases (3 Créations)

- [ ] Container + Section
- [ ] Header : H2 + Subtitle
- [ ] 3 Cards en grille (desktop : 3 colonnes, mobile : 1)
- [ ] Chaque card contient :
  - Badge
  - Titre projet
  - Client · Année
  - 3 blocs : Problème (🎯), Approche (⚙️), Effet (✨)
  - Bouton audio placeholder
- [ ] Marquer le 3e (État de nature) comme **Featured** (style différent)
- [ ] CTA final : "Voir tous les projets"

**Textes :** Copier depuis `/deliverables/content/copy-deck.md` > Trois Créations

### 5.5 Section Services (4 Formules)

- [ ] Container + Section
- [ ] Header : H2 + Subtitle
- [ ] 4 Cards en grille (2x2 desktop, 1 mobile)
- [ ] Chaque card :
  - Badge prix (top)
  - Titre formule
  - 3 features (liste à puces)
  - CTA "Découvrir"
- [ ] Marquer "Performance Live" comme **Featured**

**Textes :** `/deliverables/content/copy-deck.md` > Quatre Formules

### 5.6 Section Portfolio (Collection List)

- [ ] Container + Section (background `Sand`)
- [ ] Header : H2 + Stats "60+ représentations · 15+ institutions"
- [ ] **Filtres** (optionnels, via interactions) :
  - Client : Tout, Institutions, Entreprises, Spectacles
  - Type : Tous, Hymnes, Spectacles, Immersifs
- [ ] **Collection List** (Projects) :
  - Grid 3 colonnes
  - Afficher : Thumbnail, Badge, Titre, Client, Année, Summary
  - Lien vers page projet
  - Hover effect : lift card
- [ ] Limit : 6 projets (ou tous)

### 5.7 Section Process (4 Étapes)

- [ ] Container + Section
- [ ] Header : H2 + Subtitle
- [ ] 4 blocs numérotés (01, 02, 03, 04) en grille verticale ou timeline
- [ ] Chaque bloc :
  - Numéro large
  - Titre étape
  - Durée
  - Description
  - 3 détails (liste)
  - Badge optionnel (étape 03 et 04)
- [ ] CTA final : "Démarrer votre projet"

**Textes :** `/deliverables/content/copy-deck.md` > Process

### 5.8 Section Témoignages

- [ ] Section dark (`.section--dark`, background `BG Dark`)
- [ ] Header : H2 white
- [ ] 3 Testimonial cards en grille
- [ ] Chaque card :
  - 5 étoiles
  - Quote (large, italique)
  - Auteur + Rôle + Organisation
  - Contexte projet
- [ ] Style premium : cards dark avec shadow

**Textes :** `/deliverables/content/copy-deck.md` > Témoignages

### 5.9 Section Stats (La preuve par les chiffres)

- [ ] Container + Section
- [ ] Header : H2
- [ ] **Collection List** (Stats) :
  - Grid 4 colonnes (desktop), 2 (mobile)
  - Afficher : Value (large number), Label
  - Style : minimal, centré

### 5.10 Section FAQ (Collection List)

- [ ] Container + Section (background `Sand`)
- [ ] Header : H2
- [ ] **Collection List** (FAQ) :
  - Accordion style (ou simple list)
  - Chaque item : Question (bold) + Answer (collapsible)
  - Webflow Interactions : Toggle accordion au clic
- [ ] Afficher les 8 questions

### 5.11 Section Contact

- [ ] Container + Section
- [ ] Header : H1 "La vôtre commence maintenant" + Subtitle
- [ ] Citation inspirante
- [ ] **Formulaire Webflow** :
  - Champs : Nom, Email, Organisation, Type projet (select), Date, Budget (range), Message
  - Checkbox consentement
  - Submit button : "Partagez votre histoire"
  - Success message custom
  - Email notification : configurer dans Form Settings
- [ ] Bloc alternatif : Email direct + Location

**Textes :** `/deliverables/content/copy-deck.md` > Contact

### 5.12 Footer

- [ ] Section dark (background `BG Dark`)
- [ ] 4 colonnes (responsive) :
  - **Colonne 1** : Logo + Tagline + Baseline
  - **Colonne 2** : Navigation links
  - **Colonne 3** : Mentions légales
  - **Colonne 4** : Newsletter (email input + CTA)
- [ ] Bottom bar : Copyright + "Made with ♥ in Angers" + Back to top

**Textes :** `/deliverables/content/copy-deck.md` > Footer

---

## ⚡ PHASE 6 : Interactions Webflow (1-2h)

### 6.1 Scroll Reveals

- [ ] Créer interaction **"Fade In Up on Scroll"** :
  - Déclencheur : Scroll into view (offset 10%)
  - Initial state : Opacity 0, Transform Y +30px
  - Animation : Opacity 1, Transform Y 0
  - Duration : 0.6s, Easing : ease-out
- [ ] Appliquer aux sections : Headers, Cards, Blocks

### 6.2 Hover States (Cards & Buttons)

- [ ] Buttons (`.btn--primary`) :
  - Hover : Transform Y -2px, Shadow augmentée
  - Duration : 0.25s
- [ ] Cards (`.card`) :
  - Hover : Transform Y -4px, Shadow lift
  - Duration : 0.25s

### 6.3 FAQ Accordion

- [ ] Créer interaction **"Toggle FAQ"** :
  - Click : Toggle height de la réponse
  - Rotate icône chevron (180deg)
  - Duration : 0.3s, Easing : ease

### 6.4 Mobile Menu

- [ ] Hamburger toggle :
  - Click : Open/Close nav menu
  - Animation : Slide in from right
  - Background overlay dark

### 6.5 Hero Scroll Button

- [ ] Click sur chevron :
  - Smooth scroll vers section Créations
  - Duration : 0.8s

---

## 🎨 PHASE 7 : Page /experience (En Construction) (30min)

### 7.1 Créer la Page

- [ ] **Pages** > **New Page** : `/experience`
- [ ] SEO Title : `Expérience — En français s'il vous plaît`

### 7.2 Contenu

- [ ] Section Hero dark full-height
- [ ] Background : `BG Dark` ou image sombre
- [ ] Contenu centré :
  - H1 : "Expérience en construction"
  - Paragraph : "Cette section sera bientôt disponible. Revenez nous voir !"
  - CTA : "Retour à l'accueil" (lien vers `/`)
- [ ] Style : Minimal, élégant, sobre

### 7.3 Navigation

- [ ] Ajouter lien "Expérience" dans le menu (optionnel)
- [ ] Ou laisser la page accessible uniquement par URL directe

---

## ♿ PHASE 8 : Accessibilité & Performance (1h)

### 8.1 Accessibilité

- [ ] **Alt text** sur toutes les images
- [ ] **Labels** sur tous les champs de formulaire
- [ ] **Focus visible** : Vérifier les outlines (ring `#e8c4b4`)
- [ ] **Tab order** : Tester la navigation au clavier
- [ ] **ARIA labels** : Ajouter sur boutons icônes (hamburger, play, etc.)
- [ ] **Contrastes** : Vérifier AA (4.5:1 pour texte)
  - Outil : WebAIM Contrast Checker

### 8.2 Performance

- [ ] **Images** :
  - Format WebP
  - Lazy loading : activer (Webflow par défaut)
  - Taille max : 1600px
  - Compression : 85% quality
- [ ] **Fonts** :
  - Précharger Playfair Display & Inter (via Custom Code si besoin)
- [ ] **LCP** (Largest Contentful Paint) :
  - Objectif : < 2.5s
  - Hero image optimisée
- [ ] **CLS** (Cumulative Layout Shift) :
  - Définir width/height sur images
  - Éviter les shifts au chargement

### 8.3 SEO

- [ ] **Meta descriptions** sur toutes les pages
- [ ] **Open Graph tags** :
  - og:title, og:description, og:image
  - Ajouter dans **Page Settings** > **Open Graph**
- [ ] **Favicon** : Vérifier l'affichage
- [ ] **Sitemap** : Webflow génère automatiquement
- [ ] **Robots.txt** : Vérifier (Webflow par défaut OK)

---

## 🌐 PHASE 9 : Connecter le Domaine (voir dns-webflow.md)

**⚠️ Important :** Suivre le guide `/deliverables/dns-webflow.md` pour pointer le domaine **enfrancaissvp.fr** vers Webflow.

### Checklist Rapide :

- [ ] **Webflow** > **Project Settings** > **Hosting** > **Add Custom Domain**
- [ ] Entrer `enfrancaissvp.fr` et `www.enfrancaissvp.fr`
- [ ] Noter les enregistrements DNS Webflow
- [ ] **OVH** > **DNS Zone** :
  - [ ] Ajouter `A` record pour apex (`@`) → IP Webflow
  - [ ] Ajouter `CNAME` pour `www` → `proxy-ssl.webflow.com`
  - [ ] **NE PAS TOUCHER** aux enregistrements `MX` (emails)
- [ ] Attendre propagation DNS (2-48h)
- [ ] Activer SSL dans Webflow (automatique après propagation)
- [ ] Tester : `https://enfrancaissvp.fr` et `https://www.enfrancaissvp.fr`

---

## ✅ PHASE 10 : Tests & QA Finale (1h)

### 10.1 Tests Fonctionnels

- [ ] **Navigation** : Tous les liens fonctionnent
- [ ] **Formulaire Contact** : Tester soumission + réception email
- [ ] **Collection Lists** : Projets, FAQ, Stats s'affichent correctement
- [ ] **Filtres Portfolio** : Si implémentés, tester
- [ ] **Mobile Menu** : Open/Close fonctionne
- [ ] **Scroll Reveals** : Animations fluides

### 10.2 Tests Responsive

- [ ] **Desktop** (1920px, 1440px, 1280px)
- [ ] **Tablet** (768px, 1024px)
- [ ] **Mobile** (375px, 414px, 390px)
- [ ] Vérifier : Grids, Stacks, Font sizes, Spacings

### 10.3 Tests Navigateurs

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### 10.4 Tests Performance

- [ ] **Google PageSpeed Insights** : Score > 90
- [ ] **Lighthouse** (Chrome DevTools) :
  - Performance : > 90
  - Accessibility : > 95
  - Best Practices : > 90
  - SEO : 100

### 10.5 Tests Accessibilité

- [ ] **WAVE** (WebAIM) : 0 erreurs
- [ ] **Keyboard Navigation** : Tab order logique
- [ ] **Screen Reader** : Tester avec NVDA ou VoiceOver

### 10.6 QA Checklist Détaillée

Voir `/deliverables/check-qa.md` pour la checklist complète.

---

## 🚀 PHASE 11 : Mise en Ligne

### 11.1 Publish

- [ ] **Webflow Designer** > **Publish** (coin haut-droit)
- [ ] Vérifier le site sur `https://enfrancaissvp.fr`

### 11.2 Post-Launch

- [ ] Tester tous les liens en production
- [ ] Vérifier formulaire contact (envoyer un test)
- [ ] Vérifier Google Analytics (si configuré)
- [ ] Tester le site sur mobile (devices réels)
- [ ] Partager sur réseaux sociaux pour tester OG tags

### 11.3 Monitoring

- [ ] **Webflow Analytics** : Activer
- [ ] **Google Search Console** : Soumettre sitemap
- [ ] **Uptime Monitoring** : Configurer (ex: UptimeRobot)

---

## 📝 Notes & Conseils

### Ordre de Travail Optimal

1. **Design System d'abord** : Ne pas commencer les sections avant d'avoir tous les styles prêts.
2. **Collections ensuite** : Créer et peupler le CMS avant de poser les Collection Lists.
3. **Sections par ordre logique** : Top → Bottom (Nav → Hero → ... → Footer).
4. **Interactions à la fin** : Une fois la structure posée, ajouter les interactions.

### Astuces Webflow

- **Symbols** : Créer des Symbols pour Nav et Footer (réutilisables).
- **Classes réutilisables** : Toujours nommer proprement (BEM ou utilitaires).
- **Breakpoints** : Tester chaque section sur tous les breakpoints avant de passer à la suivante.
- **Versionning** : Webflow sauvegarde automatiquement, mais noter les étapes importantes.

### Pièges à Éviter

- ❌ **Styles inline** : Toujours créer des classes, jamais de styles directs.
- ❌ **Trop de nesting** : Limiter la profondeur des divs (max 4-5 niveaux).
- ❌ **Images non optimisées** : Toujours compresser avant upload.
- ❌ **Collections mal structurées** : Vérifier les champs avant d'importer les CSV.

---

## 🎯 Résultat Attendu

À la fin de ce checklist, vous aurez :

✅ Un site Webflow pixel-perfect par rapport au design actuel
✅ Un CMS fonctionnel (Projets, FAQ, Stats)
✅ Des interactions fluides et professionnelles
✅ Un site accessible (AA) et performant (> 90 Lighthouse)
✅ Un domaine connecté (`enfrancaissvp.fr`)
✅ Une page `/experience` en construction

**Prêt à migrer sans refaire deux fois !** 🚀

---

**Fin de la Checklist Webflow Build** ✨
