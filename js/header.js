document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';

        const isMobile = window.innerWidth <= 1024;

        headerPlaceholder.innerHTML = `
            <nav class="navbar navbar-expand-xl">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                        <i class="fas fa-print me-2"></i>InkFlowzPrt.
                    </a>
                    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto align-items-center text-center">
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}" href="index.html">Home 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'home2.html' ? 'active' : ''}" href="home2.html">Home 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'about.html' ? 'active' : ''}" href="about.html">Our Story</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'services.html' ? 'active' : ''}" href="services.html">Print Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'contact.html' ? 'active' : ''}" href="contact.html">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ${currentPath === 'dashboard.html' ? 'active' : ''}" href="dashboard.html">Client Portal</a>
                            </li>
                            <li class="nav-item d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
                                <span id="theme-toggle" class="nav-icon" title="Toggle Theme">
                                    <i class="fas fa-moon"></i>
                                </span>
                                <span id="rtl-toggle" class="nav-icon" title="Toggle RTL">
                                    <i class="fas fa-left-right"></i>
                                </span>
                            </li>
                            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <a href="login.html" class="btn btn-primary-custom btn-sm rounded-pill px-4">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;

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
        } else if (savedRtl === 'false') {
            document.documentElement.setAttribute('dir', 'ltr');
        }

        if (rtlToggle) {
            rtlToggle.addEventListener('click', function () {
                const dir = document.documentElement.getAttribute('dir');
                if (dir === 'rtl') {
                    document.documentElement.setAttribute('dir', 'ltr');
                    localStorage.setItem('rtl', 'false');
                } else {
                    document.documentElement.setAttribute('dir', 'rtl');
                    localStorage.setItem('rtl', 'true');
                }
            });
        }
    }
});
