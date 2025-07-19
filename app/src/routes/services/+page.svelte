<svelte:head>
    <title>Our Services | Custom Web & Application Development</title>
    <meta name="description" content="Explore our core services: Bespoke Web Development, Custom Application Design, and Performance-driven SEO solutions. We build for maximum impact.">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.axanth.gr/services">
    <meta property="og:title" content="Our Services | Custom Web & Application Development">
    <meta property="og:description" content="We engineer exceptional digital experiences. Discover our high-end development services.">
    <meta property="og:image" content="https://www.axanth.gr/images/social-services.jpg">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.axanth.gr/services">
    <meta property="twitter:title" content="Our Services | Custom Web & Application Development">
    <meta property="twitter:description" content="We engineer exceptional digital experiences. Discover our high-end development services.">
    <meta property="twitter:image" content="https://www.axanth.gr/images/social-services.jpg">
</svelte:head>

<div class="container">
    <header class="page-header">
        <h1>What We <span>Build</span></h1>
        <p>We offer a concentrated suite of services focused on delivering maximum impact. Our expertise is your advantage.</p>
    </header>

    <div class="services-list">
        <article class="service-detail">
            <div class="icon">🖥️</div>
            <h2>Bespoke Web Development</h2>
            <p>We build websites that are more than just digital brochures; they are powerful business tools. Our process ensures your site is visually stunning, incredibly fast, fully secure, and perfectly aligned with your strategic goals. We utilize modern stacks like SvelteKit, Next.js, and headless CMS solutions to deliver unmatched performance and scalability.</p>
        </article>
        
        <article class="service-detail">
            <div class="icon">📱</div>
            <h2>Custom Application Design</h2>
            <p>From complex internal dashboards to customer-facing web applications, we engineer software that solves problems. Our user-centric design process focuses on creating intuitive, engaging, and efficient experiences. We handle the full lifecycle: from ideation and prototyping in Figma to full-stack development and deployment.</p>
        </article>

        <article class="service-detail">
            <div class="icon">🚀</div>
            <h2>Performance & SEO Optimization</h2>
            <p>Speed is a feature, and visibility is a necessity. We don't tack on SEO as an afterthought. We build it into the foundation of every project, ensuring your site achieves top Core Web Vitals scores, is structurally optimized for search engines, and provides a blazingly fast experience for every user.</p>
        </article>
    </div>
</div>

<style>
    .services-list {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        max-width: 900px;
        margin: 0 auto;
    }
    .service-detail {
        background: var(--secondary-bg);
        padding: 3rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
    }
    .service-detail h2 {
        font-size: 1.8rem;
        color: #fff;
        margin-bottom: 1rem;
    }
    .service-detail p {
        font-size: 1.1rem;
        color: var(--text-secondary);
        max-width: 100%;
    }
    .icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
</style>