<?php
/**
 * Front page template.
 *
 * @package EfSVP
 */
get_header();
?>
<div class="preloader" id="preloader">
    <div class="preloader__content">
        <div class="preloader__logo">EfSVP</div>
        <div class="preloader__spinner"></div>
        <p class="preloader__text"><?php esc_html_e('Préparation de l’expérience', 'efsvp'); ?>...</p>
    </div>
</div>

<?php get_template_part('parts/hero'); ?>

<main id="main">
    <?php get_template_part('parts/services'); ?>
    <?php get_template_part('parts/portfolio'); ?>
    <?php get_template_part('parts/process'); ?>
    <?php get_template_part('parts/testimonials'); ?>
    <?php get_template_part('parts/contact'); ?>
</main>

<?php get_footer(); ?>
