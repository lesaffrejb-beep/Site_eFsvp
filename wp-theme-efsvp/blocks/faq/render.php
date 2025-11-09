<?php
/**
 * FAQ Block Template
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
$posts_per_page = $attributes['postsPerPage'] ?? -1;
$has_acf = function_exists('get_field');

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'efsvp-faq'
]);

$query = new WP_Query([
    'post_type'      => 'efsvp_faq',
    'posts_per_page' => $posts_per_page,
    'orderby'        => 'menu_order',
    'order'          => 'ASC',
]);

$faqs = [];

if ($query->have_posts()) {
    while ($query->have_posts()) {
        $query->the_post();
        $faqs[] = [
            'id'       => get_the_ID(),
            'question' => get_the_title(),
            'answer'   => ($has_acf ? get_field('answer') : '') ?: get_the_content(),
            'category' => $has_acf ? get_field('faq_category') : '',
        ];
    }
    wp_reset_postdata();
}
?>

<section <?php echo $wrapper_attributes; ?>>
    <div class="container">
        <?php if ($section_title || $section_subtitle): ?>
            <header class="efsvp-faq__header">
                <?php if ($section_title): ?>
                    <h2 class="efsvp-faq__title"><?php echo wp_kses_post($section_title); ?></h2>
                <?php endif; ?>

                <?php if ($section_subtitle): ?>
                    <p class="efsvp-faq__subtitle"><?php echo wp_kses_post($section_subtitle); ?></p>
                <?php endif; ?>
            </header>
        <?php endif; ?>

        <?php if (!empty($faqs)): ?>
            <div class="efsvp-faq__grid">
                <?php foreach ($faqs as $index => $faq): ?>
                    <?php $category_slug = !empty($faq['category']) ? sanitize_title($faq['category']) : 'general'; ?>
                    <article class="faq__item" data-category="<?php echo esc_attr($category_slug); ?>">
                        <button
                            class="faq__question"
                            type="button"
                            aria-expanded="false"
                            aria-controls="faq-answer-<?php echo esc_attr($faq['id']); ?>"
                        >
                            <span class="faq__question-text"><?php echo esc_html($faq['question']); ?></span>
                            <span class="faq__icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 5v14M5 12h14" />
                                </svg>
                            </span>
                        </button>

                        <div class="faq__answer" id="faq-answer-<?php echo esc_attr($faq['id']); ?>">
                            <?php echo wp_kses_post(wpautop($faq['answer'])); ?>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        <?php else: ?>
            <p class="efsvp-faq__empty">
                <?php esc_html_e('Aucune question n’a encore été publiée.', 'efsvp'); ?>
            </p>
        <?php endif; ?>
    </div>
</section>
