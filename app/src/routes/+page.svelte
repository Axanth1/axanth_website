<svelte:head>
    <title>Axanth | High-End Web & App Development</title>
    <meta name="description" content="Axanth crafts bespoke, high-performance websites and applications. We don't just build software; we engineer digital experiences that deliver results and set you apart.">
    <meta name="keywords" content="web development, app development, software company, custom websites, high-end software, UI/UX design, digital solutions">
    <meta name="author" content="Axanth Digital">
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
    <div class="container difference-grid">
        <div class="difference-content">
            <h2>Why We're <span>Different</span></h2>
            <ul>
                <li>
                    <strong>Radical Execution.</strong> We have a bias for action and a get-it-done mentality. We cut through the noise to deliver tangible results, on time.
                </li>
                <li>
                    <strong>Top-Notch Craftsmanship.</strong> We obsess over the details. Clean code, pixel-perfect design, and flawless performance are not optional—they are our standard.
                </li>
                <li>
                    <strong>Strategic Partnership.</strong> We integrate with your team to understand your goals deeply. We're not just vendors; we're your dedicated partners in digital success.
                </li>
            </ul>
             <a href="/contact" class="btn">Let's Talk Strategy</a>
        </div>
        <div class="difference-image">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="A team of developers collaborating on a project">
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

    /* Difference Section */
    .difference-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 3rem;
    }

    .difference-content ul {
        list-style: none;
        padding-left: 0;
        margin-top: 2rem;
    }
    
    .difference-content li {
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        display: flex;
        align-items: flex-start;
    }
    
    .difference-content li::before {
        content: '✓';
        color: var(--accent-color);
        font-weight: 700;
        margin-right: 1rem;
        font-size: 1.5rem;
        line-height: 1.2;
    }
    
    .difference-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

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

        .difference-grid {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .difference-content li {
            text-align: left;
        }
    }
</style>