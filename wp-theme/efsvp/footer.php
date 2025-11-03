<?php
/**
 * Footer template
 *
 * @package EfSVP
 */
?>
    <footer class="footer">
        <div class="container">
            <div class="footer__main">
                <div class="footer__grid">
                    <div class="footer__col footer__col--brand">
                        <h3 class="footer__logo"><?php bloginfo('name'); ?></h3>
                        <p class="footer__tagline">"<?php bloginfo('description'); ?>"</p>
                        <p class="footer__baseline"><?php esc_html_e('Studio narratif & musical', 'efsvp'); ?></p>
                    </div>
                    <div class="footer__col">
                        <h4 class="footer__title"><?php esc_html_e('Navigation', 'efsvp'); ?></h4>
                        <ul class="footer__links">
                            <li><a href="#creations"><?php esc_html_e('Créations', 'efsvp'); ?></a></li>
                            <li><a href="#services"><?php esc_html_e('Services', 'efsvp'); ?></a></li>
                            <li><a href="#portfolio"><?php esc_html_e('Portfolio', 'efsvp'); ?></a></li>
                            <li><a href="#process"><?php esc_html_e('Process', 'efsvp'); ?></a></li>
                            <li><a href="#faq"><?php esc_html_e('FAQ', 'efsvp'); ?></a></li>
                            <li><a href="#contact"><?php esc_html_e('Contact', 'efsvp'); ?></a></li>
                        </ul>
                    </div>
                    <div class="footer__col">
                        <h4 class="footer__title"><?php esc_html_e('Informations', 'efsvp'); ?></h4>
                        <ul class="footer__links">
                            <li><a href="#mentions"><?php esc_html_e('Mentions légales', 'efsvp'); ?></a></li>
                            <li><a href="#cgv"><?php esc_html_e('CGV', 'efsvp'); ?></a></li>
                            <li><a href="#confidentialite"><?php esc_html_e('Confidentialité', 'efsvp'); ?></a></li>
                            <li><a href="#rgpd"><?php esc_html_e('RGPD', 'efsvp'); ?></a></li>
                        </ul>
                    </div>
                    <div class="footer__col">
                        <h4 class="footer__title"><?php esc_html_e('Restez inspiré', 'efsvp'); ?></h4>
                        <p class="footer__newsletter-text"><?php esc_html_e('1 email/mois · Projets & coulisses', 'efsvp'); ?></p>
                        <form class="footer__newsletter">
                            <input type="email" class="footer__newsletter-input" placeholder="<?php esc_attr_e('Votre email', 'efsvp'); ?>" aria-label="<?php esc_attr_e('Email pour newsletter', 'efsvp'); ?>">
                            <button type="submit" class="footer__newsletter-btn" aria-label="<?php esc_attr_e('S\'inscrire', 'efsvp'); ?>">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <p class="footer__copyright">© <?php echo esc_html(date_i18n('Y')); ?> <?php bloginfo('name'); ?> · <?php esc_html_e('Tous droits réservés', 'efsvp'); ?></p>
                <p class="footer__made"><?php esc_html_e('Made with', 'efsvp'); ?> <span class="footer__heart">♥</span> <?php esc_html_e('in Angers', 'efsvp'); ?></p>
                <button class="footer__back-to-top" id="back-to-top" aria-label="<?php esc_attr_e('Retour en haut', 'efsvp'); ?>">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 19V5M5 12l7-7 7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    </footer>

    <div class="modal" id="success-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal__overlay"></div>
        <div class="modal__content">
            <div class="modal__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="9"/>
                </svg>
            </div>
            <h3 class="modal__title" id="modal-title"><?php esc_html_e('Message envoyé', 'efsvp'); ?></h3>
            <p class="modal__text"><?php esc_html_e('Nous revenons vers vous sous 24h ouvrées.', 'efsvp'); ?></p>
            <button class="btn btn--primary" id="modal-close"><?php esc_html_e('Fermer', 'efsvp'); ?></button>
        </div>
    </div>

    <?php wp_footer(); ?>
</body>
</html>
