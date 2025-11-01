const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const body = document.body;

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Close menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenuBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
    body.classList.remove('menu-open');
  }
});



const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});


console.log('%c✅ GoIT Vite Projesi Çalışıyor! 🚀', 
  'color: #ff6b08; font-size: 20px; font-weight: bold;'
);

// ===================================
// PORTFOLIO FILTER
// ===================================

const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filterValue = btn.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      const category = item.getAttribute('data-category');
      
      if (filterValue === 'all' || category === filterValue) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});

// ===================================
// LOAD MORE BUTTON
// ===================================

const loadMoreBtn = document.querySelector('.load-more-btn');

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    // Simulate loading animation
    loadMoreBtn.textContent = 'Yükleniyor...';
    loadMoreBtn.style.opacity = '0.6';
    loadMoreBtn.style.cursor = 'not-allowed';
    
    setTimeout(() => {
      loadMoreBtn.textContent = 'Daha Fazla Yükle';
      loadMoreBtn.style.opacity = '1';
      loadMoreBtn.style.cursor = 'pointer';
      
      // Show message (gerçek projede burada yeni içerik yüklenecek)
      alert('Yeni projeler yakında eklenecek! 🚀');
    }, 1500);
  });
}

// ===================================
// PORTFOLIO LINK PREVENT DEFAULT
// ===================================

const portfolioLinks = document.querySelectorAll('.portfolio-link');

portfolioLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Bu proje detay sayfası yakında gelecek! 🎨');
  });
});
// ===================================
// CONTACT FORM VALIDATION & SUBMIT
// ===================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
      showFormMessage('Lütfen tüm gerekli alanları doldurun!', 'error');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showFormMessage('Geçerli bir e-posta adresi girin!', 'error');
      return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.form-submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    
    btnText.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';
    submitBtn.style.cursor = 'not-allowed';
    
    // Simulate API call
    setTimeout(() => {
      btnText.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.style.cursor = 'pointer';
      
      showFormMessage('✅ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove('show');
      }, 5000);
    }, 2000);
  });
}

function showFormMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type} show`;
  formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===================================
// PREVENT PRIVACY POLICY LINK
// ===================================

const privacyLink = document.querySelector('.checkbox-link');

if (privacyLink) {
  privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Gizlilik politikası sayfası yakında eklenecek! 📄');
  });
}
