<script>
    import { page } from '$app/stores';
</script>

<header class="header">
    <div class="header-container">
        <a href="/" class="logo">Axanth<span>.</span></a>
        <nav>
            <ul class="nav-links">
                <li><a href="/services" class:active={$page.url.pathname === '/services'}>Services</a></li>
                <li><a href="/portfolio" class:active={$page.url.pathname === '/portfolio'}>Portfolio</a></li>
                <li><a href="/about" class:active={$page.url.pathname === '/about'}>About</a></li>
                <li><a href="/contact" class="btn btn-nav">Contact Us</a></li>
            </ul>
        </nav>
    </div>
</header>

<style>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(16, 18, 26, 0.8);
        backdrop-filter: blur(10px);
        z-index: 1000;
        border-bottom: 1px solid var(--border-color);
    }
    .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        height: 80px;
    }
    .logo {
        font-size: 1.8rem;
        font-weight: 700;
        color: #ffffff;
        text-decoration: none;
    }
    .logo span {
        color: var(--accent-color);
    }
    .nav-links {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .nav-links a {
        text-decoration: none;
        color: var(--text-primary);
        font-weight: 400;
        transition: color 0.3s ease;
        padding-bottom: 5px;
        border-bottom: 2px solid transparent;
    }
    .nav-links a:hover, .nav-links a.active {
        color: var(--accent-color);
        border-bottom-color: var(--accent-color);
    }
    .btn-nav {
        padding: 8px 20px;
        border-bottom: none !important;
    }
    .btn-nav:hover {
        color: white !important;
    }
</style>