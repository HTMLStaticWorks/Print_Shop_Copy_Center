document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('loader-container')) {
        const isDark = localStorage.getItem('theme') === 'dark';
        const bg = isDark ? '#121212' : '#ffffff';
        const primaryColor = '#0066cc';
        const loaderHTML = `
            <style>
                #loader-container {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    z-index: 99999;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: ${bg};
                    transition: opacity 0.6s ease, visibility 0.6s ease;
                }

                .book-loader-wrapper {
                    position: relative;
                    width: 100px;
                    height: 80px;
                    perspective: 1000px;
                    margin-bottom: 20px;
                }

                .book__cover-left {
                    position: absolute;
                    top: 0; left: 0;
                    width: 50px; height: 80px;
                    background: ${primaryColor};
                    border-radius: 6px 0 0 6px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                }

                .book__cover-right {
                    position: absolute;
                    top: 0; right: 0;
                    width: 50px; height: 80px;
                    background: ${primaryColor};
                    border-radius: 0 6px 6px 0;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                }

                .book__page {
                    position: absolute;
                    top: 6px; right: 6px;
                    width: 44px; height: 68px;
                    background: #fdfdfd;
                    border-radius: 0 3px 3px 0;
                    transform-origin: 0% 50%;
                    transform-style: preserve-3d;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    animation: bookPageFlip 2s infinite ease-in-out;
                    border-right: 1px solid rgba(0,0,0,0.05);
                }

                .book__page:nth-child(1) { animation-delay: 0s; z-index: 3; }
                .book__page:nth-child(2) { animation-delay: 0.3s; z-index: 2; }
                .book__page:nth-child(3) { animation-delay: 0.6s; z-index: 1; }

                /* Loader text */
                .loader-text {
                    margin-top: 15px;
                    font-family: 'Outfit', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: ${primaryColor};
                    letter-spacing: 0.5px;
                    animation: loaderTextPulse 1.5s ease-in-out infinite;
                }

                .loader-dots span {
                    display: inline-block;
                    animation: loaderDot 1.4s ease-in-out infinite;
                    opacity: 0;
                }
                .loader-dots span:nth-child(1) { animation-delay: 0s; }
                .loader-dots span:nth-child(2) { animation-delay: 0.2s; }
                .loader-dots span:nth-child(3) { animation-delay: 0.4s; }

                @keyframes bookPageFlip {
                    0% {
                        transform: rotateY(0deg);
                    }
                    80%, 100% {
                        transform: rotateY(-180deg);
                    }
                }
                @keyframes loaderTextPulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.55; }
                }
                @keyframes loaderDot {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 1; }
                }
            </style>
            <div id="loader-container">
                <div class="book-loader-wrapper">
                    <div class="book__cover-left"></div>
                    <div class="book__cover-right"></div>
                    <div class="book__pages">
                        <div class="book__page"></div>
                        <div class="book__page"></div>
                        <div class="book__page"></div>
                    </div>
                </div>
                <div class="loader-text">
                    Printing in Progress<span class="loader-dots"><span>.</span><span>.</span><span>.</span></span>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', loaderHTML);
    }

    function hideLoader() {
        const loader = document.getElementById('loader-container');
        if (loader) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                loader.style.pointerEvents = 'none';
            }, 200);
        }
    }

    window.addEventListener('load', hideLoader);
    if (document.readyState === 'complete') {
        hideLoader();
    }
});
