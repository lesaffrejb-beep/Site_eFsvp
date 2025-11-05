# Checklist QA Finale — EfSVP Webflow

**Validation complète avant mise en production**

---

## 📋 Vue d'ensemble

Cette checklist couvre tous les aspects qualité du site avant la mise en ligne :
- ✅ Contenu (typos, wording, liens)
- ✅ Design (responsive, cohérence visuelle)
- ✅ Fonctionnel (navigation, formulaires, interactions)
- ✅ Performance (vitesse, images, LCP)
- ✅ Accessibilité (WCAG AA, ARIA, focus)
- ✅ SEO (meta tags, OG, sitemap)
- ✅ Technique (DNS, SSL, emails)

**Durée estimée :** 1-2 heures de tests approfondis

---

## 📝 1. CONTENU & WORDING

### 1.1 Orthographe & Typographie

- [ ] **Orthographe** : Aucune faute (utiliser correcteur FR)
- [ ] **Ponctuation française** :
  - [ ] Espaces insécables avant `:`, `;`, `?`, `!`, `«`, `»`
  - [ ] Guillemets français : `« ... »` (pas `"..."`)
  - [ ] Tirets cadratin pour incises : `—` (pas `-`)
- [ ] **Casse des titres** :
  - [ ] H1, H2, H3 : Majuscule au début uniquement (sauf noms propres)
  - [ ] Pas de TOUT EN MAJUSCULES (sauf acronymes comme EfSVP)
- [ ] **Nombres** :
  - [ ] Espaces insécables pour milliers : `1 200 €`, `60 000+`
  - [ ] Cohérence des symboles : `€` (pas `EUR`)

### 1.2 Cohérence du Wording

- [ ] **Ton premium** : Éviter le langage trop familier
- [ ] **Vocabulaire cohérent** :
  - [ ] "Création narrative" (pas "storytelling")
  - [ ] "Performance live" (pas "concert" seul)
  - [ ] "À partir de" (pas "dès")
- [ ] **CTAs clairs** :
  - [ ] Verbes d'action : "Partagez votre histoire", "Démarrer votre projet", "Découvrir"
  - [ ] Pas de "Cliquez ici" ou "En savoir plus" seuls

### 1.3 Exactitude des Informations

- [ ] **Chiffres vérifiés** :
  - [ ] 60+ représentations ✓
  - [ ] 15+ projets institutionnels ✓
  - [ ] Tarifs : 1 200€, 2 500€, 3 600€ ✓
- [ ] **Noms propres corrects** :
  - [ ] Département Maine-et-Loire (tiret, capitale L)
  - [ ] PNR Loire-Anjou-Touraine
  - [ ] SIVAL (majuscules)
- [ ] **Années cohérentes** : 2023, 2024, 2025

---

## 🎨 2. DESIGN & VISUEL

### 2.1 Cohérence Visuelle

- [ ] **Palette stricte** :
  - [ ] Uniquement couleurs du design system (Parchment, Ink, Primary, etc.)
  - [ ] Pas de couleurs "hors charte"
  - [ ] Vérifier dans Webflow : Aucun style inline avec couleurs custom
- [ ] **Border Radius cohérent** :
  - [ ] Buttons : 12px
  - [ ] Cards : 20px
  - [ ] Badges : 8px
  - [ ] Chips : full (9999px)
  - [ ] Pas de mélange angles droits / arrondis
- [ ] **Ombres cohérentes** :
  - [ ] Cards : `shadow-sm` par défaut, `shadow-lift` au hover
  - [ ] Buttons : `shadow-base`, `shadow-md` au hover
  - [ ] Hero CTA : `shadow-hero-cta`
- [ ] **Espacement vertical** :
  - [ ] Sections : 96px (desktop), 64px (tablet), 48px (mobile)
  - [ ] Stacks : 16px, 24px, 32px (cohérent)
  - [ ] Rythme vertical multiple de 4px

### 2.2 Typographie

- [ ] **Polices correctes** :
  - [ ] Titres (H1-H4) : Playfair Display, weight 700/600
  - [ ] Body : Inter, weight 400
  - [ ] Accents italiques : Cormorant italic 600
- [ ] **Tailles responsive** :
  - [ ] H1 : 60px (desktop) → 40px (tablet) → 32px (mobile)
  - [ ] H2 : 48px → 36px → 28px
  - [ ] Body : 17px → 16px
- [ ] **Line Heights** :
  - [ ] Titres : 1.1-1.3 (snug/tight)
  - [ ] Body : 1.7 (relaxed)
