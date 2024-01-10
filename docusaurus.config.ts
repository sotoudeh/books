import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'کتاب‌کده',
    tagline: 'مجموعه‌ای از بهترین کتاب‌ها در دسته‌بندی‌های متنوع',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://books.bijanprogrammer.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'BijanProgrammer', // Usually your GitHub org/user name.
    projectName: 'books', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/BijanProgrammerWebsites/books/tree/master/',
                    path: 'books',
                    routeBasePath: 'books',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        // image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'کتاب‌کده',
            logo: {
                alt: '',
                src: 'img/logo.svg',
                srcDark: 'img/logo-dark.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'booksSidebar',
                    position: 'left',
                    label: 'کسب‌وکار',
                },
                {
                    href: 'https://github.com/BijanProgrammerWebsites/books/',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'دسته‌بندی‌ها',
                    items: [
                        {
                            label: 'کسب‌وکار',
                            to: '/books/business',
                        },
                    ],
                },
                {
                    title: 'بیشتر',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/BijanProgrammerWebsites/books/',
                        },
                    ],
                },
            ],
            copyright: 'تمامی حقوق مادی و معنوی این سایت متعلق به bijanprogrammer.com می‌باشد.',
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
