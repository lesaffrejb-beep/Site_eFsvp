<?php
/**
 * Services Block Template
 *
 * @param array    $attributes Block attributes
 * @param string   $content    Block content
 * @param WP_Block $block      Block instance
 */

if (!defined('ABSPATH')) {
    exit;
}

$section_title = $attributes['sectionTitle'] ?? '';
$section_subtitle = $attributes['sectionSubtitle'] ?? '';
$services = $attributes['services'] ?? [];
$columns = $attributes['columns'] ?? 3;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'efsvp-services',
    'style' => sprintf('--columns: %d;', absint($columns))
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <?php if ($section_title || $section_subtitle): ?>
            <header class="efsvp-services__header">
                <?php if ($section_title): ?>
                    <h2 class="efsvp-services__title"><?php echo wp_kses_post($section_title); ?></h2>
                <?php endif; ?>
                <?php if ($section_subtitle): ?>
                    <p class="efsvp-services__subtitle"><?php echo wp_kses_post($section_subtitle); ?></p>
                <?php endif; ?>
            </header>
        <?php endif; ?>

        <?php if (!empty($services)): ?>
            <div class="efsvp-services__grid">
                <?php foreach ($services as $service): ?>
                    <article class="efsvp-service-card">
                        <?php if (!empty($service['icon'])): ?>
                            <div class="efsvp-service-card__icon">
                                <?php echo wp_kses_post($service['icon']); ?>
                            </div>
                        <?php endif; ?>

                        <?php if (!empty($service['title'])): ?>
                            <h3 class="efsvp-service-card__title">
                                <?php echo esc_html($service['title']); ?>
                            </h3>
                        <?php endif; ?>

                        <?php if (!empty($service['description'])): ?>
                            <p class="efsvp-service-card__description">
                                <?php echo esc_html($service['description']); ?>
                            </p>
                        <?php endif; ?>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
