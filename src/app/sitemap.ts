import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vweb.dev';
  
  // Main pages
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
    '/pricing',
    '/team',
    '/design',
    '/build',
    '/grow',
    '/automate',
    '/integrate',
    '/assist',
    '/learn',
    '/marketplace',
    '/support',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
