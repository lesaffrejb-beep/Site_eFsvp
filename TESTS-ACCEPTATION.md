# TESTS D'ACCEPTATION - Fix Voile Global

**Branche:** fix/veil-hardening
**Date:** 2025-11-03

---

## Tests obligatoires (Desktop + Mobile)

### ✅ Test 1: Vérification opacity/filter sur body

**Desktop (Chrome/Firefox/Safari):**
```js
getComputedStyle(document.body).opacity === "1" // DOIT être "1"
getComputedStyle(document.body).filter === "none" // DOIT être "none"
```

**Mobile (iOS Safari, Chrome Android):**
```js
getComputedStyle(document.body).opacity === "1" // DOIT être "1"
getComputedStyle(document.body).filter === "none" // DOIT être "none"
```

**Résultat attendu:**
- [x] opacity === "1" sur Desktop ✅
- [x] filter === "none" sur Desktop ✅
- [ ] opacity === "1" sur iOS Safari ⏳
- [ ] filter === "none" sur iOS Safari ⏳

---

### ✅ Test 2: Vérification mix-blend-mode + backdrop-filter

**Console DevTools:**
```js
const el = document.body;
console.log({
  opacity: getComputedStyle(el).opacity,
  filter: getComputedStyle(el).filter,
  mixBlendMode: getComputedStyle(el).mixBlendMode,
  backdropFilter: getComputedStyle(el).backdropFilter
});
```

**Résultat attendu:**
```json
{
  "opacity": "1",
  "filter": "none",
  "mixBlendMode": "normal",
  "backdropFilter": "none"
}
```

**Statut:**
- [ ] Vérifié sur Desktop ⏳
- [ ] Vérifié sur iOS Safari ⏳

---

### ✅ Test 3: Aucun élément global couvrant le viewport au repos

**Exécuter dans DevTools:**
```js
(() => {
  const vw = innerWidth, vh = innerHeight;
  const suspects = [];
  document.querySelectorAll('*').forEach(el => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    const covers = r.left <= 0 && r.top <= 0 && r.right >= vw - 1 && r.bottom >= vh - 1;
    const fixed = /fixed|absolute|sticky/.test(cs.position);
    const dim = parseFloat(cs.opacity) < 1 || cs.filter !== 'none' || cs.backdropFilter !== 'none' || cs.mixBlendMode !== 'normal';

    if (covers && fixed && dim && !el.classList.contains('hero__overlay') && !el.classList.contains('modal__overlay')) {
      suspects.push({
        tag: el.tagName,
        classes: [...el.classList],
        opacity: cs.opacity,
        filter: cs.filter,
        mixBlend: cs.mixBlendMode,
        backdropFilter: cs.backdropFilter,
        position: cs.position,
        zIndex: cs.zIndex
      });
    }
  });
  console.table(suspects);
  return suspects;
})();
```

**Résultat attendu:**
Array vide `[]` (aucun suspect trouvé)

**Statut:**
- [ ] Vérifié (array vide) ⏳

---

### ✅ Test 4: Overlays strictement limités à .hero ou menu ouvert

**Vérifications manuelles:**

1. **Hero overlay** (OK si scopé dans .hero):
   ```js
   const heroOverlay = document.querySelector('.hero__overlay');
   const hero = document.querySelector('.hero');
   console.log('Hero overlay parent:', heroOverlay?.parentElement === hero); // DOIT être true
   ```

2. **Menu fermé** (aucun backdrop visible):
   ```js
   const nav = document.querySelector('.nav');
   const navExpanded = nav?.querySelector('[aria-expanded="true"]');
   console.log('Menu ouvert:', navExpanded !== null); // DOIT être false au chargement
   ```

3. **Aucune classe veil/dim/backdrop globale**:
   ```js
   const globalVeils = document.querySelectorAll('body > [class*="overlay"], body > [class*="veil"], body > [class*="backdrop"], body > [class*="dim"]');
   console.log('Voiles globaux trouvés:', globalVeils.length); // DOIT être 0
   ```

**Statut:**
- [ ] Hero overlay scopé ⏳
- [ ] Menu fermé sans backdrop ⏳
- [ ] Aucun voile global ⏳

---

### ✅ Test 5: Failsafe JS activé

