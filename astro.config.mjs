import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const canonicalUrl = process.env.READTHEDOCS_CANONICAL_URL;

export default defineConfig({
  site: canonicalUrl || 'http://localhost:4321',
  base: canonicalUrl ? new URL(canonicalUrl).pathname : '/',
  publicDir: './docs',
  integrations: [
    starlight({
      title: {
        en: 'ES/YUSO Documentation',
        fr: 'Documentation ES/YUSO',
      },
      description: 'Documentation for the ES/YUSO fast electric charging station search service.',
      logo: { src: './docs/assets/esyuso-logo-dark.png', alt: 'ES/YUSO' },
      favicon: '/assets/stationsv2-32.png',
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
      },
      sidebar: [{
        label: 'Documentation',
        items: [
          { label: 'Introduction', slug: 'index' },
          { label: 'Changelog', slug: 'changelog' },
        ],
      }],
      social: [
        { icon: 'email', label: 'Contact ETHIC SEIDO', href: 'https://ethicseido.com/Shared/Contact' },
        { icon: 'external', label: 'Open ES/YUSO', href: 'https://ethicseido.com/Yuso/Yuso' },
      ],
    }),
  ],
});
