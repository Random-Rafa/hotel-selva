/* Form Submissions */
function handleContactSubmit(e) {
    e.preventDefault();
    const msg = window.i18n
        ? window.i18n.t('contact.alertSent')
        : 'Obrigado! Sua mensagem foi enviada à nossa equipe de concierges. Entraremos em contato em breve.';
    alert(msg);
    id('contact-form').reset();
}
