export class AmbientAudioManager {
  constructor(options = {}) {
    this.buttonSelector = options.buttonSelector || '[data-ambient-toggle]';
    this.audioSrc = options.audioSrc || null;
    this.fadeDuration = options.fadeDuration || 900;
    this.maxVolume = options.maxVolume ?? 0.16;
    this._supportsAudio = typeof Audio !== 'undefined';
    this._reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this._reduceData = window.matchMedia('(prefers-reduced-data: reduce)').matches;
    this._mediaQueries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(prefers-reduced-data: reduce)')
    ];
    this._mqHandlers = [];
  }

  init() {
    this.button = document.querySelector(this.buttonSelector);
    if (!this.button || !this._supportsAudio) return;

    if (!this.audioSrc) {
      const dataSrc = this.button.getAttribute('data-audio-src');
      if (dataSrc && dataSrc.trim()) {
        this.audioSrc = dataSrc.trim();
      }
    }

    if (!this.audioSrc) {
      this.disableForMissingSource();
      return;
    }

    if (this._reduceMotion || this._reduceData) {
      this.disableForAccessibility();
      return;
    }

    this.audio = new Audio(this.audioSrc);
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.volume = 0;

    this.audio.addEventListener('error', () => {
      this.handleAudioError();
    });

    this.label = this.button.querySelector('.hero__sound-toggle-label');
    this.isPlaying = false;

    this.button.addEventListener('click', () => this.toggle());

    this._handleVisibility = () => {
      if (!this.audio) return;
      if (document.hidden && this.isPlaying) {
        this.audio.pause();
        this._resumeAfterVisibility = true;
      } else if (!document.hidden && this._resumeAfterVisibility) {
        this._resumeAfterVisibility = false;
        this.audio.play().catch(() => {
          this.stop(true);
        });
      }
    };

    document.addEventListener('visibilitychange', this._handleVisibility);

    this._mediaQueries.forEach((mq) => {
      const handler = () => this.handleMediaPreferenceChange();
      mq.addEventListener('change', handler);
      this._mqHandlers.push({ mq, handler });
    });
  }

  disableForAccessibility() {
    this.button.setAttribute('disabled', 'true');
    this.button.classList.add('is-disabled');
    this.button.setAttribute('aria-disabled', 'true');
    const label = this.button.querySelector('.hero__sound-toggle-label');
    if (label) {
      label.textContent = 'Ambiance désactivée';
    }
    this.button.setAttribute('aria-pressed', 'false');
  }

  handleMediaPreferenceChange() {
    const reduce = this._mediaQueries.some((mq) => mq.matches);
    if (reduce) {
      this.stop(true);
      this.disableForAccessibility();
    }
  }

  async toggle() {
    if (this.button.hasAttribute('disabled')) return;

    if (!this.isPlaying) {
      await this.start();
    } else {
      this.stop();
    }
  }

  async start() {
    if (!this.audio) return;

    try {
      await this.audio.play();
      this.fadeTo(this.maxVolume);
      this.isPlaying = true;
      this.button.setAttribute('aria-pressed', 'true');
      if (this.label) {
        this.label.textContent = 'Ambiance activée';
      }
    } catch (error) {
      console.warn('Impossible de lire la boucle d’ambiance:', error);
      this.stop(true);
      this.handleAudioError();
    }
  }

  stop(force = false) {
    if (!this.audio) return;

    this.fadeTo(0, force ? 120 : this.fadeDuration, () => {
      if (force || !this.isPlaying) {
        this.audio.pause();
        if (force) {
          this.audio.currentTime = 0;
        }
      }
    });

    this.isPlaying = false;
    this.button.setAttribute('aria-pressed', 'false');
    if (this.label) {
      this.label.textContent = "Activer l'ambiance";
    }
  }

  fadeTo(targetVolume, duration = this.fadeDuration, onComplete) {
    if (!this.audio) return;

    const startVolume = this.audio.volume;
    const startTime = performance.now();
    const easing = (t) => 1 - Math.pow(1 - t, 3);

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easing(progress);
      this.audio.volume = startVolume + (targetVolume - startVolume) * eased;
      if (progress < 1) {
        this._fadeFrame = requestAnimationFrame(step);
      } else {
        this.audio.volume = targetVolume;
        if (onComplete) onComplete();
      }
    };

    if (this._fadeFrame) {
      cancelAnimationFrame(this._fadeFrame);
    }

    this._fadeFrame = requestAnimationFrame(step);
  }

  destroy() {
    if (this._fadeFrame) {
      cancelAnimationFrame(this._fadeFrame);
    }
    document.removeEventListener('visibilitychange', this._handleVisibility);
    this._mqHandlers.forEach(({ mq, handler }) => mq.removeEventListener('change', handler));
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  disableForMissingSource() {
    this.button.setAttribute('disabled', 'true');
    this.button.classList.add('is-disabled');
    this.button.setAttribute('aria-disabled', 'true');
    const label = this.button.querySelector('.hero__sound-toggle-label');
    if (label) {
      label.textContent = 'Ambiance indisponible';
    }
    this.button.setAttribute('aria-pressed', 'false');
  }

  handleAudioError() {
    this.disableForMissingSource();
    this.destroy();
  }
}
