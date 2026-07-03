import React from 'react';

export const SoftwareApplicationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vidyakrit School ERP",
    "operatingSystem": "Web, Windows, macOS, iOS, Android",
    "applicationCategory": "EducationalApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "125"
    },
    "offers": {
      "@type": "Offer",
      "price": "0", // Represents custom pricing/demo
      "priceCurrency": "INR"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
