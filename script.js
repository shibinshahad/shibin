/* ===================================================================
   PORTFOLIO LOGIC (script.js)
   Created for: MUHAMMED SHIBIN SHAHAD M (Data Science Intern)
   Features:
   1. Dynamic Role Typing Effect
   2. Sticky Navbar Glassmorphism on Scroll
   3. Mobile Nav Menu Auto-Collapse on Click
   4. Floating Back to Top Button
   5. Interactive Contact Form Validation & Submission Simulation
   6. Dynamic Copyright Year
   7. Intersection Observer for Smooth Skill Bar Animations
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. DYNAMIC ROLE TYPING EFFECT
  // -------------------------------------------------------------
  const typingElement = document.getElementById('typing-text');
  
  // CUSTOMIZE HERE: Add or modify roles for your own profile!
  const roles = [
    'DATA SCIENCE INTERN',
    'PYTHON DEVELOPER',
    'FLUTTER APP DEVELOPER',
    'MACHINE LEARNING ENTHUSIAST',
    'FULL-STACK BUILDER'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;    // Milliseconds per character
  const deletingSpeed = 50;   // Deleting speed
  const pauseDuration = 2000; // Pause after completing a word

  function typeRoleEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Remove characters
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add characters
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

    // Word completed
    if (!isDeleting && charIndex === currentRole.length) {
      currentSpeed = pauseDuration;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      currentSpeed = 400; // Small pause before typing next word
    }

    setTimeout(typeRoleEffect, currentSpeed);
  }

  // Start typing effect
  typeRoleEffect();


  // -------------------------------------------------------------
  // 2. STICKY NAVBAR GLASSOVER ON SCROLL
  // -------------------------------------------------------------
  const navbar = document.getElementById('mainNavbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check on page load


  // -------------------------------------------------------------
  // 3. AUTO-COLLAPSE MOBILE NAVBAR ON NAV-LINK CLICK
  // -------------------------------------------------------------
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .btn-outline-gradient');
  const navCollapse = document.getElementById('navbarContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navCollapse && navCollapse.classList.contains('show')) {
        // Use Bootstrap's Collapse API to close menu smoothly
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    });
  });


  // -------------------------------------------------------------
  // 4. FLOATING BACK TO TOP BUTTON
  // -------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleBackToTopVisibility() {
    if (!backToTopBtn) return;
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleBackToTopVisibility);

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // -------------------------------------------------------------
  // 5. INTERACTIVE CONTACT FORM VALIDATION & FEEDBACK
  // -------------------------------------------------------------
  const contactForm = document.getElementById('portfolioContactForm');
  const submitBtn = document.getElementById('submitBtn');
  const successAlert = document.getElementById('formSuccessAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const subjectInput = document.getElementById('userSubject');
      const messageInput = document.getElementById('userMessage');

      let isValid = true;

      // Basic field validations
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
      }

      // Email regex validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      }

      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('is-invalid');
        isValid = false;
      } else {
        subjectInput.classList.remove('is-invalid');
        subjectInput.classList.add('is-valid');
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
      }

      // If valid, simulate sending with spinner animation
      if (isValid) {
        const spinner = submitBtn.querySelector('.spinner-border');
        const btnText = submitBtn.querySelector('.btn-text');

        // Show loading state
        submitBtn.disabled = true;
        if (spinner) spinner.classList.remove('d-none');
        if (btnText) btnText.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Sending...';

        // Simulate network delay (1.2 seconds)
        setTimeout(() => {
          // Restore button state
          submitBtn.disabled = false;
          if (spinner) spinner.classList.add('d-none');
          if (btnText) btnText.innerHTML = '<i class="fa-regular fa-paper-plane me-2"></i> Send Message';

          // Show confirmation message
          if (successAlert) {
            successAlert.classList.remove('d-none');
            successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          // Reset form fields
          contactForm.reset();
          nameInput.classList.remove('is-valid');
          emailInput.classList.remove('is-valid');
          subjectInput.classList.remove('is-valid');
          messageInput.classList.remove('is-valid');

          // Auto-hide alert after 8 seconds
          setTimeout(() => {
            if (successAlert) successAlert.classList.add('d-none');
          }, 8000);
        }, 1200);
      }
    });

    // Remove invalid states on typing
    const inputs = contactForm.querySelectorAll('.custom-input');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');
        }
      });
    });
  }


  // -------------------------------------------------------------
  // 6. DYNAMIC COPYRIGHT YEAR
  // -------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }


  // -------------------------------------------------------------
  // 7. ANIMATE SKILL PROGRESS BARS ON SCROLL
  // -------------------------------------------------------------
  const skillCards = document.querySelectorAll('.skill-card');
  if ('IntersectionObserver' in window && skillCards.length > 0) {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBar = entry.target.querySelector('.progress-bar');
          if (progressBar) {
            const targetWidth = progressBar.getAttribute('style');
            // Trigger animation
            progressBar.style.width = '0%';
            setTimeout(() => {
              progressBar.setAttribute('style', targetWidth);
            }, 100);
          }
          observerInstance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    skillCards.forEach(card => observer.observe(card));
  }
});
