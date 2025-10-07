const aboutUsHeader = document.getElementById('about-us-header');
const servicesHeader = document.getElementById('services-header');
const catalogHeader = document.getElementById('catalog-header');
const galleryHeader = document.getElementById('gallery-header');
const mainHeader = document.getElementById('main-header');

const aboutUsPage = document.getElementById('about-us-page');
const servicesPage = document.getElementById('services-page');
const catalogPage = document.getElementById('catalog-page');
const galleryPage = document.getElementById('gallery-page');

const headers = [aboutUsHeader, servicesHeader, catalogHeader, galleryHeader, mainHeader];
const pages = [aboutUsPage, servicesPage, catalogPage, galleryPage];

function hideAllPages() {
  pages.forEach(page => {
    if (page) {
      page.style.display = 'none';
    }
  });
}

function removeActiveClass() {
  headers.forEach(header => {
    if (header) {
      header.classList.remove('active');
    }
  });
}

function showPage(pageId, headerElement) {
  hideAllPages();
  removeActiveClass();

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }

  if (headerElement) {
    headerElement.classList.add('active');
  }

  sessionStorage.setItem('activePageId', pageId);
}

if (aboutUsHeader) {
  aboutUsHeader.addEventListener('click', () => showPage('about-us-page', aboutUsHeader));
}
if (servicesHeader) {
  servicesHeader.addEventListener('click', () => showPage('services-page', servicesHeader));
}
if (catalogHeader) {
  catalogHeader.addEventListener('click', () => showPage('catalog-page', catalogHeader));
}
if (galleryHeader) {
  galleryHeader.addEventListener('click', () => showPage('gallery-page', galleryHeader));
}
if (mainHeader) {
  mainHeader.addEventListener('click', () => showPage('about-us-page', mainHeader));
}

window.addEventListener('load', function() {
  const activePageId = sessionStorage.getItem('activePageId');

  if (activePageId) {
    const activeHeader = document.getElementById(activePageId.replace('-page', '-header'));
    showPage(activePageId, activeHeader);
  } else {
    showPage('about-us-page', aboutUsHeader);
  }
});










document.addEventListener('DOMContentLoaded', () => {
  const slidesContainer = document.querySelector('.carousel-slides');
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.carousel-nav.prev');
  const nextButton = document.querySelector('.carousel-nav.next');

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateCarousel() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();
});




const mobileMenu = document.getElementById('mobile-menu');

const menuItems = mobileMenu.querySelectorAll('p');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

function handleMenuItemClick(event) {
    const clickedElement = event.target;

    const originalColor = clickedElement.style.color;

    clickedElement.style.color = '#DDD4B5'; 

    setTimeout(() => {
        clickedElement.style.color = originalColor; 
        
        mobileMenu.classList.remove('active');
    }, 100); 
}

menuItems.forEach(item => {
    item.addEventListener('click', handleMenuItemClick);
});