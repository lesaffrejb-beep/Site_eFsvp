# README — Kit de Migration Webflow EfSVP

**Ce que je fais dans Webflow, dans l'ordre**

---

## 🎯 Objectif

Migrer **enfrancaissvp.fr** vers Webflow de manière propre, rapide, et sans refaire deux fois.

Ce dossier `/deliverables` contient TOUT ce dont tu as besoin :
- Design system (tokens + styles)
- Contenu structuré (JSON + CSV)
- Assets optimisés
- Guides complets (build + DNS + QA)

**Durée estimée totale :** 12-16 heures (setup + construction + tests)

---

## 📦 Contenu du Kit

```
deliverables/
├── design-tokens.json           # Palette, typo, espacements, ombres (source de vérité)
├── webflow-styles.md            # Classes utilitaires à créer dans Webflow
├── webflow-build-checklist.md  # Checklist détaillée étape par étape
├── dns-webflow.md               # Guide DNS OVH → Webflow (sans casser les emails)
├── check-qa.md                  # Checklist QA finale (typos, responsive, perf)
├── assets-map.json              # Mapping des assets (images à uploader)
├── content/
│   ├── home.json                # Tous les textes de la home
│   ├── projects.json            # Projets (portfolio)
│   ├── faq.json                 # Questions/Réponses
│   ├── stats.json               # Chiffres clés
│   └── copy-deck.md             # Textes propres pour copier-coller rapide
├── cms-import/
│   ├── projects.csv             # Import CSV Webflow (Collection Projects)
│   ├── faq.csv                  # Import CSV Webflow (Collection FAQ)
│   └── stats.csv                # Import CSV Webflow (Collection Stats)
├── assets/
│   ├── efsvp-logo.svg           # Logo principal
│   └── favicon.svg              # Favicon
└── og-pack/
    └── (à venir)                # Visuels OpenGraph 1200x630, webmanifest
```

---

## 🚀 Procédure de Migration (1 Page)

### ÉTAPE 1 : Créer le Projet Webflow (30min)

1. **Créer un nouveau projet Webflow**
   - Nom : `En français s'il vous plaît`
   - Plan : **CMS Plan** (minimum)
   - Template : **Blank Site**

2. **Ajouter les Google Fonts**
   - Project Settings > Fonts
   - Ajouter : **Playfair Display** (400, 500, 600, 700, 800, 900)
   - Ajouter : **Inter** (400, 500, 600, 700, 800)
   - Ajouter : **Cormorant** (italic 600)

3. **Créer la palette de couleurs (Swatches)**
   - Ouvrir `design-tokens.json`
   - Créer **tous les swatches** dans Webflow (Primary, Ink, Parchment, etc.)
   - 📖 Liste complète dans `webflow-styles.md` > Palette

4. **Configurer les styles globaux (Body, H1-H4, Links)**
   - Style Manager > Typography
   - Body : Inter, 17px, color Ink, background Parchment
   - H1 : Playfair Display, 60px (responsive), weight 700
   - H2, H3, H4 : Selon `webflow-styles.md`
   - Links : color Ink, hover Primary

5. **Créer les classes utilitaires**
   - `.container`, `.section`, `.btn`, `.card`, `.badge`, `.chip`, `.stack-16`, etc.
   - 📖 Liste complète dans `webflow-styles.md` > Classes Utilitaires
   - **Important :** Créer toutes les classes AVANT de commencer les sections

6. **Ajouter la texture grain (Custom Code)**
   - Project Settings > Custom Code > Head Code
   - Copier le code SVG grain depuis `webflow-styles.md` > Texture

---

### ÉTAPE 2 : Créer les Collections CMS (30min)

**Collection 1 : Projects**
- CMS > New Collection : `Projects`
- Champs :
  - Title (Text)
  - Slug (auto)
  - Client (Plain Text)
  - Year (Number)
  - Badge (Plain Text)
  - Summary (Rich Text)
  - Tags (Plain Text)
  - Featured (Switch)
  - Thumbnail (Image)
  - Images (Multi-Image)
- Collection Template Page : **Activer** (URL : `/projets/[slug]`)

**Collection 2 : FAQ**
- CMS > New Collection : `FAQ`
- Champs :
  - Question (Text)
  - Answer (Rich Text)
  - Order (Number)
- Collection Template Page : **Désactiver**

**Collection 3 : Stats**
- CMS > New Collection : `Stats`
- Champs :
  - Label (Text)
  - Value (Plain Text)
  - Order (Number)
- Collection Template Page : **Désactiver**

---

### ÉTAPE 3 : Importer les Données (15min)

1. **Importer Projects**
   - Collection Projects > Import
   - Uploader `/deliverables/cms-import/projects.csv`
   - Mapper les colonnes
   - Valider (6 projets importés)

