<?php
/**
 * Theme bootstrap
 *
 * @package EfSVP
 */

define('EFSVP_VERSION', '1.0.0');

if (!function_exists('efsvp_setup')) {
    function efsvp_setup() {
        add_theme_support('title-tag');
        add_theme_support('post-thumbnails');
        register_nav_menus([
            'primary' => __('Menu principal', 'efsvp'),
        ]);
    }
}
add_action('after_setup_theme', 'efsvp_setup');

function efsvp_mix_color($hex1, $hex2, $ratio) {
    $ratio = max(0, min(1, (float) $ratio));
    $hex1 = ltrim($hex1, '#');
    $hex2 = ltrim($hex2, '#');
    if (strlen($hex1) === 3) {
        $hex1 = preg_replace('/(.)/', '$1$1', $hex1);
    }
    if (strlen($hex2) === 3) {
        $hex2 = preg_replace('/(.)/', '$1$1', $hex2);
    }
    $rgb1 = [hexdec(substr($hex1, 0, 2)), hexdec(substr($hex1, 2, 2)), hexdec(substr($hex1, 4, 2))];
    $rgb2 = [hexdec(substr($hex2, 0, 2)), hexdec(substr($hex2, 2, 2)), hexdec(substr($hex2, 4, 2))];
    $mixed = [];
    for ($i = 0; $i < 3; $i++) {
        $mixed[$i] = (int) round($rgb1[$i] * (1 - $ratio) + $rgb2[$i] * $ratio);
    }
    return sprintf('#%02X%02X%02X', $mixed[0], $mixed[1], $mixed[2]);
}

function efsvp_lighten($hex, $ratio) {
    return efsvp_mix_color($hex, '#FFFFFF', $ratio);
}

function efsvp_darken($hex, $ratio) {
    return efsvp_mix_color($hex, '#000000', $ratio);
}

function efsvp_get_hex_mod($name, $default) {
    $value = get_theme_mod($name, $default);
    $sanitized = sanitize_hex_color($value);
    return $sanitized ? $sanitized : $default;
}

function efsvp_enqueue_assets() {
    $theme_dir = get_template_directory();
    $theme_uri = get_template_directory_uri();

    $style_path = $theme_dir . '/assets/css/main.css';
    if (file_exists($style_path)) {
        wp_enqueue_style('efsvp-theme', $theme_uri . '/assets/css/main.css', [], filemtime($style_path));
    }

    $primary    = efsvp_get_hex_mod('efsvp_primary_color', '#B8441E');
    $secondary  = efsvp_get_hex_mod('efsvp_secondary_color', '#E8924F');
    $ink        = efsvp_get_hex_mod('efsvp_ink_color', '#1A2332');
    $parchment  = efsvp_get_hex_mod('efsvp_parchment_color', '#F5E6D3');
    $primary_hover = efsvp_lighten($primary, 0.18);
    $primary_active = efsvp_darken($primary, 0.15);
    $surface = efsvp_lighten($parchment, 0.05);
    $surface_elevated = efsvp_lighten($parchment, 0.08);
    $surface_dimmed = efsvp_darken($parchment, 0.12);
    $border = efsvp_mix_color($parchment, $ink, 0.25);
    $border_strong = efsvp_mix_color($border, $ink, 0.35);
    $muted = efsvp_lighten($ink, 0.5);
    $text_secondary = efsvp_lighten($ink, 0.35);

    $custom_css = ':root{' .
        '--primary:' . $primary . ';' .
        '--primary-hover:' . $primary_hover . ';' .
        '--primary-active:' . $primary_active . ';' .
        '--secondary:' . $secondary . ';' .
        '--accent:' . $primary . ';' .
        '--accent-2:' . $secondary . ';' .
        '--accent-hover:' . $primary_hover . ';' .
        '--accent-gold:' . efsvp_mix_color($secondary, '#FFFFFF', 0.35) . ';' .
        '--ink:' . $ink . ';' .
        '--charcoal:#2D2D2D;' .
        '--parchment:' . $parchment . ';' .
        '--bg:' . $parchment . ';' .
        '--surface:' . $surface . ';' .
        '--surface-elevated:' . $surface_elevated . ';' .
        '--surface-dimmed:' . $surface_dimmed . ';' .
        '--surface-contrast:' . efsvp_darken($parchment, 0.2) . ';' .
        '--text:' . $ink . ';' .
        '--text-secondary:' . $text_secondary . ';' .
        '--text-tertiary:' . efsvp_lighten($ink, 0.45) . ';' .
        '--muted:' . $muted . ';' .
        '--border:' . $border . ';' .
        '--border-strong:' . $border_strong . ';' .
        '--ring: rgba(184,68,30,0.25);' .
        '}';

    if (!empty($custom_css)) {
        wp_add_inline_style('efsvp-theme', $custom_css);
    }

    $script_path = $theme_dir . '/assets/js/main.js';
    if (file_exists($script_path)) {
        wp_enqueue_script('efsvp-theme', $theme_uri . '/assets/js/main.js', [], filemtime($script_path), true);
    }
}
add_action('wp_enqueue_scripts', 'efsvp_enqueue_assets');

