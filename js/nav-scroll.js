const navbar = document.querySelector('nav');
    const navbarHeight = navbar.offsetHeight;
    const scrollPosition = window.scrollY;

    window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 800) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
    });