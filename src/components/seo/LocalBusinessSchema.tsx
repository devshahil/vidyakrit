import React from 'react';

export const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vidyakrit",
    "image": "https://vidyakrit.in/og-image.jpg",
    "@id": "https://vidyakrit.in",
    "url": "https://vidyakrit.in",
    "telephone": "+91-7856936201",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800030",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.600542,
      "longitude": 85.168961
    }
    
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
