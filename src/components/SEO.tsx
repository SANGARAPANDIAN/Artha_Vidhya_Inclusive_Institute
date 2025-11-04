import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonicalUrl?: string
  openGraphImage?: string
  type?: 'website' | 'article'
}

export default function SEO({ 
  title, 
  description, 
  canonicalUrl,
  openGraphImage = '/og-image.jpg',
  type = 'website'
}: SEOProps) {
  const siteName = 'Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods'
  const fullTitle = title === siteName ? title : `${title} - ${siteName}`

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artha Vidhya Inclusive Institute for Skill Development and Sustainable Livelihoods",
    "description": "Inclusive skill-based training institute ensuring independent, sustained living for physically and mentally disabled students",
    "url": "https://arthavidhya.org",
    "telephone": ["+91-8637692101", "+91-9629199942", "+91-9843333824"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Location to be provided",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "offers": {
      "@type": "EducationalOccupationalProgram",
      "name": "Inclusive Skill Development Programs",
      "description": "Specialized training programs for physically and mentally disabled students"
    }
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:image" content={openGraphImage} />
      <meta property="og:image:alt" content={`${siteName} - Inclusive Skill Development`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={openGraphImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Artha Vidhya Inclusive Institute" />
      
      {/* Accessibility */}
      <meta name="theme-color" content="#fdf2f2" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
