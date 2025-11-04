<?php
/**
 * Hero section.
 *
 * @package EfSVP
 */
$title_line_1  = get_theme_mod('efsvp_hero_title_line_one', "Vous avez déjà écrit l'histoire.");
$title_line_2  = get_theme_mod('efsvp_hero_title_line_two', 'Nous la mettons en scène avec mesure.');
$subtitle      = get_theme_mod('efsvp_hero_subtitle', 'Une direction narrative et musicale ciselée qui magnifie vos moments clés.');
$video_mp4     = get_theme_mod('efsvp_hero_video_mp4', '');
$video_webm    = get_theme_mod('efsvp_hero_video_webm', '');
$video_poster  = get_theme_mod('efsvp_hero_video_poster', '');
$poster_attr   = $video_poster ? sprintf(' poster="%s"', esc_url($video_poster)) : '';
?>
<section class="hero" id="hero">
    <div class="hero__video-container">
        <div class="hero__video-placeholder"<?php echo $video_poster ? " style=\"background-image: url(" . esc_url($video_poster) . ");\"" : ''; ?>></div>
        <?php if ($video_mp4 || $video_webm) : ?>
            <video autoplay muted loop playsinline preload="metadata"<?php echo $poster_attr; ?> aria-label="<?php esc_attr_e('Vidéo d’ambiance en arrière-plan', 'efsvp'); ?>">
                <?php if ($video_mp4) : ?>
                    <source src="<?php echo esc_url($video_mp4); ?>" type="video/mp4" />
                <?php endif; ?>
                <?php if ($video_webm) : ?>
                    <source src="<?php echo esc_url($video_webm); ?>" type="video/webm" />
                <?php endif; ?>
            </video>
        <?php endif; ?>
        <div class="hero__overlay"></div>
    </div>

    <div class="hero__content">
        <h1 class="hero__title">
            <span class="hero__title-line hero__title-line--primary" data-scroll><?php echo esc_html($title_line_1); ?></span>
            <span class="hero__title-line hero__title-line--secondary" data-scroll><?php echo esc_html($title_line_2); ?></span>
        </h1>
        <p class="hero__subtitle" data-scroll>
            <?php echo esc_html($subtitle); ?>
        </p>
        <div class="hero__cta-group" data-scroll>
            <a href="#contact" class="btn btn--primary btn--hero" data-glow>
                <span><?php esc_html_e('Partagez votre histoire', 'efsvp'); ?></span>
                <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
        <div class="hero__trust-metrics" data-scroll>
            <div class="hero__metric" data-reveal="scale">
                <strong>60+</strong>
                <span><?php esc_html_e('Représentations', 'efsvp'); ?></span>
            </div>
            <div class="hero__metric" data-reveal="scale">
                <strong>15+</strong>
                <span><?php esc_html_e('Projets institutionnels', 'efsvp'); ?></span>
            </div>
            <div class="hero__metric" data-reveal="scale">
                <strong>1200€</strong>
                <span><?php esc_html_e('À partir de', 'efsvp'); ?></span>
            </div>
        </div>
    </div>

    <div class="hero__scroll" id="hero-scroll">
        <span class="hero__scroll-text"><?php esc_html_e('Faites défiler', 'efsvp'); ?></span>
        <div class="hero__scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
        </div>
    </div>
</section>
