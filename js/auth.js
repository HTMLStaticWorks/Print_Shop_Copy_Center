document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function updateThemeUI(isDark) {
        if (!themeIcon) return;
        if (isDark) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            html.setAttribute('data-theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            html.setAttribute('data-theme', 'light');
        }
    }

    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        updateThemeUI(true);
    } else {
        updateThemeUI(false);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isCurrentlyDark = html.getAttribute('data-theme') === 'dark';
            const newIsDark = !isCurrentlyDark;
            localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
            updateThemeUI(newIsDark);
        });
    }

    // RTL Toggle Logic
    const rtlToggle = document.getElementById('rtl-toggle');
    
    // Initialize RTL from localStorage
    const savedRtl = localStorage.getItem('rtl');
    if (savedRtl === 'true') {
        document.documentElement.setAttribute('dir', 'rtl');
        if (rtlToggle) rtlToggle.textContent = 'LTR';
    } else if (savedRtl === 'false') {
        document.documentElement.setAttribute('dir', 'ltr');
        if (rtlToggle) rtlToggle.textContent = 'RTL';
    }

    if (rtlToggle) {
        rtlToggle.addEventListener('click', function () {
            const dir = document.documentElement.getAttribute('dir');
            if (dir === 'rtl') {
                document.documentElement.setAttribute('dir', 'ltr');
                localStorage.setItem('rtl', 'false');
                rtlToggle.textContent = 'RTL';
            } else {
                document.documentElement.setAttribute('dir', 'rtl');
                localStorage.setItem('rtl', 'true');
                rtlToggle.textContent = 'LTR';
            }
        });
    }

    // Password Toggle Logic
    const togglePasswords = document.querySelectorAll('.toggle-password');
    togglePasswords.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const passwordInput = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
});
