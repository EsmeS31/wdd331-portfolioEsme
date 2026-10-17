(() => {
    const allowed = new Set(['light', 'system', 'dark']);
    const root = document.documentElement;

    let preference = 'system';
    try {
        const stored = localStorage.getItem('theme-preference');
        if (allowed.has(stored)) {
            preference = stored;
        }
    } catch {
        // Storage can be disabled; keep the system preference.
    }

    const applyPreference = (value) => {
        root.dataset.themePreference = value;
    };

    const syncControls = () => {
        document
            .querySelectorAll('input[name="theme-preference"]')
            .forEach((input) => {
                input.checked = input.value === root.dataset.themePreference;
            });
    };

    applyPreference(preference);
    document.addEventListener('DOMContentLoaded', syncControls, { once: true });
    document.addEventListener('change', (event) => {
        const input = event.target;
        if (!(input instanceof HTMLInputElement) || input.name !== 'theme-preference') {
            return;
        }

        applyPreference(input.value);
        try {
            localStorage.setItem('theme-preference', input.value);
        } catch {
            // The selected theme still applies for this page view.
        }
    });
})();
