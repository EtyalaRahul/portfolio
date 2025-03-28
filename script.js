let text = "Etyala Rahul";
let index = 0;
let element = document.getElementById("etyalaRahul");

function typeWriter() {
    if (index < text.length) {
        element.innerHTML += text[index];
        index++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(() => {
            element.innerHTML = '';
            index = 0;
            typeWriter();
        }, 2000);
    }
}

setTimeout(typeWriter, 2000);


document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navLinks = document.getElementById('nav-links');

    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
    });

    // Tech stack tabs
    const languagesBtn = document.getElementById('languagesBtn');
    const frameworksBtn = document.getElementById('frameworksBtn');
    const languagesGrid = document.getElementById('languagesGrid');
    const frameworksGrid = document.getElementById('frameworksGrid');

    // Show languages by default
    languagesGrid.classList.remove('hidden');
    frameworksGrid.classList.add('hidden');
    languagesBtn.classList.add('bg-blue-500', 'text-white');
    frameworksBtn.classList.remove('bg-blue-500', 'text-white');

    languagesBtn.addEventListener('click', function() {
        languagesGrid.classList.remove('hidden');
        frameworksGrid.classList.add('hidden');
        languagesBtn.classList.add('bg-blue-500', 'text-white');
        frameworksBtn.classList.remove('bg-blue-500', 'text-white');
        frameworksBtn.classList.add('bg-transparent', 'text-gray-300');
        languagesBtn.classList.remove('bg-transparent', 'text-gray-300');
    });

    frameworksBtn.addEventListener('click', function() {
        frameworksGrid.classList.remove('hidden');
        languagesGrid.classList.add('hidden');
        frameworksBtn.classList.add('bg-blue-500', 'text-white');
        languagesBtn.classList.remove('bg-blue-500', 'text-white');
        languagesBtn.classList.add('bg-transparent', 'text-gray-300');
        frameworksBtn.classList.remove('bg-transparent', 'text-gray-300');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (!navLinks.classList.contains('hidden')) {
                    navLinks.classList.add('hidden');
                }
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const welcomePopup = document.getElementById('welcomePopup');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closePopup');

    // Show popup on every visit (removed localStorage check)
    setTimeout(() => {
        welcomePopup.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }, 1000); // Show after 1 second delay

    // Close popup when button is clicked
    closeBtn.addEventListener('click', function() {
        welcomePopup.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close popup when clicking outside
    overlay.addEventListener('click', function() {
        welcomePopup.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
});
