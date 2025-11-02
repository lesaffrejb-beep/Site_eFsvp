/**
 * ============================================
 * EfSVP - AWWWARDS-GRADE MAIN APP PREMIUM
 * Architecture modulaire ES6 avec error handling
 * Performance optimisée Lighthouse > 95
 * ============================================
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SmoothScroll } from './modules/smoothScroll.js';
import { HeroManager } from './modules/hero.js';
import { AudioPlayerManager } from './modules/audioPlayer.js';
import { CursorManager } from './modules/cursor.js';
import { MagneticButtons } from './modules/magnetic.js';
import { ErrorHandler } from './modules/errorHandler.js';
import { LazyLoadManager } from './modules/lazyLoad.js';
import { FormValidator } from './modules/formValidator.js';
import { AnimationsManager } from './modules/animations.js';
import { ProgressBar } from './modules/progressBar.js';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================
// APP CLASS - Orchestration Premium
// ============================================
class App {
  constructor() {
    this.modules = {};
    this.isMobile = window.innerWidth < 1024;
    this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    this.init();
  }

  async init() {
    // 0. Error Handler (TOUJOURS en premier)
    this.initErrorHandler();

    try {
      // 1. Preloader
      await this.handlePreloader();

      // 2. Lazy Loading (avant tout le reste)
      this.initLazyLoading();

      // 3. Core modules
      this.initCore();

      // 4. Section modules
      this.initSections();

      // 5. Animations premium
      this.initAnimations();

      // 6. Start
      this.start();

      console.log('✅ EfSVP Premium Site - Loaded successfully');
    } catch (error) {
      console.error('❌ Critical initialization error:', error);
      this.handleCriticalError(error);
    }
  }

  /**
   * Error Handler - Global error management
   */
  initErrorHandler() {
    this.modules.errorHandler = new ErrorHandler();
    window.__errorHandler = this.modules.errorHandler; // Global access
  }

  /**
   * Lazy Loading - Images, videos, blur effects
   */
  initLazyLoading() {
    this.modules.lazyLoad = new LazyLoadManager();
  }

  /**
   * Animations Premium - Scroll reveals, blur, parallax
   */
  initAnimations() {
    this.modules.animations = new AnimationsManager();
  }

  async handlePreloader() {
    const preloader = document.getElementById('preloader');

    // Wait for page load
    await new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve);
      }
    });

    // Min display time
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Hide preloader
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 500);
    }

    document.body.classList.add('loaded');
  }

  initCore() {
    // Smooth Scroll (Lenis)
    this.modules.smoothScroll = new SmoothScroll();
    window.lenis = this.modules.smoothScroll.lenis; // Global access

    // Reading Progress Bar Premium
    this.modules.progressBar = new ProgressBar();

    // Custom Cursor (desktop only)
    if (!this.isMobile) {
      this.modules.cursor = new CursorManager();
    }

    // Magnetic Buttons
    if (!this.isMobile) {
      this.modules.magnetic = new MagneticButtons();
    }

    // Navigation
    this.initNavigation();

    // Scroll Reveal global
    this.initScrollReveal();
  }

  initSections() {
    // Hero
    this.modules.hero = new HeroManager();

    // Audio Players (WaveSurfer)
    this.modules.audioPlayers = new AudioPlayerManager();

    // Portfolio filters
    this.initPortfolioFilters();

    // Testimonials carousel
    this.initTestimonials();

    // FAQ Accordion
    this.initFAQ();

    // Contact Form
    this.initContactForm();

    // Stats Counter
    this.initStatsCounter();

    // Back to top
    this.initBackToTop();
  }

  start() {
    this.modules.hero?.start();

    // Performance monitoring
    this.logPerformanceMetrics();
  }

  /**
   * Handle critical initialization errors
   */
  handleCriticalError(error) {
    console.error('Critical app error:', error);

    // Show user-friendly error message
    const errorOverlay = document.createElement('div');
    errorOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 21, 29, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99999;
      color: #EAECEF;
    `;

    errorOverlay.innerHTML = `
      <div style="text-align: center; padding: 48px; max-width: 500px;">
        <svg style="width: 80px; height: 80px; color: #B8441E; margin-bottom: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h2 style="font-size: 32px; margin-bottom: 16px;">Une erreur est survenue</h2>
        <p style="color: #9AA3AE; margin-bottom: 32px;">Nous nous excusons pour la gêne occasionnée.</p>
        <button
          onclick="location.reload()"
          style="
            padding: 16px 48px;
            background: #B8441E;
            color: white;
            border: none;
            border-radius: 100px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
          "
        >
          Recharger la page
        </button>
      </div>
    `;

    document.body.appendChild(errorOverlay);
  }

  /**
   * Log performance metrics
   */
  logPerformanceMetrics() {
    if (!window.performance) return;

    // Wait for page to fully load
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.group('📊 Performance Metrics');
        console.log(`⏱️  Page Load Time: ${pageLoadTime}ms`);
        console.log(`🔌 Connection Time: ${connectTime}ms`);
        console.log(`🎨 Render Time: ${renderTime}ms`);
        console.groupEnd();

        // Log to analytics (if available)
        if (window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'load',
            value: pageLoadTime,
            event_category: 'Performance',
          });
        }
      }, 0);
    });
  }

  // ========== NAVIGATION ==========
  initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Show on scroll
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        nav?.classList.add('visible');
      } else {
        nav?.classList.remove('visible');
      }

      lastScroll = currentScroll;
    });

    // Mobile menu
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        document.body.style.overflow = isExpanded ? '' : 'hidden';
      });

      navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ========== SCROLL REVEAL (géré par AnimationsManager) ==========
  initScrollReveal() {
    // Animations scroll gérées par le nouveau AnimationsManager
    // Conservé ici pour compatibilité avec anciens attributs
    const legacyElements = gsap.utils.toArray('[data-scroll]:not([data-reveal])');

    if (legacyElements.length > 0) {
      gsap.utils.toArray(legacyElements).forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }

  // ========== PORTFOLIO FILTERS ==========
  initPortfolioFilters() {
    const filters = document.querySelectorAll('.portfolio__filter');
    const cards = document.querySelectorAll('.portfolio-card');

    if (filters.length === 0) return;

    filters.forEach((filter) => {
      filter.addEventListener('click', () => {
        const category = filter.getAttribute('data-filter');

        // Update active
        filters.forEach((f) => f.classList.remove('portfolio__filter--active'));
        filter.classList.add('portfolio__filter--active');

        // Filter cards
        cards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');

          if (category === 'all' || cardCategory === category) {
            gsap.to(card, {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
              onStart: () => {
                card.style.display = 'block';
              },
            });
          } else {
            gsap.to(card, {
              opacity: 0,
              scale: 0.95,
              duration: 0.3,
              ease: 'power2.in',
              onComplete: () => {
                card.style.display = 'none';
              },
            });
          }
        });
      });
    });
  }

  // ========== TESTIMONIALS ==========
  initTestimonials() {
    const carousel = document.querySelector('.testimonials__carousel');

    if (carousel) {
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
  }

  // ========== FAQ ==========
  initFAQ() {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach((item) => {
      const question = item.querySelector('.faq__question');

      question?.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close others
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq__question')?.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('active');
        question.setAttribute('aria-expanded', !isActive);
      });
    });
  }

  // ========== CONTACT FORM PREMIUM ==========
  initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Initialize premium form validator
    this.modules.formValidator = new FormValidator(form);

    // Modal close handlers
    const modal = document.getElementById('success-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = modal?.querySelector('.modal__overlay');

    const closeModal = () => {
      modal?.classList.remove('active');
    };

    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal?.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // ========== STATS COUNTER ==========
  initStatsCounter() {
    const statCards = document.querySelectorAll('[data-count]');

    statCards.forEach((stat) => {
      const target = parseInt(stat.getAttribute('data-count'));
      const duration = 2;

      gsap.to(stat, {
        innerHTML: target,
        duration: duration,
        ease: 'power1.out',
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          const current = Math.round(this.targets()[0].innerHTML);
          stat.innerHTML = current + '+';
        },
      });
    });
  }

  // ========== BACK TO TOP ==========
  initBackToTop() {
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
        this.modules.smoothScroll.scrollTo(0, { duration: 2 });
      });
    }
  }
}

// ========== INIT APP ==========
document.addEventListener('DOMContentLoaded', () => {
  new App();
});

// ========== ACCESSIBILITY ==========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.querySelector('.modal.active');
    if (modal) {
      modal.classList.remove('active');
    }

    const menu = document.querySelector('.nav__menu.active');
    if (menu) {
      document.getElementById('nav-toggle')?.setAttribute('aria-expanded', 'false');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});

console.log('🔥 EfSVP Premium Site - Loaded');
