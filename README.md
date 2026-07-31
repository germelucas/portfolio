# Portfolio — Développeur full-stack junior & AI Builder

Portfolio professionnel en page unique, développé avec React, TypeScript et Vite. Le site présente le parcours entrepreneurial de Lucas Germe, ses projets techniques et sa méthode de développement assistée par IA. Il est statique, responsive, accessible et prêt à être déployé sur Vercel.

## Installation

Prérequis : Node.js 20 ou supérieur et npm.

```bash
npm install
npm run dev
```

Le serveur local indique l’adresse à ouvrir, généralement `http://localhost:5173`.

## Personnaliser le contenu

Toutes les informations visibles sont centralisées dans `src/data/portfolio.ts` : identité, présentation, compétences, projets et liens. Les liens laissés vides sont affichés comme indisponibles afin de ne jamais publier de contenu factice.

Le CV est disponible dans `public/cv-lucas-germe.pdf` et sa version modifiable dans `public/cv-lucas-germe.docx`. Pour le régénérer après une modification de contenu :

```powershell
& '<python fourni par l’environnement Codex>' scripts/build_cv.py
```

La propriété `cvPath` de `src/data/portfolio.ts` pointe vers le PDF. Ne jamais inclure d’adresse complète ou d’information sensible.

Mettre également à jour les métadonnées de `index.html` et l’aperçu social `public/og.png`.

## Vérifications

```bash
npm run lint
npm run build
npm run preview
```

Avant publication, vérifier les liens, les formats mobile et ordinateur, la navigation au clavier et effectuer un audit Lighthouse.

## Git et GitHub

```bash
git add .
git commit -m "feat: create junior developer portfolio"
git remote add origin https://github.com/VOTRE-COMPTE/VOTRE-DEPOT.git
git push -u origin main
```

Vérifier qu’aucune donnée privée n’est présente avant le premier envoi.

## Déploiement sur Vercel

1. importer le dépôt GitHub depuis Vercel ;
2. laisser Vercel détecter Vite ;
3. vérifier la commande `npm run build` et le dossier `dist` ;
4. lancer le déploiement.

Chaque mise à jour de `main` déclenchera un déploiement. Aucun secret n’est nécessaire. Un domaine personnalisé pourra être ajouté plus tard dans **Project Settings → Domains**.

## Étude de cas ALTAR CORP

Le projet principal possède une page dédiée à `/projets/altar-corp`. Son contenu est défini dans `src/data/portfolio.ts` et ses médias optimisés se trouvent dans `public/projects/altar-corp`.

Les visuels, modèles, animations et la direction créative sont crédités à ALTAR VISION. Ne pas publier le projet Unity client ni d’autres extraits de code sans autorisation.

## Applications mobiles publiées

Les projets Zen Sleep et GOOD possèdent leurs études de cas aux routes `/projets/zen-sleep` et `/projets/good`. Les deux pages réutilisent un composant partagé alimenté par les données de `src/data/portfolio.ts`.

Les icônes et captures proviennent des fiches Google Play officielles et sont conservées en WebP dans `public/projects`.

## Structure

```text
src/
  components/       Composants réutilisables
  data/portfolio.ts Contenu personnalisable
  App.tsx           Structure de la page
  App.css           Identité visuelle responsive
  types.ts          Modèles TypeScript
public/             Favicon, image sociale et CV téléchargeable
scripts/            Générateur reproductible du CV Word
```
