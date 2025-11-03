# AUDIT VEIL-DETECTION (Final)

**Branche:** fix/veil-final
**Date:** 2025-11-03

---

## Script DevTools à exécuter

```javascript
(() => {
  const vw = innerWidth, vh = innerHeight, rows = [];
  ['html','body','main','#app','.hero','header','nav'].forEach(sel=>{
    const el=document.querySelector(sel); if(!el) return;
    const cs=getComputedStyle(el);
    rows.push({sel, op:cs.opacity, filter:cs.filter, mix:cs.mixBlendMode, back:cs.backdropFilter, bg:cs.backgroundColor});
  });
  document.querySelectorAll('*').forEach(el=>{
    const cs=getComputedStyle(el), r=el.getBoundingClientRect();
    const covers=r.left<=0&&r.top<=0&&r.right>=vw-1&&r.bottom>=vh-1;
    const fixed=/fixed|absolute|sticky/.test(cs.position);
    const dim=parseFloat(cs.opacity)<1||cs.filter!=='none'||cs.backdropFilter!=='none'||cs.mixBlendMode!=='normal';
    const hasBg=cs.backgroundColor!=='rgba(0, 0, 0, 0)';
    if(covers && fixed && (dim||hasBg)) {
      rows.push({sel:el.tagName+'.'+[...el.classList].join('.'), op:cs.opacity, filter:cs.filter, mix:cs.mixBlendMode, back:cs.backdropFilter, bg:cs.backgroundColor, z:cs.zIndex, pos:cs.position});
    }
  });
  console.table(rows); return rows;
})();
```

---

## Résultats ATTENDUS

### Éléments globaux (doivent être TOUS à opacity:1, filter:none, etc.)

| Sélecteur | opacity | filter | mix | backdropFilter | backgroundColor |
|-----------|---------|--------|-----|----------------|-----------------|
| html | "1" | "none" | "normal" | "none" | transparent |
| body | "1" | "none" | "normal" | "none" | #F5E6D3 (var(--bg)) |
| main | "1" | "none" | "normal" | "none" | transparent |
| #app | - | - | - | - | - |
| .hero | "1" | "none" | "normal" | "none" | transparent |
| header | - | - | - | - | - |
| nav | "1" | "none" | "normal" | "none" | var(--surface) ou transparent |

### Éléments fixed/absolute couvrant viewport

**Résultat attendu:** AUCUN élément suspect (array vide `[]`)

**Exceptions autorisées:**
- `.hero__overlay` (scopé dans .hero avec isolation:isolate)
- `.modal__overlay` (seulement quand modal.active)
- `.nav__menu` (mobile, translateX hors écran par défaut)

---

## Vérifications manuelles complémentaires

### 1. Test body opacity/filter
```javascript
getComputedStyle(document.body).opacity === "1" // DOIT être "1"
getComputedStyle(document.body).filter === "none" // DOIT être "none"
getComputedStyle(document.body).mixBlendMode === "normal" // DOIT être "normal"
getComputedStyle(document.body).backdropFilter === "none" // DOIT être "none"
```

### 2. Vérification classes body
```javascript
const body = document.body;
console.log('Classes body:', [...body.classList]);
// NE DOIT PAS contenir: 'dim', 'overlay', 'veil', 'backdrop', 'blurred'
```

### 3. Vérification failsafe actif
```javascript
// Chercher dans console au chargement
// Devrait voir les appels de antiVeilFailsafe() via ticker GSAP
```

---

## Corrections appliquées (avant cet audit)

✅ **main.js:**
- Bloc anti-veil failsafe (final) ajouté
- S'exécute immédiatement + au load + périodiquement
- Force opacity:1, filter:none, mix-blend:normal, backdrop-filter:none
- Retire classes dim/overlay/veil/backdrop/blurred du body

✅ **styles.css:**
- Ajout mix-blend-mode:normal + backdrop-filter:none aux safeguards
- Remplacement 5 rgba() alpha par couleurs opaques
- .hero a isolation:isolate
- .hero__overlay bien scopé
- Menu mobile sans backdrop global

---

## Statut

- [ ] Script DevTools exécuté dans preview
- [ ] Table console copiée ci-dessus
- [ ] Aucun élément suspect trouvé
- [ ] Tests body opacity/filter passés
- [ ] Failsafe actif confirmé

---

**Instructions:**
1. `npm run preview`
2. Ouvrir DevTools Console
3. Coller et exécuter le script ci-dessus
4. Copier la table console ici
5. Vérifier les 3 tests manuels
6. Commiter ce fichier avec les résultats
