import { siteConfig } from "../app/config/site"

export function getEnv(key: string, defaultValue: string): string {
  const value = process.env[key]
  return value || defaultValue
}

export function getSiteConfig() {
  return {
    name: getEnv("NEXT_PUBLIC_SITE_NAME", siteConfig.name),
    description: getEnv("NEXT_PUBLIC_SITE_DESCRIPTION", siteConfig.description),
    url: getEnv("NEXT_PUBLIC_SITE_URL", siteConfig.url),
    ogImage: siteConfig.ogImage,
    links: {
      facebook: getEnv("NEXT_PUBLIC_FACEBOOK_URL", siteConfig.links.facebook),
      instagram: getEnv("NEXT_PUBLIC_INSTAGRAM_URL", siteConfig.links.instagram),
      twitter: getEnv("NEXT_PUBLIC_TWITTER_URL", siteConfig.links.twitter),
      youtube: getEnv("NEXT_PUBLIC_YOUTUBE_URL", siteConfig.links.youtube),
    },
    contact: {
      email: getEnv("NEXT_PUBLIC_CONTACT_EMAIL", siteConfig.contact.email),
      phone: getEnv("NEXT_PUBLIC_CONTACT_PHONE", siteConfig.contact.phone),
      address: getEnv("NEXT_PUBLIC_CONTACT_ADDRESS", siteConfig.contact.address),
    },
    features: {
      enableDonations: getEnv("NEXT_PUBLIC_ENABLE_DONATIONS", "true") === "true",
      enableShop: getEnv("NEXT_PUBLIC_ENABLE_SHOP", "true") === "true",
      enableNewsletter: getEnv("NEXT_PUBLIC_ENABLE_NEWSLETTER", "true") === "true",
    },
  }
}
