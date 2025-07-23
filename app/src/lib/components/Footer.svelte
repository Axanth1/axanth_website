<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <a href="/" class="logo">Axanth<span>.</span></a>
            
            <div class="footer-links">
                <a href="/about">Σχετικά με εμάς</a>
                <a href="/services">Υπηρεσίες</a>
                <a href="/portfolio">Τα Έργα μας</a>
                <a href="/contact">Επικοινωνία</a>
            </div>
            
            <div class="legal-info">
                <p>&copy; {new Date().getFullYear()} Axanth Digital. Σχεδιάζοντας το Μέλλον.</p>
                <div class="legal-links">
                    <a href="/terms">Όροι Χρήσης</a>
                    <span>&bull;</span>
                    <a href="/privacy">Πολιτική Απορρήτου</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: var(--primary-bg);
        text-align: center;
        border-top: 1px solid var(--border-color);
        padding: 3rem 0;
    }

    /* This is the main change for better centering and layout */
    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem; /* Creates consistent space between all footer elements */
    }

    .footer .logo {
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 700;
        color: #ffffff;
        text-decoration: none;
    }
    .footer .logo span {
        color: var(--accent-color);
    }
    
    .footer-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap; /* Allows links to wrap on small screens */
    }
    .footer-links a {
        color: var(--text-primary);
        font-weight: 500;
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .footer-links a:hover {
        color: var(--accent-color);
    }

    .legal-info {
        margin-top: 1rem;
        border-top: 1px solid var(--border-color);
        padding-top: 1.5rem;
        width: 100%;
        max-width: 500px;
    }

    .legal-info p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 0.75rem;
    }
    
    .legal-links {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        font-size: 0.85rem;
    }
    .legal-links a {
         color: var(--text-secondary);
    }
    .legal-links span {
        color: var(--border-color);
    }
</style>