2. **Importer FAQ**
   - Collection FAQ > Import
   - Uploader `/deliverables/cms-import/faq.csv`
   - Valider (8 questions importées)

3. **Importer Stats**
   - Collection Stats > Import
   - Uploader `/deliverables/cms-import/stats.csv`
   - Valider (4 stats importées)

---

### ÉTAPE 4 : Uploader les Assets (15min)

1. **Logos & Favicon**
   - Assets Manager > Upload : `efsvp-logo.svg`, `favicon.svg`
   - Project Settings > SEO > Favicon : Définir `favicon.svg`

2. **Images de projets** (si disponibles)
   - Uploader toutes les images WebP (max 1600px, qualité 85%)
   - Naming : kebab-case (ex: `etat-de-nature-hero.webp`)
   - 📖 Mapping dans `assets-map.json`

3. **Lier les images aux projets CMS**
   - Éditer chaque projet dans la Collection
   - Ajouter Thumbnail et Images
   - Publier

---

### ÉTAPE 5 : Construire les Sections (4-5h)

**Ordre de construction (Top → Bottom) :**

1. **Navigation (Navbar)**
   - Sticky header, logo EfSVP, menu, CTA
   - Background BG Dark, height 76px
   - 📖 Textes : `copy-deck.md` > Nav

2. **Hero**
   - Full-height, vidéo background (ou placeholder)
   - Titre 2 lignes, subtitle, CTA hero, 3 métriques
   - 📖 Textes : `copy-deck.md` > Hero

3. **Section Audio (Bento Grid)**
   - H2, subtitle, bento grid asymétrique
   - Audio players (placeholders), info card, quote, stats
   - 📖 Textes : `copy-deck.md` > Section Audio

4. **Flagship Cases (3 Créations)**
   - H2, 3 cards (Problème/Approche/Effet)
   - Featured : "État de nature"
   - 📖 Textes : `copy-deck.md` > Trois Créations

5. **Services (4 Formules)**
   - H2, 4 cards en grille
   - Featured : "Performance Live"
   - 📖 Textes : `copy-deck.md` > Quatre Formules

6. **Portfolio (Collection List)**
   - H2, filtres (optionnels)
   - Collection List : Projects, grid 3 colonnes
   - 📖 Config : `webflow-build-checklist.md` > Section Portfolio

7. **Process (4 Étapes)**
   - H2, 4 blocs numérotés (01-04)
   - 📖 Textes : `copy-deck.md` > Process

8. **Témoignages**
   - Section dark, 3 testimonial cards
   - 📖 Textes : `copy-deck.md` > Témoignages

9. **Stats (Collection List)**
   - H2, Collection List : Stats, grid 4 colonnes
   - 📖 Config : `webflow-build-checklist.md`

10. **FAQ (Collection List)**
    - H2, Collection List : FAQ, accordion style
    - 📖 Config : `webflow-build-checklist.md`

11. **Contact (Formulaire)**
    - H2, citation, formulaire Webflow
    - Champs : Nom, Email, Organisation, Type projet, Date, Budget, Message
    - 📖 Textes : `copy-deck.md` > Contact

12. **Footer**
    - Section dark, 4 colonnes (brand, nav, legal, newsletter)
    - 📖 Textes : `copy-deck.md` > Footer

**📖 Détails complets dans `webflow-build-checklist.md` > Phase 5**

---

### ÉTAPE 6 : Ajouter les Interactions (1h)

1. **Scroll Reveals**
   - Fade In Up on Scroll (sections, cards)
   - Offset 10%, duration 0.6s

2. **Hover States**
   - Buttons : Transform Y -2px, shadow lift
   - Cards : Transform Y -4px, shadow lift

3. **FAQ Accordion**
   - Toggle height + rotate chevron

4. **Mobile Menu**
   - Hamburger toggle, slide-in

**📖 Guide complet dans `webflow-build-checklist.md` > Phase 6**

---

### ÉTAPE 7 : Créer la Page /experience (30min)

1. **Pages > New Page** : `/experience`
2. **Contenu :**
   - Hero dark full-height
   - H1 : "Expérience en construction"
   - P : "Cette section sera bientôt disponible. Revenez nous voir !"
   - CTA : "Retour à l'accueil"
3. **Publier**

---

### ÉTAPE 8 : Accessibilité & Performance (1h)

**Accessibilité :**
- [ ] Alt text sur toutes les images
- [ ] Labels sur tous les champs formulaire
- [ ] Focus visible (outline ring `#e8c4b4`)
- [ ] Tab order logique
- [ ] Contrastes AA (4.5:1 minimum)

**Performance :**
- [ ] Images WebP, lazy loading
- [ ] Fonts préchargées (si besoin)
- [ ] LCP < 2.5s (hero optimisé)
- [ ] Lighthouse > 90

