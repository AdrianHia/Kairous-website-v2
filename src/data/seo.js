// data/seo.js — SEO metadata + SEOHead component
import { useEffect } from "react";
import { PAGES } from "./constants";

// ============================================================
// SEO + AI-SEARCH OPTIMIZATION
// ============================================================
export const SEO_DATA = {
  [PAGES.HOME]: {
    title: "Kairous Capital | Cross-Border PE & VC Fund — Malaysia, SEA & China",
    description: "Kairous Capital is a leading cross-border private equity and venture capital firm headquartered in Malaysia, investing across Southeast Asia and China. Managing USD 200M+ AUM across 6 funds.",
    keywords: "Kairous Capital, venture capital Malaysia, private equity Southeast Asia, cross-border investment China SEA, VC fund Malaysia, PE fund ASEAN",
  },
  [PAGES.ABOUT]: {
    title: "About Kairous Capital | Regional PE/VC Firm with China-SEA Expertise",
    description: "Founded in 2015, Kairous Capital bridges Southeast Asia and Greater China through strategic capital, cross-border networks, and hands-on value creation. Offices in KL, Singapore, Shanghai and Hong Kong.",
    keywords: "about Kairous Capital, Joseph Lee Kairous, VC firm Malaysia, cross-border investment firm, Southeast Asia China fund",
  },
  [PAGES.VC]: {
    title: "Venture Capital | Kairous Capital — Series A to C Investments in SEA & China",
    description: "Kairous Capital's venture capital strategy targets early-stage technology companies at Series A and beyond across fintech, digital health, e-commerce and edutech in Southeast Asia and China.",
    keywords: "venture capital Malaysia, Series A investment SEA, fintech VC, digital health investment, e-commerce fund Southeast Asia",
  },
  [PAGES.PE]: {
    title: "Private Equity | Kairous Capital — SME Transformation Fund Malaysia",
    description: "Kairous Capital's PE strategy partners with profitable Malaysian SMEs to unlock scale through technology adoption, AI integration, and cross-border expansion into ASEAN.",
    keywords: "private equity Malaysia, SME fund Malaysia, PE fund ASEAN, SME transformation, MYR 10M 40M investment Malaysia",
  },
  [PAGES.PORTFOLIO]: {
    title: "Portfolio | Kairous Capital — Investments Across SEA & China",
    description: "Explore Kairous Capital's portfolio of 20+ companies spanning fintech, digital health, e-commerce, drone tech, creator economy and manufacturing across Southeast Asia and China.",
    keywords: "Kairous Capital portfolio, Aonic, Coolmate, Mantayay, PangoCDP, Pulsifi, iPayLinks, Kairous investments",
  },
  [PAGES.TEAM]: {
    title: "Team | Kairous Capital — Partners & Investment Professionals",
    description: "Meet the Kairous Capital team — experienced investment professionals with deep expertise in cross-border PE/VC, technology, and operational value creation across Asia.",
    keywords: "Kairous Capital team, Joseph Lee, Adrian Hia, See Toh Kean Yaw, Wang Ti, Kairous partners",
  },
  [PAGES.MEDIA]: {
    title: "Media & News | Kairous Capital — Latest Investments & Market Insights",
    description: "Latest news, investment announcements and market insights from Kairous Capital and its portfolio companies across Southeast Asia and China.",
    keywords: "Kairous Capital news, VC news Malaysia, investment announcements, Aonic funding, Mantayay Series A, Coolmate Series C",
  },
  [PAGES.CONTACT]: {
    title: "Contact Kairous Capital | Kuala Lumpur, Singapore, Shanghai, Hong Kong",
    description: "Get in touch with Kairous Capital. We invest in founders and SMEs across Southeast Asia and China. Offices in Kuala Lumpur, Singapore, Shanghai and Hong Kong.",
    keywords: "contact Kairous Capital, enquiry Kairous, invest with Kairous, VC contact Malaysia, PE fund contact",
  },
};

