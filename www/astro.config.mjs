import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import liciousI18n from "@astrolicious/i18n";

// import { sanityIntegration } from "@sanity/astro";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://test.com",
  output: "static",
  adapter: vercel(),
  integrations: [
    liciousI18n({
      defaultLocale: "fr",
      locales: ["fr", "de", "en"],
      strategy: "prefix",
      sitemap: true,
      // client: {
      //   data: true,
      //   paths: true,
      // },
      pages: {
        "a-propos": {
          de: "ueber-uns",
          en: "about-us"
        },
        "/blog/[slug]": {
          de: "/blog/[slug]",
          en: "/blog/[slug]",
        },
      }
    }), sanity(
      {
        projectId: 't9cmnozc',
        dataset: 'production',
        useCdn: false,
      }
    )]
});