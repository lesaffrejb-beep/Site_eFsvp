<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Skip to main content (Accessibility) -->
<a href="#main" class="skip-link"><?php esc_html_e('Aller au contenu principal', 'efsvp'); ?></a>

<!-- Site Header -->
<header class="site-header" role="banner">
    <div class="site-header__container">
        <div class="site-branding">
            <?php if (has_custom_logo()): ?>
                <?php the_custom_logo(); ?>
            <?php else: ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="site-title">
                    <?php bloginfo('name'); ?>
                </a>
            <?php endif; ?>
        </div>

        <nav class="site-navigation" role="navigation" aria-label="<?php esc_attr_e('Navigation principale', 'efsvp'); ?>">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-menu',
                'fallback_cb'    => false
            ]);
            ?>
        </nav>

        <div class="site-header__cta">
            <a href="#contact" class="button"><?php esc_html_e('Démarrer votre projet', 'efsvp'); ?></a>
        </div>

        <button class="menu-toggle" aria-label="<?php esc_attr_e('Menu', 'efsvp'); ?>" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>

<main id="main" class="site-main" role="main">
