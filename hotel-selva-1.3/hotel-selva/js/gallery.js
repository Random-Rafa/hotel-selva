function renderGallery() {
    const container = id('gallery-container');
    if (!container) return;
    container.innerHTML = '';

    const zoomPrefix = window.i18n ? window.i18n.t('gallery.zoomPrefix') : 'Ampliar foto';

    GALLERY_DATA.forEach(item => {
        const title = getLocalizedGalleryTitle(item);
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.setAttribute('role', 'button');
        div.setAttribute('tabindex', '0');
        div.setAttribute('aria-label', `${zoomPrefix}: ${title}`);
        div.onclick = () => openLightbox(item.img);
        div.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(item.img);
            }
        };
        div.innerHTML = `
            <img src="${item.img}" alt="${title}">
            <div class="gallery-overlay">🔍 ${title}</div>
        `;
        container.appendChild(div);
    });
}

function openLightbox(imgUrl) {
    const modal = id('lightbox-modal');
    id('lightbox-img').src = imgUrl;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    const modal = id('lightbox-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
}
