import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vidyakrit.in';

  // Core pages
  const coreRoutes = [
    '',
    '/services',
    '/products/school-erp',
    '/portfolio',
    '/about',
    '/contact',
    '/careers',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  // Local SEO Pages (High Priority)
  const localRoutes = [
    '/patna/school-erp',
    '/patna/website-developer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Individual services
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
    priority: 0.8,
  }));

  // Content & Legal
  const contentRoutes = [
    '/blog/how-we-scaled-school-erp',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...coreRoutes, ...localRoutes, ...serviceRoutes, ...contentRoutes];
}
