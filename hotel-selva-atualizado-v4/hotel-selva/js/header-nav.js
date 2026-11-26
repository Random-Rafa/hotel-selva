/* Header Dynamic Shadow */
function initHeaderScroll() {
    const header = id('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
/* Mobile Hamburger Nav Toggle */
function initMobileNav() {
    const toggle = id('hamburger-toggle');
    const menu = id('nav-menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
}
