<script>
    import { page } from '$app/stores';
    import { afterNavigate } from '$app/navigation';

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    // Close the mobile menu automatically after navigating to a new page
    afterNavigate(() => {
        closeMenu();
    });
</script>

<header class="header">
    <div class="header-container">
        <a href="/" class="logo" on:click={closeMenu}>Axanth<span>.</span></a>
        
        <nav class="desktop-nav">
            <ul class="nav-links">
                <li><a href="/services" class:active={$page.url.pathname === '/services'}>Υπηρεσίες</a></li>
                <li><a href="/portfolio" class:active={$page.url.pathname.startsWith('/portfolio')}>Τα Έργα μας</a></li>
                <li><a href="/about" class:active={$page.url.pathname === '/about'}>Σχετικά με εμάς</a></li>
                <li><a href="/contact" class="btn btn-nav">Επικοινωνία</a></li>
            </ul>
        </nav>

        <button class="burger" on:click={toggleMenu} aria-label="Open menu" class:open={isMenuOpen}>
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
        </button>
    </div>
</header>

<div class="mobile-nav-overlay" class:open={isMenuOpen}>
    <nav>
        <ul class="mobile-nav-links">
            <li><a href="/services" on:click={closeMenu}>Υπηρεσίες</a></li>
            <li><a href="/portfolio" on:click={closeMenu}>Τα Έργα μας</a></li>
            <li><a href="/about" on:click={closeMenu}>Σχετικά με εμάς</a></li>
            <li><a href="/contact" on:click={closeMenu}>Επικοινωνία</a></li>
        </ul>
    </nav>
</div>


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
        z-index: 1001; /* Ensure logo is above the overlay */
    }
    .logo span {
        color: var(--accent-color);
    }

    /* --- Desktop Nav --- */
    .desktop-nav .nav-links {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .desktop-nav .nav-links a {
        text-decoration: none;
        color: var(--text-primary);
        font-weight: 400;
        transition: color 0.3s ease;
        padding-bottom: 5px;
        border-bottom: 2px solid transparent;
    }
    .desktop-nav .nav-links a:hover, .nav-links a.active {
        color: var(--accent-color);
        border-bottom-color: var(--accent-color);
    }
    .btn-nav {
        padding: 8px 20px;
        border-bottom: none !important;
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    /* === THIS IS THE FIX === */
    .btn-nav:hover {
        color: white !important;
        background-color: var(--accent-hover);
        border-color: var(--accent-hover);
        transform: none; /* Override the jump effect from the global .btn class */
    }
    
    /* --- Burger Button --- */
    .burger {
        display: none; /* Hidden by default */
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 1001;
    }
    .burger span {
        width: 2rem;
        height: 0.2rem;
        background: var(--text-primary);
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
    /* Animate burger to 'X' */
    .burger.open .line1 {
        transform: rotate(45deg);
    }
    .burger.open .line2 {
        opacity: 0;
        transform: translateX(20px);
    }
    .burger.open .line3 {
        transform: rotate(-45deg);
    }


    /* --- Mobile Nav Overlay --- */
    .mobile-nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--primary-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease-in-out;
        transform: translateX(100%);
        z-index: 999;
    }
    .mobile-nav-overlay.open {
        transform: translateX(0);
    }
    .mobile-nav-links {
        list-style: none;
        text-align: center;
    }
    .mobile-nav-links li {
        margin: 2rem 0;
    }
    .mobile-nav-links a {
        font-size: 2rem;
        color: var(--text-primary);
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
    }
    .mobile-nav-links a:hover {
        color: var(--accent-color);
    }

    /* --- Responsive Breakpoint --- */
    @media (max-width: 768px) {
        .desktop-nav {
            display: none;
        }
        .burger {
            display: flex;
        }
    }
</style>