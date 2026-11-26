/* Ponto de entrada: inicializa todos os módulos depois que os partials HTML
   (header, seções, modais etc.) forem injetados no DOM pelo loader.js */
document.addEventListener('partials:loaded', function () {
    // 1. Governança LGPD (deve iniciar antes dos módulos que usam localStorage)
    window.lgpdConsent = new CookieConsentManager();
    window.lgpdConsent.init();

    // 2. Instâncias POO dos módulos de alto retorno
    const bookingWizard = new BookingWizard(CHALETS_DATA);
    const checklist = new ChecklistManager('checklist-container');

    window.addEventListener('lgpd:consent-updated', () => checklist.syncConsent());

    // 3. Re-renderiza módulos dinâmicos sempre que o idioma for alterado
    window.addEventListener('i18n:language-changed', () => {
        renderChalets();
        renderGallery();
        checklist.render();
        bookingWizard.refreshLanguage();
    });

    // 4. Inicializa Internacionalização, Acessibilidade W3C e VLibras
    window.i18n = new I18nManager();
    window.i18n.init();

    initHeaderScroll();
    initMobileNav();
    bookingWizard.initDefaultDates();
    initAccordion();
    bookingWizard.drawMockQRCode('QR-SELVA-DEMO');

    initAccessibilityControls();
    initVLibras();

    // 5. Ponte de compatibilidade para eventos inline (onclick/onchange) nos partials HTML
    Object.assign(window, {
        openBookingWizard: () => bookingWizard.open(),
        closeBookingWizard: () => bookingWizard.close(),
        selectChaletAndBook: (chaletId) => bookingWizard.selectChaletAndBook(chaletId),
        goToWizardStep: (step) => bookingWizard.goToStep(step),
        updateBookingCalculation: () => bookingWizard.calculateTotal(),
        finalizeBooking: () => bookingWizard.finalize(),
        triggerQuickSearch: () => bookingWizard.triggerQuickSearch(),
        addChecklistItem: () => checklist.add(),
        resetChecklist: () => checklist.reset()
    });
});
