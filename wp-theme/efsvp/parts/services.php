<?php
/**
 * Audio + Services sections.
 *
 * @package EfSVP
 */
?>
<section class="audio-section" id="creations">
    <div class="container">
        <header class="section__header" data-scroll>
            <h2 class="section__title"><?php esc_html_e('Écoutez ce que nous créons', 'efsvp'); ?></h2>
            <p class="section__subtitle"><?php esc_html_e('Des récits qui touchent, portés par la musique', 'efsvp'); ?></p>
        </header>
        <div class="bento-grid" data-scroll>
            <article class="bento-item bento-item--large" data-reveal="scale" data-lift>
                <div class="audio-player audio-player--featured">
                    <div class="audio-player__artwork">
                        <div class="audio-player__artwork-placeholder" style="background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);">
                            <svg class="audio-player__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M9 18V5l12-2v13M9 18c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm12-2c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="audio-player__info">
                        <div class="audio-player__badge"><?php esc_html_e('Hymne officiel', 'efsvp'); ?></div>
                        <h3 class="audio-player__title"><?php esc_html_e('La force de la douceur', 'efsvp'); ?></h3>
                        <p class="audio-player__client"><?php esc_html_e('Département Maine-et-Loire · 2024', 'efsvp'); ?></p>
                    </div>
                    <div class="audio-player__controls">
                        <button class="audio-player__play" aria-label="<?php esc_attr_e('Lecture', 'efsvp'); ?>" data-audio="sample-1">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg class="pause-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                            </svg>
                        </button>
                        <div class="audio-player__waveform" id="waveform-1"></div>
                        <div class="audio-player__time">
                            <span class="audio-player__current">0:00</span>
                            <span class="audio-player__duration">3:45</span>
                        </div>
                    </div>
                </div>
            </article>
            <article class="bento-item bento-item--card" data-reveal="scale" data-glow>
                <div class="info-card">
                    <div class="info-card__number">3</div>
                    <h3 class="info-card__title"><?php esc_html_e('formats', 'efsvp'); ?></h3>
                    <p class="info-card__text"><?php esc_html_e('Écriture · Audio · Live', 'efsvp'); ?></p>
                    <div class="info-card__decoration"></div>
                </div>
            </article>
            <article class="bento-item bento-item--medium">
                <div class="audio-player audio-player--standard">
                    <div class="audio-player__compact">
                        <button class="audio-player__play-compact" aria-label="<?php esc_attr_e('Lecture', 'efsvp'); ?>" data-audio="sample-2">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg class="pause-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                            </svg>
                        </button>
                        <div class="audio-player__compact-info">
                            <h4 class="audio-player__compact-title"><?php esc_html_e('Série promotionnelle', 'efsvp'); ?></h4>
                            <p class="audio-player__compact-client"><?php esc_html_e('SIVAL · 2025', 'efsvp'); ?></p>
                        </div>
                    </div>
                    <div class="audio-player__waveform" id="waveform-2"></div>
                </div>
            </article>
            <article class="bento-item bento-item--medium">
                <div class="quote-card">
                    <svg class="quote-card__icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                    <blockquote class="quote-card__text">
                        <?php esc_html_e('"J\'ai vu des gens pleurer. C\'était exactement ce que je voulais."', 'efsvp'); ?>
                    </blockquote>
                    <cite class="quote-card__author">— <?php esc_html_e('Cliente institutionnelle', 'efsvp'); ?></cite>
                </div>
            </article>
            <article class="bento-item bento-item--medium">
                <div class="audio-player audio-player--list">
                    <div class="audio-player__list-item">
                        <button class="audio-player__play-small" aria-label="<?php esc_attr_e('Lecture', 'efsvp'); ?>" data-audio="sample-3">
                            <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            <svg class="pause-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 4h4v16H6zM14 4h4v16h-4z"/>
                            </svg>
                        </button>
                        <div class="audio-player__list-info">
                            <h4><?php esc_html_e('Atelier Lacour', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Métaphore forêt · 2024', 'efsvp'); ?></p>
                        </div>
                    </div>
                    <div class="audio-player__waveform-mini" id="waveform-3"></div>
                </div>
            </article>
            <article class="bento-item bento-item--card">
                <div class="info-card info-card--accent">
                    <div class="info-card__number">60+</div>
                    <h3 class="info-card__title"><?php esc_html_e('représentations', 'efsvp'); ?></h3>
                    <p class="info-card__text"><?php esc_html_e('depuis 2022', 'efsvp'); ?></p>
                </div>
            </article>
        </div>
        <div class="section__cta">
            <a href="#portfolio" class="btn btn--secondary">
                <?php esc_html_e('Découvrir tous nos projets', 'efsvp'); ?>
                <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<section class="flagship-cases" id="cases">
    <div class="container">
        <header class="section__header" data-scroll>
            <h2 class="section__title"><?php esc_html_e('Trois créations qui racontent notre approche', 'efsvp'); ?></h2>
            <p class="section__subtitle"><?php esc_html_e('Problème · Approche · Effet', 'efsvp'); ?></p>
        </header>
        <div class="flagship-cases__grid">
            <?php /* Cards copied from static markup */ ?>
            <article class="case-card" data-category="institutions" data-scroll data-lift>
                <div class="case-card__visual">
                    <div class="case-card__gradient" style="background: linear-gradient(135deg, #E8924F 0%, #D4AF37 100%);"></div>
                    <div class="case-card__badge"><?php esc_html_e('Série narrative', 'efsvp'); ?></div>
                </div>
                <div class="case-card__content">
                    <h3 class="case-card__title"><?php esc_html_e('SIVAL — L\'innovation agricole racontée', 'efsvp'); ?></h3>
                    <p class="case-card__client"><?php esc_html_e('Destination Angers · 2025', 'efsvp'); ?></p>
                    <div class="case-card__story">
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">🎯 <?php esc_html_e('Problème', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Comment valoriser l\'innovation agricole au-delà des chiffres et communiqués, lors du plus grand salon européen du secteur ?', 'efsvp'); ?></p>
                        </div>
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">⚙️ <?php esc_html_e('Approche', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Série de récits musicaux courts mettant en lumière des histoires humaines d\'innovateurs. Collectage sur site, composition sur mesure, diffusion lors des conférences.', 'efsvp'); ?></p>
                        </div>
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">✨ <?php esc_html_e('Effet', 'efsvp'); ?></h4>
                            <p><strong class="case-card__metric">8 <?php esc_html_e('récits diffusés', 'efsvp'); ?></strong> <?php esc_html_e('auprès de', 'efsvp'); ?> <strong>2 000+</strong> <?php esc_html_e('visiteurs', 'efsvp'); ?>. <?php esc_html_e('Reprise média (France Bleu, Ouest-France). NPS client : 9.2/10.', 'efsvp'); ?></p>
                        </div>
                    </div>
                    <button class="case-card__audio-btn" aria-label="<?php esc_attr_e('Écouter extrait SIVAL', 'efsvp'); ?>">
                        <svg class="audio-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span><?php esc_html_e('Écouter 30s', 'efsvp'); ?></span>
                    </button>
                </div>
            </article>
            <article class="case-card" data-category="corporate" data-scroll data-lift>
                <div class="case-card__visual">
                    <div class="case-card__gradient" style="background: linear-gradient(135deg, #5F4B8B 0%, #CBA0D7 100%);"></div>
                    <div class="case-card__badge"><?php esc_html_e('Cérémonie', 'efsvp'); ?></div>
                </div>
                <div class="case-card__content">
                    <h3 class="case-card__title"><?php esc_html_e('Atelier Lacour — Métaphore de la forêt', 'efsvp'); ?></h3>
                    <p class="case-card__client"><?php esc_html_e('25 ans d’artisanat · 2024', 'efsvp'); ?></p>
                    <div class="case-card__story">
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">🎯 <?php esc_html_e('Problème', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Comment raconter une passation générationnelle sans perdre la poésie d\'un métier du bois ?', 'efsvp'); ?></p>
                        </div>
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">⚙️ <?php esc_html_e('Approche', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Création musicale + texte performé en direct lors de la soirée anniversaire. Scénographie immersive et captation vidéo.', 'efsvp'); ?></p>
                        </div>
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">✨ <?php esc_html_e('Effet', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Standing ovation. Signature d’un contrat cadre 3 ans. Témoignage fondateur : "C\'était exactement ça, et je n\'aurais jamais su le dire."', 'efsvp'); ?></p>
                        </div>
                    </div>
                    <button class="case-card__audio-btn" aria-label="<?php esc_attr_e('Écouter extrait Atelier Lacour', 'efsvp'); ?>">
                        <svg class="audio-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span><?php esc_html_e('Écouter 30s', 'efsvp'); ?></span>
                    </button>
                </div>
            </article>
            <article class="case-card case-card--featured" data-category="spectacles" data-scroll data-lift>
                <div class="case-card__visual">
                    <div class="case-card__gradient" style="background: linear-gradient(135deg, #7D2E2E 0%, #B8441E 100%);"></div>
                    <div class="case-card__badge"><?php esc_html_e('Spectacle immersif', 'efsvp'); ?></div>
                    <div class="case-card__tag-featured"><?php esc_html_e('Création phare', 'efsvp'); ?></div>
                </div>
                <div class="case-card__content">
                    <h3 class="case-card__title"><?php esc_html_e('État de nature — Spectacle en pleine forêt', 'efsvp'); ?></h3>
                    <p class="case-card__client"><?php esc_html_e('PNR Loire-Anjou-Touraine · 2023 →', 'efsvp'); ?></p>
                    <div class="case-card__story">
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">🎯 <?php esc_html_e('Problème', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Comment sensibiliser aux enjeux écologiques sans militantisme moralisateur, et créer une expérience marquante dans un lieu naturel protégé ?', 'efsvp'); ?></p>
                        </div>
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">⚙️ <?php esc_html_e('Approche', 'efsvp'); ?></h4>
                            <p><?php esc_html_e('Spectacle immersif 35 min en déambulation forestière. Texte poétique + musique live acoustique + dispositif lumière douce.', 'efsvp'); ?></p>
                        </div>
                        <div class="case-card__step">
                            <h4 class="case-card__step-title">✨ <?php esc_html_e('Effet', 'efsvp'); ?></h4>
                            <p><strong class="case-card__metric">60+</strong> <?php esc_html_e('représentations depuis 2023,', 'efsvp'); ?> <strong>2 400+</strong> <?php esc_html_e('spectateurs', 'efsvp'); ?>. <?php esc_html_e('Programmation reconduite 2025-2026.', 'efsvp'); ?></p>
                        </div>
                    </div>
                    <button class="case-card__audio-btn case-card__audio-btn--featured" aria-label="<?php esc_attr_e('Écouter extrait État de nature', 'efsvp'); ?>">
                        <svg class="audio-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                        <span><?php esc_html_e('Écouter 30s', 'efsvp'); ?></span>
                    </button>
                </div>
            </article>
        </div>
        <div class="flagship-cases__cta">
            <a href="#portfolio" class="btn btn--secondary">
                <?php esc_html_e('Voir tous les projets', 'efsvp'); ?>
                <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    </div>