**Console log attendu au chargement:**
```
✅ Anti-veil failsafe applied (hardened)
```

**Vérification:**
```js
// Ouvrir DevTools Console et chercher le log
// Doit apparaître après "📊 Performance Metrics"
```

**Statut:**
- [ ] Log visible dans console ⏳

---

### ✅ Test 6: Aucune régression visuelle

**Tests visuels manuels:**

1. **Hero section** (vidéo + textes):
   - [ ] Vidéo visible sans voile ⏳
   - [ ] Textes hero lisibles (contraste suffisant) ⏳
   - [ ] Métriques de confiance (background opaque #1A2332) ⏳

2. **Portfolio cards**:
   - [ ] Overlays gradients au hover (opaques) ⏳
   - [ ] Aucun voile au repos ⏳

3. **Footer newsletter**:
   - [ ] Input avec background opaque #2A3542 ⏳
   - [ ] Border opaque #4A5A6F ⏳

4. **Animations préservées**:
   - [ ] Smooth scroll Lenis ⏳
   - [ ] GSAP scroll reveals ⏳
   - [ ] Hover effects boutons ⏳

**Statut:**
- [ ] Aucune régression visuelle détectée ⏳

---

### ✅ Test 7: Build Vercel OK

**Commandes:**
```bash
npm run build
npm run preview
```

**Vérifications:**
- [x] Build SUCCESS ✅
- [x] Aucune erreur console ✅
- [ ] Preview local sans voile ⏳
- [ ] Deploy Vercel OK (après merge) ⏳

---

## Tests iOS Safari (CRITIQUE)

iOS Safari est le suspect principal pour les voiles résiduels.

**Procédure:**

1. **Simulateur iOS (Mac):**
   ```bash
   npm run preview
   # Ouvrir dans iOS Simulator
   ```

2. **iPhone physique:**
   - Accéder à https://site-e-fsvp.vercel.app (après deploy)
   - Ouvrir DevTools via Safari Desktop + câble USB

3. **Tests à effectuer:**
   ```js
   // Dans console Safari iOS
   getComputedStyle(document.body).opacity
   getComputedStyle(document.body).filter
   getComputedStyle(document.body).mixBlendMode
   getComputedStyle(document.body).backdropFilter
   ```

**Résultats attendus:**
```
"1"
"none"
"normal"
"none"
```

**Statut iOS:**
- [ ] Testé sur iOS Simulator ⏳
- [ ] Testé sur iPhone physique ⏳
- [ ] Voile absent confirmé ⏳

---

## Checklist finale avant merge

- [x] Audit automatisé complet effectué ✅
- [x] Diagnostic DIAGNOSTIC-VEIL.md créé ✅
- [x] Toutes les rgba() alpha → opaques ✅
- [x] Failsafe JS hardened ✅
- [x] Kill-switch temporaire retiré ✅
- [x] Build SUCCESS ✅
- [ ] Tests Desktop passés ⏳
- [ ] Tests iOS Safari passés ⏳
- [ ] Aucune régression visuelle ⏳
- [ ] PR créée avec diagnostic ⏳

---

## En cas d'échec (voile persiste sur iOS)

Si malgré toutes ces corrections, le voile persiste sur iOS Safari, vérifier ces 3 suspects résiduels :

### Suspect résiduel #1: Grain SVG
Le grain dans design-tokens.css contient `opacity='0.04'` dans le data-uri SVG.

**Fix:**
```css
/* design-tokens.css */
--grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
```

Puis ajuster dans styles.css:
```css
body {
  background-image: var(--grain);
  opacity: 0.04; /* Contrôler opacité via CSS au lieu de SVG */
}
```

### Suspect résiduel #2: Shadows avec rgba
Les box-shadow dans design-tokens.css utilisent encore rgba. Sur iOS, cela peut créer un effet composite.

**Fix (si nécessaire):**
Remplacer --shadow-* par versions opaques ou réduire alpha.

### Suspect résiduel #3: Preloader résiduel
Vérifier qu'aucun preloader ne reste monté dans le DOM.

**Fix:**
```js
// Vérifier dans console
document.getElementById('preloader') // DOIT être null
```

---

**Dernière mise à jour:** 2025-11-03
**Responsable tests:** Lead Front
**Statut global:** 🟡 EN COURS
