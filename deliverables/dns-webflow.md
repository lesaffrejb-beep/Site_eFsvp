# Guide DNS — Pointer enfrancaissvp.fr vers Webflow

**Configuration complète pour migrer le domaine OVH vers Webflow SANS toucher aux emails**

---

## 📋 Vue d'ensemble

Ce guide détaille les étapes précises pour :
- ✅ Pointer **enfrancaissvp.fr** et **www.enfrancaissvp.fr** vers Webflow
- ✅ Conserver les emails OVH fonctionnels (enregistrements MX intacts)
- ✅ Activer le SSL automatique (HTTPS)
- ✅ Éviter toute interruption de service

**Durée estimée :** 15-30 minutes de configuration + 2-48h de propagation DNS

---

## ⚠️ IMPORTANT : Sauvegarder la Zone DNS Actuelle

**Avant toute modification**, sauvegardez la zone DNS actuelle :

### Étape 0 : Backup DNS

1. Se connecter à **OVH Manager** : https://www.ovh.com/manager/
2. Aller dans **Domaines** > `enfrancaissvp.fr`
3. Cliquer sur l'onglet **Zone DNS**
4. Faire une **capture d'écran** de tous les enregistrements actuels
5. Ou noter les enregistrements importants :
   - Enregistrements `MX` (emails)
   - Enregistrements `TXT` (SPF, DKIM, etc.)
   - Enregistrements `CNAME` ou `A` personnalisés

**⚠️ Ne supprimez JAMAIS les enregistrements MX si vous voulez conserver les emails OVH.**

---

## 🌐 PHASE 1 : Configurer le Domaine dans Webflow

### 1.1 Ajouter le Domaine Custom

1. Ouvrir le projet Webflow **"En français s'il vous plaît"**
2. Aller dans **Project Settings** (icône engrenage, coin haut-gauche)
3. Cliquer sur **Hosting** (menu gauche)
4. Cliquer sur **Add Custom Domain**

### 1.2 Entrer les Domaines

**Domaine Principal :**
```
enfrancaissvp.fr
```

**Domaine WWW :**
```
www.enfrancaissvp.fr
```

**Configuration recommandée :**
- ✅ Cocher **"Set as Default Domain"** sur `www.enfrancaissvp.fr` (ou `enfrancaissvp.fr` selon préférence)
- ✅ Activer **"Redirect to Default Domain"** (redirige automatiquement apex ↔ www)

### 1.3 Noter les Enregistrements DNS Webflow

Après avoir ajouté le domaine, Webflow affiche les enregistrements DNS à configurer :

**Pour le domaine APEX (enfrancaissvp.fr) :**
```
Type: A
Nom: @ (ou vide)
Valeur: 75.2.70.75
```

**Pour le domaine WWW (www.enfrancaissvp.fr) :**
```
Type: CNAME
Nom: www
Valeur: proxy-ssl.webflow.com
```

**Note :** Les valeurs IP peuvent varier. **Utilisez toujours les valeurs fournies par Webflow dans votre interface.**

---

## 🔧 PHASE 2 : Configurer la Zone DNS sur OVH

### 2.1 Accéder à la Zone DNS

1. Se connecter à **OVH Manager** : https://www.ovh.com/manager/
2. Aller dans **Domaines** > `enfrancaissvp.fr`
3. Cliquer sur l'onglet **Zone DNS**

### 2.2 Modifier l'Enregistrement A (Apex)

**Objectif :** Pointer le domaine racine (`enfrancaissvp.fr`) vers Webflow.

**Étapes :**

