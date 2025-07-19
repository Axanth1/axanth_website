<script>
    import "../app.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Axanth",
            "url": "https://www.axanth.gr",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+30-210-0000000",
                "contactType": "Customer Service"
            }
        }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="site-wrapper">
    <Header />
    <main>
        <slot /> </main>
    <Footer />
</div>

<style>
    .site-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        padding-top: 80px; /* Offset for fixed header */
    }
</style>