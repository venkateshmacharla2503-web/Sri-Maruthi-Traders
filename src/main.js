import { STORE_CONFIG } from './config.js';
import { CATEGORIES, PRODUCTS } from './data/products.js';

// Global Active State
let currentCategoryFilter = 'all';
let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initPlaceholders();
  renderCategories();
  renderCategoryFilterTabs();
  renderProducts();
  initEventListeners();
  initIntersectionObserver();
  initLucideIcons();
});

/**
 * Replace placeholders across the UI dynamically using STORE_CONFIG
 */
function initPlaceholders() {
  const sanitizePhone = (str) => str.replace(/[^0-9+]/g, '');

  // Phone texts & links
  document.querySelectorAll('.store-phone-text').forEach(el => {
    el.textContent = STORE_CONFIG.phone;
  });
  document.querySelectorAll('.store-phone-link').forEach(el => {
    const raw = STORE_CONFIG.phoneRaw || sanitizePhone(STORE_CONFIG.phone);
    if (raw && raw !== '[PHONENUMBER]') {
      el.href = `tel:${raw}`;
    } else {
      el.href = `tel:`;
    }
  });

  // WhatsApp texts & links
  document.querySelectorAll('.store-wa-text').forEach(el => {
    el.textContent = STORE_CONFIG.whatsapp;
  });
  document.querySelectorAll('.store-wa-link').forEach(el => {
    const raw = STORE_CONFIG.whatsappRaw || sanitizePhone(STORE_CONFIG.whatsapp);
    const defaultMsg = encodeURIComponent(STORE_CONFIG.whatsappDefaultMsg);
    if (raw && raw !== '[WHATSAPPNUMBER]') {
      el.href = `https://wa.me/${raw}?text=${defaultMsg}`;
    } else {
      el.href = `https://wa.me/?text=${defaultMsg}`;
    }
  });

  // Address
  document.querySelectorAll('.store-address-text').forEach(el => {
    el.textContent = STORE_CONFIG.address;
  });

  // Business Hours
  document.querySelectorAll('.store-hours-text').forEach(el => {
    el.textContent = STORE_CONFIG.businessHours;
  });

  // Maps
  document.querySelectorAll('.store-maps-link').forEach(el => {
    if (STORE_CONFIG.googleMapsUrl && STORE_CONFIG.googleMapsUrl !== '[GOOGLE MAPS LINK]') {
      el.href = STORE_CONFIG.googleMapsUrl;
    } else {
      el.href = '#contact';
    }
  });
}

/**
 * Render Shop Categories Cards
 */
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="category-card fade-in-up" data-category-id="${cat.id}">
      <div class="category-img-wrapper">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy" />
        <span class="category-badge-chip">${cat.count}</span>
      </div>
      <div class="category-card-body">
        <div class="category-card-header">
          <div class="category-icon-box">
            <i data-lucide="${cat.icon || 'box'}"></i>
          </div>
          <h3 class="category-title">${cat.name}</h3>
        </div>
        <p class="category-desc">${cat.description}</p>
        <span class="category-explore-link">
          Explore ${cat.name} <i data-lucide="arrow-right"></i>
        </span>
      </div>
    </div>
  `).join('');

  // Add click listeners to filter products
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const catId = card.getAttribute('data-category-id');
      setCategoryFilter(catId);
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/**
 * Render Category Filter Tabs
 */
function renderCategoryFilterTabs() {
  const tabsContainer = document.getElementById('category-filter-tabs');
  if (!tabsContainer) return;

  const tabsHTML = CATEGORIES.map(cat => `
    <button class="filter-tab-btn" data-category="${cat.id}" role="tab" aria-selected="false">
      ${cat.name}
    </button>
  `).join('');

  tabsContainer.insertAdjacentHTML('beforeend', tabsHTML);

  tabsContainer.querySelectorAll('.filter-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      setCategoryFilter(category);
    });
  });
}

/**
 * Set Active Category Filter
 */
function setCategoryFilter(categoryId) {
  currentCategoryFilter = categoryId;
  
  // Update Tab active UI
  document.querySelectorAll('.filter-tab-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    if (cat === categoryId) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  renderProducts();
}

/**
 * Filter & Render Featured Products
 */
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(prod => {
    const matchesCategory = currentCategoryFilter === 'all' || prod.category === currentCategoryFilter;
    const matchesSearch = currentSearchQuery === '' || 
      prod.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      prod.shortDesc.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
      prod.categoryName.toLowerCase().includes(currentSearchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-products-state">
        <div class="empty-products-icon">🔍</div>
        <h3>No Products Found</h3>
        <p style="color: var(--color-text-muted); margin-top: 0.5rem;">Try adjusting your search query or selecting a different category tab.</p>
        <button class="btn btn-navy btn-sm" id="reset-filter-btn" style="margin-top: 1.25rem;">
          Reset Filters
        </button>
      </div>
    `;

    document.getElementById('reset-filter-btn')?.addEventListener('click', () => {
      currentSearchQuery = '';
      const searchInput = document.getElementById('search-input');
      if (searchInput) searchInput.value = '';
      setCategoryFilter('all');
    });

    initLucideIcons();
    return;
  }

  grid.innerHTML = filtered.map(prod => `
    <div class="product-card fade-in-up appeared" data-product-id="${prod.id}">
      ${prod.badge ? `<span class="product-card-badge">${prod.badge}</span>` : ''}
      <div class="product-img-container">
        <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
      </div>
      <div class="product-card-body">
        <span class="product-category-tag">${prod.categoryName}</span>
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-short-desc">${prod.shortDesc}</p>
        <div class="product-card-footer">
          <button class="btn btn-primary btn-sm view-details-btn" data-product-id="${prod.id}">
            <i data-lucide="eye"></i> Enquire Now
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Add click handlers for details modal
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const prodId = card.getAttribute('data-product-id');
      openProductModal(prodId);
    });
  });

  initLucideIcons();
}

/**
 * Product Details Modal Logic
 */
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modalOverlay = document.getElementById('product-modal-overlay');
  const modalImg = document.getElementById('modal-img');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalSpecs = document.getElementById('modal-specs');
  const modalWaBtn = document.getElementById('modal-wa-btn');

  if (!modalOverlay) return;

  modalImg.src = prod.image;
  modalImg.alt = prod.name;
  modalCategory.textContent = prod.categoryName;
  modalTitle.textContent = prod.name;
  modalDesc.textContent = prod.fullDesc || prod.shortDesc;

  // Specs bullet list
  if (prod.features && prod.features.length > 0) {
    modalSpecs.innerHTML = prod.features.map(feat => `
      <li><i data-lucide="check"></i> ${feat}</li>
    `).join('');
  } else {
    modalSpecs.innerHTML = `<li><i data-lucide="check"></i> High Quality Assured Product</li>`;
  }

  // Pre-fill WhatsApp message link
  const sanitizePhone = (str) => str.replace(/[^0-9+]/g, '');
  const rawWa = STORE_CONFIG.whatsappRaw || sanitizePhone(STORE_CONFIG.whatsapp);
  const waMsg = encodeURIComponent(`Hello Sri Maruthi Traders, I am interested in [${prod.name}]. Please share the price and availability.`);
  modalWaBtn.href = rawWa && rawWa !== '[WHATSAPPNUMBER]' ? `https://wa.me/${rawWa}?text=${waMsg}` : `https://wa.me/?text=${waMsg}`;

  modalOverlay.classList.add('active');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  initLucideIcons();
}

