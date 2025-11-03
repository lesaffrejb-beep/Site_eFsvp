<?php
/**
 * Contact section.
 *
 * @package EfSVP
 */
?>
<section class="contact" id="contact">
    <div class="container">
        <div class="contact__layout">
            <div class="contact__visual">
                <div class="contact__visual-bg"></div>
                <blockquote class="contact__quote">
                    "Toutes les bonnes histoires méritent d'être racontées."
                </blockquote>
                <div class="contact__decoration"></div>
            </div>
            <div class="contact__form-container">
                <header class="contact__header">
                    <h2 class="contact__title">La vôtre commence maintenant</h2>
                    <p class="contact__subtitle">Réponse sous 48h · Premier échange offert</p>
                </header>
                <form class="contact__form" id="contact-form">
                    <div class="form__group">
                        <label for="nom" class="form__label">Prénom Nom *</label>
                        <input type="text" id="nom" name="nom" class="form__input" required aria-required="true">
                        <span class="form__error"></span>
                    </div>
                    <div class="form__group">
                        <label for="email" class="form__label">Email professionnel *</label>
                        <input type="email" id="email" name="email" class="form__input" required aria-required="true">
                        <span class="form__error"></span>
                    </div>
                    <div class="form__group">
                        <label for="organisation" class="form__label">Organisation *</label>
                        <input type="text" id="organisation" name="organisation" class="form__input" required aria-required="true">
                        <span class="form__error"></span>
                    </div>
                    <div class="form__group">
                        <label for="type-projet" class="form__label">Type de projet *</label>
                        <select id="type-projet" name="type-projet" class="form__input form__select" required aria-required="true">
                            <option value="">Sélectionner</option>
                            <option value="anniversaire">Anniversaire</option>
                            <option value="inauguration">Inauguration</option>
                            <option value="spectacle">Spectacle</option>
                            <option value="hymne">Hymne / Identité</option>
                            <option value="autre">Autre</option>
                        </select>
                        <span class="form__error"></span>
                    </div>
                    <div class="form__group">
                        <label for="date" class="form__label">Date envisagée</label>
                        <input type="date" id="date" name="date" class="form__input">
                    </div>
                    <div class="form__group">
                        <label for="budget" class="form__label">Budget estimé</label>
                        <div class="form__range-container">
                            <input type="range" id="budget" name="budget" class="form__range" min="3000" max="30000" step="1000" value="10000">
                            <output class="form__range-value" for="budget">~10 000€</output>
                        </div>
                    </div>
                    <div class="form__group">
                        <label for="message" class="form__label">Parlez-nous de votre projet *</label>
                        <textarea id="message" name="message" class="form__input form__textarea" rows="5" maxlength="500" required aria-required="true"></textarea>
                        <span class="form__counter">0/500</span>
                        <span class="form__error"></span>
                    </div>
                    <div class="form__checkbox">
                        <input type="checkbox" id="consent" name="consent" required aria-required="true">
                        <label for="consent">J'accepte d'être recontacté pour échanger sur mon projet</label>
                    </div>
                    <button type="submit" class="btn btn--primary btn--large btn--full">
                        <span class="btn__text">Partagez votre histoire</span>
                        <span class="btn__loader"></span>
                        <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </form>
                <div class="contact__alt">
                    <p class="contact__alt-title">Ou contactez-nous directement</p>
                    <a href="mailto:contact@efsvp.fr" class="contact__alt-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        contact@efsvp.fr
                    </a>
                    <p class="contact__alt-location">Basé à Angers · Partout en Francophonie</p>
                </div>
            </div>
        </div>
    </div>
</section>
