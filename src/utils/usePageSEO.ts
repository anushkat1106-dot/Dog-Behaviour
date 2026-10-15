import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export function usePageSEO({
  title,
  description,
  canonicalPath,
  keywords,
  ogType = 'website',
  schema
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description (Honest, click-worthy, natural keyword density)
    setMetaTag('name', 'description', description);

    // 3. Keywords Meta
    if (keywords && keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // 4. Canonical URL
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://caninemind.app';
    const cleanPath = canonicalPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const fullCanonicalUrl = `${origin}${cleanPath}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 5. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:site_name', 'CanineMind - Dog Behaviour & Training');

    // 6. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);

    // 7. Schema.org JSON-LD Structured Data
    const defaultSchema = schema || {
      '@context': 'https://schema.org',
      '@type': ogType === 'article' ? 'Article' : 'WebPage',
      name: title,
      description: description,
      url: fullCanonicalUrl,
      publisher: {
        '@type': 'Organization',
        name: 'CanineMind Dog Behaviour Institute',
        url: origin
      }
    };

    let scriptTag = document.getElementById('seo-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(defaultSchema);

  }, [title, description, canonicalPath, keywords, ogType, schema]);
}
