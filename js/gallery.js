function renderGallery() {
    const container = id('gallery-container');
    container.innerHTML = '';

    GALLERY_DATA.forEach(item => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.onclick = () => openLightbox(item.img);
        div.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="gallery-overlay">🔍 ${item.title}</div>
        `;
        container.appendChild(div);
    });
}

function openLightbox(imgUrl) {
    id('lightbox-img').src = imgUrl;
    id('lightbox-modal').classList.add('active');
}

function closeLightbox() {
    id('lightbox-modal').classList.remove('active');
}
