/**
 * Módulo POO de Alto Retorno #1: BookingWizard
 * Encapsula o estado mutável da reserva (#state), regras de cálculo de diárias/extras,
 * fluxo de busca rápida, localização e navegação acessível entre as 5 etapas.
 */
class BookingWizard {
    #state;
    #chalets;
    #modal;
    #lastFocusedElement = null;

    constructor(chaletsData, modalId = 'booking-modal') {
        this.#chalets = chaletsData;
        this.#modal = id(modalId);
        this.#state = {
            checkin: '',
            checkout: '',
            adults: 2,
            children: 0,
            chaletId: 'c1',
            addons: {
                transfer: false,
                dinner: false,
                spa: false
            },
            guestName: '',
            guestEmail: '',
            guestPhone: '',
            totalNights: 1,
            totalPrice: 0
        };

        this.#bindAccessibilityEvents();
    }

    #t(key, params = {}) {
        return window.i18n ? window.i18n.t(key, params) : key;
    }

    #bindAccessibilityEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.#modal?.classList.contains('active')) {
                this.close();
            }
        });
    }

    initDefaultDates() {
        const today = new Date();
        const checkout = new Date(today);
        checkout.setDate(checkout.getDate() + 3);

        const format = d => d.toISOString().split('T')[0];

        if (id('checkin-date')) id('checkin-date').value = format(today);
        if (id('checkout-date')) id('checkout-date').value = format(checkout);
        if (id('wiz-checkin')) id('wiz-checkin').value = format(today);
        if (id('wiz-checkout')) id('wiz-checkout').value = format(checkout);
    }

    triggerQuickSearch() {
        this.#state.checkin = id('checkin-date').value;
        this.#state.checkout = id('checkout-date').value;
        this.#state.adults = parseInt(id('search-guests').value, 10) || 2;

        const searchType = id('search-type')?.value;
        if (searchType && searchType !== 'all') {
            const matchingChalet = this.#chalets.find(c => c.category === searchType);
            if (matchingChalet) {
                this.#state.chaletId = matchingChalet.id;
            }
        }

        id('wiz-checkin').value = this.#state.checkin;
        id('wiz-checkout').value = this.#state.checkout;
        id('wiz-adults').value = String(Math.min(this.#state.adults, 3));

        this.open();
    }

    selectChaletAndBook(chaletId) {
        this.#state.chaletId = chaletId;
        this.open();
        this.goToStep(2);
    }

    open() {
        if (!this.#modal) return;
        this.#lastFocusedElement = document.activeElement;
        this.#modal.classList.add('active');
        this.#modal.setAttribute('aria-hidden', 'false');
        this.goToStep(1);
        this.refreshLanguage();

        const firstFocusable = this.#modal.querySelector('button, input, select');
        if (firstFocusable) firstFocusable.focus();
    }

    close() {
        if (!this.#modal) return;
        this.#modal.classList.remove('active');
        this.#modal.setAttribute('aria-hidden', 'true');
        if (this.#lastFocusedElement) {
            this.#lastFocusedElement.focus();
        }
    }

    refreshLanguage() {
        this.#renderChalets();
        this.calculateTotal();
    }

    goToStep(stepNumber) {
        for (let i = 1; i <= 5; i++) {
            const stepEl = id(`wizard-step-${i}`);
            const nodeEl = id(`step-node-${i}`);
            if (stepEl) stepEl.classList.remove('active');
            if (nodeEl) {
                nodeEl.classList.remove('active');
                nodeEl.removeAttribute('aria-current');
            }
        }
        const activeStep = id(`wizard-step-${stepNumber}`);
        const activeNode = id(`step-node-${stepNumber}`);
        if (activeStep) activeStep.classList.add('active');
        if (activeNode) {
            activeNode.classList.add('active');
            activeNode.setAttribute('aria-current', 'step');
        }
    }

    #renderChalets() {
        const container = id('wiz-chalet-list');
        if (!container) return;
        container.innerHTML = '';

        const perNightLabel = this.#t('chalets.perNight');

        this.#chalets.forEach(rawChalet => {
            const chalet = getLocalizedChalet(rawChalet);
            const isChecked = chalet.id === this.#state.chaletId ? 'checked' : '';
            const item = document.createElement('label');
            item.style.cssText = 'display: flex; align-items: center; justify-content: space-between; padding: 1rem; background: var(--color-white); border-radius: 8px; border: 1px solid var(--color-gray-soft); cursor: pointer;';
            item.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <input type="radio" name="wiz-chalet-radio" value="${chalet.id}" ${isChecked}>
                    <div>
                        <strong>${chalet.title}</strong>
                        <div style="font-size: 0.8rem; color: var(--color-text-muted);">${chalet.capacity} • ${chalet.size}</div>
                    </div>
                </div>
                <strong>R$ ${chalet.price.toLocaleString('pt-BR')} ${perNightLabel}</strong>
            `;

            item.querySelector('input').addEventListener('change', () => {
                this.#state.chaletId = chalet.id;
                this.calculateTotal();
            });

            container.appendChild(item);
        });
    }

    calculateTotal() {
        const checkinInput = id('wiz-checkin');
        const checkoutInput = id('wiz-checkout');
        if (!checkinInput || !checkoutInput) return;

        const checkinVal = new Date(checkinInput.value);
        const checkoutVal = new Date(checkoutInput.value);

        let diffDays = Math.ceil((checkoutVal - checkinVal) / (1000 * 60 * 60 * 24));
        if (isNaN(diffDays) || diffDays <= 0) diffDays = 1;

        this.#state.totalNights = diffDays;
        this.#state.adults = parseInt(id('wiz-adults')?.value, 10) || 2;
        this.#state.children = parseInt(id('wiz-children')?.value, 10) || 0;

        const rawChalet = this.#chalets.find(c => c.id === this.#state.chaletId) || this.#chalets[0];
        const selectedChalet = getLocalizedChalet(rawChalet);
        const baseTotal = selectedChalet.price * diffDays;

        this.#state.addons.transfer = Boolean(id('addon-transfer')?.checked);
        this.#state.addons.dinner = Boolean(id('addon-dinner')?.checked);
        this.#state.addons.spa = Boolean(id('addon-spa')?.checked);

        let extrasTotal = 0;
        if (this.#state.addons.transfer) extrasTotal += 850;
        if (this.#state.addons.dinner) extrasTotal += 620;
        if (this.#state.addons.spa) extrasTotal += 480;

        this.#state.totalPrice = baseTotal + extrasTotal;

        if (id('wiz-total-price')) {
            id('wiz-total-price').innerText = `R$ ${this.#state.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        }
        if (id('wiz-summary-details')) {
            id('wiz-summary-details').innerText = this.#t('wiz.summaryPattern', {
                nights: diffDays,
                chalet: selectedChalet.title
            });
        }
    }

    finalize() {
        const name = id('wiz-guest-name').value.trim();
        const email = id('wiz-guest-email').value.trim();
        const phone = id('wiz-guest-phone')?.value.trim() || '';

        if (!name || !email) {
            alert(this.#t('wiz.alertMissing'));
            return;
        }

        this.#state.guestName = name;
        this.#state.guestEmail = email;
        this.#state.guestPhone = phone;

        const randomCode = 'SELVA-' + Math.floor(10000 + Math.random() * 90000);
        id('voucher-code-display').innerText = randomCode;

        const rawChalet = this.#chalets.find(c => c.id === this.#state.chaletId) || this.#chalets[0];
        const selectedChalet = getLocalizedChalet(rawChalet);

        id('voucher-details').innerHTML = `
            <strong>${this.#t('wiz.voucherGuest')}</strong> ${this.#state.guestName}<br>
            <strong>${this.#t('wiz.voucherEmail')}</strong> ${this.#state.guestEmail}<br>
            <strong>${this.#t('wiz.voucherChalet')}</strong> ${selectedChalet.title}<br>
            <strong>${this.#t('wiz.voucherPeriod')}</strong> ${id('wiz-checkin').value} ${this.#t('wiz.voucherUntil')} ${id('wiz-checkout').value} (${this.#state.totalNights} ${this.#t('wiz.voucherNights')})<br>
            <strong>${this.#t('wiz.voucherTotal')}</strong> R$ ${this.#state.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        `;

        this.drawMockQRCode(randomCode);
        this.goToStep(5);
    }

    drawMockQRCode(text) {
        const canvas = id('qr-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fillStyle = '#12281D';

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if ((i + j) % 2 === 0 || (i * j) % 3 === 0) {
                    ctx.fillRect(i * 12, j * 12, 10, 10);
                }
            }
        }
    }
}