1. Chercher l'enregistrement `A` existant pour `@` ou `` (vide)
2. **Option 1 : Modifier l'enregistrement existant**
   - Cliquer sur l'icône **"..."** ou **"Modifier"** à côté de l'enregistrement `A`
   - Changer la **Cible** : `75.2.70.75` (ou l'IP fournie par Webflow)
   - TTL : `3600` (1 heure) ou laisser par défaut
   - Cliquer **Valider**

3. **Option 2 : Supprimer et recréer** (si modification bloquée)
   - Supprimer l'ancien enregistrement `A` pour `@`
   - Cliquer sur **Ajouter une entrée** > **A**
   - Sous-domaine : laisser vide (ou mettre `@`)
   - Cible : `75.2.70.75`
   - TTL : `3600`
   - Cliquer **Valider**

### 2.3 Ajouter/Modifier l'Enregistrement CNAME (WWW)

**Objectif :** Pointer `www.enfrancaissvp.fr` vers Webflow.

**Étapes :**

1. Chercher l'enregistrement `CNAME` existant pour `www`
2. **Si existe :**
   - Modifier la **Cible** : `proxy-ssl.webflow.com`
   - TTL : `3600`
   - Valider

3. **Si n'existe pas :**
   - Cliquer sur **Ajouter une entrée** > **CNAME**
   - Sous-domaine : `www`
   - Cible : `proxy-ssl.webflow.com` (avec le point final optionnel)
   - TTL : `3600`
   - Valider

### 2.4 Vérifier les Enregistrements MX (EMAILS)

**⚠️ CRUCIAL : NE PAS TOUCHER AUX ENREGISTREMENTS MX**

Les enregistrements `MX` (Mail eXchange) gèrent la réception des emails. Si vous utilisez les emails OVH (`contact@enfrancaissvp.fr`), **ne supprimez JAMAIS ces enregistrements**.

**Vérification :**

1. Dans la Zone DNS, chercher les enregistrements de type `MX`
2. Ils ressemblent généralement à :
   ```
   Type: MX
   Nom: @ (ou vide)
   Cible: mx1.mail.ovh.net (ou similaire)
   Priorité: 1
   ```
   ```
   Type: MX
   Nom: @ (ou vide)
   Cible: mx2.mail.ovh.net
   Priorité: 5
   ```

3. **Ne rien modifier.** Si vous les voyez, c'est bon. Ils resteront intacts.

### 2.5 Enregistrements SPF et DKIM (Optionnels mais recommandés)

Si vous avez des enregistrements `TXT` pour **SPF** (anti-spam) ou **DKIM** (authentification email), **ne pas les supprimer non plus**.

**Exemple SPF :**
```
Type: TXT
Nom: @ (ou vide)
Valeur: v=spf1 include:mx.ovh.com ~all
```

**Si absents :** Pas de problème pour le moment, mais recommandé de les configurer pour éviter que vos emails soient marqués comme spam.

---

## ⏱️ PHASE 3 : Propagation DNS & Vérification

### 3.1 Appliquer les Modifications DNS

1. **OVH Manager** > Zone DNS > Cliquer sur **"Appliquer la configuration"** (si bouton présent)
2. Ou attendre que OVH applique automatiquement (généralement immédiat)

### 3.2 Temps de Propagation

**Propagation DNS :** 2 à 48 heures (en moyenne 2-6h)

**Pourquoi ça prend du temps ?**
- Les serveurs DNS du monde entier doivent mettre à jour leur cache
- Le TTL (Time To Live) définit la durée de cache (3600s = 1h)

### 3.3 Vérifier la Propagation DNS

**Outil en ligne :** https://www.whatsmydns.net/

1. Entrer `enfrancaissvp.fr`
2. Sélectionner **Type : A**
3. Cliquer **Search**
4. Vérifier que plusieurs serveurs DNS affichent l'IP Webflow (`75.2.70.75`)

**Répéter pour `www.enfrancaissvp.fr` :**
1. Entrer `www.enfrancaissvp.fr`
2. Sélectionner **Type : CNAME**
3. Vérifier que la cible est `proxy-ssl.webflow.com`

**Statut :**
- ✅ Vert (plusieurs serveurs) : Propagation en cours ou terminée
- ❌ Rouge ou IP différente : Attendre encore

### 3.4 Test Local (Terminal/Cmd)

**Mac / Linux :**
```bash
dig enfrancaissvp.fr +short
# Doit afficher : 75.2.70.75

dig www.enfrancaissvp.fr +short
# Doit afficher : proxy-ssl.webflow.com.
```

**Windows (PowerShell) :**
```powershell
nslookup enfrancaissvp.fr
# Doit afficher l'IP Webflow

nslookup www.enfrancaissvp.fr
# Doit afficher proxy-ssl.webflow.com
```

---

## 🔒 PHASE 4 : Activer le SSL (HTTPS)

### 4.1 SSL Automatique Webflow

**Bonne nouvelle :** Webflow active automatiquement le SSL (HTTPS) via **Let's Encrypt** une fois que la propagation DNS est complète.

**Délai SSL :**
- Généralement activé **automatiquement dans les 24h** après la propagation DNS
- Vérifier dans **Webflow** > **Project Settings** > **Hosting** > **SSL**

**Statut SSL :**
- ⏳ **"SSL Provisioning"** : En cours (attendre)
- ✅ **"SSL Active"** : Certificat installé, HTTPS fonctionne

### 4.2 Forcer HTTPS (Redirection automatique)

Une fois le SSL actif :

1. **Webflow** > **Project Settings** > **Hosting**
2. Activer **"Force HTTPS"** (redirige automatiquement HTTP → HTTPS)
3. Publier le site (**Publish**)

### 4.3 Vérifier HTTPS

1. Ouvrir `https://enfrancaissvp.fr` dans le navigateur
2. Vérifier le **cadenas vert** (ou icône de sécurité selon navigateur)
3. Cliquer sur le cadenas → **"Certificat valide"**

**Répéter pour :**
- `https://www.enfrancaissvp.fr`
- `http://enfrancaissvp.fr` (doit rediriger vers HTTPS)

---

## 📧 PHASE 5 : Vérifier les Emails (Important)

### 5.1 Tester la Réception d'Emails

**Après propagation DNS :**

1. Envoyer un email de test à `contact@enfrancaissvp.fr` (ou votre adresse OVH)
2. Vérifier la réception dans **Webmail OVH** : https://www.ovh.com/fr/mail/
3. Ou dans votre client email (Outlook, Thunderbird, etc.)

**✅ Si les emails fonctionnent :** Parfait, les enregistrements MX sont intacts.
**❌ Si les emails ne fonctionnent pas :** Vérifier les enregistrements MX dans la zone DNS OVH.

### 5.2 Tester l'Envoi d'Emails

1. Depuis `contact@enfrancaissvp.fr`, envoyer un email de test vers votre email personnel
2. Vérifier que l'email arrive bien (et n'est pas en spam)

