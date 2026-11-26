/**
 * St. Michael's Higher Secondary School, Umsning
 * Pure Vanilla JavaScript Controller for HTML/Tailwind/JS Version
 * Handles:
 * 1. Navbar mobile menu & dropdown toggles
 * 2. Campus Spaces tabs & modal
 * 3. Latest Events & Events Page category filters (including 'Given an award...' & 'Send off ceremony...')
 * 4. Event report modal with 15-photo & 12-photo ceremony galleries
 * 5. State Board Topper Felicitation interactive thumbnail strip
 * 6. Lightbox photo viewer for Gallery page (prev, next, ESC, keyboard shortcuts)
 * 7. Live Chatbot toggle & Q&A replies
 * 8. Search Modal & Admissions Callback form handling
 * 9. AOS Scroll Animations & Back-to-Top scroll progress
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollProgress();
  initCampusSpaces();
  initEventsFilterAndModals();
  initTopperFelicitation();
  initGalleryLightbox();
  initChatBot();
  initSearchAndAdmissionsModals();
  initCallbackForms();
  initAOS();
});

/* ----------------------------------------------------
 * 1. Navbar & Mobile Menu
 * ---------------------------------------------------- */
function initNavbar() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu-drawer, .mobile-nav-panel');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('active');
    });
  }

  // Mobile submenu accordion
  document.querySelectorAll('.mobile-dropdown-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.mobile-nav-item');
      if (parent) parent.classList.toggle('open');
    });
  });

  // Nav page links rewrite for static HTML version
  const pageMap = {
    '#page-who-we-are': 'who-we-are.html',
    '#page-gallery': 'gallery.html',
    '#page-mission-vision': 'mission-vision.html',
    '#page-notices': 'notices.html',
    '#page-events': 'events.html',
    '#page-academic-calendar': 'academic-calendar.html',
    '#page-founder': 'founder.html',
    '#page-leadership': 'leadership.html',
    '#page-student-stats': 'student-stats.html',
    '#page-staff-directory': 'staff-directory.html',
    '#page-academic-syllabus': 'academic-syllabus.html',
    '#page-results-achievements': 'results-achievements.html',
    '#page-admissions-fees': 'admissions-fees.html',
    '#page-transportation': 'transportation.html',
    '#page-scholarships': 'scholarships.html',
    '#page-alumni': 'alumni.html',
    '#page-contact': 'contact.html',
    '#page-fee-structure': 'fee-structure.html',
    '#page-girls-hostel': 'girls-hostel.html',
    '#home': 'index.html',
  };

  document.querySelectorAll('a[href^="#page-"], a[href="#home"]').forEach((a) => {
    const href = a.getAttribute('href');
    if (pageMap[href]) {
      a.setAttribute('href', pageMap[href]);
    }
  });
}

/* ----------------------------------------------------
 * 2. Scroll Progress & Back-to-Top
 * ---------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.querySelector('.reading-progress-bar, .scroll-progress-bar');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  function updateScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      if (progressBar.classList.contains('scroll-progress-bar')) {
        progressBar.style.transform = `scaleX(${progress / 100})`;
      } else {
        progressBar.style.width = `${progress}%`;
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 150) {
        backToTopBtn.classList.remove('hidden');
        backToTopBtn.classList.add('flex', 'visible');
        backToTopBtn.style.display = 'flex';
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
      } else {
        backToTopBtn.classList.add('hidden');
        backToTopBtn.classList.remove('flex', 'visible');
        backToTopBtn.style.display = 'none';
      }
    }
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ----------------------------------------------------
 * 3. Learning Spaces Tabs & Modal
 * ---------------------------------------------------- */
