/**
 * Módulo POO de Alto Retorno #2: ChecklistManager
 * Encapsula os itens da bagagem (#items) e sincroniza DOM + localStorage
 * respeitando o consentimento de cookies funcionais da LGPD e o idioma ativo.
 */
class ChecklistManager {
    #items;
    #storageKey = 'selva_checklist';
    #container;

    constructor(containerId = 'checklist-container') {
        this.#container = id(containerId);
        this.#items = this.#loadFromStorage();
    }

    #canPersist() {
        return window.lgpdConsent ? window.lgpdConsent.canUse('functional') : false;
    }

    #defaultItems() {
        return [
            { id: 1, i18nKey: 'checklist.item1', text: 'Repelente biodegradável', completed: true },
            { id: 2, i18nKey: 'checklist.item2', text: 'Protetor solar resistente à água', completed: true },
            { id: 3, i18nKey: 'checklist.item3', text: 'Roupas leves de manga longa', completed: false },
            { id: 4, i18nKey: 'checklist.item4', text: 'Bota ou tênis para trilha', completed: false },
            { id: 5, i18nKey: 'checklist.item5', text: 'Binóculo para observação de aves', completed: false }
        ];
    }

    #loadFromStorage() {
        if (this.#canPersist()) {
            const saved = localStorage.getItem(this.#storageKey);
            if (saved) {
                try {
                    return JSON.parse(saved);
                } catch (e) {
                    console.error('Erro ao ler checklist do localStorage:', e);
                }
            }
        }
        return this.#defaultItems();
    }

    #saveToStorage() {
        if (this.#canPersist()) {
            localStorage.setItem(this.#storageKey, JSON.stringify(this.#items));
        } else {
            localStorage.removeItem(this.#storageKey);
        }
    }

    syncConsent() {
        this.#saveToStorage();
    }

    render() {
        if (!this.#container) return;
        this.#container.innerHTML = '';

        this.#items.forEach((item, index) => {
            const displayText = item.i18nKey && window.i18n
                ? window.i18n.t(item.i18nKey)
                : item.text;

            const div = document.createElement('div');
            div.className = `checklist-item ${item.completed ? 'completed' : ''}`;
            div.innerHTML = `
                <label>
                    <input type="checkbox" ${item.completed ? 'checked' : ''} aria-label="${displayText}">
                    <span>${displayText}</span>
                </label>
                <button type="button" class="delete-btn" aria-label="${displayText}">&times;</button>
            `;

            div.querySelector('input').addEventListener('change', () => this.toggle(index));
            div.querySelector('.delete-btn').addEventListener('click', () => this.delete(index));

            this.#container.appendChild(div);
        });

        this.#saveToStorage();
    }

    toggle(index) {
        this.#items[index].completed = !this.#items[index].completed;
        this.render();
    }

    add(inputId = 'checklist-new-item') {
        const input = id(inputId);
        if (input && input.value.trim() !== '') {
            this.#items.push({
                id: Date.now(),
                text: input.value.trim(),
                completed: false
            });
            input.value = '';
            this.render();
        }
    }

    delete(index) {
        this.#items.splice(index, 1);
        this.render();
    }

    reset() {
        localStorage.removeItem(this.#storageKey);
        this.#items = this.#defaultItems();
        this.render();
    }
}
