<?php
/**
 * WordPress Customizer
 *
 * @package EfSVP
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Register customizer settings
 */
function efsvp_customize_register($wp_customize) {
    // Add EfSVP section
    $wp_customize->add_section('efsvp_options', [
        'title'    => __('Options EfSVP', 'efsvp'),
        'priority' => 30
    ]);

    // Example: Footer text
    $wp_customize->add_setting('efsvp_footer_text', [
        'default'           => '',
        'sanitize_callback' => 'wp_kses_post',
        'transport'         => 'refresh'
    ]);

    $wp_customize->add_control('efsvp_footer_text', [
        'label'    => __('Texte du footer', 'efsvp'),
        'section'  => 'efsvp_options',
        'type'     => 'textarea'
    ]);
}
add_action('customize_register', 'efsvp_customize_register');
