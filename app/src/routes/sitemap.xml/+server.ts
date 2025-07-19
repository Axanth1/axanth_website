import type { RequestHandler } from "./$types";

// The base URL of your website
const siteURL: string = 'https://www.axanth.gr';

// An array of your static page routes
const staticPages: string[] = [
    '/',
    '/about',
    '/contact',
    '/portfolio',
    '/services'
];

// The GET request handler
export const GET: RequestHandler = async ({ setHeaders }) => {
    setHeaders({
		'Content-Type': 'application/xml'
	});

    // Construct the XML string
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map(page => `
        <url>
            <loc>${siteURL}${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.8</priority>
        </url>
    `).join('')}
    </urlset>`;

    return new Response(xml);
}