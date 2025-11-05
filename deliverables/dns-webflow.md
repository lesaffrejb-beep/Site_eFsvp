# Configuration DNS : OVH → Webflow (MX préservés)

## Objectif

Pointer le domaine OVH vers Webflow SANS toucher aux enregistrements MX (conservation emails OVH).

## Prérequis

- Accès admin panel OVH
- Site Webflow publié (plan Site CMS)
- Domaine custom activé dans Webflow

## Étape 1 : Récupérer les DNS Webflow

1. Dans Webflow : **Project Settings > Hosting > Custom Domain**
2. Cliquer "Add Custom Domain"
3. Entrer votre domaine (ex: `efsvp.fr`)
4. Webflow affiche les enregistrements DNS requis :

**Pour domaine apex (`efsvp.fr`)** :
```
Type: A
Name: @
Value: 75.2.70.75
```

**Pour www (`www.efsvp.fr`)** :
```
Type: CNAME
Name: www
Value: proxy-ssl.webflow.com
```

## Étape 2 : Configuration OVH

### 2.1 Accéder à la Zone DNS

1. Se connecter à [OVH Manager](https://www.ovh.com/manager/)
2. Aller dans **Web Cloud > Noms de domaine**
3. Sélectionner votre domaine
4. Onglet **Zone DNS**

### 2.2 Vérifier les MX existants

**AVANT toute modification** :

1. Noter tous les enregistrements MX actuels
2. Exemple :
```
Type: MX
Name: (vide ou @)
Priority: 1
Value: mx1.mail.ovh.net
TTL: 3600
```

**⚠️ NE PAS TOUCHER AUX MX !**

### 2.3 Modifier l'enregistrement A

1. Chercher l'enregistrement `A` existant pour `@` (ou nom vide)
2. Cliquer **Modifier**
3. Changer la valeur vers : `75.2.70.75`
4. TTL : laisser par défaut (3600s ou 1h)
5. Sauvegarder

**Si pas d'enregistrement A** :
1. Cliquer **Ajouter une entrée**
2. Type : **A**
3. Sous-domaine : laisser vide (ou mettre `@`)
4. Cible : `75.2.70.75`
5. Valider

### 2.4 Configurer CNAME pour www

1. Chercher enregistrement `CNAME` pour `www`
2. Si existe : **Modifier**, sinon **Ajouter**
3. Type : **CNAME**
4. Sous-domaine : `www`
5. Cible : `proxy-ssl.webflow.com`
6. TTL : 3600
7. Valider

### 2.5 Supprimer conflits éventuels

**Vérifier** :
- Pas d'autre enregistrement `A` sur `www` (conflit avec CNAME)
- Pas d'enregistrement `AAAA` (IPv6) sur `@` pointant ailleurs

Si présents : **Supprimer** ou **Désactiver**

## Étape 3 : Validation Webflow

1. Retour dans Webflow : **Project Settings > Hosting**
2. Webflow vérifie automatiquement les DNS (peut prendre 5-10 min)
3. Status passe de "Pending" à "Connected"
4. SSL s'active automatiquement (Let's Encrypt)

**Délai propagation DNS** : 30 min à 48h (généralement < 2h)

## Étape 4 : Configuration SSL

1. Dans Webflow, section **SSL Certificate**
2. Activer **Auto-generate SSL certificate**
3. Webflow génère certificat Let's Encrypt gratuit
4. Certificat auto-renouvelé tous les 90 jours

**Forcer HTTPS** :
- Activer **Redirect HTTP to HTTPS** dans Webflow
- Activer **Enable HSTS** (recommandé)

## Vérification Post-Migration

### Test DNS (Terminal)

```bash
# Vérifier A record
dig efsvp.fr A +short
# Doit retourner : 75.2.70.75

# Vérifier CNAME www
dig www.efsvp.fr CNAME +short
# Doit retourner : proxy-ssl.webflow.com

# Vérifier MX (emails)
dig efsvp.fr MX +short
# Doit retourner : 1 mx1.mail.ovh.net (ou vos MX OVH)
```

### Test Email

Envoyer un email test vers `contact@efsvp.fr` (ou votre email OVH)
→ Doit fonctionner normalement (MX intacts)

### Test Site

- Visiter `https://efsvp.fr` → doit charger site Webflow
- Visiter `https://www.efsvp.fr` → doit charger site Webflow
- Visiter `http://efsvp.fr` → doit rediriger vers HTTPS

## Résolution Problèmes

### "DNS not pointing correctly"

**Causes** :
- Propagation DNS en cours (attendre 2h)
- TTL cache (vider cache DNS local)
- Mauvaise valeur IP ou CNAME

**Solutions** :
```bash
# Vider cache DNS (macOS)
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Windows
ipconfig /flushdns

# Linux
sudo systemd-resolve --flush-caches
```

### "SSL Certificate Error"

**Causes** :
- DNS pas encore propagé
- HTTPS forcé trop tôt

**Solutions** :
- Attendre propagation DNS complète
- Désactiver temporairement "Redirect HTTP to HTTPS"
- Re-générer certificat dans Webflow

### Emails ne fonctionnent plus

**Cause** :
- Enregistrements MX supprimés par erreur

**Solution** :
1. Retour OVH Zone DNS
2. Ajouter MX :
```
Type: MX
Priority: 1
Target: mx1.mail.ovh.net

Type: MX
Priority: 5
Target: mx2.mail.ovh.net

Type: MX
Priority: 100
Target: mx3.mail.ovh.net
```

(Vérifier valeurs exactes dans doc OVH)

## Configuration Apex vs WWW

**Option A** : Forcer WWW (recommandé SEO)
- Webflow Settings > SEO > **301 Redirect apex to www**
- `efsvp.fr` → redirige vers `www.efsvp.fr`

**Option B** : Forcer Apex
- Webflow Settings > SEO > **301 Redirect www to apex**
- `www.efsvp.fr` → redirige vers `efsvp.fr`

**Conseil** : Choisir UNE version canonique et s'y tenir.

## Rollback (Retour OVH)

Si problème :

1. OVH Zone DNS
2. Modifier enregistrement `A` :
   - Remettre ancienne IP OVH (noter avant migration!)
3. Supprimer ou modifier `CNAME www`
4. Sauvegarder
5. Attendre propagation (2h)

**Backup préventif** :
Faire screenshot de toute la Zone DNS AVANT migration !

## Checklist Finale

- [ ] Enregistrement A pointant vers 75.2.70.75
- [ ] CNAME www pointant vers proxy-ssl.webflow.com
- [ ] MX records OVH intacts et fonctionnels
- [ ] Site accessible en HTTPS (apex + www)
- [ ] Redirection HTTP → HTTPS active
- [ ] SSL valide (cadenas vert navigateur)
- [ ] Emails fonctionnent (test envoi/réception)
- [ ] Propagation DNS confirmée (dig/nslookup)

---

**Support** :
- Webflow University : https://university.webflow.com/lesson/custom-domains
- OVH Docs : https://docs.ovh.com/fr/domains/

**Délai total migration** : 2-4 heures (propagation DNS comprise)
