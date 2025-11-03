<?php
/**
 * Testimonials, stats, FAQ.
 *
 * @package EfSVP
 */
?>
<section class="testimonials">
    <div class="container">
        <header class="section__header">
            <h2 class="section__title">Ce qu'ils disent</h2>
        </header>
        <div class="swiper testimonials__carousel">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <article class="testimonial-card">
                        <div class="testimonial-card__stars">
                            <?php for ($i = 0; $i < 5; $i++) : ?>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                            <?php endfor; ?>
                        </div>
                        <blockquote class="testimonial-card__quote">
                            "J'ai vu des gens pleurer. C'était exactement ce que je voulais sans savoir que ça existait."
                        </blockquote>
                        <div class="testimonial-card__author">
                            <div class="testimonial-card__avatar">M</div>
                            <div class="testimonial-card__info">
                                <cite class="testimonial-card__name">Marie Dupont</cite>
                                <p class="testimonial-card__role">Directrice Communication · Département Maine-et-Loire<br><span class="testimonial-card__context">Hymne officiel "La force de la douceur" (2024)</span></p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="swiper-slide">
                    <article class="testimonial-card">
                        <div class="testimonial-card__stars">
                            <?php for ($i = 0; $i < 5; $i++) : ?>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                            <?php endfor; ?>
                        </div>
                        <blockquote class="testimonial-card__quote">
                            "Ils ont compris notre métier en deux semaines mieux que certains partenaires historiques."
                        </blockquote>
                        <div class="testimonial-card__author">
                            <div class="testimonial-card__avatar">P</div>
                            <div class="testimonial-card__info">
                                <cite class="testimonial-card__name">Pierre Martin</cite>
                                <p class="testimonial-card__role">Directeur · Atelier Lacour<br><span class="testimonial-card__context">Récit 25 ans &amp; passation (2024)</span></p>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="swiper-slide">
                    <article class="testimonial-card">
                        <div class="testimonial-card__stars">
                            <?php for ($i = 0; $i < 5; $i++) : ?>
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                            <?php endfor; ?>
                        </div>
                        <blockquote class="testimonial-card__quote">
                            "Dignité, vérité, émotion. Jamais gênant, toujours juste. Une approche rare et précieuse."
                        </blockquote>
                        <div class="testimonial-card__author">
                            <div class="testimonial-card__avatar">S</div>
                            <div class="testimonial-card__info">
                                <cite class="testimonial-card__name">Sophie Bernard</cite>
                                <p class="testimonial-card__role">Responsable Événementiel · Réseau Cocagne<br><span class="testimonial-card__context">Portraits de réinsertion (2024)</span></p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</section>

<section class="stats">
    <div class="container">
        <header class="stats__header">
            <h2 class="stats__title">La preuve par les chiffres</h2>
        </header>
        <div class="stats__grid">
            <div class="stat-card">
                <div class="stat-card__number" data-count="60">60+</div>
                <div class="stat-card__label">Représentations</div>
            </div>
            <div class="stat-card">
                <div class="stat-card__number" data-count="15">15+</div>
                <div class="stat-card__label">Projets institutionnels</div>
            </div>
            <div class="stat-card">
                <div class="stat-card__number">1200€</div>
                <div class="stat-card__label">À partir de</div>
            </div>
            <div class="stat-card">
                <div class="stat-card__number" data-count="4">4</div>
                <div class="stat-card__label">Années d'expérience terrain</div>
            </div>
        </div>
    </div>
</section>

<section class="faq" id="faq">
    <div class="container">
        <header class="section__header">
            <h2 class="section__title">Vos questions, nos réponses</h2>
        </header>
        <div class="faq__search">
            <svg class="faq__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input type="search" class="faq__search-input" placeholder="Rechercher une question..." aria-label="Rechercher dans la FAQ">
        </div>
        <div class="faq__grid">
            <article class="faq__item">
                <button class="faq__question" aria-expanded="false">
                    <span class="faq__question-text">C'est quoi exactement ?</span>
                    <svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
                <div class="faq__answer">
                    <p>Des auteurs-compositeurs écrivent et jouent votre histoire pour vos moments clés (2-60 min). C'est du sur-mesure narratif et musical : nous collectons votre histoire, l'écrivons avec dignité, la composons musicalement, puis la jouons en concert ou vous livrons l'enregistrement professionnel.</p>
                </div>
            </article>
            <article class="faq__item">
                <button class="faq__question" aria-expanded="false">
                    <span class="faq__question-text">Allez-vous comprendre notre métier ?</span>
                    <svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
                <div class="faq__answer">
                    <p>On passe 2 semaines à capter vos enjeux : entretiens, immersion, documents. Validation par étapes (2 allers-retours inclus). Nos clients disent souvent : "Ils ont compris mieux que nos partenaires historiques."</p>
                </div>
            </article>
            <article class="faq__item">
                <button class="faq__question" aria-expanded="false">
                    <span class="faq__question-text">Ce ne sera pas gênant ou cringe ?</span>
                    <svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
                <div class="faq__answer">
                    <p>Jamais. On vise dignité, vérité, émotion maîtrisée. Vous validez tout avant. Notre approche est celle d'auteurs professionnels, pas d'animateurs. Le résultat est prestige culturel, pas karaoké d'entreprise.</p>
                </div>
            </article>
            <article class="faq__item">
                <button class="faq__question" aria-expanded="false">
                    <span class="faq__question-text">Quels délais ?</span>
                    <svg class="faq__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
                <div class="faq__answer">
                    <p>Prévoir 6 à 8 semaines pour une création complète (collecte, écriture, composition, enregistrement). Les formats "écriture seule" sont livrés en 2-3 semaines.</p>
                </div>
            </article>
        </div>
    </div>
</section>