- [ ] **Letter Spacing** :
  - [ ] Titres : -0.02em (légèrement serré)

### 2.3 Images & Assets

- [ ] **Format optimal** :
  - [ ] Photos : WebP
  - [ ] Logos : SVG
  - [ ] Favicon : SVG ou PNG 32x32
- [ ] **Taille max** :
  - [ ] Images hero : max 1600px largeur
  - [ ] Thumbnails : max 800px
  - [ ] Poids : < 300 KB par image
- [ ] **Alt text** :
  - [ ] Toutes les images ont un alt descriptif
  - [ ] Pas de "image", "photo" dans l'alt
  - [ ] Images décoratives : `alt=""` (vide, pas absent)
- [ ] **Lazy loading** :
  - [ ] Activé sur toutes les images (Webflow par défaut)

---

## 🖱️ 3. FONCTIONNEL & INTERACTIONS

### 3.1 Navigation

- [ ] **Header sticky** :
  - [ ] Fonctionne au scroll (reste en haut)
  - [ ] Z-index correct (1100)
  - [ ] Background opaque (pas transparent)
- [ ] **Menu links** :
  - [ ] Tous les liens pointent vers les bonnes sections (#creations, #portfolio, etc.)
  - [ ] Smooth scroll activé
  - [ ] Active state sur le lien actif (optionnel)
- [ ] **Mobile menu** :
  - [ ] Hamburger toggle fonctionne
  - [ ] Menu slide-in fluide
  - [ ] Close button visible
  - [ ] Overlay dark cliquable pour fermer
- [ ] **Logo** :
  - [ ] Cliquable, retour à #hero (ou top page)

### 3.2 Formulaire Contact

- [ ] **Champs requis** :
  - [ ] Validation client-side active (HTML5)
  - [ ] Messages d'erreur clairs (ex: "Email invalide")
- [ ] **Types de champs** :
  - [ ] Email : type `email` (validation automatique)
  - [ ] Date : type `date` (datepicker)
  - [ ] Select : options correctes (Anniversaire, Hymne, etc.)
- [ ] **Soumission** :
  - [ ] Formulaire se soumet correctement
  - [ ] Success message s'affiche (modal ou inline)
  - [ ] Email de notification reçu (tester avec vraie adresse)
  - [ ] Pas de double soumission (bouton disabled après clic)
- [ ] **Accessibilité formulaire** :
  - [ ] Labels visibles sur tous les champs
  - [ ] Placeholder ≠ Label (ne remplace pas le label)
  - [ ] Focus visible sur les inputs

### 3.3 Interactions & Animations

- [ ] **Scroll Reveals** :
  - [ ] Sections fade in au scroll
  - [ ] Offset correct (10-15%)
  - [ ] Pas de "jump" visuel (smooth)
- [ ] **Hover States** :
  - [ ] Buttons : Transform Y -2px + shadow
  - [ ] Cards : Transform Y -4px + shadow lift
  - [ ] Links : Color change vers Primary
  - [ ] Transitions : 0.25s (pas trop rapide, pas trop lent)
- [ ] **FAQ Accordion** :
  - [ ] Toggle open/close fonctionne
  - [ ] Chevron rotate 180deg
  - [ ] Animation smooth (0.3s)
  - [ ] Un seul item ouvert à la fois (optionnel)
- [ ] **Hero Scroll Button** :
  - [ ] Cliquable, scroll vers section Créations
  - [ ] Animation chevron (bounce ou pulse)

### 3.4 Collection Lists

- [ ] **Projects (Portfolio)** :
  - [ ] Tous les projets s'affichent (6 projets)
  - [ ] Thumbnail, titre, client, année, summary visibles
  - [ ] Lien vers page projet fonctionne
  - [ ] Filtres fonctionnent (si implémentés)
- [ ] **FAQ** :
  - [ ] 8 questions s'affichent
  - [ ] Question + Answer bien formatées
- [ ] **Stats** :
  - [ ] 4 stats s'affichent
  - [ ] Value (large) + Label (petit)

---

## 📱 4. RESPONSIVE & MULTI-DEVICE

### 4.1 Desktop (1920px, 1440px, 1280px)

- [ ] **Layout** :
  - [ ] Container max-width 1280px centré
  - [ ] Pas de débordement horizontal
  - [ ] Grids 3-4 colonnes fonctionnent
- [ ] **Typo** :
  - [ ] Tailles large (H1 60px, body 17px)
- [ ] **Spacings** :
  - [ ] Sections : 96px padding vertical

### 4.2 Tablet (768px, 1024px)

- [ ] **Layout** :
  - [ ] Grids passent à 2 colonnes (ou 1 si nécessaire)
  - [ ] Navigation : Menu desktop ou hamburger (selon breakpoint)
- [ ] **Typo** :
  - [ ] H1 : 40px
  - [ ] Body : 16-17px
- [ ] **Spacings** :
  - [ ] Sections : 64px padding vertical

### 4.3 Mobile (375px, 414px, 390px)

- [ ] **Layout** :
  - [ ] Grids : 1 colonne (stacked)
  - [ ] Container padding : 16px (au lieu de 24px)
  - [ ] Hamburger menu actif
- [ ] **Typo** :
  - [ ] H1 : 32px (lisible)
  - [ ] Body : 16px
- [ ] **Spacings** :
  - [ ] Sections : 48px padding vertical
- [ ] **Buttons** :
  - [ ] Full-width ou centré (selon contexte)
  - [ ] Touch target min 44x44px
- [ ] **Formulaire** :
  - [ ] Inputs full-width
  - [ ] Labels lisibles

### 4.4 Tests Devices Réels

- [ ] **iOS** : iPhone 12/13/14 (Safari)
- [ ] **Android** : Samsung Galaxy, Pixel (Chrome)
- [ ] **Tablet** : iPad (Safari), Android tablet

---

## 🚀 5. PERFORMANCE

### 5.1 Google PageSpeed Insights

Tester sur : https://pagespeed.web.dev/

**Objectifs :**
- [ ] **Performance** : > 90 (desktop et mobile)
- [ ] **Accessibility** : > 95
- [ ] **Best Practices** : > 90
- [ ] **SEO** : 100

### 5.2 Core Web Vitals

- [ ] **LCP (Largest Contentful Paint)** : < 2.5s
  - Hero image optimisée
  - Préchargement fonts (si besoin)
- [ ] **FID (First Input Delay)** : < 100ms
  - Pas de JS bloquant
- [ ] **CLS (Cumulative Layout Shift)** : < 0.1
  - Width/Height définis sur images
  - Pas de shifts au chargement

### 5.3 Optimisations

- [ ] **Images** :
  - [ ] Format WebP (ou AVIF si supporté)
  - [ ] Compression : 85% quality
  - [ ] Responsive images (srcset si possible)
  - [ ] Lazy loading actif
- [ ] **Fonts** :
  - [ ] Google Fonts optimisés (display=swap)
  - [ ] Préchargement des fonts critiques (optionnel)
- [ ] **CSS/JS** :
  - [ ] Webflow minifie automatiquement
  - [ ] Pas de custom JS lourd

---

## ♿ 6. ACCESSIBILITÉ (WCAG AA)

### 6.1 Contrastes

Tester sur : https://webaim.org/resources/contrastchecker/

- [ ] **Texte normal** : Ratio > 4.5:1
  - [ ] Ink (#1d2c3b) sur Parchment (#fbf8f3) : ✓
  - [ ] Text Secondary (#4a5568) sur Parchment : ✓
  - [ ] White sur Primary (#b95a40) : ✓
- [ ] **Texte large (18px+)** : Ratio > 3:1
- [ ] **Boutons** :
  - [ ] Texte bouton Primary : White sur #b95a40 : ✓

### 6.2 Navigation Clavier

- [ ] **Tab Order** :
  - [ ] Logique (haut → bas, gauche → droite)
  - [ ] Skip links présent (optionnel mais recommandé)
- [ ] **Focus Visible** :
  - [ ] Tous les éléments interactifs ont un focus outline
  - [ ] Outline : 3px solid Ring (#e8c4b4)
  - [ ] Outline offset : 3px
- [ ] **Trap keyboard** :
  - [ ] Pas de piège clavier (modals, menus)
  - [ ] Echap ferme les modals

### 6.3 ARIA & Sémantique

- [ ] **Landmarks** :
  - [ ] `<nav>` pour navigation
  - [ ] `<main>` pour contenu principal
  - [ ] `<footer>` pour footer
  - [ ] `<section>` pour sections thématiques
- [ ] **Headings** :
  - [ ] Hiérarchie logique : H1 → H2 → H3 (pas de saut)
  - [ ] Un seul H1 par page
- [ ] **ARIA Labels** :
  - [ ] Boutons icônes : `aria-label="Menu"`, `aria-label="Lecture"`
  - [ ] Hamburger : `aria-expanded="false"` (toggle)
- [ ] **Alt Text** :
  - [ ] Toutes les images ont un alt
  - [ ] Alt descriptif et concis

### 6.4 Tests Automatisés

**WAVE (WebAIM) :** https://wave.webaim.org/

- [ ] **0 erreurs** (errors)
- [ ] Alerts et warnings : Vérifier et corriger si pertinent

**Lighthouse (Chrome DevTools) :**

- [ ] **Accessibility score** : > 95

---

## 🔍 7. SEO

### 7.1 Meta Tags

**Page d'accueil :**

- [ ] **Title** : `En français s'il vous plaît | Création narrative & musicale sur-mesure`
  - [ ] Longueur : 50-60 caractères
- [ ] **Meta Description** : `Studio de création narrative et musicale pour vos événements clés. Écriture, composition, performance live. Angers, Pays de la Loire.`
  - [ ] Longueur : 150-160 caractères
- [ ] **Canonical URL** : `https://enfrancaissvp.fr/`

**Pages Projets (/projets/[slug]) :**

- [ ] Titre dynamique : `[Nom Projet] | EfSVP`
- [ ] Meta description dynamique (summary du projet)

### 7.2 Open Graph (Réseaux Sociaux)

- [ ] **og:title** : Identique au title (ou variante)
- [ ] **og:description** : Identique à meta description
- [ ] **og:image** : Image 1200x630px (OG card)
  - [ ] Uploader dans `/og-pack/`
  - [ ] URL absolue : `https://enfrancaissvp.fr/assets/og-image.png`
- [ ] **og:url** : `https://enfrancaissvp.fr/`
- [ ] **og:type** : `website`
- [ ] **og:locale** : `fr_FR`

**Twitter Card :**

- [ ] **twitter:card** : `summary_large_image`
- [ ] **twitter:title**, **twitter:description**, **twitter:image** : Identiques OG

### 7.3 Sitemap & Robots

- [ ] **Sitemap** :
  - [ ] Webflow génère automatiquement : `https://enfrancaissvp.fr/sitemap.xml`
  - [ ] Vérifier que toutes les pages sont listées
- [ ] **Robots.txt** :
  - [ ] Webflow génère automatiquement : `https://enfrancaissvp.fr/robots.txt`
  - [ ] Vérifier que rien n'est bloqué par erreur

### 7.4 Structured Data (Schema.org)

- [ ] **Organization** : Présent dans le HTML (JSON-LD)
- [ ] **WebSite** : Présent
- [ ] **BreadcrumbList** : Si navigation multi-niveaux

**Tester :** https://search.google.com/test/rich-results

---

## 🌐 8. DNS & DOMAINE

### 8.1 Configuration DNS

- [ ] **Enregistrement A** (apex) : Pointe vers IP Webflow
  - [ ] Vérifier : `dig enfrancaissvp.fr +short` → IP Webflow
- [ ] **Enregistrement CNAME** (www) : Pointe vers `proxy-ssl.webflow.com`
  - [ ] Vérifier : `dig www.enfrancaissvp.fr +short` → `proxy-ssl.webflow.com`
- [ ] **Enregistrements MX** (emails) : Intacts
  - [ ] Vérifier : `dig enfrancaissvp.fr MX +short` → `mx1.mail.ovh.net`, etc.
- [ ] **Propagation DNS** : Complète (https://www.whatsmydns.net/)

### 8.2 SSL (HTTPS)

- [ ] **Certificat SSL actif** :
  - [ ] `https://enfrancaissvp.fr` → Cadenas vert
  - [ ] `https://www.enfrancaissvp.fr` → Cadenas vert
- [ ] **Force HTTPS activé** :
  - [ ] `http://enfrancaissvp.fr` → redirige vers `https://`
- [ ] **Certificat valide** :
  - [ ] Pas d'erreur "Connexion non sécurisée"
  - [ ] Émetteur : Let's Encrypt (via Webflow)
  - [ ] Expire dans > 30 jours

**Test SSL :** https://www.ssllabs.com/ssltest/
- [ ] **Grade A** ou A+

### 8.3 Redirections

- [ ] **Apex ↔ WWW** :
  - [ ] `enfrancaissvp.fr` → redirige vers `www.enfrancaissvp.fr` (ou inverse, selon config)
  - [ ] Redirection 301 (permanent)
- [ ] **HTTP → HTTPS** :
  - [ ] Toutes les URLs HTTP redirigent vers HTTPS

---

## 📧 9. EMAILS & FONCTIONNALITÉS

### 9.1 Emails OVH

- [ ] **Réception** :
  - [ ] Envoyer un email de test à `contact@enfrancaissvp.fr`
  - [ ] Vérifier réception dans Webmail OVH
- [ ] **Envoi** :
  - [ ] Depuis `contact@enfrancaissvp.fr`, envoyer un email externe
  - [ ] Vérifier réception (pas en spam)

### 9.2 Formulaire Contact

- [ ] **Email notification** :
  - [ ] Soumettre le formulaire Webflow
  - [ ] Vérifier que l'email arrive bien (adresse configurée dans Webflow)
  - [ ] Contenu de l'email lisible (nom, email, message, etc.)

---

## 🔧 10. NAVIGATEURS & COMPATIBILITÉ

### 10.1 Tests Multi-Navigateurs

**Desktop :**

- [ ] **Chrome** (dernière version) : ✅
- [ ] **Firefox** (dernière version) : ✅
- [ ] **Safari** (Mac) : ✅
- [ ] **Edge** (Chromium) : ✅

**Mobile :**

- [ ] **Safari iOS** (iPhone) : ✅
- [ ] **Chrome Android** : ✅

### 10.2 Points à Vérifier par Navigateur

- [ ] Layout cohérent (pas de bugs visuels)
- [ ] Polices affichées correctement
- [ ] Interactions fonctionnent (hover, click, scroll)
- [ ] Formulaire fonctionne
- [ ] Videos/Images chargent

---

## ✅ 11. CHECKLIST FINALE PRÉ-LANCEMENT

**Avant de publier en production :**

- [ ] Tous les tests ci-dessus sont ✅
- [ ] Aucun placeholder ou "Lorem ipsum" restant
- [ ] Aucun lien cassé (404)
- [ ] Favicon affiché correctement
- [ ] OG image fonctionne (tester partage Facebook/LinkedIn)
- [ ] Google Analytics configuré (si applicable)
- [ ] Webflow Analytics activé
- [ ] Backup de la zone DNS OVH effectué
- [ ] Emails de test envoyés et reçus
- [ ] Performance Lighthouse > 90
- [ ] Accessibilité WAVE 0 erreurs
- [ ] Responsive testé sur 3 devices minimum

---

## 🚀 12. POST-LANCEMENT

**Dans les 24-48h suivant la mise en ligne :**

- [ ] **Monitoring uptime** : Configurer (UptimeRobot, Pingdom, etc.)
- [ ] **Google Search Console** :
  - [ ] Ajouter la propriété `enfrancaissvp.fr`
  - [ ] Soumettre le sitemap
  - [ ] Vérifier l'indexation
- [ ] **Analytics** :
  - [ ] Vérifier que les visites sont trackées
- [ ] **Partage social** :
  - [ ] Tester partage sur Facebook, LinkedIn, Twitter
  - [ ] Vérifier aperçu OG card
- [ ] **Feedback utilisateurs** :
  - [ ] Demander à 2-3 personnes de tester le site
  - [ ] Noter les bugs ou suggestions

---

## 📊 Résumé des Scores Cibles

| Catégorie | Outil | Score Cible |
|-----------|-------|-------------|
| **Performance** | Lighthouse | > 90 |
| **Accessibility** | Lighthouse | > 95 |
| **Best Practices** | Lighthouse | > 90 |
| **SEO** | Lighthouse | 100 |
| **Accessibility** | WAVE | 0 erreurs |
| **SSL** | SSL Labs | A ou A+ |
| **Mobile Usability** | Google Search Console | 0 erreurs |

---

## 🎯 Validation Finale

**Cocher uniquement quand TOUT est vert :**

- [ ] ✅ Contenu : Aucune faute, wording premium, infos exactes
- [ ] ✅ Design : Cohérent, responsive, visuel impeccable
- [ ] ✅ Fonctionnel : Navigation, formulaire, interactions OK
- [ ] ✅ Performance : Lighthouse > 90, LCP < 2.5s
- [ ] ✅ Accessibilité : WAVE 0 erreurs, contrastes AA, focus visible
- [ ] ✅ SEO : Meta tags, OG, sitemap, structured data
- [ ] ✅ DNS : Propagation complète, SSL actif, emails OK
- [ ] ✅ Multi-navigateurs : Chrome, Firefox, Safari, Edge testés
- [ ] ✅ Multi-devices : Desktop, Tablet, Mobile testés

---

**Site prêt pour la mise en production !** 🎉🚀

---

**Fin de la Checklist QA** ✨
