# Thème WordPress EfSVP

Ce dossier contient le thème modulaire **EfSVP** prêt à être importé dans WordPress.

## Installation

1. Zipper le dossier `efsvp/` (ou copier tel quel sur votre serveur).
2. Dans l’admin WordPress : `Apparence > Thèmes > Ajouter` puis téléverser le zip.
3. Activer le thème "EfSVP".
4. Rendez-vous dans `Apparence > Personnaliser` pour ajuster :
   - Signature, titres et sous-titres du hero.
   - Vidéos MP4/WebM du hero + poster.
   - Palette (primaire, secondaire, encre, parchemin).

## Assets

- Les styles et scripts sont déjà compilés (`assets/css/main.css` et `assets/js/main.js`).
- Remplacez les médias (vidéo du hero, etc.) dans `assets/media/` si besoin.

## Structure des templates

- `front-page.php` charge les sections via `get_template_part('parts/...')`.
- Partials disponibles : `hero`, `services`, `portfolio`, `process`, `testimonials`, `contact`.
- Le formulaire de contact reste statique : connecter une solution (Gravity Forms, Formidable, etc.) si nécessaire.

## Personnalisation avancée

- Les couleurs déclarées dans le Customizer injectent automatiquement les variables CSS (`:root`).
- Pour modifier la navigation, créez un menu dans `Apparence > Menus` (emplacement `Menu principal`).
- Les scripts Swiper & interactions sont inclus via `assets/js/main.js` (issu du build Vite).

## Export statique

Le build Vite a été généré dans `dist/` (commande `npm run build`). Utilisez ce dossier pour une version statique ou comme base d’intégration.
