/**
 * Gerenciador de Consentimento de Cookies e Armazenamento Local (LGPD - Lei nº 13.709/2018)
 */
class CookieConsentManager {
    #cookieName = 'selva_lgpd_consent';
    #preferences = {
        necessary: true,
        functional: false,
        analytics: false,
        timestamp: null
    };

    init() {
        const saved = this.#readCookie();
        if (saved) {
            this.#preferences = {
                necessary: true,
                functional: Boolean(saved.functional),
                analytics: Boolean(saved.analytics),
                timestamp: saved.timestamp || null
            };
        } else {
            this.showBanner();
        }
        this.#bindEvents();
    }

    canUse(category) {
        if (category === 'necessary') return true;
        return Boolean(this.#preferences[category]);
    }

    showBanner() {
        const banner = id('lgpd-banner');
        if (banner) banner.hidden = false;
    }

    hideBanner() {
        const banner = id('lgpd-banner');
        if (banner) banner.hidden = true;
    }

    openPreferences() {
        const modal = id('lgpd-modal');
        if (!modal) return;
        id('lgpd-opt-functional').checked = this.#preferences.functional;
        id('lgpd-opt-analytics').checked = this.#preferences.analytics;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }

    closePreferences() {
        const modal = id('lgpd-modal');
        if (!modal) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }

    saveConsent({ functional, analytics }) {
        this.#preferences = {
            necessary: true,
            functional: Boolean(functional),
            analytics: Boolean(analytics),
            timestamp: new Date().toISOString()
        };

        // Cookie próprio (First-Party) com validade de 180 dias e SameSite=Lax
        const maxAge = 60 * 60 * 24 * 180;
        document.cookie = `${this.#cookieName}=${encodeURIComponent(JSON.stringify(this.#preferences))}; path=/; max-age=${maxAge}; SameSite=Lax`;

        // Revogação imediata: apaga dados locais se cookies funcionais não forem autorizados
        if (!this.#preferences.functional) {
            localStorage.removeItem('selva_checklist');
            localStorage.removeItem('selva_lang');
        }

        this.hideBanner();
        this.closePreferences();
        window.dispatchEvent(new CustomEvent('lgpd:consent-updated', { detail: this.#preferences }));
    }

    #readCookie() {
        const match = document.cookie.split('; ').find(row => row.startsWith(`${this.#cookieName}=`));
        if (!match) return null;
        try {
            return JSON.parse(decodeURIComponent(match.split('=')[1]));
        } catch {
            return null;
        }
    }

    #bindEvents() {
        id('lgpd-accept-all-btn')?.addEventListener('click', () => {
            this.saveConsent({ functional: true, analytics: true });
        });

        id('lgpd-reject-btn')?.addEventListener('click', () => {
            this.saveConsent({ functional: false, analytics: false });
        });

        id('lgpd-customize-btn')?.addEventListener('click', () => this.openPreferences());
        id('lgpd-open-footer-btn')?.addEventListener('click', () => this.openPreferences());
        id('lgpd-close-modal-btn')?.addEventListener('click', () => this.closePreferences());
        id('lgpd-close-x-btn')?.addEventListener('click', () => this.closePreferences());

        id('lgpd-save-prefs-btn')?.addEventListener('click', () => {
            this.saveConsent({
                functional: id('lgpd-opt-functional').checked,
                analytics: id('lgpd-opt-analytics').checked
            });
        });

        document.addEventListener('keydown', (e) => {
            const modal = id('lgpd-modal');
            if (e.key === 'Escape' && modal?.classList.contains('active')) {
                this.closePreferences();
            }
        });
    }
}
