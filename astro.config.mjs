import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Documentation',
            social: {
                github: 'https://github.com/EvickaStudio',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        { label: 'Moodle Mate', link: '/guides/moodle-mate/' },
                    ],
                },
                {
                    label: 'Reference',
					autogenerate: { directory: 'reference' },
                    sort: ['installing', 'configuration', 'usage', 'troubleshooting']
                },
            ],
        }),
    ],
});
