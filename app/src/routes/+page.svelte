<svelte:head>
    <title>Axanth | High-End Web & App Development</title>
    <meta name="description" content="Axanth crafts bespoke, high-performance websites and applications. We are digital architects building top-notch software that delivers results and sets you apart.">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.axanth.gr/">
    <meta property="og:title" content="Axanth | High-End Web & App Development">
    <meta property="og:description" content="We are digital architects building top-notch software that delivers results and sets you apart.">
    <meta property="og:image" content="https://www.axanth.gr/images/social-home.jpg">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.axanth.gr/">
    <meta property="twitter:title" content="Axanth | High-End Web & App Development">
    <meta property="twitter:description" content="We are digital architects building top-notch software that delivers results and sets you apart.">
    <meta property="twitter:image" content="https://www.axanth.gr/images/social-home.jpg">
</svelte:head>

<section id="hero">
    <div class="hero-container">
        <div class="hero-content">
            <p class="subtitle">// BEYOND THE CODE</p>
            <h1>We Build High-End Digital Experiences.</h1>
            <p>We're not just another software company. We are architects of exceptional, high-performance websites and applications that get things done, push boundaries, and deliver undeniable results.</p>
            <div class="hero-buttons">
                <a href="/contact" class="btn">Start a Project</a>
                <a href="/about" class="btn btn-outline">Learn More</a>
            </div>
        </div>
    </div>
</section>

<section id="services">
    <div class="container">
        <h2 class="text-center">Our Core <span>Services</span></h2>
        <div class="services-grid">
            <article class="service-card">
                <div class="icon">🖥️</div>
                <h3>Bespoke Web Development</h3>
                <p>From sleek corporate sites to complex e-commerce platforms, we build fast, secure, and scalable websites that are tailored to your exact brand vision and business objectives.</p>
            </article>
            <article class="service-card">
                <div class="icon">📱</div>
                <h3>Custom Application Design</h3>
                <p>We engineer intuitive and powerful web and mobile applications. Our focus is on seamless user experience (UI/UX) and robust functionality that solves real-world problems.</p>
            </article>
            <article class="service-card">
                <div class="icon">🚀</div>
                <h3>Performance & SEO</h3>
                <p>A great product is useless if it can't be found. We build for performance from the ground up, ensuring top-tier speed, reliability, and search engine visibility.</p>
            </article>
        </div>
    </div>
</section>

<section id="difference">
    <div class="container">
        <div class="section-header">
            <h2>The Axanth <span>Advantage</span></h2>
            <p>We're built on a foundation of principles that guarantee superior outcomes. This is what sets us apart.</p>
        </div>

        <div class="features-grid">
            <article class="feature-card">
                <div class="feature-icon">⚡️</div>
                <h3>Radical Execution</h3>
                <p>We have a bias for action and a get-it-done mentality. We cut through the noise to deliver tangible results, on time, every time.</p>
            </article>

            <article class="feature-card">
                <div class="feature-icon">💎</div>
                <h3>Top-Notch Craftsmanship</h3>
                <p>We obsess over the details. Clean code, pixel-perfect design, and flawless performance are not optional—they are our standard.</p>
            </article>

            <article class="feature-card">
                <div class="feature-icon">🤝</div>
                <h3>Strategic Partnership</h3>
                <p>We integrate with your team to understand your goals deeply. We aren't just vendors; we're your dedicated partners in digital success.</p>
            </article>
        </div>
    </div>
</section>
<section id="contact">
    <div class="container">
        <div class="text-center">
            <h2>Ready to Build Something <span>Exceptional?</span></h2>
            <p>Tell us about your project. We're ready to listen and turn your vision into reality.</p>
        </div>
        <form action="#" method="POST" class="contact-form">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Tell us about your project..." required></textarea>
            <a href="/contact" class="btn">Continue on Contact Page</a>
        </form>
    </div>
</section>

<style>
    /* These styles apply only to this landing page component */
    section {
        border-bottom: 1px solid var(--border-color);
        width: 100%;
    }
    
    section:last-of-type {
        border-bottom: none;
    }

    .container {
        /* Restored original padding */
        padding: 4rem 0;
    }

    .text-center {
        text-align: center;
    }

    .text-center p {
        margin-left: auto;
        margin-right: auto;
    }

    /* Hero Section */
    #hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        text-align: left;
    }

    .hero-container {
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .hero-content {
        max-width: 700px;
    }
    
    .hero-content .subtitle {
        font-family: 'Roboto Mono', monospace;
        color: var(--accent-color);
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    
    #hero h1 {
        font-size: 3.5rem;
    }
    
    .hero-content p {
        font-size: 1.2rem;
        max-width: 600px;
        margin-bottom: 2rem;
    }
    
    .hero-buttons {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
    }
    
    .btn-outline {
        background-color: transparent;
        color: var(--accent-color);
    }

    .btn-outline:hover {
        background-color: var(--accent-color);
        color: #ffffff;
    }

    /* Services Section */
    #services {
        background-color: var(--secondary-bg);
    }
    
    .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    
    .service-card {
        background-color: var(--primary-bg);
        padding: 2rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 20px rgba(0, 170, 255, 0.1);
    }
    
    .service-card .icon {
        font-size: 2.5rem;
        color: var(--accent-color);
        margin-bottom: 1rem;
    }
    
    .service-card h3 {
        font-size: 1.5rem;
        color: #ffffff;
    }
    
    .service-card p {
        font-size: 0.95rem;
        color: var(--text-secondary);
    }

    /* ===== "Why We're Different" Section (NEW STYLES) ===== */
    #difference .container {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
    
    .section-header {
        text-align: center;
        max-width: 700px;
        margin: 0 auto 4rem auto;
    }

    .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .feature-card {
        background-color: var(--secondary-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 2.5rem 2rem;
        text-align: center;
        transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .feature-card:hover {
        transform: translateY(-10px);
        background-color: #2a2d3a;
    }

    .feature-icon {
        font-size: 3rem;
        line-height: 1;
        margin-bottom: 1.5rem;
    }
    
    .feature-card h3 {
        font-size: 1.4rem;
        color: #ffffff;
        margin-bottom: 1rem;
    }

    .feature-card p {
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.6;
    }
    /* ===== End of New Styles ===== */

    /* Contact Section */
    #contact {
        background-color: var(--secondary-bg);
    }
    
    .contact-form {
        max-width: 700px;
        margin: 2rem auto 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .contact-form input,
    .contact-form textarea {
        width: 100%;
        padding: 1rem;
        background-color: var(--primary-bg);
        border: 1px solid var(--border-color);
        border-radius: 5px;
        color: var(--text-primary);
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
    }

    .contact-form .btn {
        text-align: center;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        #hero h1 {
            font-size: 2.8rem;
        }

        #hero {
            text-align: center;
        }

        .hero-content {
            margin: 0 auto;
        }

        .hero-buttons {
            flex-direction: column;
            align-items: center;
        }
        
        .hero-buttons a {
            width: 100%;
            max-width: 300px;
        }
    }
</style>