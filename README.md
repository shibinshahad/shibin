# 🚀 Personal Portfolio Website - Muhammed Shibin Shahad M

A modern, responsive, high-performance personal portfolio website built with **HTML5**, **CSS3**, **Bootstrap 5**, and **Vanilla JavaScript**. Designed with an obsidian dark theme, neon purple and cyan accents, glassmorphism, dynamic typing effects, and smooth animations.

---

## 🌟 Features

- **Futuristic Dark Aesthetic**: Sleek obsidian background (`#07080d`) paired with neon purple (`#8b5cf6`) and cyan (`#38bdf8`) accents and glassmorphism cards.
- **Hero Section**:
  - Live animated typing effect cycling through roles (*Data Science Intern*, *Python Developer*, *Flutter App Developer*).
  - High-resolution profile avatar with ambient glow effects and floating status badges.
  - Direct call-to-action buttons (*View My Work*, *Contact Me*) and social media links.
- **About Me**:
  - Background story, career aspirations, and quick metric highlights (Projects, Tech Stacks, Dedication).
- **Interactive Skills Section**:
  - Technical skills cards with proficiency progress indicators and icons (Python, Data Science, Flutter, HTML5, CSS3, Bootstrap 5, JavaScript, Git, SQL).
- **Featured Projects**:
  - **Softroniics LMS**: Comprehensive learning management platform.
  - **AutoResq**: On-demand emergency mechanic and roadside assistance mobile app.
  - **Blessing**: Modern Islamic spiritual and prayer times tracker app.
  - Interactive project detail modals and links to GitHub / demos.
- **Education & Experience Timeline**:
  - Professional timeline displaying academic milestones and internship training.
- **Interactive Contact Section**:
  - Direct contact cards (Email, Location, Availability).
  - Client-side form validation with visual feedback, loading spinner, and confirmation alert.
  - Workshop notes on connecting backend services like Formspree or EmailJS.
- **Mobile Responsive**:
  - Fully optimized for smartphones, tablets, and desktops using Bootstrap 5's grid.
  - Mobile hamburger navigation menu with automatic auto-collapse on item selection.
- **Floating "Back to Top" Button**:
  - Smooth scroll to top when navigation progresses past the fold.

---

## 📁 Project Structure

```text
workshop/
│
├── index.html            # Main HTML5 page structure with semantic sections & modals
├── style.css             # Custom CSS3 styling, dark mode variables, & animations
├── script.js             # Vanilla JS: typing effect, form validation, & scroll logic
├── README.md             # Project documentation & beginner workshop guide
│
└── assets/
    └── images/
        ├── avatar.jpg    # Developer avatar portrait
        ├── lms.jpg       # Softroniics LMS project mockup
        ├── autoresq.jpg  # AutoResq project mockup
        └── blessing.jpg  # Blessing Islamic tracker project mockup
```

---

## 💻 How to Preview / Run the Website

You can preview the portfolio using any of the following methods:

### Method 1: Using Python (Recommended & Built-in)
Open your terminal inside this folder and run:
```bash
python -m http.server 8000
```
Then open your browser and visit:
```text
http://localhost:8000
```

### Method 2: Using Node.js / NPX
If you have Node.js installed, run:
```bash
npx serve .
```

### Method 3: VS Code Live Server Extension
1. Open the folder in **VS Code** or **Antigravity IDE**.
2. Right-click `index.html`.
3. Click **"Open with Live Server"**.

### Method 4: Direct File Opening
Double-click `index.html` in your file explorer to open it directly in Google Chrome, Microsoft Edge, or Firefox.

---

## 🛠️ Workshop Customization Guide (For Students & Beginners)

This template is designed specifically so workshop attendees can easily personalize it:

### 1. Changing Your Name and Role
Open `index.html` and look for:
- Around line 80: Replace `MUHAMMED SHIBIN SHAHAD M` with your name.
- Open `script.js` around line 20: Edit the `roles` array to add your own specializations:
  ```javascript
  const roles = [
    'DATA SCIENCE INTERN',
    'AI RESEARCHER',
    'FULL STACK DEVELOPER'
  ];
  ```

### 2. Changing Profile Picture & Project Images
- Place your new images into `assets/images/`.
- In `index.html`, update the image `src`:
  ```html
  <img src="./assets/images/your-photo.jpg" alt="Your Name">
  ```

### 3. Adding or Updating Skills
In `index.html`, locate the `<section id="skills">` block. Duplicate any `.skill-card` column and customize the icon and percentage:
```html
<div class="col-md-6 col-lg-3">
  <div class="skill-card p-4 rounded-4 h-100">
    <!-- Icon & Title -->
    <h5 class="fw-bold text-light mb-1">Your Skill</h5>
    <!-- Update progress width -->
    <div class="progress-bar bg-accent-gradient" style="width: 85%"></div>
  </div>
</div>
```

### 4. Updating Projects
In `index.html`, locate `<section id="projects">`. Update the title, description, and GitHub repository links in the `<a href="...">` tags.

### 5. Connecting the Contact Form to Receive Real Emails
To receive real emails without building a backend server, use a free service:
1. **Formspree** ([formspree.io](https://formspree.io)):
   Change `<form id="portfolioContactForm">` to:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
2. **EmailJS** ([emailjs.com](https://www.emailjs.com)):
   Add their SDK script and call `emailjs.sendForm(...)` inside `script.js`.
3. **Web3Forms** ([web3forms.com](https://web3forms.com)):
   Just pass your access key in a hidden input field!

---

## 📦 Dependencies (Included via CDN)

- **Bootstrap 5.3.3**: Modern CSS & JavaScript components.
- **Font Awesome 6.5.1**: High quality scalable iconography.
- **Google Fonts**: *Outfit* & *Plus Jakarta Sans*.

---

## 📄 License
This project is open-source and free to use for personal portfolios, workshops, and educational demos.
