// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MapProxy im Praxiseinsatz',
  tagline: 'FOSSGIS Workshop',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/MapProxy_Workshop_Praxiseinsatz',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'terrestris', // Usually your GitHub org/user name.
  projectName: 'MapProxy_Workshop_Praxiseinsatz', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/mapproxy.png',
      navbar: {
        title: 'MapProxy im Praxiseinsatz',
        logo: {
          alt: 'MapProxy logo',
          src: 'img/mapproxy.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction/intro',
            position: 'left',
            label: 'Workshop',
          },
          {
            type: 'html',
            position: 'right',
            value: `<div class="header-logo-right">` +
            `<img height="32px" src="/MapProxy_Workshop_Praxiseinsatz/img/fossgis_logo.png" />` +
            `<img height="32px" src="/MapProxy_Workshop_Praxiseinsatz/img/logo_terrestris_small3.png" /></div>`
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/terrestris/MapProxy_Workshop_Praxiseinsatz',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} @terrestris. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
    }),
};

module.exports = config;
