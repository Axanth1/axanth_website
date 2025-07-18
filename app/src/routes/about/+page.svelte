<svelte:head>
    <title>About Axanth | Our Philosophy</title>
    <meta name="description" content="Learn about the Axanth team, our mission, and the philosophy that drives our high-end development process.">
</svelte:head>

<div class="container">
    <header class="page-header">
        <h1>We're not just developers. We are <span>digital architects</span>.</h1>
        <p>Our mission is to forge lasting partnerships by building exceptional digital products that drive growth and define industries.</p>
    </header>

    <section class="philosophy-grid">
        <div class="philosophy-item">
            <h3>💡 Radical Execution</h3>
            <p>Ideas are easy, execution is everything. We prioritize a 'get-it-done' culture, focusing on shipping high-quality work efficiently. We cut through bureaucracy to deliver tangible results, fast.</p>
        </div>
        <div class="philosophy-item">
            <h3>💎 Top-Notch Craftsmanship</h3>
            <p>We believe in the art of software. Every line of code, every pixel, and every interaction is crafted with meticulous attention to detail. Our standard is not 'good enough'—it's excellence.</p>
        </div>
        <div class="philosophy-item">
            <h3>🤝 Strategic Partnership</h3>
            <p>We embed ourselves in your vision. We function as an extension of your team, providing strategic guidance and technical expertise to ensure your project's success is our shared success.</p>
        </div>
    </section>
</div>

<style>
    .philosophy-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
    .philosophy-item {
        background-color: var(--secondary-bg);
        padding: 2rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .philosophy-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 170, 255, 0.05);
    }
    .philosophy-item h3 {
        color: var(--accent-color);
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
    }
</style>