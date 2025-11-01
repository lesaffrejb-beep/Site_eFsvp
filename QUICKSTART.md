# 🚀 Guide de Démarrage Rapide - EfSVP Premium Website

## ✅ Installation et Lancement

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancer en mode développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

### 3. Build pour production

```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

### 4. Prévisualiser le build

```bash
npm run preview
```

## 📂 Structure Importante

```
Site_eFsvp/
├── index.html           ← Page principale
├── src/
│   ├── styles/
│   │   └── styles.css  ← Tous les styles
│   └── scripts/
│       └── main.js      ← Tout le JavaScript
├── public/
│   └── assets/         ← Placez ici vos fichiers audio/vidéo/images
└── package.json
```

## ⚠️ IMPORTANT: Ne PAS utiliser les anciens dossiers

- ❌ **NE PAS éditer** `css/` ou `js/` (anciens fichiers supprimés)
- ✅ **Éditer uniquement** `src/styles/` et `src/scripts/`

## 🎨 Personnalisation Rapide

### Changer les couleurs

Éditer `src/styles/styles.css` ligne 10-25 :

```css
:root {
  --primary: #B8441E;      /* Votre couleur principale */
  --secondary: #E8924F;    /* Votre couleur secondaire */
}
```

### Ajouter une vidéo hero

1. Placer votre vidéo MP4 dans `public/assets/videos/hero.mp4`
2. Dans `index.html` ligne 80, remplacer :

```html
<div class="hero__video-placeholder"></div>
```

Par :

```html
<video autoplay loop muted playsinline class="hero__video">
  <source src="/assets/videos/hero.mp4" type="video/mp4">
</video>
```

### Ajouter des fichiers audio

1. Placer vos MP3 dans `public/assets/audio/`
2. Ils seront automatiquement accessibles via `/assets/audio/votre-fichier.mp3`

## 🐛 Problèmes Courants

### Le site ne s'affiche pas correctement

```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreur "module not found"

```bash
# Vérifier que toutes les dépendances sont installées
npm install
```

### Le CSS ne se charge pas

- ✅ Vérifier que vous utilisez `npm run dev` et non juste ouvrir `index.html`
- ✅ Le CSS est dans `src/styles/styles.css` (pas `css/styles.css`)

## 📝 Modifications du Contenu

Tout le contenu est dans `index.html`:

- **Hero** : lignes 77-113
- **Audio/Bento Grid** : lignes 121-245
- **Services** : lignes 251-349
- **Portfolio** : lignes 354-480
- **Process** : lignes 485-604
- **Témoignages** : lignes 609-722
- **Stats** : lignes 727-748
- **FAQ** : lignes 753-880
- **Contact** : lignes 885-1041
- **Footer** : lignes 1047-1118

## ✨ Fonctionnalités Actives

- ✅ Smooth scroll (Lenis)
- ✅ Animations au scroll (GSAP)
- ✅ Navigation sticky
- ✅ Menu burger mobile
- ✅ Portfolio filtrable
- ✅ FAQ avec recherche
- ✅ Formulaire avec validation
- ✅ Carousel témoignages (Swiper)
- ✅ Compteurs animés
- ✅ Responsive total

## 🎯 Prochaines Étapes

1. **Ajouter vos contenus** :
   - [ ] Vidéo hero background
   - [ ] Fichiers audio (3 minimums pour les players)
   - [ ] Images portfolio
   - [ ] Logo SVG/PNG

2. **Configurer le formulaire** :
   - [ ] Installer EmailJS, FormSpree ou Netlify Forms
   - [ ] Tester l'envoi d'emails

3. **Déployer** :
   - [ ] Netlify: glisser-déposer le dossier `dist/`
   - [ ] Vercel: connecter le repo GitHub
   - [ ] FTP classique: uploader le contenu de `dist/`

## 📞 Support

Problème? Vérifiez :
1. Node.js version 18+ : `node --version`
2. Dépendances installées : `npm install`
3. Console navigateur (F12) pour voir les erreurs

---

**Le site fonctionne parfaitement! 🎉**

Pour toute question, consultez le README.md complet.
