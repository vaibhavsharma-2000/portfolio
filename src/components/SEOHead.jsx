import { useEffect } from 'react';

const SITE_NAME = 'Vaibhav Sharma';
const BASE_URL = 'https://www.vaibhavsharma.de';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Helper to set or create a <meta> tag in the document head.
 * Uses a unique data-seo="true" marker so we only modify our own injected tags.
 */
function setMeta(attr, attrValue, content) {
    let el = document.querySelector(`meta[${attr}="${attrValue}"][data-seo="true"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        el.setAttribute('data-seo', 'true');
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
    return el;
}

/**
 * Helper to set or create a <link> tag.
 */
function setLink(rel, href) {
    let el = document.querySelector(`link[rel="${rel}"][data-seo="true"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        el.setAttribute('data-seo', 'true');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    return el;
}

/**
 * Custom hook that directly manages document <head> meta tags.
 * Works reliably with React 19 without needing react-helmet-async.
 *
 * @param {Object} options
 * @param {string} options.title - Page title (appended with site name)
 * @param {string} options.description - Meta description (150-160 chars)
 * @param {string} [options.url='/'] - Canonical URL path
 * @param {string} [options.image] - OG image URL
 * @param {string} [options.keywords] - Comma-separated keywords
 * @param {Object} [options.jsonLd] - JSON-LD structured data object
 */
export default function SEOHead({
    title,
    description,
    url = '/',
    image = DEFAULT_OG_IMAGE,
    keywords = '',
    jsonLd = null,
    ogType = 'website',
}) {
    useEffect(() => {
        const fullTitle = `${title} | ${SITE_NAME}`;
        const canonicalUrl = `${BASE_URL}${url}`;

        // Store original values to restore on unmount
        const originalTitle = document.title;

        // Title
        document.title = fullTitle;

        // Primary meta
        const els = [];
        els.push(setMeta('name', 'description', description));
        if (keywords) els.push(setMeta('name', 'keywords', keywords));
        els.push(setLink('canonical', canonicalUrl));

        // Open Graph
        els.push(setMeta('property', 'og:type', ogType));
        els.push(setMeta('property', 'og:url', canonicalUrl));
        els.push(setMeta('property', 'og:title', fullTitle));
        els.push(setMeta('property', 'og:description', description));
        els.push(setMeta('property', 'og:image', image));
        els.push(setMeta('property', 'og:site_name', `${SITE_NAME} Portfolio`));

        // Twitter
        els.push(setMeta('name', 'twitter:card', 'summary_large_image'));
        els.push(setMeta('name', 'twitter:title', fullTitle));
        els.push(setMeta('name', 'twitter:description', description));
        els.push(setMeta('name', 'twitter:image', image));

        // JSON-LD
        let jsonLdScript = null;
        if (jsonLd) {
            jsonLdScript = document.createElement('script');
            jsonLdScript.type = 'application/ld+json';
            jsonLdScript.setAttribute('data-seo', 'true');
            jsonLdScript.textContent = JSON.stringify(jsonLd);
            document.head.appendChild(jsonLdScript);
        }

        // Cleanup: restore original title and remove injected elements
        return () => {
            document.title = originalTitle;
            els.forEach(el => el.remove());
            if (jsonLdScript) jsonLdScript.remove();
        };
    }, [title, description, url, image, keywords, jsonLd]);

    return null;
}
