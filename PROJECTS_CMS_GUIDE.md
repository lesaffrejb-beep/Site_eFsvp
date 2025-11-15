# Guide du système de projets CMS-ready

> **Documentation officielle du système de gestion de contenu pour les projets EfSVP**
> Professionnalise la section « Quelques histoires que nous avons racontées »

---

## 📋 Vue d'ensemble

Le système de projets EfSVP est **100 % pilotée par contenu** :
- ✅ Aucun texte hardcodé dans le HTML
- ✅ Modèle de données structuré et extensible
- ✅ Prêt à brancher un CMS (Strapi, Contentful, WordPress, etc.)
- ✅ Compatible avec le système de filtrage existant
- ✅ Design system respecté (tokens, animations, responsive)

---

## 🗂️ Architecture

```
src/
├── data/
│   └── projects.js          # Fichier central : modèle + données des 12 projets
├── scripts/
│   ├── modules/
│   │   └── portfolioRenderer.js  # Génération dynamique des cartes
│   ├── blocks/
│   │   └── portfolio.js      # Système de filtrage (inchangé)
│   └── main.js               # Orchestration (appelle le renderer)
```

**Flux de données :**
1. `src/data/projects.js` → contient les données
2. `portfolioRenderer.js` → génère le HTML des cartes
3. `portfolio.js` → gère les filtres
4. `index.html` → conteneur vide (`.portfolio__grid`)

---

## ✨ Ajouter un nouveau projet

### 1. Ouvrir le fichier de données

```bash
src/data/projects.js
```

### 2. Ajouter un nouvel objet dans le tableau `projects`

Copier-coller ce template et remplir les champs :

```javascript
{
  // Identifiant unique (slug URL-friendly, kebab-case)
  slug: 'nom-du-projet-client',

  // Informations principales
  title: 'Titre court du projet',
  client: 'Nom du client principal',
  coClients: ['Partenaire 1', 'Partenaire 2'], // optionnel
  year: 2025,
  period: 'Janvier 2025', // optionnel (affichage alternatif de l'année)

  // Classification
  sector: 'Secteur du projet', // ex. Agriculture, Patrimoine, Santé
  format: 'Type de format', // ex. Hymne, Spectacle déambulatoire
  typology: 'Institution', // Institution | Collectivité | Association | Entreprise | Spectacle
  location: 'Localisation géographique',

  // Descriptions (du plus court au plus long)
  tagline: 'Phrase d\'accroche ultra courte (1 ligne)',
  shortDescription: 'Description courte (2-3 phrases) pour la carte portfolio.',
  longDescription: `Description longue complète (plusieurs paragraphes).

Peut contenir plusieurs paragraphes pour raconter l'histoire du projet en détail.

Cette version sera utilisée dans une page dédiée ou un panneau modal.`,

  // Métadonnées EfSVP
  roles: ['écriture', 'composition', 'interprétation', 'collectage'],
  partners: ['Nom agence vidéo', 'Compositeur'], // optionnel
  themes: ['thème 1', 'thème 2', 'thème 3'], // mots-clés
  devices: ['violon/voix', 'texte vidéo'], // optionnel

  // Statut et mise en avant
  status: 'delivered', // delivered | in_production
  playsCount: 30, // optionnel (nombre de représentations)
  isFeatured: true, // optionnel (projet mis en avant)

  // Affichage
  order: 14, // ordre d'affichage (1 = premier)
  gradient: 'linear-gradient(135deg, #couleur1 0%, #couleur2 100%)',

  // Filtrage (compatibilité avec système existant)
  dataClient: 'institution', // institution | entreprise | spectacle
  dataType: 'brand', // brand | mediation | immersive
  dataCategory: 'institutions', // institutions | entreprises | spectacles
}
```

### 3. Choisir les bonnes valeurs de filtrage

