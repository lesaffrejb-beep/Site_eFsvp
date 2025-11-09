</main>

<!-- Site Footer -->
<footer class="site-footer" role="contentinfo">
    <div class="site-footer__container container">
        <div class="site-footer__content">
            <?php if (has_nav_menu('footer')): ?>
                <nav class="footer-navigation" aria-label="<?php esc_attr_e('Navigation footer', 'efsvp'); ?>">
                    <?php
                    wp_nav_menu([
                        'theme_location' => 'footer',
                        'container'      => false,
                        'menu_class'     => 'footer-menu',
                        'fallback_cb'    => false,
                        'depth'          => 1
                    ]);
                    ?>
                </nav>
            <?php endif; ?>
        </div>

        <div class="site-footer__legal">
            <p>
                &copy; <?php echo date('Y'); ?>
                <?php bloginfo('name'); ?>.
                <?php esc_html_e('Tous droits réservés.', 'efsvp'); ?>
            </p>
            <?php
            $footer_text = get_theme_mod('efsvp_footer_text');
            if ($footer_text) {
                echo '<div class="site-footer__custom">' . wp_kses_post($footer_text) . '</div>';
            }
            ?>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
