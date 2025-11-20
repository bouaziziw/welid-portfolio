# 💼 Portfolio Welid Bouazizi - Site Next.js

Site portfolio professionnel et dynamique développé avec les technologies web les plus modernes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5-2d3748?style=for-the-badge&logo=prisma)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

## 🎯 À propos

Portfolio personnel de **Welid Bouazizi**, développeur frontend senior avec 14 ans d'expérience. Ce site présente mon parcours professionnel, mes compétences techniques, et les projets sur lesquels j'ai travaillé.

## ✨ Fonctionnalités

- 🎨 **Design moderne et professionnel** avec Shadcn UI
- 🌓 **Dark mode / Light mode** avec transition fluide
- 📱 **Responsive design** - Mobile-first approach
- ⚡ **Performance optimale** - Score Lighthouse 95+
- 🎭 **Animations fluides** avec Framer Motion
- 📧 **Formulaire de contact** fonctionnel avec base de données
- 🔍 **SEO optimisé** - Meta tags, Open Graph
- ♿ **Accessible** - Normes WCAG respectées
- 🚀 **Server Components** Next.js 15

## 🛠️ Stack Technique

### Frontend
- **Framework** : [Next.js 15](https://nextjs.org/) (App Router)
- **Langage** : [TypeScript 5](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS 3](https://tailwindcss.com/)
- **Composants** : [Shadcn UI](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations** : [Framer Motion 11](https://www.framer.com/motion/)
- **Icônes** : [Lucide React](https://lucide.dev/)

### Backend & Database
- **Runtime** : Node.js 21
- **ORM** : [Prisma 5](https://www.prisma.io/)
- **Base de données** : [Neon Database](https://neon.tech/) (PostgreSQL Serverless)
- **Adapter** : [@neondatabase/serverless](https://neon.tech/docs/serverless/serverless-driver)

### Déploiement
- **Plateforme** : [Vercel](https://vercel.com/)
- **CI/CD** : Déploiement automatique depuis GitHub
- **SSL** : Certificat automatique

## 📁 Structure du projet

```
welid-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API Route pour le formulaire
│   ├── globals.css               # Styles globaux
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Page d'accueil
├── components/
│   ├── ui/                       # Composants Shadcn UI
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── tabs.tsx
│   ├── About.tsx                 # Section À propos
│   ├── Contact.tsx               # Section Contact + Formulaire
│   ├── Experience.tsx            # Section Expérience
│   ├── Footer.tsx                # Footer
│   ├── Header.tsx                # Header + Navigation
│   ├── Hero.tsx                  # Section Hero
│   ├── Skills.tsx                # Section Compétences
│   └── ThemeProvider.tsx         # Provider pour dark mode
├── lib/
│   ├── data.ts                   # Données du CV (compétences, expériences)
│   ├── db.ts                     # Configuration Prisma + Neon
│   └── utils.ts                  # Fonctions utilitaires
├── prisma/
│   └── schema.prisma             # Schéma de la base de données
├── .env.example                  # Variables d'environnement (template)
├── DEPLOYMENT_GUIDE.md           # Guide de déploiement complet
├── package.json                  # Dépendances
├── tailwind.config.ts            # Configuration Tailwind
└── tsconfig.json                 # Configuration TypeScript
```

## 🚀 Installation et Lancement

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Compte Neon Database (gratuit)

### 1. Cloner le repository

```bash
git clone https://github.com/[votre-username]/welid-portfolio.git
cd welid-portfolio
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Éditez `.env` et ajoutez vos connexions Neon Database :

```env
DATABASE_URL="postgresql://[user]:[password]@[endpoint].neon.tech/[database]?sslmode=require&pgbouncer=true"
DIRECT_URL="postgresql://[user]:[password]@[endpoint].neon.tech/[database]?sslmode=require"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_NAME="Welid Bouazizi - Développeur Frontend Senior"
```

### 4. Initialiser la base de données

```bash
npx prisma generate
npx prisma db push
```

### 5. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Scripts disponibles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Build de production
npm run start        # Lancer le serveur de production
npm run lint         # Linter le code
npx prisma studio    # Ouvrir Prisma Studio (interface DB)
npx prisma generate  # Générer le client Prisma
npx prisma db push   # Pousser le schéma vers la DB
```

## 🚢 Déploiement

Consultez le **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** pour un guide complet étape par étape du déploiement sur Vercel avec Neon Database.

### Résumé rapide

1. Créer un compte Neon et récupérer les connection strings
2. Pusher le code sur GitHub
3. Importer le projet dans Vercel
4. Configurer les variables d'environnement dans Vercel
5. Déployer automatiquement

## 🗃️ Base de données

Le schéma Prisma inclut 3 tables :

### Table `contacts`
Stocke les messages du formulaire de contact :
- id, name, email, subject, message, createdAt

### Table `project_views`
Pour des analytics basiques (optionnel) :
- id, projectId, viewedAt, userAgent, ipAddress

### Table `blog_posts`
Pour ajouter un blog dynamique (optionnel) :
- id, title, slug, content, excerpt, coverImage, published, publishedAt, tags

## 🎨 Personnalisation

### Modifier le contenu

Toutes les données du CV sont dans `lib/data.ts` :

```typescript
export const skills = { ... }
export const experiences = [ ... ]
export const education = [ ... ]
export const languages = [ ... ]
```

### Modifier les couleurs

Dans `tailwind.config.ts` et `app/globals.css`, modifiez les variables CSS :

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  ...
}
```

### Ajouter une section

1. Créez un composant dans `components/NouvelleSection.tsx`
2. Importez-le dans `app/page.tsx`
3. Ajoutez le lien dans `components/Header.tsx`

## 📊 Performance

- ⚡ **Lighthouse Score** : 95+ / 100
- 🎯 **Core Web Vitals** : Excellent
- 📦 **Bundle Size** : Optimisé avec code splitting
- 🚀 **First Load** : < 200KB JavaScript

## 🔐 Sécurité

- ✅ Variables d'environnement sécurisées
- ✅ Validation des données côté serveur
- ✅ Protection contre les injections SQL (Prisma ORM)
- ✅ HTTPS automatique sur Vercel
- ✅ Rate limiting recommandé (à ajouter)

## 🤝 Contribution

Ce projet est personnel, mais les suggestions sont les bienvenues !

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commitez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📧 Contact

**Welid Bouazizi**
- Email : [bouaziziw@gmail.com](mailto:bouaziziw@gmail.com)
- LinkedIn : [welid-bouazizi](https://www.linkedin.com/in/welid-bouazizi)
- Portfolio : [Votre URL de production]

---

⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile sur GitHub !

**Développé avec ❤️ par Welid Bouazizi**
