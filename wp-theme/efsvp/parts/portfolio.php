<?php
/**
 * Portfolio section.
 *
 * @package EfSVP
 */
?>
<section class="portfolio" id="portfolio">
    <div class="container">
        <header class="section__header" data-scroll>
            <h2 class="section__title">Ils nous ont fait confiance</h2>
            <div class="portfolio__stats">
                <div class="portfolio__stat" data-counter="60">60+</div>
                <span>représentations</span>
                <span class="portfolio__separator">·</span>
                <div class="portfolio__stat" data-counter="15">15+</div>
                <span>institutions</span>
            </div>
        </header>
        <div class="portfolio__filters">
            <button class="portfolio__filter portfolio__filter--active" data-filter="all">Tout</button>
            <button class="portfolio__filter" data-filter="institutions">Institutions</button>
            <button class="portfolio__filter" data-filter="entreprises">Entreprises</button>
            <button class="portfolio__filter" data-filter="spectacles">Spectacles</button>
        </div>
        <div class="portfolio__grid">
            <article class="portfolio-card" data-category="institutions" data-scroll data-lift>
                <div class="portfolio-card__visual">
                    <div class="portfolio-card__overlay"></div>
                    <div class="portfolio-card__color" style="background: linear-gradient(135deg, #B8441E 0%, #E8924F 100%);"></div>
                </div>
                <div class="portfolio-card__content">
                    <span class="portfolio-card__tag">Hymne officiel</span>
                    <h3 class="portfolio-card__title">La force de la douceur</h3>
                    <p class="portfolio-card__client">Département Maine-et-Loire</p>
                    <p class="portfolio-card__year">2024</p>
                    <p class="portfolio-card__description">
                        Hymne officiel célébrant l'identité et les valeurs du département. Performance inaugurale devant 500 invités.
                    </p>
                </div>
            </article>
            <article class="portfolio-card" data-category="entreprises" data-scroll data-lift>
                <div class="portfolio-card__visual">
                    <div class="portfolio-card__overlay"></div>
                    <div class="portfolio-card__color" style="background: linear-gradient(135deg, #E8924F 0%, #D4AF37 100%);"></div>
                </div>
                <div class="portfolio-card__content">
                    <span class="portfolio-card__tag">Récit narratif</span>
                    <h3 class="portfolio-card__title">Série promotionnelle agricole</h3>
                    <p class="portfolio-card__client">Destination Angers / SIVAL</p>
                    <p class="portfolio-card__year">2025</p>
                    <p class="portfolio-card__description">
                        Récits musicaux pour valoriser l'innovation agricole lors du plus grand salon européen.
                    </p>
                </div>
            </article>
            <article class="portfolio-card" data-category="entreprises" data-scroll data-lift>
                <div class="portfolio-card__visual">
                    <div class="portfolio-card__overlay"></div>
                    <div class="portfolio-card__color" style="background: linear-gradient(135deg, #2D2D2D 0%, #7D2E2E 100%);"></div>
                </div>
                <div class="portfolio-card__content">
                    <span class="portfolio-card__tag">Anniversaire</span>
                    <h3 class="portfolio-card__title">25 ans &amp; passation</h3>
                    <p class="portfolio-card__client">Atelier Lacour</p>
                    <p class="portfolio-card__year">2024</p>
                    <p class="portfolio-card__description">
                        Métaphore de la forêt pour célébrer un quart de siècle et préparer la transmission.
                    </p>
                </div>
            </article>
            <article class="portfolio-card" data-category="institutions" data-scroll data-lift>
                <div class="portfolio-card__visual">
                    <div class="portfolio-card__overlay"></div>
                    <div class="portfolio-card__color" style="background: linear-gradient(135deg, #F5E6D3 0%, #D4AF37 100%);"></div>
                </div>
                <div class="portfolio-card__content">
                    <span class="portfolio-card__tag">Portraits</span>
                    <h3 class="portfolio-card__title">Histoires de résilience</h3>
                    <p class="portfolio-card__client">Réseau Cocagne</p>
                    <p class="portfolio-card__year">2024</p>
                    <p class="portfolio-card__description">
                        Collectage et mise en musique de parcours de réinsertion pour un réseau national.
                    </p>
                </div>
            </article>
            <article class="portfolio-card" data-category="spectacles" data-scroll data-lift>
                <div class="portfolio-card__visual">
                    <div class="portfolio-card__overlay"></div>
                    <div class="portfolio-card__color" style="background: linear-gradient(135deg, #7D2E2E 0%, #B8441E 100%);"></div>
                </div>
                <div class="portfolio-card__content">
                    <span class="portfolio-card__tag">Spectacle</span>
                    <h3 class="portfolio-card__title">État de nature</h3>
                    <p class="portfolio-card__client">PNR Loire-Anjou-Touraine</p>
                    <p class="portfolio-card__year">2023 →</p>
                    <p class="portfolio-card__description">
                        Spectacle immersif joué plus de 40 fois en pleine nature. Création phare du studio.
                    </p>
                </div>
            </article>
        </div>
        <div class="portfolio__cta" data-scroll>
            <a href="#contact" class="btn btn--primary">
                Commencer un projet
                <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </div>
</section>
