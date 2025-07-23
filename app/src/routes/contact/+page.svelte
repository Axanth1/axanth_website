<svelte:head>
    <title>Επικοινωνία | Axanth - Ξεκινήστε το Project σας</title>
    <meta name="description" content="Έτοιμοι να δημιουργήσουμε κάτι εξαιρετικό; Επικοινωνήστε με την ομάδα της Axanth για να συζητήσουμε το project σας.">

    <meta property="og:title" content="Επικοινωνία | Axanth - Ξεκινήστε το Project σας">
    <meta property="og:description" content="Είμαστε έτοιμοι να ακούσουμε το όραμά σας και να το κάνουμε πραγματικότητα.">
</svelte:head>

<div class="container">
    <div class="contact-grid">
        <div class="contact-info">
            <h1>Ας Χτίσουμε το <span>Μέλλον, Μαζί.</span></h1>
            <p class="subtitle">
                Αυτή τη στιγμή δεχόμαστε νέα projects. Συμπληρώστε την παρακάτω φόρμα με τις πρώτες πληροφορίες και ο lead strategist μας θα επικοινωνήσει μαζί σας εντός 24 ωρών.
            </p>

            <ul class="info-list">
                <li>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <a href="mailto:contact@axanth.gr">contact@axanth.gr</a>
                </li>
                <li>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    </div>
                    <span>+30 2310 123 456</span>
                </li>
                 <li>
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <span>Θεσσαλονίκη, Ελλάδα</span>
                </li>
            </ul>
        </div>

        <form method="POST" action="?" class="contact-form">
            <div class="form-group">
                <div class="form-field">
                    <label for="name">Όνομα</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-field">
                     <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
            </div>

            <div class="form-group">
                <div class="form-field">
                    <label for="project-type">Τύπος Project</label>
                    <select id="project-type" name="project-type" required>
                        <option value="" disabled selected>Επιλέξτε τύπο...</option>
                        <option value="corporate">Εταιρική Ιστοσελίδα</option>
                        <option value="ecommerce">E-commerce / E-shop</option>
                        <option value="webapp">Web Εφαρμογή (Application)</option>
                        <option value="other">Άλλο</option>
                    </select>
                </div>
                <div class="form-field">
                    <label for="budget">Εκτιμώμενο Budget</label>
                    <select id="budget" name="budget" required>
                        <option value="" disabled selected>Επιλέξτε budget...</option>
                        <option value="5k-10k">€5.000 - €10.000</option>
                        <option value="10k-20k">€10.000 - €20.000</option>
                        <option value=">20k">&gt; €20.000</option>
                    </select>
                </div>
            </div>
            
            <div class="form-field">
                <label for="timeline">Επιθυμητό Χρονοδιάγραμμα</label>
                <select id="timeline" name="timeline" required>
                    <option value="" disabled selected>Επιλέξτε χρονοδιάγραμμα...</option>
                    <option value="1-2 months">1-2 Μήνες</option>
                    <option value="2-4 months">2-4 Μήνες</option>
                    <option value="4+ months">4+ Μήνες</option>
                    <option value="flexible">Ευέλικτο</option>
                </select>
            </div>

            <div class="form-field">
                <label for="message">Πείτε μας μερικές λεπτομέρειες</label>
                <textarea id="message" name="message" placeholder="Ποιος είναι ο κύριος στόχος του project; Υπάρχουν ιστοσελίδες που σας αρέσουν;" required></textarea>
            </div>

            <button type="submit" class="btn">Αποστολή Αιτήματος</button>
        </form>
    </div>
</div>

<style>
    .container {
        padding: 4rem 0;
        display: flex;
        align-items: center;
        min-height: calc(100vh - 80px); /* 80px for header height */
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr; /* Info column is slightly smaller */
        gap: 5rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .contact-info h1 {
        font-size: 3rem;
        line-height: 1.2;
    }
    .contact-info h1 span {
        color: var(--accent-color);
    }
    .contact-info .subtitle {
        font-size: 1.1rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-top: 1rem;
        margin-bottom: 3rem;
    }

    .info-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .info-list li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.1rem;
    }
    .info-list .icon {
        width: 24px;
        height: 24px;
        color: var(--accent-color);
    }
    .info-list a {
        color: var(--text-primary);
        text-decoration: none;
        transition: color 0.3s ease;
    }
    .info-list a:hover {
        color: var(--accent-color);
    }

    .contact-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background-color: var(--secondary-bg);
        padding: 2.5rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
    }
    .form-group {
        display: flex;
        gap: 1.5rem;
    }

    /* NEW: Styling for form fields and labels */
    .form-field {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .form-field label {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }

    .contact-form input,
    .contact-form textarea,
    .contact-form select {
        width: 100%;
        padding: 1rem;
        background-color: var(--primary-bg);
        border: 1px solid var(--border-color);
        border-radius: 5px;
        color: var(--text-primary);
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        transition: border-color 0.3s ease;
    }
    .contact-form input:focus,
    .contact-form textarea:focus,
    .contact-form select:focus {
        outline: none;
        border-color: var(--accent-color);
    }
    .contact-form textarea {
        resize: vertical;
        min-height: 120px;
    }
    .contact-form .btn {
        align-self: flex-start;
        margin-top: 1rem;
    }

    /* NEW: Custom styling for select dropdown arrow */
    .contact-form select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%23a0a0a0'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 1em;
        padding-right: 2.5rem; /* Make space for the arrow */
    }
    .contact-form select:required:invalid {
        color: var(--text-secondary);
    }

    @media (max-width: 992px) {
        .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
        }
        .contact-info {
            text-align: center;
        }
        .info-list {
            display: none; /* Hide detailed info on mobile for a cleaner look */
        }
    }
     @media (max-width: 600px) {
        .form-group {
            flex-direction: column;
            gap: 1.5rem; /* Ensure consistent gap on mobile stack */
        }
        .contact-form {
            padding: 1.5rem;
        }
    }
</style>