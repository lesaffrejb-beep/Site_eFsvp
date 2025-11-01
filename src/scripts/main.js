/**
 * ============================================
 * EfSVP - Main JavaScript
 * Premium Interactions & Animations
 * ============================================
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================
// 1. SMOOTH SCROLL (Lenis)
// ============================================
// Detect mobile for performance optimizations
const isMobile = window.matchMedia('(max-width: 768px)').matches;

const lenis = new Lenis({
  duration: isMobile ? 0.8 : 1.2, // Faster on mobile
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: !isMobile, // Disable smooth wheel on mobile
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Update ScrollTrigger on Lenis scroll
lenis.on('scroll', ScrollTrigger.update);

// Sync GSAP ticker with Lenis
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Smooth scroll anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      lenis.scrollTo(targetElement, {
        offset: -100,
        duration: 1.5,
      });
    }
  });
});

// ============================================
// 2. NAVIGATION
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Show navigation on scroll
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }

  lastScroll = currentScroll;
});

// Mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  });

  // Close menu when clicking on links
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ============================================
// 3. HERO SECTION
// ============================================
// Hide scroll indicator after first scroll
const heroScroll = document.getElementById('hero-scroll');

if (heroScroll) {
  let hasScrolled = false;

  heroScroll.addEventListener('click', () => {
    lenis.scrollTo('#main', { offset: -100 });
  });

  window.addEventListener('scroll', () => {
    if (!hasScrolled && window.pageYOffset > 100) {
      heroScroll.classList.add('hidden');
      hasScrolled = true;
    }
  });
}

// Pas d'effet typewriter - sobre
// Les lignes apparaissent naturellement

// ============================================
// 4. SCROLL-TRIGGERED ANIMATIONS (Sobre)
// ============================================
// Fade in elements on scroll - minimal
gsap.utils.toArray('[data-scroll]').forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 12,                      // Mouvement sobre (12px au lieu de 50px)
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.22,             // Rapide et sobre
      ease: 'cubic-bezier(0.22, 0.9, 0.24, 1)',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',  // Pas de reverse
      },
    }
  );
});

// Désactivation des animations complexes - design sobre
// (Bento, Service, Portfolio, Process utilisent juste [data-scroll] ci-dessus)

// ============================================
// 5. AUDIO PLAYERS (Placeholder - WaveSurfer would be here)
// ============================================
// For now, we'll create simple play/pause functionality
// In production, you'd initialize WaveSurfer.js for each player

class AudioPlayerManager {
  constructor() {
    this.currentlyPlaying = null;
    this.init();
  }

  init() {
    document.querySelectorAll('[data-audio]').forEach((button) => {
      button.addEventListener('click', () => {
        const audioId = button.getAttribute('data-audio');
        this.togglePlay(button, audioId);
      });
    });
  }

  togglePlay(button, audioId) {
    const isPlaying = button.classList.contains('playing');

    // Stop currently playing
    if (this.currentlyPlaying && this.currentlyPlaying !== button) {
      this.currentlyPlaying.classList.remove('playing');
    }

    if (isPlaying) {
      button.classList.remove('playing');
      this.currentlyPlaying = null;
      console.log(`Paused: ${audioId}`);
    } else {
      button.classList.add('playing');
      this.currentlyPlaying = button;
      console.log(`Playing: ${audioId}`);

      // Show fallback message for demo
      this.showAudioFallback(button, audioId);

      // In production, initialize WaveSurfer here:
      // this.initWaveform(audioId);
    }
  }

  showAudioFallback(button, audioId) {
    // Create temporary message overlay
    const parent = button.closest('.bento-item');
    if (!parent) return;

    let fallback = parent.querySelector('.audio-fallback');

    if (!fallback) {
      fallback = document.createElement('div');
      fallback.className = 'audio-fallback';
      fallback.innerHTML = `
        <div class="audio-fallback__content">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          <p>Démo audio interactive</p>
          <small>Fichiers audio disponibles sur demande</small>
        </div>
      `;
      parent.appendChild(fallback);

      // Add styles inline for demo
      fallback.style.cssText = `
        position: absolute;
        inset: 0;
        background: rgba(26, 35, 50, 0.95);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 10;
        border-radius: var(--border-radius);
      `;

      const content = fallback.querySelector('.audio-fallback__content');
      content.style.cssText = `
        text-align: center;
        color: var(--neutral-100);
        padding: 2rem;
      `;

      content.querySelector('svg').style.cssText = `
        margin: 0 auto 1rem;
        color: var(--secondary);
      `;

      content.querySelector('p').style.cssText = `
        font-size: 1.125rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      `;

      content.querySelector('small').style.cssText = `
        font-size: 0.875rem;
        opacity: 0.8;
      `;
    }

    // Show and auto-hide after 2s
    setTimeout(() => {
      fallback.style.opacity = '1';
    }, 50);

    setTimeout(() => {
      fallback.style.opacity = '0';
      button.classList.remove('playing');
      this.currentlyPlaying = null;
    }, 2500);
  }

  // Placeholder for WaveSurfer initialization
  initWaveform(audioId) {
    // const wavesurfer = WaveSurfer.create({
    //   container: `#waveform-${audioId}`,
    //   waveColor: '#E8924F',
    //   progressColor: '#B8441E',
    //   cursorColor: '#B8441E',
    //   barWidth: 2,
    //   barRadius: 3,
    //   responsive: true,
    //   height: 60,
    // });
    // wavesurfer.load('/path/to/audio.mp3');
  }
}

new AudioPlayerManager();

// ============================================
// 6. PORTFOLIO FILTERS
// ============================================
const portfolioFilters = document.querySelectorAll('.portfolio__filter');
const portfolioCards = document.querySelectorAll('.portfolio-card');

if (portfolioFilters.length > 0) {
  portfolioFilters.forEach((filter) => {
    filter.addEventListener('click', () => {
      const category = filter.getAttribute('data-filter');

      // Update active filter
      portfolioFilters.forEach((f) => f.classList.remove('portfolio__filter--active'));
      filter.classList.add('portfolio__filter--active');

      // Filter cards
      portfolioCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
            onStart: () => {
              card.style.display = 'block';
              card.classList.remove('hidden');
            },
          });
        } else {
          gsap.to(card, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
              card.style.display = 'none';
              card.classList.add('hidden');
            },
          });
        }
      });
    });
  });
}

// ============================================
// 7. TESTIMONIALS CAROUSEL (Swiper)
// ============================================
const testimonialsCarousel = document.querySelector('.testimonials__carousel');

if (testimonialsCarousel) {
  new Swiper('.testimonials__carousel', {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 600,
  });
}

// ============================================
// 8. STATS COUNTERS ANIMATION
// ============================================
const statCards = document.querySelectorAll('[data-count]');

if (statCards.length > 0) {
  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2;

    gsap.to(element, {
      innerHTML: target,
      duration: duration,
      ease: 'power1.out',
      snap: { innerHTML: 1 },
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: function () {
        const current = Math.round(this.targets()[0].innerHTML);
        element.innerHTML = current + '+';
      },
    });
  };

  statCards.forEach((stat) => {
    animateCounter(stat);
  });
}

// ============================================
// 9. FAQ ACCORDION
// ============================================
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq__question');
  const answer = item.querySelector('.faq__answer');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close other items (optional: comment out for multiple open)
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current item
    item.classList.toggle('active');
    question.setAttribute('aria-expanded', !isActive);
  });
});

// FAQ Search functionality
const faqSearch = document.querySelector('.faq__search-input');

if (faqSearch) {
  faqSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    faqItems.forEach((item) => {
      const questionText = item.querySelector('.faq__question-text').textContent.toLowerCase();
      const answerText = item.querySelector('.faq__answer p').textContent.toLowerCase();

      if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
        item.style.display = 'block';

        // Highlight matching term
        if (searchTerm.length > 2) {
          item.classList.add('active');
        }
      } else {
        item.style.display = 'none';
      }
    });

    // If search is empty, show all
    if (searchTerm === '') {
      faqItems.forEach((item) => {
        item.style.display = 'block';
        item.classList.remove('active');
      });
    }
  });
}

// ============================================
// 10. CONTACT FORM VALIDATION & SUBMISSION
// ============================================
const contactForm = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const modalClose = document.getElementById('modal-close');

if (contactForm) {
  // Real-time validation
  const inputs = contactForm.querySelectorAll('input, textarea, select');

  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      validateField(input);
    });

    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });

  // Character counter for textarea
  const messageTextarea = document.getElementById('message');
  const counter = document.querySelector('.form__counter');

  if (messageTextarea && counter) {
    messageTextarea.addEventListener('input', () => {
      const length = messageTextarea.value.length;
      counter.textContent = `${length}/500`;
    });
  }

  // Budget range value display
  const budgetRange = document.getElementById('budget');
  const budgetValue = document.querySelector('.form__range-value');

  if (budgetRange && budgetValue) {
    budgetRange.addEventListener('input', () => {
      const value = parseInt(budgetRange.value);
      budgetValue.textContent = `~${value.toLocaleString('fr-FR')}€`;
    });
  }

  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validate all fields
    let isValid = true;
    inputs.forEach((input) => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      console.log('Form submitted:', data);

      // Show success modal
      document.getElementById('modal-name').textContent = data.nom;
      successModal.classList.add('active');

      // Reset form
      contactForm.reset();
      counter.textContent = '0/500';
      budgetValue.textContent = '~10 000€';
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
    }
  });
}

// Modal close
if (modalClose) {
  modalClose.addEventListener('click', () => {
    successModal.classList.remove('active');
  });
}

if (successModal) {
  successModal.querySelector('.modal__overlay').addEventListener('click', () => {
    successModal.classList.remove('active');
  });
}

// Validation function
function validateField(field) {
  const errorSpan = field.parentElement.querySelector('.form__error');
  let isValid = true;
  let errorMessage = '';

  // Required fields
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    errorMessage = 'Ce champ est requis';
  }

  // Email validation
  if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      isValid = false;
      errorMessage = 'Email invalide';
    }
  }

  // Checkbox validation
  if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
    isValid = false;
    errorMessage = 'Vous devez accepter pour continuer';
  }

  // Update UI
  if (isValid) {
    field.classList.remove('error');
    if (errorSpan) {
      errorSpan.textContent = '';
    }
  } else {
    field.classList.add('error');
    if (errorSpan) {
      errorSpan.textContent = errorMessage;
    }
  }

  return isValid;
}

// ============================================
// 11. BACK TO TOP BUTTON
// ============================================
const backToTop = document.getElementById('back-to-top');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    lenis.scrollTo(0, { duration: 2 });
  });
}

// ============================================
// 12. PARALLAX EFFECTS (Désactivé - sobre)
// ============================================
// Pas de parallax - design sobre

// ============================================
// 13. PRELOADER
// ============================================
const preloader = document.getElementById('preloader');

// Hide preloader when page is fully loaded
window.addEventListener('load', () => {
  // Small delay for smooth experience
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add('hidden');

      // Remove from DOM after transition
      setTimeout(() => {
        preloader.remove();
      }, 500);
    }

    document.body.classList.add('loaded');

    // Pas d'animation hero - sobre
  }, 800); // 800ms minimum display time
});

// ============================================
// 14. PERFORMANCE OPTIMIZATIONS
// ============================================
// Lazy load images (if you add real images)
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

// ============================================
// 15. CONSOLE BRANDING (Easter Egg)
// ============================================
console.log(
  '%c🎵 En français s\'il vous plaît',
  'font-size: 24px; font-weight: bold; color: #B8441E; font-family: serif;'
);
console.log(
  '%cVous avez déjà écrit l\'histoire. On ne fera que vous relire.',
  'font-size: 14px; font-style: italic; color: #E8924F;'
);
console.log(
  '%c✨ Site créé avec GSAP, Lenis, Swiper & passion',
  'font-size: 12px; color: #4A4A4A;'
);

// ============================================
// 16. ACCESSIBILITY ENHANCEMENTS
// ============================================
// Keyboard navigation for custom elements
document.addEventListener('keydown', (e) => {
  // Close modals with Escape
  if (e.key === 'Escape') {
    if (successModal && successModal.classList.contains('active')) {
      successModal.classList.remove('active');
    }

    if (navMenu && navMenu.classList.contains('active')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

// Focus trap in modals
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  });
}

if (successModal) {
  trapFocus(successModal);
}

// ============================================
// READY!
// ============================================
console.log('✅ EfSVP Premium Website loaded successfully!');
