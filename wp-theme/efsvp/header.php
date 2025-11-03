<?php
/**
 * Header template
 *
 * @package EfSVP
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<nav class="nav" id="nav" aria-label="<?php esc_attr_e('Navigation principale', 'efsvp'); ?>">
    <div class="nav__container">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="nav__logo" aria-label="<?php esc_attr_e('Retour à l\'accueil', 'efsvp'); ?>">
            <span class="nav__logo-mark">Ef</span>
            <span class="nav__logo-text"><?php bloginfo('name'); ?></span>
        </a>
        <div class="nav__menu" id="nav-menu">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'menu_class'     => 'nav__list',
                'container'      => false,
                'fallback_cb'    => 'efsvp_default_menu',
            ]);
            ?>
        </div>
        <a href="#contact" class="nav__cta btn btn--primary-small"><?php esc_html_e('Votre projet', 'efsvp'); ?></a>
        <button class="nav__toggle" id="nav-toggle" aria-label="<?php esc_attr_e('Menu', 'efsvp'); ?>" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>
<a href="#main" class="skip-link"><?php esc_html_e('Aller au contenu principal', 'efsvp'); ?></a>