**Si emails en spam :**
- Configurer **SPF** et **DKIM** (voir Phase 6 - Optionnel)

---

## 🛠️ PHASE 6 : Configuration Avancée (Optionnel)

### 6.1 Configurer SPF (Anti-Spam)

**SPF (Sender Policy Framework)** permet de déclarer quels serveurs sont autorisés à envoyer des emails pour votre domaine.

**Enregistrement SPF pour OVH :**

1. **OVH Manager** > Zone DNS > **Ajouter une entrée** > **TXT**
2. Sous-domaine : laisser vide (ou `@`)
3. Valeur :
   ```
   v=spf1 include:mx.ovh.com ~all
   ```
4. TTL : `3600`
5. Valider

**Note :** Si un enregistrement SPF existe déjà, ne pas créer de doublon. Modifier l'existant.

### 6.2 Configurer DKIM (Authentification Email)

**DKIM (DomainKeys Identified Mail)** ajoute une signature cryptographique aux emails pour prouver qu'ils proviennent bien de votre domaine.

**Activer DKIM sur OVH :**

1. **OVH Manager** > **Emails** > `enfrancaissvp.fr`
2. Onglet **DKIM** (si disponible sur votre offre)
3. Cliquer **Activer DKIM**
4. OVH génère une clé et ajoute automatiquement l'enregistrement TXT dans la zone DNS

**Vérification :**
- Envoyer un email de test
- Vérifier les en-têtes (headers) de l'email reçu
- Chercher `DKIM-Signature:` → doit être présent et valide

### 6.3 Sous-Domaines Additionnels (Si Besoin)

Si vous voulez ajouter des sous-domaines (ex: `blog.enfrancaissvp.fr`), procédure similaire :

