# SEO Implementation Plan: Ranking in Patna

This plan outlines the professional implementation of Steps 2 through 6 from our SEO strategy, aimed at ranking for "website developer in patna", "school erp in patna", and related local keywords.

## User Review Required

> [!IMPORTANT]
> Please review the proposed directory structure for the new landing pages and the content strategy before we begin execution.

## Open Questions

1. **Schema Information:** For the Local Business JSON-LD schema, do you have a specific physical office address in Patna and a primary phone number we should use?
2. **Blog System:** Do you want us to set up a full MDX-based blog system under `/blog` for the content strategy, or just create standard static React pages for the articles right now?

## Proposed Changes

### 1. Dedicated Location & Service Landing Pages (Step 2)
We need to create hyper-targeted pages for the Patna keywords.

#### [NEW] src/app/patna/website-developer/page.tsx
- **Purpose:** Rank for "website developer in patna" and "website developer near me"
- **Content:** Tailored messaging for Patna businesses, highlighting local expertise, past projects in Bihar, and specific services like custom software and e-commerce.

#### [NEW] src/app/patna/school-erp/page.tsx
- **Purpose:** Rank for "school erp in patna"
- **Content:** Focus on problems faced by schools in Patna/Bihar and how Vidyakrit's ERP solves them.

---

### 2. On-Page SEO Optimization (Step 3)
We will update the global metadata and individual page metadata to target the desired keywords.

#### [MODIFY] src/app/layout.tsx
- Update the default `keywords` array to include: "Website Developer in Patna", "School ERP in Patna", "Software Company in Bihar".
- Ensure the description is more keyword-rich for the local area.

#### [MODIFY] src/app/products/school-erp/page.tsx
- Add a specific Next.js `metadata` export to this page focusing heavily on "School ERP" and "School Management System".
- Adjust existing `<h1>` and `<h2>` tags to include the target keywords naturally.

---

### 3. Schema Markup / JSON-LD (Step 4)
We will create reusable React components to inject JSON-LD schema into the pages, helping Google understand the business and products.

#### [NEW] src/components/seo/LocalBusinessSchema.tsx
- **Purpose:** Injects `LocalBusiness` schema with the Patna address, phone number, and organization details. This will be added to the main layout or homepage.

#### [NEW] src/components/seo/SoftwareApplicationSchema.tsx
- **Purpose:** Injects `SoftwareApplication` schema specifically for the School ERP product, including application categories, to be added to the School ERP page.

---

### 4. Content Strategy & Silos (Steps 5 & 6)
To support the content strategy, we need a place to publish SEO articles.

#### [NEW] src/app/blog/page.tsx
- Main blog listing page.

#### [NEW] src/app/blog/[slug]/page.tsx
- Dynamic route for individual blog posts (e.g., `/blog/how-much-does-a-website-cost-in-patna`).

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the new static pages and dynamic blog routes compile successfully without errors.
- Ensure the `sitemap.ts` picks up the new paths.

### Manual Verification
- Inspect the `<head>` of the pages to ensure `title`, `meta description`, and `<script type="application/ld+json">` are rendering correctly.
- Recommend using the **Google Rich Results Test** tool to validate the injected Schema markup post-deployment.
