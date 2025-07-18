<svelte:head>
    <title>Portfolio | Our Work at Axanth</title>
    <meta name="description" content="Browse a selection of our high-end web development and application design projects.">
</svelte:head>

<div class="container">
    <header class="page-header">
        <h1>Proof in the <span>Product</span></h1>
        <p>We believe our work speaks for itself. Here’s a selection of projects that showcase our commitment to craftsmanship and results.</p>
    </header>

    <div class="portfolio-grid">
        <a href="#" class="project-card">
            <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072" alt="Project 1">
            <div class="card-overlay">
                <h3>Fintech Platform Overhaul</h3>
                <p>Web Application / UI/UX Design</p>
            </div>
        </a>
        <a href="#" class="project-card">
            <img src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1925" alt="Project 2">
            <div class="card-overlay">
                <h3>E-commerce for Artisans</h3>
                <p>Web Development / SvelteKit</p>
            </div>
        </a>
        <a href="#" class="project-card">
            <img src="https://images.unsplash.com/photo-1559028006-44a136e70393?q=80&w=1974" alt="Project 3">
            <div class="card-overlay">
                <h3>SaaS Analytics Dashboard</h3>
                <p>Application Design / Data Viz</p>
            </div>
        </a>
        <a href="#" class="project-card">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072" alt="Project 4">
            <div class="card-overlay">
                <h3>Corporate Identity Site</h3>
                <p>Web Development / Headless CMS</p>
            </div>
        </a>
    </div>
</div>

<style>
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 1.5rem;
    }
    .project-card {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        display: block;
        border: 1px solid var(--border-color);
        aspect-ratio: 4 / 3;
    }
    .project-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
    }
    .project-card:hover img {
        transform: scale(1.05);
    }
    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(16, 18, 26, 0.95), transparent);
        padding: 3rem 1.5rem 1.5rem;
        color: #fff;
        transform: translateY(30%);
        transition: transform 0.4s ease;
        text-decoration: none;
    }
    .project-card:hover .card-overlay {
        transform: translateY(0);
    }
    .card-overlay h3 {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
    }
    .card-overlay p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin: 0;
    }
</style>