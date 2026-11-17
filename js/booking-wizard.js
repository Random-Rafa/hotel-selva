function selectChaletAndBook(chaletId) {
    bookingState.chaletId = chaletId;
    openBookingWizard();
    goToWizardStep(2);
}

function openBookingWizard() {
    id('booking-modal').classList.add('active');
    goToWizardStep(1); // sempre inicia do zero, evita reabrir travado na última etapa
    renderWizardChalets();
    updateBookingCalculation();
}

function closeBookingWizard() {
    id('booking-modal').classList.remove('active');
}

function goToWizardStep(stepNumber) {
    for (let i = 1; i <= 5; i++) {
        id(`wizard-step-${i}`).classList.remove('active');
        id(`step-node-${i}`).classList.remove('active');
    }
    id(`wizard-step-${stepNumber}`).classList.add('active');
    id(`step-node-${stepNumber}`).classList.add('active');
}

function renderWizardChalets() {
    const container = id('wiz-chalet-list');
    container.innerHTML = '';

    CHALETS_DATA.forEach(chalet => {
        const isChecked = chalet.id === bookingState.chaletId ? 'checked' : '';
        const item = document.createElement('label');
        item.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-white); border-radius: 8px; border: 1px solid var(--color-gray-soft); cursor: pointer;';
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <input type="radio" name="wiz-chalet-radio" value="${chalet.id}" ${isChecked} onchange="bookingState.chaletId='${chalet.id}'; updateBookingCalculation();">
                <div>
                    <strong>${chalet.title}</strong>
                    <div style="font-size: 0.8rem; color: var(--color-text-muted);">${chalet.capacity} • ${chalet.size}</div>
                </div>
            </div>
            <strong>R$ ${chalet.price.toLocaleString('pt-BR')} / noite</strong>
        `;
        container.appendChild(item);
    });
}

function updateBookingCalculation() {
    const checkinVal = new Date(id('wiz-checkin').value);
    const checkoutVal = new Date(id('wiz-checkout').value);
    
    let diffDays = Math.ceil((checkoutVal - checkinVal) / (1000 * 60 * 60 * 24));
    if (isNaN(diffDays) || diffDays <= 0) diffDays = 1;

    bookingState.totalNights = diffDays;
    
    const selectedChalet = CHALETS_DATA.find(c => c.id === bookingState.chaletId) || CHALETS_DATA[0];
    let baseTotal = selectedChalet.price * diffDays;

    let extrasTotal = 0;
    if (id('addon-transfer').checked) extrasTotal += 850;
    if (id('addon-dinner').checked) extrasTotal += 620;
    if (id('addon-spa').checked) extrasTotal += 480;

    bookingState.totalPrice = baseTotal + extrasTotal;

    id('wiz-total-price').innerText = `R$ ${bookingState.totalPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    id('wiz-summary-details').innerText = `${diffDays} Noite(s) em ${selectedChalet.title} + Extras`;
}

function finalizeBooking() {
    const name = id('wiz-guest-name').value;
    const email = id('wiz-guest-email').value;

    if (!name || !email) {
        alert('Por favor, preencha o Nome e E-mail para confirmar a reserva.');
        return;
    }

    bookingState.guestName = name;
    bookingState.guestEmail = email;

    const randomCode = 'SELVA-' + Math.floor(10000 + Math.random() * 90000);
    id('voucher-code-display').innerText = randomCode;

    const selectedChalet = CHALETS_DATA.find(c => c.id === bookingState.chaletId);
    
    id('voucher-details').innerHTML = `
        <strong>Hóspede Principal:</strong> ${bookingState.guestName}<br>
        <strong>E-mail:</strong> ${bookingState.guestEmail}<br>
        <strong>Acomodação:</strong> ${selectedChalet.title}<br>
        <strong>Período:</strong> ${id('wiz-checkin').value} até ${id('wiz-checkout').value} (${bookingState.totalNights} Noites)<br>
        <strong>Valor Total Final:</strong> R$ ${bookingState.totalPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
    `;

    drawMockQRCode(randomCode);
    goToWizardStep(5);
}

function drawMockQRCode(text) {
    const canvas = id('qr-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 120, 120);
    ctx.fillStyle = '#12281D';

    // Draw simulated QR matrix pattern
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if ((i + j) % 2 === 0 || (i * j) % 3 === 0) {
                ctx.fillRect(i * 12, j * 12, 10, 10);
            }
        }
    }
}
