import React from "react";
import { CAMPUS_FAQS } from "@/data/content";

export function JsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Codegnan Labs",
    alternateName: "Codegnan Campus Labs",
    url: "https://labs.codegnan.com",
    logo: "https://labs.codegnan.com/codegnan_lab.png",
    image: "https://labs.codegnan.com/codegnan_lab.png",
    description:
      "Codegnan Labs brings hands-on technology experiences directly to college campuses. Hands-on Workshops, Bootcamps, and Hackathons for engineering colleges and students across India.",
    telephone: "+91-81212-89993",
    email: "labs@codegnan.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Prasad Naidu Complex, P.B. Siddhartha Bus Stop, Moghalrajpuram",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      postalCode: "520010",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/codegnan/",
      "https://www.instagram.com/codegnan/",
      "https://x.com/codegnan",
      "https://www.facebook.com/codegnan/",
      "https://codegnan.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-81212-89993",
      contactType: "customer service",
      email: "labs@codegnan.com",
      areaServed: "IN",
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Codegnan Labs",
    url: "https://labs.codegnan.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://labs.codegnan.com/#faq?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CAMPUS_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Course",
        position: 1,
        name: "Hands-on Technical Workshops",
        description:
          "2 to 6-hour intensive hands-on workshops in AI, Generative AI, Full Stack Web Development, and Python Data Engineering.",
        provider: {
          "@type": "Organization",
          name: "Codegnan Labs",
          sameAs: "https://labs.codegnan.com",
        },
      },
      {
        "@type": "Course",
        position: 2,
        name: "Campus Technical Bootcamps",
        description:
          "1 to 5-day deep technical bootcamps where student teams build, debug, and deploy production-ready applications to GitHub.",
        provider: {
          "@type": "Organization",
          name: "Codegnan Labs",
          sameAs: "https://labs.codegnan.com",
        },
      },
      {
        "@type": "Course",
        position: 3,
        name: "24-48 Hour Campus Hackathons",
        description:
          "High-energy competitive hackathons solving real-world challenges with round-the-clock industry mentorship and jury evaluation.",
        provider: {
          "@type": "Organization",
          name: "Codegnan Labs",
          sameAs: "https://labs.codegnan.com",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
    </>
  );
}
