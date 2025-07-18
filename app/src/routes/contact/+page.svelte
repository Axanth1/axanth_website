<svelte:head>
    <title>Contact Axanth | Start a Project</title>
    <meta name="description" content="Ready to build something exceptional? Get in touch with the Axanth team to discuss your project.">
</svelte:head>

<div class="container">
    <header class="page-header">
        <h1>Let's Build the <span>Future, Together.</span></h1>
        <p>We're currently accepting new projects. Fill out the form below, and our lead strategist will get back to you within 24 hours.</p>
    </header>

    <form action="#" method="POST" class="contact-form">
        <div class="form-group">
            <input type="text" id="name" name="name" placeholder="Your Name" required>
            <input type="email" id="email" name="email" placeholder="Your Email" required>
        </div>
        <input type="text" id="subject" name="subject" placeholder="Project Subject" required>
        <textarea id="message" name="message" placeholder="Tell us about your vision, goals, and timeline..." required></textarea>
        <button type="submit" class="btn">Send Inquiry</button>
    </form>
</div>

<style>
    .contact-form {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        background-color: var(--secondary-bg);
        padding: 2rem;
        border-radius: 8px;
        border: 1px solid var(--border-color);
    }
    .form-group {
        display: flex;
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
        transition: border-color 0.3s ease;
    }
    .contact-form input:focus,
    .contact-form textarea:focus {
        outline: none;
        border-color: var(--accent-color);
    }
    .contact-form textarea {
        resize: vertical;
        min-height: 180px;
    }
    .contact-form .btn {
        align-self: flex-start;
    }

    @media (max-width: 600px) {
        .form-group {
            flex-direction: column;
        }
        .contact-form {
            padding: 1.5rem;
        }
    }
</style>