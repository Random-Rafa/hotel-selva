/**
 * Acessibilidade W3C / WCAG 2.1 AA e Integração VLibras
 */
function initVLibras() {
    if (window.VLibras && !window.__vlibrasInitialized) {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
        window.__vlibrasInitialized = true;
    }
}

function initAccessibilityControls() {
    let fontScale = 100;

    // WAI-ARIA no menu hambúrguer mobile
    const hamburger = id('hamburger-toggle');
    const navMenu = id('nav-menu');
    if (hamburger && navMenu) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-controls', 'nav-menu');
        hamburger.addEventListener('click', () => {
            const expanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', String(expanded));
        });
    }

    // WAI-ARIA e navegação por teclado no FAQ Accordion
    document.querySelectorAll('.accordion-header').forEach((header, idx) => {
        const panel = header.nextElementSibling;
        const panelId = `faq-panel-${idx}`;
        if (panel) {
            panel.id = panelId;
            panel.setAttribute('role', 'region');
        }
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', panelId);

        header.addEventListener('click', () => {
            const isOpen = header.parentElement.classList.contains('active');
            header.setAttribute('aria-expanded', String(isOpen));
        });
    });

    // Fechar Lightbox com tecla ESC
    document.addEventListener('keydown', (e) => {
        const lightbox = id('lightbox-modal');
        if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Alternância de Alto Contraste (WCAG 1.4.6)
    const contrastBtn = id('a11y-contrast-btn');
    if (contrastBtn) {
        contrastBtn.addEventListener('click', () => {
            const active = document.documentElement.toggleAttribute('data-high-contrast');
            contrastBtn.setAttribute('aria-pressed', String(active));
        });
    }

    // Controle de escala de fonte (WCAG 1.4.4)
    const applyFontScale = () => {
        document.documentElement.style.fontSize = `${fontScale}%`;
    };

    id('a11y-font-inc')?.addEventListener('click', () => {
        if (fontScale < 125) {
            fontScale += 10;
            applyFontScale();
        }
    });

    id('a11y-font-dec')?.addEventListener('click', () => {
        if (fontScale > 90) {
            fontScale -= 10;
            applyFontScale();
        }
    });

    id('a11y-font-reset')?.addEventListener('click', () => {
        fontScale = 100;
        applyFontScale();
    });
}
