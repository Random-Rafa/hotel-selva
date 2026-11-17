/* Form Submissions */
function handleContactSubmit(e) {
    e.preventDefault();
    alert('Obrigado! Sua mensagem foi enviada à nossa equipe de concierges. Entraremos em contato em breve.');
    id('contact-form').reset();
}
