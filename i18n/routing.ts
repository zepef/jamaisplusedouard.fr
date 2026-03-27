import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en", "de", "es", "ru", "ja", "it", "zh"],
  defaultLocale: "fr",
});
