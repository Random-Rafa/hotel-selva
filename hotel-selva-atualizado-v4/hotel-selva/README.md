# Hotel Selva — Lodge & Spa de Luxo (Amazônia)

Versão refatorada com foco em **Arquitetura Híbrida (POO nos módulos de alto retorno)**, **Acessibilidade W3C/WCAG 2.1 + VLibras**, **Conformidade LGPD via Cookies** e **Internacionalização (PT-BR, EN, ES)**.

## 1. Estrutura POO (Módulos de Alto Retorno)
- `js/booking-wizard.js` (`BookingWizard`): Encapsula o estado mutável da reserva (`#state`), regras de cálculo de diárias e experiências adicionais, fluxo de busca rápida e emissão de voucher (absorvendo os antigos `state.js` e `search.js`).
- `js/checklist.js` (`ChecklistManager`): Encapsula os itens da mala (`#items`) e sincroniza a renderização do DOM com o `localStorage` somente quando autorizado pela LGPD.
- Demais arquivos (`data.js`, `utils.js`, `header-nav.js`, `chalets.js`, `gallery.js`, `accordion.js`, `contact.js`) foram mantidos como módulos procedurais leves por não possuírem estado complexo.

## 2. Acessibilidade W3C / WCAG 2.1 AA e VLibras
- **VLibras**: Widget oficial integrado no `index.html` e inicializado após o carregamento dos partials (`js/accessibility.js`).
- **Navegação por Teclado e WAI-ARIA**: Link *Pular para o conteúdo principal* (`#main-content`), foco visível (`:focus-visible`), `role="dialog"`, `aria-modal="true"`, `aria-expanded` no menu mobile e acordeão FAQ, e fechamento de modais via tecla `ESC`.
- **Controles Visuais**: Barra no cabeçalho para ajuste de tamanho de fonte (`A-`, `A`, `A+`) e modo de **Alto Contraste** (`◐`).

## 3. Conformidade LGPD através de Cookies (Lei nº 13.709/2018)
- `js/lgpd-cookies.js` (`CookieConsentManager`) + `partials/cookie-banner.html`:
  - **Opt-in por padrão (Art. 7º, I e Art. 8º)**: Cookies funcionais e analíticos iniciam desativados; o `localStorage` do checklist e idioma permanece bloqueado até o aceite expresso.
  - **Granularidade (Art. 8º, § 4º)**: Separação entre *Estritamente Necessários*, *Funcionais* e *Analíticos*.
  - **Revogação Facilitada (Art. 18, IX)**: Botão **"Gerenciar Cookies (LGPD)"** fixo no rodapé para revisar ou revogar permissões a qualquer momento, removendo imediatamente os dados locais não essenciais.

## 4. Mudança de Idioma (Opcional)
- `js/i18n.js` (`I18nManager`): Alternância entre `PT-BR`, `EN` e `ES` no cabeçalho, atualizando `html[lang]` (WCAG 3.1.1) e traduzindo os textos marcados com `data-i18n`.

## Como Executar
Como o site carrega fragmentos HTML dinamicamente via `fetch()` (`js/loader.js`), execute-o por meio de um servidor HTTP local (ex.: extensão **Live Server** no VS Code ou `python3 -m http.server 8000`).
