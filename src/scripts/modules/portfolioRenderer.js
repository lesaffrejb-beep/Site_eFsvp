/**
 * ==================================================
 * Portfolio Renderer — Génération dynamique CMS-ready
 * ==================================================
 *
 * Ce module génère dynamiquement les cartes portfolio à partir
 * du système de contenu src/data/projects.js
 *
 * Compatible avec le système de filtrage existant dans blocks/portfolio.js
 */

import { getAllProjects } from '../../data/projects.js';

/**
 * Génère le HTML d'une carte portfolio
 * @param {import('../../data/projects.js').Project} project
 * @returns {string} HTML de la carte
 */
const generateCardHTML = (project) => {
  const {
    title,
    client,
    year,
    period,
    tagline,
    shortDescription,
    gradient,
    dataClient,
    dataType,
    dataCategory,
    status,
  } = project;

  // Affichage de l'année : utilise period si disponible, sinon year avec flèche si en production
  const yearDisplay =
    period || (status === 'in_production' ? `${year} →` : year.toString());

  // Tag basé sur le type de projet
  const tagMap = {
    brand: 'Hymne & marque',
    mediation: 'Médiation',
    immersive: 'Immersif',
  };
  const tag = tagMap[dataType] || 'Création';

  return `
    <article
      class="portfolio-card"
      data-category="${dataCategory}"
      data-client="${dataClient}"
      data-type="${dataType}"
      data-scroll
      data-lift
    >
      <div class="portfolio-card__visual">
        <div class="portfolio-card__overlay"></div>
        <div
          class="portfolio-card__color"
          style="background: ${gradient}"
        ></div>
      </div>
      <div class="portfolio-card__content">
        <span class="portfolio-card__tag">${tag}</span>
        <h3 class="portfolio-card__title">${title}</h3>
        <p class="portfolio-card__client">${client}</p>
        <p class="portfolio-card__year">${yearDisplay}</p>
        <p class="portfolio-card__description">
          ${shortDescription}
        </p>
      </div>
    </article>
  `.trim();
};

/**
 * Injecte les cartes portfolio dans le DOM
 * @param {string} containerSelector - Sélecteur du conteneur des cartes
 */
export const renderPortfolioCards = (containerSelector = '.portfolio__grid') => {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.warn(`[Portfolio Renderer] Container "${containerSelector}" non trouvé`);
    return;
  }

  // Récupère tous les projets triés
  const projects = getAllProjects();

  // Génère le HTML de toutes les cartes
  const cardsHTML = projects.map(generateCardHTML).join('');

  // Vide le conteneur et injecte les nouvelles cartes
  container.innerHTML = cardsHTML;

  console.info(`[Portfolio Renderer] ${projects.length} projets rendus avec succès`);
};

/**
 * Initialise le rendu du portfolio
 * À appeler avant initPortfolioBlock() pour que les filtres fonctionnent
 */
export const initPortfolioRenderer = () => {
  // Attendre que le DOM soit prêt
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderPortfolioCards());
  } else {
    renderPortfolioCards();
  }
};

export default initPortfolioRenderer;
