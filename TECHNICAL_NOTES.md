# 📘 Notes Techniques - Portfolio Welid Bouazizi

Ce document contient des informations techniques détaillées sur l'architecture et les choix de conception du projet.

## 🏗️ Architecture

### Next.js App Router

Ce projet utilise le **App Router** de Next.js 15 (pas le Pages Router) :

```
app/
├── layout.tsx          # Layout racine (ThemeProvider, fonts)
├── page.tsx            # Page d'accueil (route /)
├── globals.css         # Styles globaux
└── api/
    └── contact/
        └── route.ts    # API Route (POST /api/contact)
```

**Avantages de l'App Router** :
- Server Components par défaut (meilleure performance)
- Layouts imbriqués
- Loading UI et Error Handling intégrés
- API Routes co-localisées

### Server vs Client Components

**Server Components** (par défaut) :
- `app/layout.tsx`
- `app/page.tsx`
- `components/Footer.tsx`

**Client Components** (avec `'use client'`) :
- `components/Header.tsx` (useState pour menu mobile)
- `components/Hero.tsx` (Framer Motion)
- `components/About.tsx` (animations)
- `components/Skills.tsx` (Tabs interactifs)
- `components/Experience.tsx` (état d'expansion)
- `components/Contact.tsx` (formulaire + état)
- `components/ThemeProvider.tsx` (next-themes)

**Règle** : Utilisez des Server Components par défaut, et Client Components uniquement quand nécessaire (hooks, interactivité, browser APIs).

---

## 🗄️ Base de données

### Neon Database

**Choix** : Neon est un PostgreSQL serverless conçu pour :
- ✅ Scaling automatique à zéro
- ✅ Latence ultra-basse (< 1ms)
- ✅ Branching (comme Git pour les DB)
- ✅ Gratuit jusqu'à 10 GB
- ✅ Compatible avec Vercel (Edge Functions)

### Prisma ORM

**Configuration** : Deux URLs de connexion requises

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")    # Connection pooled (serverless)
  directUrl = env("DIRECT_URL")      # Connection direct (migrations)
}
```

**Driver adapter Neon** :
```typescript
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'
```

**Pourquoi ?** : 
- Neon utilise WebSockets pour les connexions serverless
- Prisma traditionnel utilise TCP (incompatible Edge Runtime)
- L'adapter `@prisma/adapter-neon` bridge les deux

### Schéma de données

```prisma
model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  subject   String?
  message   String   @db.Text
  createdAt DateTime @default(now())
}
```

**Notes** :
- `cuid()` : IDs courts, URL-safe, ordonnés chronologiquement
- `@db.Text` : VARCHAR illimité (PostgreSQL TEXT type)
- `createdAt` : Timestamp automatique

---

## 🎨 Styling

### Tailwind CSS

**Configuration personnalisée** :

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Couleurs en HSL pour faciliter les variations
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-out",
      // Animations personnalisées
    }
  }
}
```

**CSS Variables** : Mode clair/sombre via variables CSS

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Bleu */
}

.dark {
  --primary: 217.2 91.2% 59.8%;  /* Bleu plus clair en dark mode */
}
```

### Shadcn UI

**Installation** : Composants copiés localement (pas npm package)

```bash
npx shadcn-ui@latest add button card badge tabs
```

**Avantages** :
- ✅ Pas de dépendance externe lourde
- ✅ Personnalisable à 100%
- ✅ Tree-shaking automatique
- ✅ TypeScript natif

**Composants utilisés** :
- `Button` : CTA, navigation
- `Card` : Conteneurs de contenu
- `Badge` : Technologies, tags
- `Tabs` : Section compétences

---

## 🎭 Animations

### Framer Motion

**Installation** :
```bash
npm install framer-motion
```

**Pattern d'animation** :

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}      // État initial
  whileInView={{ opacity: 1, y: 0 }}   // État visible
  transition={{ duration: 0.6 }}       // Durée
  viewport={{ once: true }}            // Une seule fois
>
  {/* Contenu */}
</motion.div>
```

**Performance** :
- Utilisez `whileInView` au lieu de `animate` pour lazy loading
- `viewport={{ once: true }}` évite les re-animations
- Animez `transform` et `opacity` (accélération GPU)

---

## 🔌 API Routes

### Contact Form Handler

**Route** : `app/api/contact/route.ts`

```typescript
export async function POST(request: NextRequest) {
  const body = await request.json()
  // Validation
  // Prisma insert
  return NextResponse.json({ success: true })
}
```

**Sécurité à ajouter** :

