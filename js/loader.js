/**
 * Loader de partials HTML.
 * Busca cada arquivo indicado em [data-include] e injeta seu conteúdo no DOM.
 * Ao final, dispara o evento "partials:loaded", que os demais módulos usam
 * como gatilho de inicialização (ver js/main.js).
 */
(function () {
    async function loadPartial(el) {
        const path = el.getAttribute('data-include');
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Falha ao carregar ${path}`);
            const html = await response.text();
            el.outerHTML = html;
        } catch (err) {
            console.error('Erro ao carregar partial:', path, err);
            el.outerHTML = `<!-- Erro ao carregar ${path} -->`;
        }
    }

    async function loadAllPartials() {
        const nodes = Array.from(document.querySelectorAll('[data-include]'));
        // Mantém a ordem original das seções na página
        for (const el of nodes) {
            await loadPartial(el);
        }
        document.dispatchEvent(new CustomEvent('partials:loaded'));
    }

    document.addEventListener('DOMContentLoaded', loadAllPartials);
})();
