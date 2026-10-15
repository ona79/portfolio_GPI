import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  lang: 'fr-FR',
  title: 'Portfolio GPI',
  description: 'Gestion de Projet Informatique Avancée · 12 thèmes · CareerTrack',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Notre Groupe', link: '/groupe' },
      { text: 'Thèmes', link: '/theme-01' },
      { text: 'CareerTrack', link: '/careertrack' },
      { text: 'Suivi', link: '/suivi' }
    ],
    sidebar: [
      { text: 'Portfolio', items: [
        { text: 'Accueil', link: '/' },
        { text: 'Notre Groupe (Groupe 3)', link: '/groupe' },
        { text: 'Projet CareerTrack', link: '/careertrack' },
        { text: 'Suivi du groupe', link: '/suivi' }
      ] },
      { text: 'Les 12 thèmes', items: [
      {
            "text": "1. Fondements de la Gestion de Projet Informatique",
            "link": "/theme-01"
      },
      {
            "text": "2. Cadrage et Initialisation du Projet",
            "link": "/theme-02"
      },
      {
            "text": "3. Méthodes Classiques : Cycle en V et Waterfall",
            "link": "/theme-03"
      },
      {
            "text": "4. Méthodes Agiles : Scrum et Kanban",
            "link": "/theme-04"
      },
      {
            "text": "5. Planification et Ordonnancement",
            "link": "/theme-05"
      },
      {
            "text": "6. Gestion des Risques",
            "link": "/theme-06"
      },
      {
            "text": "7. Gestion des Coûts et du Budget",
            "link": "/theme-07"
      },
      {
            "text": "8. Gestion des Ressources Humaines et Leadership",
            "link": "/theme-08"
      },
      {
            "text": "9. Communication et Reporting Projet",
            "link": "/theme-09"
      },
      {
            "text": "10. Qualité et Tests dans les Projets IT",
            "link": "/theme-10"
      },
      {
            "text": "11. Gouvernance, Cadres de Référence et Certifications",
            "link": "/theme-11"
      },
      {
            "text": "12. Clôture de Projet et Retour d'Expérience (REX)",
            "link": "/theme-12"
      }
] }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'Sur cette page' },
    docFooter: { prev: 'Précédent', next: 'Suivant' },
    footer: { message: 'Module Gestion de Projet Informatique Avancée · Enseignant : M. Khalifa GAYE', copyright: '© Groupe 3 — UASZ, Licence 3 Ingénierie Informatique' }
  }
}))
