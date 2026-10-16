# Portfolio — Gestion de Projet Informatique Avancée

Documentation académique produite dans le cadre du module **Gestion de Projet Informatique Avancée**,
Licence 3 Ingénierie Informatique — UFR Sciences et Technologies, Université Assane Seck de Ziguinchor (UASZ).

---

## Présentation

Ce portfolio couvre 12 thèmes fondamentaux de la gestion de projet informatique, appliqués au projet fil rouge **CareerTrack** — une plateforme RH dédiée aux PME sénégalaises (50 à 500 employés).

Le site est généré avec [VitePress](https://vitepress.dev/) et déployé en continu sur [Vercel](https://vercel.com/).

---

## Groupe 3

| Membre | Rôle |
|---|---|
| Eric Joel Manga | Chef de projet / Architecture |
| Assete Faye | Développement backend (Spring Boot) |
| Mouhamed Fam | Développement frontend (React) |
| Aminatou Touré | Qualité & tests |
| Ibrahima Diallo | Base de données & déploiement |

**Encadrant :** M. Khalifa GAYE

---

## Projet fil rouge — CareerTrack

Plateforme de gestion des carrières en entreprise ciblant les PME sénégalaises.

**Stack technique :** Spring Boot · React · PostgreSQL · iTextPDF

**Modules couverts :** Dossier employé · Organigramme · Congés · Évaluation annuelle (objectifs SMART, PDF signable) · Formations · Promotions & rémunérations · Recrutement (pipeline Kanban) · Tableaux de bord RH

**Méthodologie :** Mixte — Cycle en V (modules stables) · Scrum (modules évolutifs) · Kanban (recrutement)

**Contraintes :** JWT · OpenAPI 3.0 · Mobile-first · Mode offline partiel

---

## Thèmes traités

| N° | Thème |
|:---:|---|
| 01 | Fondamentaux et cycle de vie d'un projet informatique |
| 02 | Cadrage, faisabilité et expression des besoins |
| 03 | Méthodes agiles : Scrum et Kanban |
| 04 | Planification et gestion des ressources |
| 05 | Ordonnancement : PERT, Gantt et chemin critique |
| 06 | Gestion des risques |
| 07 | Suivi budgétaire et Earned Value Management |
| 08 | Management de la qualité logicielle |
| 09 | Communication et reporting en équipe projet |
| 10 | Tests logiciels et stratégies de qualification |
| 11 | Gestion des parties prenantes et gouvernance |
| 12 | Clôture de projet et capitalisation des connaissances |

---

## Installation et développement local

### Prérequis

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

> **Note :** Si la page est blanche avec `npm run dev`, utilisez `npm run preview` après un build.

### Construire la version de production

```bash
npm run build
```

Les fichiers statiques sont générés dans `.vitepress/dist/`.

### Prévisualiser le build

```bash
npm run preview
```

---

## Déploiement

### Vercel

| Paramètre | Valeur |
|---|---|
| Framework Preset | VitePress |
| Build Command | `npm run build` |
| Output Directory | `.vitepress/dist` |
| Install Command | `npm install` |
| Node.js Version | 18.x ou supérieure |

Tout push sur la branche `main` déclenche automatiquement un nouveau déploiement.

---

## Structure du projet

```
portfolio/
├── .vitepress/
│   ├── config.mts          # Configuration VitePress (nav, sidebar, plugins)
│   └── theme/
│       ├── index.ts         # Point d'entrée du thème personnalisé
│       └── custom.css       # Styles globaux (couleurs, tables, responsive)
├── portfolio/
│   ├── index.md             # Page d'accueil
│   ├── groupe.md            # Présentation du Groupe 3
│   ├── careertrack.md       # Projet fil rouge CareerTrack
│   ├── suivi.md             # Tableau de suivi des 12 thèmes
│   ├── theme-01.md          # Thème 1
│   ├── ...
│   └── theme-12.md          # Thème 12
├── package.json
└── README.md
```

---

## Conventions de contribution

- Une branche par membre : `feature/<prenom>/<sujet>`
- Un thème = un fichier `theme-XX.md`
- Mettre à jour `suivi.md` à chaque avancement
- Les diagrammes sont rédigés en syntaxe **Mermaid** (blocs ` ```mermaid `)
- Les tableaux sont en Markdown standard ; les tableaux larges sont encadrés d'une `<div class="rwrap">` pour le scroll mobile

---

## Licence

Travaux académiques — Université Assane Seck de Ziguinchor, 2025-2026.
Tous droits réservés au Groupe 3.
