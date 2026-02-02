// --- MOBILE NAVIGATION MENU LOGIC ---
    document.addEventListener("DOMContentLoaded", function() {
        
        const menuBtn = document.getElementById('mobile-menu-btn');
        const navList = document.getElementById('nav-list');
        const icon = menuBtn.querySelector('i');

        // Check if elements exist to prevent errors
        if (menuBtn && navList) {
            
            menuBtn.addEventListener('click', function() {
                // 1. Slide the menu in/out
                navList.classList.toggle('active');

                // 2. Switch Icon (Bars <-> X)
                if (navList.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                    icon.style.color = '#D4AF37'; // Gold
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    icon.style.color = '#fff'; // White
                }
            });

            // 3. Close menu when a link is clicked
            const links = navList.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    navList.classList.remove('active');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
        } else {
            console.error("Menu elements not found! Check IDs.");
        }
    });

// --- HERO SLIDER LOGIC ---
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(index) {
    // 1. Reset all slides/dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // 2. Activate specific slide/dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // 3. Update current index
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

// Function for Dot Clicks
function changeSlide(index) {
    clearInterval(slideInterval); // Pause auto-play if user clicks
    showSlide(index);
    slideInterval = setInterval(nextSlide, 5000); // Restart auto-play
}

// Start Auto-Play (Every 5 Seconds)
slideInterval = setInterval(nextSlide, 5000);
