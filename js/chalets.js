function renderChalets(filterCategory) {
    const container = id('chalets-container');
    container.innerHTML = '';

    const filtered = filterCategory === 'all' 
        ? CHALETS_DATA 
        : CHALETS_DATA.filter(c => c.category === filterCategory);

    filtered.forEach(chalet => {
        const card = document.createElement('div');
        card.className = 'chalet-card';
        card.innerHTML = `
            <div class="chalet-img-box">
                <img src="${chalet.image}" alt="${chalet.title}">
                <span class="chalet-tag">${chalet.tag}</span>
            </div>
            <div class="chalet-content">
                <h3 class="chalet-title">${chalet.title}</h3>
                <div class="chalet-meta">
                    <span>👥 ${chalet.capacity}</span>
                    <span>📐 ${chalet.size}</span>
                </div>
                <div class="chalet-amenities">
                    ${chalet.amenities.map(a => `<span class="amenity-chip">${a}</span>`).join('')}
                </div>
                <div class="chalet-footer">
                    <div class="chalet-price">
                        <span class="price-amount">R$ ${chalet.price.toLocaleString('pt-BR')}</span>
                        <span class="price-label">/ diária</span>
                    </div>
                    <button class="btn btn-forest btn-sm" onclick="selectChaletAndBook('${chalet.id}')">Reservar</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterChalets(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderChalets(category);
}