1. **Webflow** > **Hosting** > **Add Custom Domain** > `blog.enfrancaissvp.fr`
2. Noter l'enregistrement CNAME fourni
3. **OVH** > Zone DNS > **Ajouter CNAME** :
   - Sous-domaine : `blog`
   - Cible : `proxy-ssl.webflow.com`
4. Attendre propagation
5. SSL activé automatiquement par Webflow

---

## 🚨 Troubleshooting : Problèmes Courants

### Problème 1 : Le Site n'Affiche Pas (404 ou Erreur Webflow)

**Causes possibles :**
- DNS pas encore propagé
- Enregistrements DNS mal configurés
- Domaine pas publié dans Webflow

**Solutions :**
1. Vérifier la propagation DNS (whatsmydns.net)
2. Vérifier que les enregistrements A et CNAME sont corrects
3. **Webflow** > **Publish** (re-publier le site)
4. Attendre 24-48h si DNS récent

### Problème 2 : SSL Non Actif (Pas de HTTPS)

**Causes possibles :**
- DNS pas encore propagé (Webflow attend la propagation avant de provisionner SSL)
- Conflit d'enregistrements DNS

**Solutions :**
1. Attendre 24-48h après propagation DNS complète
2. **Webflow** > **Hosting** > **SSL** > Vérifier le statut
3. Si bloqué : Supprimer et re-ajouter le domaine dans Webflow
4. Contacter le support Webflow si problème persiste

### Problème 3 : Emails Ne Fonctionnent Plus

**Causes possibles :**
- Enregistrements MX supprimés ou modifiés par erreur

**Solutions :**
1. **OVH Manager** > Zone DNS > Vérifier les enregistrements MX
2. Si absents, les recréer :
   ```
   Type: MX
   Nom: @ (ou vide)
   Cible: mx1.mail.ovh.net
   Priorité: 1
   ```
   ```
   Type: MX
   Nom: @ (ou vide)
   Cible: mx2.mail.ovh.net
   Priorité: 5
   ```
3. Attendre propagation (2-6h)
4. Tester la réception d'emails

### Problème 4 : Redirection Apex ↔ WWW Ne Fonctionne Pas

**Solutions :**
1. **Webflow** > **Hosting** > Vérifier **"Redirect to Default Domain"** activé
2. Vérifier que **les deux domaines** (apex et www) sont ajoutés dans Webflow
3. Re-publier le site

---

## 📝 Checklist Finale DNS

Avant de considérer la migration DNS complète :

- [ ] Enregistrement `A` pour `@` pointe vers IP Webflow
- [ ] Enregistrement `CNAME` pour `www` pointe vers `proxy-ssl.webflow.com`
- [ ] Enregistrements `MX` (emails) sont **intacts et fonctionnels**
- [ ] DNS propagé (vérifier avec whatsmydns.net)
- [ ] `https://enfrancaissvp.fr` affiche le site Webflow
- [ ] `https://www.enfrancaissvp.fr` affiche le site Webflow
- [ ] Redirection HTTP → HTTPS fonctionne
- [ ] Certificat SSL valide (cadenas vert)
- [ ] Emails OVH fonctionnent (test envoi/réception)
- [ ] SPF et DKIM configurés (recommandé)

---

## 🎯 Résultat Final

Une fois cette procédure terminée :

✅ **enfrancaissvp.fr** et **www.enfrancaissvp.fr** pointent vers Webflow
✅ HTTPS actif et sécurisé (SSL Let's Encrypt)
✅ Emails OVH fonctionnels (MX intacts)
✅ Aucune interruption de service email
✅ Migration DNS propre et professionnelle

**Prêt pour la mise en production !** 🚀

---

## 📞 Support

**En cas de problème :**

- **Webflow Support :** https://university.webflow.com/ ou chat support
- **OVH Support :** https://www.ovh.com/fr/support/
- **Vérification DNS :** https://www.whatsmydns.net/
- **Test SSL :** https://www.ssllabs.com/ssltest/

---

**Fin du Guide DNS Webflow** ✨
