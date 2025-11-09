<?php
/**
 * Hero Block Template
 *
 * @param array    $attributes Block attributes
 * @param string   $content    Block content
 * @param WP_Block $block      Block instance
 */

if (!defined('ABSPATH')) {
    exit;
}

$title = $attributes['title'] ?? '';
$subtitle = $attributes['subtitle'] ?? '';
$description = $attributes['description'] ?? '';
$bg_image = $attributes['backgroundImage'] ?? null;
$cta_text = $attributes['ctaText'] ?? '';
$cta_url = $attributes['ctaUrl'] ?? '';
$overlay_opacity = $attributes['overlayOpacity'] ?? 0.5;
$min_height = $attributes['minHeight'] ?? '80vh';
$show_metrics = $attributes['showMetrics'] ?? true;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'efsvp-hero',
    'style' => sprintf(
        'min-height: %s; --overlay-opacity: %s;',
        esc_attr($min_height),
        esc_attr($overlay_opacity)
    )
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <?php if ($bg_image && isset($bg_image['url'])): ?>
        <div class="efsvp-hero__background">
            <img
                src="<?php echo esc_url($bg_image['url']); ?>"
                alt="<?php echo esc_attr($bg_image['alt'] ?? ''); ?>"
                loading="lazy"
            />
            <div class="efsvp-hero__overlay"></div>
        </div>
    <?php endif; ?>

    <div class="efsvp-hero__content">
        <?php if ($title): ?>
            <h1 class="efsvp-hero__title">
                <?php echo wp_kses_post($title); ?>
            </h1>
        <?php endif; ?>

        <?php if ($subtitle): ?>
            <p class="efsvp-hero__subtitle">
                <?php echo wp_kses_post($subtitle); ?>
            </p>
        <?php endif; ?>

        <?php if ($description): ?>
            <p class="efsvp-hero__description">
                <?php echo wp_kses_post($description); ?>
            </p>
        <?php endif; ?>

        <?php if ($cta_url && $cta_text): ?>
            <div class="efsvp-hero__actions">
                <a href="<?php echo esc_url($cta_url); ?>" class="efsvp-hero__cta">
                    <span><?php echo esc_html($cta_text); ?></span>
                    <svg class="efsvp-hero__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        <?php endif; ?>

        <?php if ($show_metrics): ?>
            <div class="efsvp-hero__metrics">
                <div class="efsvp-hero__metric">
                    <strong>60+</strong>
                    <span><?php esc_html_e('Représentations', 'efsvp'); ?></span>
                </div>
                <div class="efsvp-hero__metric">
                    <strong>15+</strong>
                    <span><?php esc_html_e('Projets institutionnels', 'efsvp'); ?></span>
                </div>
                <div class="efsvp-hero__metric">
                    <strong>1200€</strong>
                    <span><?php esc_html_e('À partir de', 'efsvp'); ?></span>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>
