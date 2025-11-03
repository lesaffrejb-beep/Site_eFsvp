# 🚀 COMMENT DÉPLOYER TES CORRECTIONS

## ❌ PROBLÈME

Ton repo GitHub **n'a pas de branche principale** (main/master).
Résultat : impossible de créer une PR normale.

---

## ✅ SOLUTION LA PLUS SIMPLE (2 minutes)

### **ÉTAPE 1 : Créer la branche "main" sur GitHub**

1. **Va sur GitHub** :
   👉 https://github.com/lesaffrejb-beep/Site_eFsvp

2. **Clique sur le dropdown des branches** (en haut à gauche) :
   ```
   ┌─────────────────────────────────┐
   │ 📁 lesaffrejb-beep / Site_eFsvp │
   │                                 │
   │ [🌿 claude/fix-hero-...  ▼]    │ ← CLIQUE ICI
   └─────────────────────────────────┘
   ```

3. **Tape "main" dans la recherche** :
   ```
   ┌──────────────────────────────────┐
   │ Find or create a branch...       │
   │ [main________________]  🔍       │
   │                                  │
   │ Create branch: main from         │
   │ claude/fix-hero-haze-...  ✨     │ ← CLIQUE ICI
   └──────────────────────────────────┘
   ```

4. **La branche "main" est créée !** 🎉

---

### **ÉTAPE 2 : Définir "main" comme branche par défaut**

1. **Va dans Settings** (onglet en haut) :
   ```
   Code  Issues  Pull requests  Actions  Projects  Settings ← ICI
   ```

2. **Clique sur "Branches"** (menu gauche)

3. **Change la branche par défaut** :
   ```
   ┌────────────────────────────────────────┐
   │ Default branch                         │
   │                                        │
   │ [claude/fix-hero-... ▼]  → [main ▼]  │
   │                                        │
   │ [Update]  ← CLIQUE ICI                │
   └────────────────────────────────────────┘
   ```

4. **Confirme** le changement

---

### **ÉTAPE 3 : Vercel déploie automatiquement**

Si Vercel est connecté à ta branche par défaut :
→ Il détectera le changement et déploiera "main" automatiquement (~2 min)

**OU**

Va dans **Vercel Dashboard** :
1. Project Settings > Git
2. Production Branch : change vers `main`
3. Vercel redéploie automatiquement

---

## 🎯 C'EST TOUT !

Ton site sera en ligne avec TOUTES les corrections :
- ✅ Plus de voile blanc
- ✅ HERO plein écran avec vidéo
- ✅ Couleurs EfSVP respectées
- ✅ Contraste AA/AAA
- ✅ Accessible

**URL finale** : https://site-e-fsvp.vercel.app/

---

## 🧹 NETTOYAGE DES BRANCHES (optionnel)

Une fois "main" déployée, tu peux supprimer les vieilles branches :

**Sur GitHub** :
1. Onglet "Code"
2. Clique sur "X branches"
3. Supprime les branches obsolètes (sauf "main") :
   - ❌ claude/award-2025-audit-improvements-*
   - ❌ claude/award-site-prestige-redesign-*
   - ❌ claude/efsvp-complete-fix-*
   - ❌ claude/efsvp-premium-redesign-*
   - ❌ claude/efsvp-premium-website-*
   - ❌ claude/efsvp-website-creation-*
   - ❌ claude/resolve-merge-conflicts-*
   - ❌ codex/fix-bugs-and-layout-issues-*
   - ✅ **GARDE** : main, claude/fix-hero-haze-fullscreen-*

---

## 🆘 SI ÇA NE MARCHE PAS

**Option alternative** : Change Vercel pour déployer directement ma branche

1. Vercel Dashboard > Settings > Git
2. Production Branch : `claude/fix-hero-haze-fullscreen-011CUkiYYVbPFeGTvBVvtiKc`
3. Deploy

Ça marche tout de suite, sans créer "main".

---

## 📦 RÉSUMÉ

| Quoi | Où | Action |
|------|-----|--------|
| **Branche propre** | GitHub | Créer "main" depuis ma branche |
| **Branche par défaut** | GitHub Settings > Branches | Définir "main" |
| **Déploiement** | Vercel | Auto ou manuel vers "main" |
| **Nettoyage** | GitHub > Branches | Supprimer vieilles branches |

---

**Questions ?** Dis-moi où tu bloques et je t'aide !