| Typologie | dataClient | dataType | dataCategory | Exemples |
|-----------|------------|----------|--------------|----------|
| Institution publique | `institution` | `brand` | `institutions` | Hymne département |
| Collectivité | `institution` | `mediation` | `institutions` | Spectacle mairie |
| Association | `institution` | `mediation` | `institutions` | Réseau Cocagne |
| Entreprise privée | `entreprise` | `brand` | `entreprises` | Atelier Lacour |
| Spectacle autonome | `spectacle` | `immersive` | `spectacles` | État de nature |

**dataType :**
- `brand` : Hymnes, marques, identité, anniversaires
- `mediation` : Portraits, prévention, sensibilisation
- `immersive` : Spectacles déambulatoires, formats immersifs

### 4. Choisir un dégradé cohérent

Utiliser les couleurs du design system (`src/styles/design-tokens.css`) :

```javascript
// Exemples de dégradés disponibles
gradient: 'linear-gradient(135deg, #b8441e 0%, #e8924f 100%)', // Terracotta → Orange
gradient: 'linear-gradient(135deg, #7d2e2e 0%, #b8441e 100%)', // Rouge sombre → Terracotta
gradient: 'linear-gradient(135deg, #8a8a68 0%, #c39d6b 100%)', // Kaki → Camel
gradient: 'linear-gradient(135deg, #1a2332 0%, #2d2d2d 100%)', // Bleu nuit → Charcoal
gradient: 'linear-gradient(135deg, #e8924f 0%, #d4af37 100%)', // Orange → Or
```

### 5. Sauvegarder et tester

Le site se met à jour automatiquement lors du `npm run dev` :
```bash
npm run dev
```

La nouvelle carte apparaît dans la section portfolio, à la position définie par `order`.

---

## 🎨 Design system et cohérence visuelle

### Tokens utilisés

Tous les styles utilisent les tokens existants :

- **Couleurs** : `--primary`, `--secondary`, `--accent-camel`, `--accent-beige`
- **Rayons** : `--radius-lg` (20px pour les cartes)
- **Ombres** : `--shadow`, `--shadow-lift`
- **Typographie** : `--font-display` (Playfair Display), `--font-sans` (Inter)
- **Animations** : `--ease-out-expo`, `--duration-base`

### Hiérarchie des cartes (Bento Grid)

Le CSS applique automatiquement une disposition asymétrique :
- Carte 1 : grande (2 colonnes × 2 lignes)
- Carte 2-6 : tailles variées
- Responsive : 1 colonne sur mobile

**Aucune modification CSS nécessaire** pour ajouter un projet.

---

## 🔧 Fonctions utilitaires

Le fichier `src/data/projects.js` expose des fonctions pour manipuler les données :

```javascript
import {
  getAllProjects,        // Tous les projets triés par order
  getProjectBySlug,      // Récupérer un projet par slug
  getProjectsByStatus,   // Filtrer par statut (delivered/in_production)
  getFeaturedProjects,   // Projets mis en avant
  getProjectsByTypology, // Filtrer par typologie
  getProjectsBySector,   // Filtrer par secteur
  getAllSectors,         // Liste des secteurs uniques
  getAllThemes           // Liste des thèmes uniques
} from './data/projects.js';
```

**Exemple d'utilisation :**
```javascript
// Afficher uniquement les projets en production
const inProduction = getProjectsByStatus('in_production');

// Récupérer un projet spécifique
const project = getProjectBySlug('etat-de-nature-pnr-loire-anjou-touraine');

// Tous les projets mis en avant
const featured = getFeaturedProjects();
```

---

## 🚀 Migration vers un CMS

Le système actuel utilise un fichier JavaScript. Pour migrer vers un CMS :

### Option 1 : API REST

Modifier `src/scripts/modules/portfolioRenderer.js` :

