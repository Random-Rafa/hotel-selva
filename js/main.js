/* Ponto de entrada: inicializa todos os módulos depois que os partials HTML
   (header, seções, modais etc.) forem injetados no DOM pelo loader.js */
document.addEventListener('partials:loaded', function () {
    initHeaderScroll();
    initMobileNav();
    renderChalets('all');
    initDefaultDates();
    renderChecklist();
    renderGallery();
    initAccordion();
    drawMockQRCode('QR-SELVA-DEMO');
});
