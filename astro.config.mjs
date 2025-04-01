import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// // Define or import locales
// const locales = {
//     en: 'English',
//     fr: 'German',
//     // Add other locales as needed
// };

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Starlight',
            logo: {
                light: '/src/assets/logo-light.svg',
                dark: '/src/assets/logo-dark.svg',
                replacesTitle: true,
            },
            social: {
                github: 'https://github.com/EvickaStudio',
            },
            customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],

            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        { label: 'Moodle Mate', link: '/guides/moodle-mate/' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { 
                        directory: 'reference',
                        order: ['installing', 'configuration', 'usage', 'troubleshooting']
                    }
                },
            ],
        }),
    ],
});
