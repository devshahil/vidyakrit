import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vidyakrit.in';

  // Core pages
  const routes = [
    '',
    '/services',
    '/products/school-erp',
    '/portfolio',
    '/about',
    '/contact',
    '/careers',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add individual services (assuming these paths exist or will exist)
  const serviceRoutes = [
    '/services/custom-software',
    '/services/web-development',
    '/services/mobile-apps',
    '/services/ui-ux-design',
    '/services/cloud-solutions'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes];
}