```javascript
// Remplacer l'import statique
// import { getAllProjects } from '../../data/projects.js';

// Par une requête API
const fetchProjects = async () => {
  const response = await fetch('https://votre-cms.com/api/projects');
  return await response.json();
};

export const renderPortfolioCards = async (containerSelector = '.portfolio__grid') => {
  const container = document.querySelector(containerSelector);
  const projects = await fetchProjects(); // Au lieu de getAllProjects()
  // ... reste du code inchangé
};
```

### Option 2 : CMS Headless (Strapi, Contentful)

1. Créer un modèle `Project` dans le CMS avec les mêmes champs
2. Récupérer les données via l'API du CMS
3. Mapper la réponse au format attendu

### Option 3 : WordPress REST API

```javascript
const fetchProjects = async () => {
  const response = await fetch('https://votre-site.com/wp-json/wp/v2/projets');
  const wpProjects = await response.json();

  // Transformer le format WordPress vers notre modèle
  return wpProjects.map(wp => ({
    slug: wp.slug,
    title: wp.title.rendered,
    client: wp.acf.client, // Advanced Custom Fields
    // ... etc
  }));
};
```

---

## 📊 Statistiques et métriques

Actuellement dans `index.html` (lignes 908-913) :

```html
<div class="portfolio__stats">
  <div class="portfolio__stat" data-counter="60">60+</div>
  <span>représentations</span>
  <span class="portfolio__separator">·</span>
  <div class="portfolio__stat" data-counter="15">15+</div>
  <span>institutions</span>
</div>
```

Pour calculer automatiquement ces stats :

```javascript
import { projects } from './data/projects.js';

// Nombre total de représentations
const totalPlays = projects
  .filter(p => p.playsCount)
  .reduce((sum, p) => sum + p.playsCount, 0);

// Nombre d'institutions uniques
const uniqueInstitutions = new Set(projects.map(p => p.client)).size;

console.log(`${totalPlays}+ représentations`);
console.log(`${uniqueInstitutions}+ institutions`);
```

---

## ✅ Checklist d'ajout de projet

- [ ] Remplir tous les champs obligatoires (slug, title, client, year, etc.)
- [ ] Vérifier la cohérence `dataClient` / `dataType` / `dataCategory`
- [ ] Rédiger 3 descriptions (tagline, short, long)
- [ ] Choisir un gradient cohérent avec le design system
- [ ] Définir l'ordre d'affichage (`order`)
- [ ] Tester le rendu dans le navigateur
- [ ] Vérifier que les filtres fonctionnent correctement
- [ ] Valider la version mobile/tablette

---

## 🐛 Dépannage

### Les cartes ne s'affichent pas

1. Vérifier la console navigateur (F12) pour les erreurs
2. S'assurer que `portfolioRenderer.js` est bien importé dans `main.js`
3. Vérifier que le conteneur `.portfolio__grid` existe dans `index.html`

### Les filtres ne marchent pas

1. Vérifier que `dataClient`, `dataType`, `dataCategory` sont corrects
2. S'assurer que `initPortfolioRenderer()` est appelé **AVANT** `initPortfolioBlock()`

### Problème de gradient

1. Utiliser le format CSS complet : `linear-gradient(135deg, #color1 0%, #color2 100%)`
2. Vérifier que les couleurs sont au format hexadécimal (#xxxxxx)

---

## 📚 Ressources

- **Modèle de données** : `src/data/projects.js`
- **Renderer** : `src/scripts/modules/portfolioRenderer.js`
- **Filtres** : `src/scripts/blocks/portfolio.js`
- **Design tokens** : `src/styles/design-tokens.css`
- **Documentation principale** : `README.md`

---

## 🎯 Prochaines étapes

1. **Brancher un CMS** (Strapi, Contentful, WordPress)
2. **Créer des pages projets dédiées** (router, modales ou pages)
3. **Ajouter des images** (visuels, photos de spectacles)
4. **Gérer les médias** (extraits audio, vidéos)
5. **Multilingue** (EN, ES) si nécessaire

---

**Développé pour EfSVP — Création narrative & musicale sur-mesure**
*Angers, Pays de la Loire*
