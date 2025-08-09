# 🎓 Modern College Website

## 📌 Overview
This is a **responsive and modern college website** built with **HTML5, CSS3, and JavaScript**.  
The design features a **professional layout**, **smooth animations**, **interactive elements**, and a **mobile-friendly interface**.  
The website includes all main pages: **Home, About, Departments, Admissions, and Contact**.

![College Website Screenshot](https://via.placeholder.com/800x500?text=College+Website+Screenshot)

---

## ✨ Features

### 1. **Responsive Design**
- Mobile-first approach with media queries  
- Flexbox and CSS Grid layouts  
- Adapts to all screen sizes (mobile, tablet, desktop)  
- Hamburger menu for mobile devices  

### 2. **Modern UI Components**
- Interactive navigation with active state indicators  
- Hero section with animated text  
- Announcements carousel with auto-rotation  
- Department cards with hover effects  
- Form validation  
- Google Maps integration  
- Social media links with hover animations  

### 3. **Pages Included**
- **Home Page:** Banner image, welcome text, announcements carousel  
- **About Page:** College history, mission, vision, principal's message  
- **Departments Page:** Card-based layout with department images and descriptions  
- **Admissions Page:** Step-by-step admission procedure, eligibility criteria, application form  
- **Contact Page:** Contact form, location map, social media links  

### 4. **Technical Implementation**
- Semantic HTML5 tags (`<header>`, `<section>`, `<article>`, `<footer>`)  
- CSS variables for consistent theming  
- CSS animations and transitions  
- JavaScript for:
  - Page navigation (SPA-like experience)  
  - Carousel functionality  
  - Form validation  
  - Mobile menu toggle  
  - Scroll effects  

---

## 🎨 Color Scheme
| Color Name       | Hex Code |
|------------------|----------|
| Primary Blue     | `#0066cc` |
| Dark Blue        | `#003366` |
| Accent Orange    | `#ff6b00` |
| Light Background | `#f8f9fa` |
| Dark Text        | `#212529` |

---

## 🛠 Installation
No installation required! Simply **open the `index.html` file** in any modern web browser.

---

## 📖 How to Use
1. Open `index.html` in your browser.  
2. Use the navigation menu to explore different sections.  
3. Resize your browser to test the responsive design.  
4. Interact with forms to see validation in action.  
5. Hover over department cards to see animations.

---

## 🔧 Customization
To customize this website:
- Update content in the HTML files.  
- Modify colors by changing CSS variables in the `:root` section of `style.css`.  
- Replace placeholder images in the `/images` folder with your own.  
- Update the Google Maps iframe with your institution's location.  
- Add more departments in the **Departments** section.

---

## 📦 Dependencies
- **[Font Awesome](https://fontawesome.com/)** for icons  
- **[Google Fonts](https://fonts.google.com/)** for typography  
- **Google Maps** for location  

---

## 📜 Example JavaScript Functions
```javascript
// Mobile menu toggle
mobileMenu.addEventListener('click', function() {
  nav.classList.toggle('active');
});

// Page navigation
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Show target page and hide others
  });
});

// Carousel functionality
setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}, 5000);

// Form validation
admissionForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Validate form inputs
});

// Header scroll effect
window.addEventListener('scroll', function() {
  // Add shadow when scrolling down
});

```
## college-website
├── index.html        # Main HTML file
├── README.md         # Documentation file
├── images/           # Image assets
└── style.css         # CSS styles


---