export const SEOHead = ({ page }) => {
  useEffect(() => {
    const data = SEO_DATA[page] || SEO_DATA[PAGES.HOME];
    document.title = data.title;
    const setMeta = (name, content, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("description", data.description);
    setMeta("keywords", data.keywords);
    // Open Graph
    setMeta("og:title", data.title, true);
    setMeta("og:description", data.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Kairous Capital", true);
    setMeta("og:url", "https://kairous.com", true);
    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", data.title);
    setMeta("twitter:description", data.description);
    // AI search / LLM discovery hints
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large");
    setMeta("author", "Kairous Capital");
    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://kairous.com";
    // Structured data (JSON-LD) for AI search engines
    const existingLd = document.getElementById("ld-json");
    if (existingLd) existingLd.remove();
    const ld = document.createElement("script");
    ld.id = "ld-json";
    ld.type = "application/ld+json";
    const ldData = [
      {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Kairous Capital",
        "alternateName": "Kairous Capital Sdn Bhd",
        "description": "Regional private equity and venture capital firm headquartered in Malaysia, investing across Southeast Asia and China. Managing USD 200M+ AUM across 6 funds.",
        "url": "https://kairous.com",
        "logo": "https://kairous.com/logo.png",
        "foundingDate": "2015",
        "areaServed": ["Malaysia", "Singapore", "Vietnam", "Thailand", "Indonesia", "China", "Hong Kong"],
        "serviceType": ["Venture Capital", "Private Equity", "Cross-Border Investment"],
        "address": { "@type": "PostalAddress", "streetAddress": "Oval Tower @ Damansara, No. 685, Jalan Damansara", "addressLocality": "Kuala Lumpur", "addressRegion": "TTDI", "postalCode": "60000", "addressCountry": "MY" },
        "sameAs": ["https://www.linkedin.com/company/kairous-capital/", "https://kairous.com"],
        "contactPoint": { "@type": "ContactPoint", "email": "enquiry@kairous.com", "contactType": "Investment Enquiries" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Investment Strategies",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Venture Capital", "description": "Series A to C investments in technology companies across SEA and China" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Equity", "description": "SME transformation investments in Malaysia with MYR 10M–40M ticket size" }}
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kairous Capital",
        "url": "https://kairous.com",
        "potentialAction": { "@type": "SearchAction", "target": "https://kairous.com/?q={search_term_string}", "query-input": "required name=search_term_string" }
      },
      {
        "@context": "https://schema.org",
        "@type": "SiteLinksSearchBox",
        "url": "https://kairous.com",
        "potentialAction": { "@type": "SearchAction", "target": "https://kairous.com/?q={search_term_string}", "query-input": "required name=search_term_string" }
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Kairous Capital Site Pages",
        "itemListElement": [
          { "@type": "SiteLinksSearchBox", "url": "https://kairous.com" },
          { "@type": "ListItem", "position": 1, "name": "About Us", "url": "https://kairous.com/#about", "description": "Learn about Kairous Capital's cross-border investment strategy bridging SEA and China" },
          { "@type": "ListItem", "position": 2, "name": "Venture Capital", "url": "https://kairous.com/#vc", "description": "Series A to C technology investments across Southeast Asia and China" },
          { "@type": "ListItem", "position": 3, "name": "Private Equity", "url": "https://kairous.com/#pe", "description": "SME transformation fund investing in profitable Malaysian businesses" },
          { "@type": "ListItem", "position": 4, "name": "Portfolio", "url": "https://kairous.com/#portfolio", "description": "20+ portfolio companies across fintech, health tech, e-commerce and drone tech" },
          { "@type": "ListItem", "position": 5, "name": "Team", "url": "https://kairous.com/#team", "description": "Meet the Kairous Capital investment team" },
          { "@type": "ListItem", "position": 6, "name": "Media & News", "url": "https://kairous.com/#media", "description": "Latest investment announcements and market insights" },
          { "@type": "ListItem", "position": 7, "name": "Contact", "url": "https://kairous.com/#contact", "description": "Get in touch with Kairous Capital — Kuala Lumpur, Singapore, Shanghai, Hong Kong" }
        ]
      }
    ];
    ld.text = JSON.stringify(ldData);
    document.head.appendChild(ld);
  }, [page]);
  return null;
};
