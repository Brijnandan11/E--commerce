// Header functionality
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const searchBtn = document.getElementById('searchBtn');
    const searchBar = document.getElementById('searchBar');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const cartCount = document.getElementById('cartCount');

    // Scroll effect for header
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', function() {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        }
    });

    searchClose.addEventListener('click', function() {
        searchBar.classList.remove('active');
        searchInput.value = '';
    });

    // Search input handling
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                console.log('Searching for:', searchTerm);
                // Add your search logic here
                alert('Search functionality will be implemented in future sections');
            }
        }
    });

    // Close search bar when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBar.contains(e.target) && !searchBtn.contains(e.target) && searchBar.classList.contains('active')) {
            searchBar.classList.remove('active');
            searchInput.value = '';
        }
    });

    // Cart functionality (demo)
    let cartItemCount = 0;
    const cartBtn = document.getElementById('cartBtn');

    cartBtn.addEventListener('click', function() {
        console.log('Cart clicked');
        alert('Cart functionality will be implemented in future sections');
    });

    // Update cart count (example function)
    function updateCartCount(count) {
        cartItemCount = count;
        cartCount.textContent = cartItemCount;

        if (cartItemCount > 0) {
            cartCount.style.display = 'block';
        } else {
            cartCount.style.display = 'none';
        }
    }

    // User account functionality
    const userBtn = document.getElementById('userBtn');
    userBtn.addEventListener('click', function() {
        console.log('User account clicked');
        alert('Account functionality will be implemented in future sections');
    });

    // Initialize cart count
    updateCartCount(0);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
