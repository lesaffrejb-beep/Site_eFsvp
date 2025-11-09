<?php
/**
 * Portfolio Block Template
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
$projects = $attributes['projects'] ?? [];
$columns = $attributes['columns'] ?? 3;

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'efsvp-portfolio',
    'style' => sprintf('--columns: %d;', absint($columns))
]);
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <?php if ($section_title || $section_subtitle): ?>
            <header class="efsvp-portfolio__header">
                <?php if ($section_title): ?>
                    <h2 class="efsvp-portfolio__title"><?php echo wp_kses_post($section_title); ?></h2>
                <?php endif; ?>
                <?php if ($section_subtitle): ?>
                    <p class="efsvp-portfolio__subtitle"><?php echo wp_kses_post($section_subtitle); ?></p>
                <?php endif; ?>
            </header>
        <?php endif; ?>

        <?php if (!empty($projects)): ?>
            <div class="efsvp-portfolio__grid">
                <?php foreach ($projects as $project): ?>
                    <article class="efsvp-portfolio-card">
                        <?php if (!empty($project['image']) && isset($project['image']['url'])): ?>
                            <div class="efsvp-portfolio-card__image">
                                <img
                                    src="<?php echo esc_url($project['image']['url']); ?>"
                                    alt="<?php echo esc_attr($project['image']['alt'] ?? $project['title'] ?? ''); ?>"
                                    loading="lazy"
                                />
                                <div class="efsvp-portfolio-card__overlay"></div>
                            </div>
                        <?php else: ?>
                            <div class="efsvp-portfolio-card__image efsvp-portfolio-card__image--placeholder">
                                <div class="efsvp-portfolio-card__placeholder-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <circle cx="8.5" cy="8.5" r="1.5"/>
                                        <polyline points="21 15 16 10 5 21"/>
                                    </svg>
                                </div>
                            </div>
                        <?php endif; ?>

                        <div class="efsvp-portfolio-card__content">
                            <?php if (!empty($project['category'])): ?>
                                <span class="efsvp-portfolio-card__category">
                                    <?php echo esc_html($project['category']); ?>
                                </span>
                            <?php endif; ?>

                            <?php if (!empty($project['title'])): ?>
                                <h3 class="efsvp-portfolio-card__title">
                                    <?php echo esc_html($project['title']); ?>
                                </h3>
                            <?php endif; ?>

                            <?php if (!empty($project['description'])): ?>
                                <p class="efsvp-portfolio-card__description">
                                    <?php echo esc_html($project['description']); ?>
                                </p>
                            <?php endif; ?>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
