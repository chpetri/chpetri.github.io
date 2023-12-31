import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://chpetri.github.io",
  base: "/chpetri.github.io/",
  integrations: [starlight({
    title: 'My Study Notes',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      autogenerated: {
        directory: 'guides'
      },
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
    }, {
      label: 'Comptia',
      autogenerate: {
        directory: 'comptia'
      }
    }]
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  )]
});
