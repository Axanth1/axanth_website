<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <a href="/" class="logo">Axanth<span>.</span></a>
            <p>&copy; {new Date().getFullYear()} Axanth Digital. Engineering the Future.</p>
            <div class="footer-links">
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--primary-bg);
        text-align: center;
        border-top: 1px solid var(--border-color);
    }
    .footer .container {
        padding: 3rem 0;
    }
    .footer .logo {
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 700;
        color: #ffffff;
        text-decoration: none;
        margin-bottom: 1rem;
    }
    .footer .logo span {
        color: var(--accent-color);
    }
    .footer p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
    }
    .footer-links {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
    }
    .footer-links a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .footer-links a:hover {
        color: var(--accent-color);
    }
</style>