1. **Rate limiting** :
```typescript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 requêtes max
})
```

2. **CAPTCHA** (optionnel) :
```bash
npm install @hcaptcha/react-hcaptcha
```

3. **Email notifications** (Resend, SendGrid) :
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'contact@welidbouazizi.com',
  to: 'bouaziziw@gmail.com',
  subject: 'Nouveau message de contact',
  html: `<p>${message}</p>`
})
```

---

## 🌐 SEO

### Metadata

**Configuration** : `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Welid Bouazizi - Développeur Frontend Senior',
  description: '...',
  keywords: ['React', 'Angular', 'TypeScript', ...],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    // ...
  },
  twitter: {
    card: 'summary_large_image',
    // ...
  }
}
```

**Améliorations possibles** :

1. **robots.txt** :
```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://welidbouazizi.com/sitemap.xml
```

2. **sitemap.xml** (Next.js 15) :
```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://welidbouazizi.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

3. **JSON-LD structured data** :
```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Welid Bouazizi",
    "jobTitle": "Développeur Frontend Senior",
    "url": "https://welidbouazizi.com"
  })}
</script>
```

---

## ⚡ Performance

### Optimisations appliquées

1. **Server Components** : Réduction du JavaScript côté client
2. **Code splitting** : Chargement lazy automatique par Next.js
3. **Font optimization** : `next/font` pour les fonts Google
4. **Image optimization** : `next/image` (si ajouté plus tard)
5. **CSS-in-JS évité** : Tailwind (CSS statique) au lieu de styled-components

### Bundle Analysis

```bash
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Analyser
ANALYZE=true npm run build
```

---

## 🔐 Variables d'environnement

### Best Practices

**1. Préfixe `NEXT_PUBLIC_`** :
- Variables exposées au client : `NEXT_PUBLIC_SITE_URL`
- Variables privées (serveur uniquement) : `DATABASE_URL`

**2. Validation au démarrage** :
```typescript
// lib/env.ts
import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url(),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
```

**3. Fichiers** :
- `.env` : Local uniquement (git ignored)
- `.env.example` : Template versionné (sans valeurs sensibles)
- Vercel Dashboard : Production

---

## 🧪 Tests (à ajouter)

### Suggestions

**1. Unit tests** :
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# jest.config.js
module.exports = {
  preset: 'next/jest',
  testEnvironment: 'jest-environment-jsdom',
}
```

**2. E2E tests** :
```bash
npm install --save-dev @playwright/test

# tests/contact-form.spec.ts
test('should submit contact form', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.fill('input[name="name"]', 'Test User')
  await page.fill('input[name="email"]', 'test@example.com')
  await page.fill('textarea[name="message"]', 'Hello!')
  await page.click('button[type="submit"]')
  await expect(page.locator('text=Message envoyé')).toBeVisible()
})
```

---

## 📦 Dépendances principales

```json
{
  "dependencies": {
    "next": "^15.0.0",                           // Framework
    "react": "^18.3.1",                          // UI library
    "@neondatabase/serverless": "^0.9.0",        // Neon driver
    "@prisma/client": "^5.20.0",                 // ORM
    "@radix-ui/react-*": "^1.x",                 // Primitives Shadcn
    "framer-motion": "^11.5.0",                  // Animations
    "lucide-react": "^0.441.0",                  // Icônes
    "next-themes": "^0.x",                       // Dark mode
    "tailwindcss": "^3.4.1"                      // Styling
  }
}
```

**Taille totale** : ~150MB (node_modules)  
**Bundle JS client** : ~200KB (first load)

---

## 🚀 Prochaines étapes

### Fonctionnalités suggérées

1. **Blog dynamique** :
   - Schéma Prisma déjà prêt (`BlogPost`)
   - Créer `app/blog/[slug]/page.tsx`
   - Markdown support avec `react-markdown`

2. **Système d'analytics** :
   - Google Analytics 4
   - Vercel Analytics (intégré)
   - Tracking des vues de projets (table `ProjectView` prête)

3. **Notifications email** :
   - Resend ou SendGrid
   - Email de confirmation pour l'utilisateur
   - Notification pour vous

4. **Filtres de projets** :
   - Filtrer par technologie
   - Recherche textuelle
   - Tags dynamiques

5. **Téléchargement CV** :
   - Bouton "Télécharger CV PDF"
   - Généré dynamiquement ou statique

6. **Mode multilingue** :
   - `next-intl` ou `next-i18next`
   - FR / EN

---

## 📚 Ressources utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

Créé avec ❤️ pour Welid Bouazizi
