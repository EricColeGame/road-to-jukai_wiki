import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const routing = defineRouting({
  locales: ["en", "ja", "de", "es"],
  defaultLocale: (siteConfig.defaultLocale as "en" | "ja" | "de" | "es") || "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