</section>

<section class="services" id="services">
    <div class="container">
        <header class="section__header" data-scroll>
            <h2 class="section__title"><?php esc_html_e('Quatre formules, une signature', 'efsvp'); ?></h2>
            <p class="section__subtitle"><?php esc_html_e('De l\'écriture seule au spectacle complet', 'efsvp'); ?></p>
        </header>
        <div class="services__grid">
            <article class="service-card" data-scroll data-lift data-glow>
                <div class="service-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                </div>
                <div class="service-card__badge"><?php esc_html_e('À partir de 1 200€', 'efsvp'); ?></div>
                <h3 class="service-card__title"><?php esc_html_e('Écriture seule', 'efsvp'); ?></h3>
                <ul class="service-card__features">
                    <li><?php esc_html_e('Texte professionnel', 'efsvp'); ?></li>
                    <li><?php esc_html_e('2-3 semaines', 'efsvp'); ?></li>
                    <li><?php esc_html_e('Validation incluse', 'efsvp'); ?></li>
                </ul>
                <a href="#contact" class="service-card__cta">
                    <?php esc_html_e('Découvrir', 'efsvp'); ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </article>
            <article class="service-card" data-scroll data-lift data-glow>
                <div class="service-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"/>
                    </svg>
                </div>
                <div class="service-card__badge"><?php esc_html_e('À partir de 2 500€', 'efsvp'); ?></div>
                <h3 class="service-card__title"><?php esc_html_e('Création complète', 'efsvp'); ?></h3>
                <ul class="service-card__features">
                    <li><?php esc_html_e('Texte + composition', 'efsvp'); ?></li>
                    <li><?php esc_html_e('Enregistrement pro', 'efsvp'); ?></li>
                    <li><?php esc_html_e('3-4 semaines', 'efsvp'); ?></li>
                </ul>
                <a href="#contact" class="service-card__cta">
                    <?php esc_html_e('Découvrir', 'efsvp'); ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </article>
            <article class="service-card" data-scroll data-lift data-glow>
                <div class="service-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M5 3h14a2 2 0 0 1 2 2v9.764a2 2 0 0 1-1.106 1.789l-7 3.5a2 2 0 0 1-1.788 0l-7-3.5A2 2 0 0 1 3 14.764V5a2 2 0 0 1 2-2z"/>
                    </svg>
                </div>
                <div class="service-card__badge"><?php esc_html_e('À partir de 4 800€', 'efsvp'); ?></div>
                <h3 class="service-card__title"><?php esc_html_e('Spectacle live', 'efsvp'); ?></h3>
                <ul class="service-card__features">
                    <li><?php esc_html_e('Texte + musique live', 'efsvp'); ?></li>
                    <li><?php esc_html_e('Scénographie légère', 'efsvp'); ?></li>
                    <li><?php esc_html_e('Direction artistique', 'efsvp'); ?></li>
                </ul>
                <a href="#contact" class="service-card__cta">
                    <?php esc_html_e('Découvrir', 'efsvp'); ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </article>
            <article class="service-card" data-scroll data-lift data-glow>
                <div class="service-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20.25 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6.75"/>
                        <path d="M3.75 9h16.5"/>
                        <path d="M8 9V5.25A2.25 2.25 0 0 1 10.25 3h3.5A2.25 2.25 0 0 1 16 5.25V9"/>
                    </svg>
                </div>
                <div class="service-card__badge"><?php esc_html_e('Sur devis', 'efsvp'); ?></div>
                <h3 class="service-card__title"><?php esc_html_e('Programme annuel', 'efsvp'); ?></h3>
                <ul class="service-card__features">
                    <li><?php esc_html_e('4 capsules sonores/an', 'efsvp'); ?></li>
                    <li><?php esc_html_e('Diffusion multicanale', 'efsvp'); ?></li>
                    <li><?php esc_html_e('Animation en interne', 'efsvp'); ?></li>
                </ul>
                <a href="#contact" class="service-card__cta">
                    <?php esc_html_e('Découvrir', 'efsvp'); ?>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </article>
        </div>
        <div class="services__notice" data-scroll>
            <p><?php esc_html_e('Chaque projet est conçu sur-mesure. Les budgets incluent écriture, composition, direction artistique et coordination jusqu\'à la livraison.', 'efsvp'); ?></p>
        </div>
    </div>
</section>
