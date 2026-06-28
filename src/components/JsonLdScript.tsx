import { generateWebsiteJsonLd } from '@/lib/jsonLd'

export function JsonLdScript({ baseUrl }: { baseUrl: string }) {
  const websiteJsonLd = generateWebsiteJsonLd(baseUrl)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
    />
  )
}
