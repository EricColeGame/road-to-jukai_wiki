export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Road to Jukai Wiki",
  shortName: "Road to Jukai",
  logoText: "RJ",
  tagline: "Japanese Psychological Horror Taxi Adventure Guides & Walkthroughs",
  description: "Road to Jukai Wiki - Explore horror guides, passenger information, story details, gameplay tips, release updates, and everything about the Japanese taxi horror adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://road-to-jukai.wiki",
  supportEmail: "support@road-to-jukai.wiki",
  gameUrl: "https://store.steampowered.com/app/4124320/Road_to_Jukai/",
  heroVideoId: "bRsrlvAWkNk", // Road to Jukai Official Announcement Trailer
  social: {
    discord: "https://discord.gg/endflame",
    youtube: "https://www.youtube.com/@Endflame",
  },
  locales: ["en", "ja", "de", "es"],
  defaultLocale: "en",
};
