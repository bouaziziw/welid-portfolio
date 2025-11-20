# 🚀 Guide de Déploiement Complet - Portfolio Welid Bouazizi

Ce guide vous accompagne étape par étape pour déployer votre site portfolio Next.js sur Vercel avec une base de données Neon PostgreSQL.

## 📋 Table des matières

1. [Prérequis](#prérequis)
2. [Configuration de Neon Database](#configuration-de-neon-database)
3. [Configuration locale](#configuration-locale)
4. [Déploiement sur Vercel](#déploiement-sur-vercel)
5. [Configuration du domaine personnalisé](#configuration-du-domaine-personnalisé)
6. [Vérification et tests](#vérification-et-tests)
7. [Maintenance et mises à jour](#maintenance-et-mises-à-jour)

---

## 1️⃣ Prérequis

Avant de commencer, assurez-vous d'avoir :

- ✅ Un compte [GitHub](https://github.com) (gratuit)
- ✅ Un compte [Vercel](https://vercel.com) (gratuit)
- ✅ Un compte [Neon](https://neon.tech) (gratuit)
- ✅ Node.js 18+ installé sur votre machine
- ✅ Git installé sur votre machine

---

## 2️⃣ Configuration de Neon Database

### Étape 2.1 : Créer un compte Neon

1. Allez sur [https://neon.tech](https://neon.tech)
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec GitHub (recommandé) ou email

### Étape 2.2 : Créer un nouveau projet

1. Dans le dashboard Neon, cliquez sur **"New Project"**
2. Configurez votre projet :
   - **Name** : `welid-portfolio` (ou un nom de votre choix)
   - **Region** : Choisissez la région la plus proche (ex: `EU Central (Frankfurt)`)
   - **PostgreSQL Version** : Laissez la version par défaut (16)
3. Cliquez sur **"Create Project"**

### Étape 2.3 : Récupérer les connexions strings

Une fois le projet créé, vous verrez deux URLs de connexion :

1. **Connection string (pooled)** - Pour les connexions serverless
   ```
   postgresql://[user]:[password]@[endpoint].neon.tech/[database]?sslmode=require&pgbouncer=true
   ```

2. **Connection string (direct)** - Pour les migrations Prisma
   ```
   postgresql://[user]:[password]@[endpoint].neon.tech/[database]?sslmode=require
   ```

**⚠️ Important** : Gardez ces URLs en sécurité, vous en aurez besoin !

### Étape 2.4 : Configurer les variables d'environnement locales

1. Dans le dossier du projet, copiez `.env.example` vers `.env` :
   ```bash
   cp .env.example .env
   ```

2. Ouvrez `.env` et remplacez les valeurs :
   ```env
   DATABASE_URL="postgresql://[votre-connection-pooled]"
   DIRECT_URL="postgresql://[votre-connection-direct]"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_SITE_NAME="Welid Bouazizi - Développeur Frontend Senior"
   ```

### Étape 2.5 : Exécuter les migrations Prisma

```bash
# Installer les dépendances (si pas déjà fait)
npm install

# Générer le client Prisma
npx prisma generate

# Pousser le schéma vers Neon Database
npx prisma db push

# (Optionnel) Ouvrir Prisma Studio pour voir la DB
npx prisma studio
```

**✅ Vérification** : Vous devriez voir les tables `contacts`, `project_views`, et `blog_posts` créées dans votre base Neon.

---

## 3️⃣ Configuration locale

### Étape 3.1 : Installer les dépendances

```bash
npm install
```

### Étape 3.2 : Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Étape 3.3 : Tester le formulaire de contact

1. Allez sur la section **Contact**
2. Remplissez le formulaire
3. Cliquez sur **"Envoyer le message"**
4. Vérifiez dans Prisma Studio ou Neon Console que le message a été enregistré

---

## 4️⃣ Déploiement sur Vercel

### Étape 4.1 : Pousser le code sur GitHub

1. Créez un nouveau repository sur GitHub :
   - Allez sur [https://github.com/new](https://github.com/new)
   - Nom : `welid-portfolio` (ou votre choix)
   - Visibilité : **Public** ou **Private**
   - **NE PAS** initialiser avec README, .gitignore, ou license

2. Dans votre terminal, initialisez Git et poussez le code :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Next.js"
   git branch -M main
   git remote add origin https://github.com/[votre-username]/welid-portfolio.git
   git push -u origin main
   ```

### Étape 4.2 : Importer le projet dans Vercel

1. Allez sur [https://vercel.com/new](https://vercel.com/new)
2. Connectez-vous avec GitHub
3. Cliquez sur **"Import Project"**
4. Sélectionnez votre repository `welid-portfolio`
5. Configurez le projet :
   - **Framework Preset** : Next.js (détecté automatiquement)
   - **Root Directory** : `.` (racine)
   - **Build Command** : `npm run build` (par défaut)
   - **Output Directory** : `.next` (par défaut)

### Étape 4.3 : Configurer les variables d'environnement

Dans la section **Environment Variables**, ajoutez :

| Name | Value |
|------|-------|
| `DATABASE_URL` | Votre connection string **pooled** de Neon |
| `DIRECT_URL` | Votre connection string **direct** de Neon |
| `NEXT_PUBLIC_SITE_URL` | `https://[votre-domaine].vercel.app` (sera mis à jour plus tard) |
| `NEXT_PUBLIC_SITE_NAME` | `Welid Bouazizi - Développeur Frontend Senior` |

**⚠️ Important** : 
- Cochez **Production**, **Preview**, et **Development** pour chaque variable
- Ne partagez JAMAIS vos connection strings publiquement

### Étape 4.4 : Déployer

1. Cliquez sur **"Deploy"**
2. Attendez 2-3 minutes (premier déploiement)
3. 🎉 Votre site est en ligne !

**URL temporaire** : `https://[votre-projet].vercel.app`

---

## 5️⃣ Configuration du domaine personnalisé

### Option A : Domaine Vercel gratuit

Votre site est déjà accessible sur :
```
https://[votre-projet].vercel.app
```

Vous pouvez personnaliser cette URL dans **Settings > Domains**.

### Option B : Domaine personnalisé (recommandé)

Si vous avez votre propre domaine (ex: `welidbouazizi.com`) :

1. Dans Vercel, allez dans **Settings > Domains**
2. Cliquez sur **"Add"**
3. Entrez votre domaine : `welidbouazizi.com`
4. Suivez les instructions pour configurer les DNS :
   
   **Type A Record** :
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **Type CNAME Record** (pour www) :
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. Attendez la propagation DNS (5 minutes à 48h)
6. Vercel générera automatiquement un certificat SSL

### Étape 5.1 : Mettre à jour NEXT_PUBLIC_SITE_URL

1. Allez dans **Settings > Environment Variables**
2. Éditez `NEXT_PUBLIC_SITE_URL`
3. Changez la valeur vers votre nouveau domaine : `https://welidbouazizi.com`
4. Cliquez sur **"Save"**
5. Redéployez le site (Vercel le fait automatiquement)

---

## 6️⃣ Vérification et tests

### Checklist post-déploiement

- [ ] **Le site se charge correctement** sur votre URL de production
- [ ] **Dark mode fonctionne** (cliquez sur l'icône lune/soleil)
- [ ] **Navigation smooth** entre les sections
- [ ] **Formulaire de contact** :
  - [ ] Peut soumettre un message
  - [ ] Message de succès s'affiche
  - [ ] Message enregistré dans Neon Database (vérifiez dans Neon Console)
- [ ] **Responsive design** :
  - [ ] Testez sur mobile (Chrome DevTools)
  - [ ] Testez sur tablette
  - [ ] Testez sur desktop
- [ ] **SEO** :
  - [ ] Titre et description corrects (F12 > Elements > `<head>`)
  - [ ] Meta tags Open Graph présents

### Tester la base de données

1. Allez sur [https://console.neon.tech](https://console.neon.tech)
2. Sélectionnez votre projet `welid-portfolio`
3. Allez dans **SQL Editor**
4. Exécutez cette requête :
   ```sql
   SELECT * FROM contacts ORDER BY "createdAt" DESC LIMIT 10;
   ```
5. Vous devriez voir vos messages de test

---

## 7️⃣ Maintenance et mises à jour

### Ajouter du contenu

1. Modifiez les données dans `lib/data.ts`
2. Commitez et poussez sur GitHub :
   ```bash
   git add .
   git commit -m "Mise à jour du contenu"
   git push
   ```
3. Vercel redéploie automatiquement en 2-3 minutes

### Ajouter une nouvelle section

1. Créez un nouveau composant dans `components/`
2. Importez-le dans `app/page.tsx`
3. Testez localement avec `npm run dev`
4. Poussez sur GitHub

### Modifier le schéma Prisma

Si vous voulez ajouter de nouvelles tables :

1. Modifiez `prisma/schema.prisma`
2. Exécutez :
   ```bash
   npx prisma generate
   npx prisma db push
   ```
3. Commitez et poussez
4. Vercel exécutera automatiquement `prisma generate` via `postinstall`

### Monitoring

Vercel fournit gratuitement :
- **Analytics** : Visiteurs, pages vues, Core Web Vitals
- **Logs** : Erreurs et requêtes en temps réel
- **Builds** : Historique des déploiements

Accessible dans le dashboard Vercel de votre projet.

---

## 🎯 Résumé des URLs importantes

| Service | URL |
|---------|-----|
| **GitHub Repository** | `https://github.com/[username]/welid-portfolio` |
| **Site Vercel** | `https://[projet].vercel.app` |
| **Vercel Dashboard** | `https://vercel.com/[username]/welid-portfolio` |
| **Neon Console** | `https://console.neon.tech/app/projects/[project-id]` |
| **Prisma Studio** (local) | `http://localhost:5555` |

---

## 🆘 Dépannage

### Erreur : "Prisma Client did not initialize"

**Solution** :
```bash
npx prisma generate
npm run build
```

### Erreur : "Can't reach database server"

**Solution** :
- Vérifiez que `DATABASE_URL` est correcte dans Vercel
- Vérifiez que le projet Neon est actif (pas mis en veille)
- Testez la connexion depuis Neon Console

### Le formulaire ne s'envoie pas en production

**Solution** :
1. Vérifiez les logs Vercel : **Deployments > [dernier déploiement] > Functions**
2. Vérifiez que `DATABASE_URL` est définie dans les variables d'environnement
3. Testez l'API route : `https://[votre-site]/api/contact` (devrait retourner 405 Method Not Allowed en GET)

### Le site est lent

**Solutions** :
- Activez **Edge Runtime** pour les API routes (optionnel)
- Utilisez **Vercel Speed Insights** (gratuit) pour identifier les problèmes
- Optimisez les images (Next.js Image component)

---

## 📞 Support

Si vous rencontrez des problèmes :

1. **Documentation officielle** :
   - [Next.js](https://nextjs.org/docs)
   - [Vercel](https://vercel.com/docs)
   - [Neon](https://neon.tech/docs)
   - [Prisma](https://www.prisma.io/docs)

2. **Communautés** :
   - [Next.js Discord](https://discord.gg/nextjs)
   - [Vercel Discord](https://discord.gg/vercel)

---

## ✅ Félicitations !

Votre portfolio est maintenant en ligne avec :
- ✅ Next.js 15 avec TypeScript
- ✅ Shadcn UI pour les composants
- ✅ Neon Database (PostgreSQL serverless)
- ✅ Prisma ORM
- ✅ Déploiement automatique sur Vercel
- ✅ Dark mode
- ✅ Formulaire de contact fonctionnel
- ✅ SEO optimisé
- ✅ Responsive design

**Prochaines étapes suggérées** :
- Ajouter Google Analytics
- Configurer un domaine personnalisé
- Ajouter un système de blog (tables déjà prêtes dans Prisma)
- Implémenter l'envoi d'emails (Resend, SendGrid, etc.)
- Ajouter plus d'animations avec Framer Motion

Bon développement ! 🚀
