document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const feedbackEl = document.getElementById('form-feedback');
    if (!feedbackEl) return;

    if (params.has('sent')) {
        feedbackEl.textContent = 'Message envoyé avec succès ! Merci de m\'avoir contacté.';
        feedbackEl.classList.add('success');
    } else if (params.has('error')) {
        feedbackEl.textContent = 'Erreur lors de l\'envoi. Vérifiez vos informations et réessayez.';
        feedbackEl.classList.add('error');
    }

    // if a feedback message was set, make sure the user sees it
    if ((params.has('sent') || params.has('error')) && feedbackEl.textContent.trim() !== '') {
        // scroll the contact section into view
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // fallback: scroll to feedback element
            feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // remove query parameters from URL so refresh doesn't resend or show again
    if (params.has('sent') || params.has('error')) {
        const cleanUrl = window.location.origin + window.location.pathname;
        history.replaceState({}, document.title, cleanUrl);
    }
});