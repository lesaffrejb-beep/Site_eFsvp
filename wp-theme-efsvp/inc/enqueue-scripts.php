<?php
/**
 * Enqueue Scripts & Styles
 *
 * Performance-first approach
 *
 * @package EfSVP
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue theme assets
 */
function efsvp_enqueue_assets() {
    // Google Fonts - Preconnect for performance
    wp_enqueue_style(
        'efsvp-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&family=Cormorant:ital,wght@1,600&display=swap',
        [],
        null
    );

    // Design System CSS
    wp_enqueue_style(
        'efsvp-design-system',
        EFSVP_THEME_URI . '/assets/css/design-system.css',
        [],
        EFSVP_VERSION
    );

    // Main stylesheet
    wp_enqueue_style(
        'efsvp-main',
        get_stylesheet_uri(),
        ['efsvp-design-system'],
        EFSVP_VERSION
    );

    // Component styles
    wp_enqueue_style(
        'efsvp-components',
        EFSVP_THEME_URI . '/assets/css/components/header.css',
        ['efsvp-design-system'],
        EFSVP_VERSION
    );

    // Main JavaScript
    wp_enqueue_script(
        'efsvp-main',
        EFSVP_THEME_URI . '/assets/js/main.js',
        [],
        EFSVP_VERSION,
        true // In footer
    );

    // Localize script for AJAX
    wp_localize_script('efsvp-main', 'efsvpData', [
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('efsvp-nonce'),
        'siteUrl' => home_url('/')
    ]);

    // Comment reply script for threaded comments
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'efsvp_enqueue_assets');

/**
 * Defer non-critical scripts for performance
 */
function efsvp_defer_scripts($tag, $handle, $src) {
    $defer_scripts = ['efsvp-main'];

    if (in_array($handle, $defer_scripts)) {
        return str_replace(' src', ' defer src', $tag);
    }

    return $tag;
}
add_filter('script_loader_tag', 'efsvp_defer_scripts', 10, 3);

/**
 * Add preconnect for external domains
 */
function efsvp_resource_hints($urls, $relation_type) {
    if ('dns-prefetch' === $relation_type) {
        $urls[] = '//fonts.googleapis.com';
        $urls[] = '//fonts.gstatic.com';
    }

    if ('preconnect' === $relation_type) {
        $urls[] = [
            'href' => 'https://fonts.googleapis.com',
            'crossorigin'
        ];
        $urls[] = [
            'href' => 'https://fonts.gstatic.com',
            'crossorigin'
        ];
    }

    return $urls;
}
add_filter('wp_resource_hints', 'efsvp_resource_hints', 10, 2);
