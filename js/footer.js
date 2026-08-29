document.addEventListener('DOMContentLoaded', function () {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="footer bg-white pt-5">
                <div class="container border-bottom pb-5">
                    <div class="row g-4">
                        <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <a class="navbar-brand mb-4 d-inline-block text-decoration-none" href="index.html">
                                <img src="img/logo1.png" alt="InkFlowzPrt" class="brand-logo-img footer-logo-img">
                            </a>
                            <p class="text-muted mb-4 small">Your one-stop destination for premium printing, stationery, books, and copy services. Experience high-quality prints and professional binding tailored to your needs.</p>
                            <div class="footer-social d-flex gap-2">
                                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 class="fw-bold mb-4">Quick Links</h5>
                            <ul class="list-unstyled footer-links">
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="home2.html">Home 2</a></li>
                                <li><a href="about.html">Our Story</a></li>
                                <li><a href="services.html">Print Services</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3 mb-4 mb-lg-0">
                            <h5 class="fw-bold mb-4">Support & Rates</h5>
                            <ul class="list-unstyled footer-links">
                                <li><a href="contact.html">Contact Us</a></li>
                                <li><a href="specifications.html">Specs & Materials</a></li>
                                <li><a href="pricing.html">Pricing Card</a></li>
                                <li><a href="bulk-orders.html">Bulk Orders</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <h5 class="fw-bold mb-4">Join Us</h5>
                            <p class="text-muted small mb-4">Get custom offers & printing news!</p>
                            <div class="input-group mb-3 news-letter-field">
                                <input type="email" class="form-control rounded-pill-start border-end-0 ps-3" placeholder="Email">
                                <button class="btn btn-primary-custom rounded-pill-end px-3" type="button">Go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container py-4">
                    <div class="row align-items-center">
                        <div class="col-md-6 text-center text-md-start">
                            <p class="text-muted mb-0">&copy; 2026 InkFlowzPrt Print Shop. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
                            <ul class="list-inline mb-0 footer-bottom-links">
                                <li class="list-inline-item mx-3"><a href="#" class="text-muted small">Privacy Policy</a></li>
                                <li class="list-inline-item mx-3"><a href="#" class="text-muted small">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            
            <!-- Scroll Top Button -->
            <div id="scroll-top">
                <i class="fas fa-arrow-up"></i>
            </div>
        `;

        // Scroll to top logic
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollTopBtn.classList.add('show');
                } else {
                    scrollTopBtn.classList.remove('show');
                }
            });

            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
});
