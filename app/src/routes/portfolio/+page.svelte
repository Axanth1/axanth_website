<svelte:head>
    <title>Τα Έργα μας | Axanth Portfolio</title>
    <meta name="description" content="Περιηγηθείτε σε μια επιλογή από τα high-end projects μας. Δείτε την απόδειξη της αφοσίωσής μας στην ποιότητα και το αποτέλεσμα.">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.axanth.gr/portfolio">
    <meta property="og:title" content="Τα Έργα μας | Axanth Portfolio">
    <meta property="og:description" content="Δείτε την απόδειξη της αφοσίωσής μας στην ποιότητα και το αποτέλεσμα.">
    <meta property="og:image" content="https://www.axanth.gr/images/social-portfolio.jpg">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.axanth.gr/portfolio">
    <meta property="twitter:title" content="Τα Έργα μας | Axanth Portfolio">
    <meta property="twitter:description" content="Δείτε την απόδειξη της αφοσίωσής μας στην ποιότητα και το αποτέλεσμα.">
    <meta property="twitter:image" content="https://www.axanth.gr/images/social-portfolio.jpg">
</svelte:head>

<div class="container">
    <header class="page-header">
        <h1>Η Δουλειά μας, η <span>Απόδειξή</span> μας</h1>
        <p>Πιστεύουμε ότι τα έργα μας μιλούν από μόνα τους. Παρακάτω θα βρείτε μια επιλογή από projects που αναδεικνύουν την αφοσίωσή μας στην κορυφαία ποιότητα και το απτό αποτέλεσμα.</p>
    </header>

    <section class="featured-project">
        <div class="featured-image">
             <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072" alt="Featured Project Image">
        </div>
        <div class="featured-details">
            <span class="tag">Featured Project</span>
            <h2>Αναβάθμιση Πλατφόρμας Fintech</h2>
            <p class="project-description">
                Αναλάβαμε τον πλήρη επανασχεδιασμό και την ανάπτυξη μιας πολύπλοκης web εφαρμογής για τον χρηματοοικονομικό τομέα. Στόχος ήταν η βελτίωση της εμπειρίας χρήστη, η αύξηση της ταχύτητας κατά 300% και η ενίσχυση της ασφάλειας.
            </p>
            <div class="tech-stack">
                <span>SvelteKit</span>
                <span>TypeScript</span>
                <span>PostgreSQL</span>
                <span>UI/UX Design</span>
            </div>
            <a href="#" class="btn">Δείτε το Case Study</a>
        </div>
    </section>

    <section class="more-projects">
        <h2>Περισσότερα <span>Έργα</span></h2>
        <div class="portfolio-grid">
            <a href="#" class="project-card">
                <div class="card-image">
                    <img src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1925" alt="Project 2">
                </div>
                <div class="card-content">
                    <h3>E-commerce για Χειροτέχνες</h3>
                    <p>Web Development / SvelteKit</p>
                </div>
            </a>
            <a href="#" class="project-card">
                 <div class="card-image">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" alt="SaaS Analytics Dashboard">
                </div>
                <div class="card-content">
                    <h3>Dashboard Ανάλυσης για SaaS</h3>
                    <p>Application Design / Data Viz</p>
                </div>
            </a>
            <a href="#" class="project-card">
                 <div class="card-image">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072" alt="Project 4">
                </div>
                <div class="card-content">
                    <h3>Εταιρική Ιστοσελίδα</h3>
                    <p>Web Development / Headless CMS</p>
                </div>
            </a>
        </div>
    </section>

</div>

<style>
    .container {
        padding-bottom: 6rem;
    }
    .page-header {
        text-align: center;
        padding: 4rem 0;
        max-width: 800px;
        margin: 0 auto;
    }
    .page-header h1 {
        font-size: 3.2rem;
        letter-spacing: -1px;
        margin-bottom: 1rem;
    }
    .page-header h1 span {
        color: var(--accent-color);
    }
    .page-header p {
        font-size: 1.2rem;
        color: var(--text-secondary);
    }

    /* Featured Project */
    .featured-project {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 3rem;
        align-items: center;
        padding: 4rem 0;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }
    .featured-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        object-fit: cover;
    }
    .featured-details .tag {
        display: inline-block;
        font-family: 'Roboto Mono', monospace;
        color: var(--accent-color);
        background-color: rgba(0, 170, 255, 0.1);
        padding: 0.25rem 0.75rem;
        border-radius: 4px;
        margin-bottom: 1rem;
    }
    .featured-details h2 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
        color: #fff;
    }
    .featured-details .project-description {
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }
    .tech-stack span {
        font-size: 0.85rem;
        background-color: var(--border-color);
        color: var(--text-secondary);
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
    }
    .featured-details .btn {
        text-decoration: none;
    }
    
    /* More Projects */
    .more-projects {
        padding: 6rem 0 0 0;
    }
    .more-projects h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 4rem;
    }
    .more-projects h2 span {
        color: var(--accent-color);
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    .project-card {
        background-color: var(--secondary-bg);
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid var(--border-color);
        text-decoration: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    .card-image {
        aspect-ratio: 16 / 10;
    }
    .project-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .card-content {
        padding: 1.5rem;
    }
    .card-content h3 {
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }
    .card-content p {
        color: var(--text-secondary);
        font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 992px) {
        .featured-project {
            grid-template-columns: 1fr;
        }
    }
</style>