function closeProductModal() {
  const modalOverlay = document.getElementById('product-modal-overlay');
  if (!modalOverlay) return;
  modalOverlay.classList.remove('active');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

/**
 * General Event Listeners
 */
function initEventListeners() {
  // Live Search Input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Modal Close Listeners
  document.getElementById('modal-close-btn')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'product-modal-overlay') closeProductModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });

  // Sticky Navbar & Scrollspy
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Scrollspy active nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });

  // Back to Top smooth click
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  mobileToggle?.addEventListener('click', () => {
    const isOpen = mobileDrawer?.classList.toggle('open');
    if (isOpen) {
      mobileToggle.innerHTML = `<i data-lucide="x"></i>`;
    } else {
      mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
    }
    initLucideIcons();
  });

  // Auto-close mobile drawer when clicking nav item
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
      }
      initLucideIcons();
    });
  });

  // Customer Enquiry Form Validation & Submission
  const enquiryForm = document.getElementById('customer-enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const phoneInput = document.getElementById('form-phone');
      const catSelect = document.getElementById('form-category');
      const msgInput = document.getElementById('form-message');

      const errName = document.getElementById('error-name');
      const errPhone = document.getElementById('error-phone');
      const errMsg = document.getElementById('error-message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        errName?.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('error');
        errName?.classList.remove('visible');
      }

      // Validate Phone (10-digit Indian phone pattern check)
      const phoneClean = nameInput.value ? phoneInput.value.replace(/\D/g, '') : '';
      if (phoneClean.length < 10) {
        phoneInput.classList.add('error');
        errPhone?.classList.add('visible');
        isValid = false;
      } else {
        phoneInput.classList.remove('error');
        errPhone?.classList.remove('visible');
      }

      // Validate Message
      if (!msgInput.value.trim()) {
        msgInput.classList.add('error');
        errMsg?.classList.add('visible');
        isValid = false;
      } else {
        msgInput.classList.remove('error');
        errMsg?.classList.remove('visible');
      }

      if (!isValid) return;

      // Construct WhatsApp message with form details
      const sanitizePhone = (str) => str.replace(/[^0-9+]/g, '');
      const rawWa = STORE_CONFIG.whatsappRaw || sanitizePhone(STORE_CONFIG.whatsapp);
      
      const formattedMessage = encodeURIComponent(
        `*Sri Maruthi Traders - New Website Enquiry*\n\n` +
        `👤 *Name:* ${nameInput.value.trim()}\n` +
        `📞 *Phone:* ${phoneInput.value.trim()}\n` +
        `📦 *Category:* ${catSelect.value}\n` +
        `📝 *Requirement:* ${msgInput.value.trim()}`
      );

      const targetUrl = rawWa && rawWa !== '[WHATSAPPNUMBER]' 
        ? `https://wa.me/${rawWa}?text=${formattedMessage}`
        : `https://wa.me/?text=${formattedMessage}`;

      window.open(targetUrl, '_blank');

      // Reset form
      enquiryForm.reset();
    });
  }
}

/**
 * Scroll Reveal Animations using IntersectionObserver
 */
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appeared');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize Lucide Icons safely
 */
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