**📖 Checklist complète dans `check-qa.md`**

---

### ÉTAPE 9 : Connecter le Domaine (30min + propagation)

1. **Webflow > Project Settings > Hosting > Add Custom Domain**
   - Ajouter : `enfrancaissvp.fr` et `www.enfrancaissvp.fr`
   - Noter les enregistrements DNS (A et CNAME)

2. **OVH Manager > Zone DNS**
   - Modifier enregistrement `A` (@) → IP Webflow
   - Modifier/Ajouter `CNAME` (www) → `proxy-ssl.webflow.com`
   - **NE PAS TOUCHER aux MX** (emails)

3. **Attendre propagation** (2-48h)
   - Vérifier : https://www.whatsmydns.net/

4. **SSL automatique** (Webflow)
   - Activer "Force HTTPS"

**📖 Guide détaillé complet dans `dns-webflow.md`**

---

### ÉTAPE 10 : Tests & QA (1h)

- [ ] Navigation : tous les liens fonctionnent
- [ ] Formulaire : test soumission + email
- [ ] Collection Lists : Projets, FAQ, Stats s'affichent
- [ ] Responsive : Desktop, Tablet, Mobile
- [ ] Navigateurs : Chrome, Firefox, Safari, Edge
- [ ] Performance : Lighthouse > 90
- [ ] Accessibilité : WAVE 0 erreurs

**📖 Checklist complète dans `check-qa.md`**

---

### ÉTAPE 11 : Mise en Ligne 🚀

1. **Webflow > Publish** (bouton coin haut-droit)
2. Tester `https://enfrancaissvp.fr`
3. Vérifier tout en production
4. Célébrer 🎉

---

## 📖 Documentation de Référence

| Fichier | Usage |
|---------|-------|
| `design-tokens.json` | Source de vérité : palette, typo, espacements |
| `webflow-styles.md` | Toutes les classes à créer + règles de design |
| `webflow-build-checklist.md` | Checklist détaillée étape par étape (10h de travail) |
| `dns-webflow.md` | Guide DNS complet (OVH → Webflow, sans casser emails) |
| `copy-deck.md` | Tous les textes propres pour copier-coller |
| `home.json` | Structure complète du contenu (référence) |
| `projects.json`, `faq.json`, `stats.json` | Données CMS (référence) |
| `projects.csv`, `faq.csv`, `stats.csv` | Fichiers d'import direct Webflow |
| `check-qa.md` | Checklist QA finale (typos, responsive, perf, a11y) |
| `assets-map.json` | Mapping des images (pour lier après upload) |

---

## 🎨 Principes de Design (Rappel)

1. **Cohérence des rayons** : Toujours arrondis (8px, 12px, 20px). Jamais de mélange angles/arrondis.
2. **Palette stricte** : Parchemin/Encre/Terre cuite. Pas de dégradés hors palette.
3. **Contrastes AA** : Minimum 4.5:1 pour texte.
4. **Rythme vertical** : Espacements multiples de 4px (8, 12, 16, 24, 32, 48, 64).
5. **Sobriété premium** : Transitions douces, pas d'animations tape-à-l'œil.

---

## ⚠️ Pièges à Éviter

- ❌ **Ne pas créer de styles inline** : Toujours créer des classes
- ❌ **Ne pas oublier les MX** : Les emails OVH doivent rester fonctionnels
- ❌ **Ne pas uploader des images non optimisées** : WebP, max 1600px, 85% quality
- ❌ **Ne pas sauter la phase Design System** : Créer toutes les classes AVANT les sections
- ❌ **Ne pas publier sans tester** : Responsive, formulaire, liens, performance

---

## 🎯 Résultat Attendu

À la fin de cette procédure :

✅ Site Webflow pixel-perfect par rapport au design actuel
✅ CMS fonctionnel (Projets, FAQ, Stats)
✅ Interactions fluides et professionnelles
✅ Accessible (AA) et performant (Lighthouse > 90)
✅ Domaine connecté (`enfrancaissvp.fr`)
✅ Emails OVH fonctionnels
✅ Page `/experience` en construction
✅ SSL actif (HTTPS)

**Prêt à migrer sans refaire deux fois !** 🚀

---

## 📞 Besoin d'Aide ?

**Documentation Webflow :**
- https://university.webflow.com/
- https://webflow.com/made-in-webflow (inspiration)

**Support :**
- Webflow Support : Chat in-app ou https://support.webflow.com/
- OVH Support : https://www.ovh.com/fr/support/

**Outils de Test :**
- DNS Propagation : https://www.whatsmydns.net/
- SSL Test : https://www.ssllabs.com/ssltest/
- PageSpeed : https://pagespeed.web.dev/
- WAVE (A11y) : https://wave.webaim.org/

---

**Fin du README de Migration** ✨

**Bonne migration !** 💪