function efsvp_customize_register(WP_Customize_Manager $wp_customize) {
    $wp_customize->add_section('efsvp_hero', [
        'title'       => __('Héros d\'accueil', 'efsvp'),
        'priority'    => 10,
        'description' => __('Configurez le bloc vidéo et les textes du hero.', 'efsvp'),
    ]);

    $wp_customize->add_setting('efsvp_hero_pretitle', [
        'default'           => "En français s'il vous plaît",
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('efsvp_hero_pretitle', [
        'label'   => __('Signature', 'efsvp'),
        'section' => 'efsvp_hero',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('efsvp_hero_title_line_one', [
        'default'           => "Vous avez déjà écrit l'histoire.",
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('efsvp_hero_title_line_one', [
        'label'   => __('Titre - ligne 1', 'efsvp'),
        'section' => 'efsvp_hero',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('efsvp_hero_title_line_two', [
        'default'           => 'On ne fera que vous relire.',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('efsvp_hero_title_line_two', [
        'label'   => __('Titre - ligne 2', 'efsvp'),
        'section' => 'efsvp_hero',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('efsvp_hero_subtitle', [
        'default'           => 'Une création sonore sur-mesure qui transforme votre histoire en expérience émotionnelle.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ]);
    $wp_customize->add_control('efsvp_hero_subtitle', [
        'label'   => __('Sous-titre', 'efsvp'),
        'section' => 'efsvp_hero',
        'type'    => 'textarea',
    ]);

    $wp_customize->add_setting('efsvp_hero_subtitle_highlight', [
        'default'           => 'Prestige garanti.',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('efsvp_hero_subtitle_highlight', [
        'label'   => __('Accroche finale', 'efsvp'),
        'section' => 'efsvp_hero',
        'type'    => 'text',
    ]);

    $wp_customize->add_setting('efsvp_hero_video_mp4', [
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ]);
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'efsvp_hero_video_mp4', [
        'label'    => __('Vidéo Hero (MP4)', 'efsvp'),
        'section'  => 'efsvp_hero',
        'mime_type'=> 'video',
    ]));

    $wp_customize->add_setting('efsvp_hero_video_webm', [
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ]);
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'efsvp_hero_video_webm', [
        'label'    => __('Vidéo Hero (WebM)', 'efsvp'),
        'section'  => 'efsvp_hero',
        'mime_type'=> 'video',
    ]));

    $wp_customize->add_setting('efsvp_hero_video_poster', [
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ]);
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'efsvp_hero_video_poster', [
        'label'    => __('Poster de la vidéo', 'efsvp'),
        'section'  => 'efsvp_hero',
        'mime_type'=> 'image',
    ]));

    $wp_customize->add_section('efsvp_palette', [
        'title'       => __('Palette EfSVP', 'efsvp'),
        'priority'    => 20,
        'description' => __('Ajustez les couleurs principales du thème.', 'efsvp'),
    ]);

    $wp_customize->add_setting('efsvp_primary_color', [
        'default'           => '#B8441E',
        'sanitize_callback' => 'sanitize_hex_color',
    ]);
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'efsvp_primary_color', [
        'label'   => __('Primaire', 'efsvp'),
        'section' => 'efsvp_palette',
    ]));

    $wp_customize->add_setting('efsvp_secondary_color', [
        'default'           => '#E8924F',
        'sanitize_callback' => 'sanitize_hex_color',
    ]);
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'efsvp_secondary_color', [
        'label'   => __('Secondaire', 'efsvp'),
        'section' => 'efsvp_palette',
    ]));

    $wp_customize->add_setting('efsvp_ink_color', [
        'default'           => '#1A2332',
        'sanitize_callback' => 'sanitize_hex_color',
    ]);
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'efsvp_ink_color', [
        'label'   => __('Texte (encre)', 'efsvp'),
        'section' => 'efsvp_palette',
    ]));

    $wp_customize->add_setting('efsvp_parchment_color', [
        'default'           => '#F5E6D3',
        'sanitize_callback' => 'sanitize_hex_color',
    ]);
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'efsvp_parchment_color', [
        'label'   => __('Fond (parchemin)', 'efsvp'),
        'section' => 'efsvp_palette',
    ]));
}
add_action('customize_register', 'efsvp_customize_register');

function efsvp_default_menu() {
    echo '<ul class="nav__list">';
    $links = [
        '#creations' => __('Créations', 'efsvp'),
        '#portfolio' => __('Portfolio', 'efsvp'),
        '#process'   => __('Process', 'efsvp'),
        '#faq'       => __('FAQ', 'efsvp'),
        '#contact'   => __('Contact', 'efsvp'),
    ];
    foreach ($links as $href => $label) {
        printf('<li class="nav__item"><a class="nav__link" href="%1$s">%2$s</a></li>', esc_url($href), esc_html($label));
    }
    echo '</ul>';
}
