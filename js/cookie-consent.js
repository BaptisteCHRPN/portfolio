// Manage cookie consent and load Google Font only after approval
(function() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const consentKey = 'cookieConsent';

    function hasConsent() {
        return localStorage.getItem(consentKey) === 'yes';
    }

    function saveConsent() {
        localStorage.setItem(consentKey, 'yes');
    }

    function hideBanner() {
        if (banner) {
            banner.style.display = 'none';
        }
    }

    function loadGoogleFont() {
        if (document.getElementById('google-font-link')) return;
        const link = document.createElement('link');
        link.id = 'google-font-link';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap';
        document.head.appendChild(link);
    }

    document.addEventListener('DOMContentLoaded', function() {
        if (hasConsent()) {
            loadGoogleFont();
            hideBanner();
        } else if (banner && acceptBtn) {
            banner.style.display = 'flex';
            acceptBtn.addEventListener('click', function() {
                saveConsent();
                loadGoogleFont();
                hideBanner();
            });
        }
    });
})();
