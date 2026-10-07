/**
 * Single source of truth for all route-specific SEO metadata and Schema.org structured data.
 * Used by:
 * 1) scripts/prerender.mjs at build time (to inject static heads for crawlers & Hostinger .html files)
 * 2) MainLayout.jsx at runtime (to dynamically update document metadata on client-side SPA transitions)
 */

export const SITE_URL = "https://unitefornation.com";
export const SITE_NAME = "Unite For Nation";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const ROUTES = {
  "/": {
    path: "/",
    title: "Unite for Nation | Human Rights Organization & Legal Support in India",
    description:
      "Unite for Nation is a human rights organization providing affordable legal support to people facing false accusations, wrongful criminal cases and injustice across India.",
    canonical: `${SITE_URL}/`,
    noindex: false,
  },
  "/about": {
    path: "/about",
    title: "About Us | Unite for Nation Human Rights Foundation",
    description:
      "Learn about Unite for Nation, our mission to defend individuals falsely accused of crimes, our leadership, and our commitment to justice and human rights.",
    canonical: `${SITE_URL}/about`,
    noindex: false,
  },
  "/gallery": {
    path: "/gallery",
    title: "Fieldwork & Event Gallery | Unite for Nation",
    description:
      "Explore visual records and documentation of legal awareness camps, community consultations, and foundation initiatives across India.",
    canonical: `${SITE_URL}/gallery`,
    noindex: false,
  },
  "/contact": {
    path: "/contact",
    title: "Contact Us | Legal Assistance Desk | Unite for Nation",
    description:
      "Connect with Unite for Nation for confidential legal support. Access our 24/7 emergency helpline, secretariat office in New Delhi, or WhatsApp desk.",
    canonical: `${SITE_URL}/contact`,
    noindex: false,
  },
  "/donate": {
    path: "/donate",
    title: "Donate | Support Legal Aid for the Wrongly Accused | Unite for Nation",
    description:
      "Support Unite for Nation's mission to provide legal aid, emergency bail assistance and human rights protection to individuals facing false accusations.",
    canonical: `${SITE_URL}/donate`,
    noindex: false,
  },
};

/**
 * Returns SEO metadata object for any pathname.
 * Handles trailing slashes, clean routes, and fallbacks to 404.
 */
export function getRouteSeo(pathname = "/") {
  const clean = pathname.split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";
  if (ROUTES[clean]) {
    return ROUTES[clean];
  }
  return {
    path: clean,
    title: "Page Not Found — Unite for Nation",
    description: "The page you requested was not found. Please return to the Unite for Nation homepage.",
    canonical: "",
    noindex: true,
  };
}

/**
 * Generates verified, valid Schema.org structured data (JSON-LD) for each route.
 * Strictly uses verified factual information only (no fabricated reviews, ratings, or profiles).
 */
export function buildJsonLd(seo) {
  if (seo.noindex || !seo.path || seo.path === "/404") {
    return null;
  }

  const organizationSchema = {
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    "name": SITE_NAME,
    "legalName": "Unite For Nation Human Rights Foundation",
    "url": SITE_URL,
    "logo": DEFAULT_OG_IMAGE,
    "image": DEFAULT_OG_IMAGE,
    "description":
      "A registered human rights organization defending innocent individuals against false accusations, wrongful criminal cases, and legal injustice across India.",
    "foundingDate": "2021",
    "founder": {
      "@type": "Person",
      "name": "Dr. Qasim Chaudhary",
      "jobTitle": "Founder & Chairman",
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-29 Batla House Chowk Jamia Nagar Okhla",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110025",
      "addressCountry": "IN",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9621555551",
        "contactType": "Emergency Helpline",
        "availableLanguage": ["Hindi", "English"],
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9452900007",
        "contactType": "WhatsApp Support",
        "availableLanguage": ["Hindi", "English"],
      },
    ],
    "sameAs": [
      "https://www.facebook.com/share/1Md2dFpnck/",
      "https://www.instagram.com/unitefornationorg/",
      "https://x.com/Unite4NationOrg",
      "https://www.youtube.com/channel/UCBEFl7KofquOu8biYK_YMrQ",
    ],
  };

  if (seo.path === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": SITE_NAME,
          "description": seo.description,
          "publisher": { "@id": `${SITE_URL}/#organization` },
          "inLanguage": "en-IN",
        },
      ],
    };
  }

  if (seo.path === "/about") {
    return {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": seo.title,
      "url": seo.canonical,
      "description": seo.description,
      "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME },
      "mainEntity": organizationSchema,
    };
  }

  if (seo.path === "/gallery") {
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": seo.title,
      "url": seo.canonical,
      "description": seo.description,
      "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME },
      "publisher": organizationSchema,
    };
  }

  if (seo.path === "/contact") {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": seo.title,
      "url": seo.canonical,
      "description": seo.description,
      "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME },
      "mainEntity": organizationSchema,
    };
  }

  if (seo.path === "/donate") {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "url": seo.canonical,
      "description": seo.description,
      "isPartOf": { "@type": "WebSite", "url": SITE_URL, "name": SITE_NAME },
      "publisher": organizationSchema,
    };
  }

  return null;
}

/**
 * Client-side runtime updater for document metadata when navigating between routes.
 */
export function applyClientSeo(pathname = "/") {
  if (typeof document === "undefined") return;
  const seo = getRouteSeo(pathname);

  // Document Title
  document.title = seo.title;

  // Description
  let descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) {
    descMeta.setAttribute("content", seo.description);
  }

  // Robots
  let robotsMeta = document.querySelector('meta[name="robots"]');
  if (robotsMeta) {
    robotsMeta.setAttribute("content", seo.noindex ? "noindex, follow" : "index, follow");
  }

  // Canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    if (seo.canonical) {
      canonicalLink.setAttribute("href", seo.canonical);
    }
  }

  // Open Graph
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", seo.title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", seo.description);

  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    if (seo.canonical) ogUrl.setAttribute("content", seo.canonical);
  }

  // Twitter
  let twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", seo.title);

  let twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute("content", seo.description);

  // JSON-LD structured data
  const jsonLd = buildJsonLd(seo);
  let scriptTag = document.querySelector('script[data-seo-jsonld="true"]');
  if (jsonLd) {
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      scriptTag.setAttribute("data-seo-jsonld", "true");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);
  } else if (scriptTag) {
    scriptTag.remove();
  }
}
