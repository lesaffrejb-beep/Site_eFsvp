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
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
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

// Typewriter effect for hero tagline
const typewriterLines = document.querySelectorAll('.typewriter-line');

if (typewriterLines.length > 0) {
  gsap.fromTo(
    typewriterLines,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.3,
      delay: 0.5,
      ease: 'power2.out',
    }
  );
}

// ============================================
// 4. SCROLL-TRIGGERED ANIMATIONS
// ============================================
// Fade in elements on scroll
gsap.utils.toArray('[data-scroll]').forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  );
});

// Bento Grid items animation
gsap.utils.toArray('.bento-item').forEach((item, index) => {
  gsap.fromTo(
    item,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// Service cards stagger animation
gsap.utils.toArray('.service-card').forEach((card, index) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.services__grid',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// Portfolio cards animation
gsap.utils.toArray('.portfolio-card').forEach((card, index) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.1,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.portfolio__grid',
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// Process timeline progressive reveal
gsap.utils.toArray('.process__step').forEach((step, index) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: step,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });

  tl.fromTo(
    step.querySelector('.process__step-number'),
    { scale: 0, rotation: -180 },
    { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2)' }
  ).fromTo(
    step.querySelector('.process__step-content'),
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' },
    '-=0.3'
  );
});

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

      // In production, initialize WaveSurfer here:
      // this.initWaveform(audioId);
    }
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
      budgetValue.textContent = '~3 500€';
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
// 12. PARALLAX EFFECTS
// ============================================
// Hero video parallax
const heroVideo = document.querySelector('.hero__video-container');

if (heroVideo) {
  gsap.to(heroVideo, {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// ============================================
// 13. PRELOADER (Optional)
// ============================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');

  // Trigger initial animations
  gsap.from('.hero__content', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    delay: 0.3,
  });
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