function initCampusSpaces() {
  const filterBtns = document.querySelectorAll('.spaces-filter-btn');
  const spaceCards = document.querySelectorAll('.campus-space-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterText = btn.textContent.trim();
      spaceCards.forEach((card) => {
        if (filterText === 'All Spaces' || card.dataset.category === filterText) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ----------------------------------------------------
 * 4. Events Filter & Modal View (Both Home & Events Page)
 * ---------------------------------------------------- */
function initEventsFilterAndModals() {
  const filterButtons = document.querySelectorAll('.events-filter-btn, [role="tablist"] button');
  const eventCards = document.querySelectorAll('.campus-event-card, #events-grid article');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => {
        b.classList.remove('active');
        b.classList.remove('bg-[#0c4a8a]', 'text-white', 'shadow-md');
      });

      btn.classList.add('active');
      const cat = btn.textContent.trim();

      eventCards.forEach((card) => {
        const cardText = card.textContent;
        const cardCat = card.dataset.category || '';

        if (cat === 'All Events') {
          card.style.display = '';
        } else if (cat === 'Given an Award to the Students of 2026') {
          if (cardText.includes('Given an Award to the Students of 2026') || cardCat.includes('Given an Award')) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        } else if (cat === 'Send off ceremony for the outgoing students of class X 2026') {
          if (cardText.includes('Send off ceremony') || cardCat.includes('Send off')) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        } else {
          if (cardText.includes(cat) || cardCat.includes(cat)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

  // Modal open on clicking card or Read More
  const modal = document.querySelector('.event-report-modal, .hub-modal-backdrop');
  if (modal) {
    const closeBtns = modal.querySelectorAll('.hub-modal-close, .hub-modal-done-btn');
    closeBtns.forEach((cb) => {
      cb.addEventListener('click', () => {
        modal.classList.add('hidden');
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }

  // Hero Slider for Events page
  initEventHeroSlider();
}

function initEventHeroSlider() {
  const slides = document.querySelectorAll('.event-hero-slide');
  if (!slides || slides.length === 0) return;

  let current = 0;
  const total = slides.length;
  const prevBtn = document.querySelector('.event-slider-prev');
  const nextBtn = document.querySelector('.event-slider-next');
  const counter = document.querySelector('.event-slider-counter');

  function showSlide(index) {
    slides.forEach((s, idx) => {
      if (idx === index) {
        s.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
        s.classList.add('opacity-100', 'z-10');
      } else {
        s.classList.add('opacity-0', 'pointer-events-none', 'z-0');
        s.classList.remove('opacity-100', 'z-10');
      }
    });
    if (counter) {
      counter.textContent = `0${index + 1} / 0${total}`;
    }
    current = index;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide((current + 1) % total);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide((current - 1 + total) % total);
    });
  }

  setInterval(() => {
    showSlide((current + 1) % total);
  }, 6500);
}

/* ----------------------------------------------------
 * 5. State Board Topper Felicitation (Home Page)
 * ---------------------------------------------------- */
function initTopperFelicitation() {
  const mainImg = document.querySelector('#toppers .aspect-4\\/3 img, #toppers .aspect-16\\/10 img');
  const mainTitle = document.querySelector('#toppers h3');
  const mainSubtitle = document.querySelector('#toppers .bg-amber-400');
  const mainDesc = document.querySelector('#toppers p.text-xs');
  const thumbs = document.querySelectorAll('#toppers .scrollbar-thin button, #toppers button[aria-label^="View photo"]');

  if (!mainImg || thumbs.length === 0) return;

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach((t) => {
        t.classList.remove('border-amber-400', 'ring-2', 'ring-amber-400/50', 'opacity-100', 'scale-[1.04]');
        t.classList.add('border-slate-700', 'opacity-65');
      });

      thumb.classList.add('border-amber-400', 'ring-2', 'ring-amber-400/50', 'opacity-100', 'scale-[1.04]');
      thumb.classList.remove('border-slate-700', 'opacity-65');

      const img = thumb.querySelector('img');
      if (img) {
        mainImg.src = img.src;
        if (mainTitle && thumb.title) mainTitle.textContent = thumb.title;
      }
    });
  });
}

/* ----------------------------------------------------
 * 6. Gallery Lightbox Viewer (Gallery Page)
 * ---------------------------------------------------- */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('#gallery .cursor-pointer, .gallery-item');
  const lightbox = document.querySelector('.gallery-lightbox');
  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let activeIndex = 0;

  function open(idx) {
    activeIndex = idx;
    const item = galleryItems[idx];
    const img = item.querySelector('img');
    if (img && lightboxImg) {
      lightboxImg.src = img.src;
    }
    const h4 = item.querySelector('h4, .item-title');
    if (h4 && lightboxTitle) {
      lightboxTitle.textContent = h4.textContent;
    }
    lightbox.classList.remove('hidden');
  }

  function close() {
    lightbox.classList.add('hidden');
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => open(idx));
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn) prevBtn.addEventListener('click', () => open((activeIndex - 1 + galleryItems.length) % galleryItems.length));
  if (nextBtn) nextBtn.addEventListener('click', () => open((activeIndex + 1) % galleryItems.length));

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open((activeIndex - 1 + galleryItems.length) % galleryItems.length);
    if (e.key === 'ArrowRight') open((activeIndex + 1) % galleryItems.length);
  });
}

/* ----------------------------------------------------
 * 7. Interactive ChatBot
 * ---------------------------------------------------- */
function initChatBot() {
  const trigger = document.querySelector('.chatbot-trigger, [aria-label*="help desk"], [aria-label*="Chat"]');
  const panel = document.querySelector('.chatbot-panel, .chatbot-window');
  const closeBtn = document.querySelector('.chatbot-close');

  if (trigger && panel) {
    trigger.addEventListener('click', () => {
      panel.classList.toggle('hidden');
    });
  }

  if (closeBtn && panel) {
    closeBtn.addEventListener('click', () => {
      panel.classList.add('hidden');
    });
  }
}

/* ----------------------------------------------------
 * 8. Search & Admissions Modal
 * ---------------------------------------------------- */
function initSearchAndAdmissionsModals() {
  const searchTriggers = document.querySelectorAll('[aria-label="Search campus"], .nav-search-btn');
  const searchModal = document.querySelector('.search-modal-backdrop');
  if (searchModal) {
    searchTriggers.forEach((st) => st.addEventListener('click', () => searchModal.classList.remove('hidden')));
    const close = searchModal.querySelector('.modal-close-btn');
    if (close) close.addEventListener('click', () => searchModal.classList.add('hidden'));
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) searchModal.classList.add('hidden');
    });
  }

  const admTriggers = document.querySelectorAll('button[class*="admission"], a[href="#admissions"]');
  const admModal = document.querySelector('.admission-modal-backdrop');
  if (admModal) {
    admTriggers.forEach((at) => at.addEventListener('click', (e) => {
      e.preventDefault();
      admModal.classList.remove('hidden');
    }));
    const close = admModal.querySelector('.modal-close-btn');
    if (close) close.addEventListener('click', () => admModal.classList.add('hidden'));
    admModal.addEventListener('click', (e) => {
      if (e.target === admModal) admModal.classList.add('hidden');
    });
  }
}

/* ----------------------------------------------------
 * 9. Form Submission Handling
 * ---------------------------------------------------- */
function initCallbackForms() {
  document.querySelectorAll('form.callback-inline-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = form.querySelector('input[type="tel"]')?.value || '';
      alert(`Thank you! Our Umsning Admission Secretariat has received your callback request for: +91 ${phone}. Our counselors will contact you shortly.`);
      form.reset();
    });
  });
}

/* ----------------------------------------------------
 * 10. AOS Animation Library Initializer
 * ---------------------------------------------------- */
function initAOS() {
  // Remove any leftover inline opacity:0 from SSR/Framer-Motion
  document.querySelectorAll('[style*="opacity:0"], [style*="opacity: 0"]').forEach((el) => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      mirror: false,
      offset: 40,
      disableMutationObserver: false,
    });
    window.addEventListener('load', () => {
      AOS.refresh();
    });
    setTimeout(() => {
      AOS.refresh();
    }, 400);
    setTimeout(() => {
      AOS.refresh();
    }, 1200);
  }
}
