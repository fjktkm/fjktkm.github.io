import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Takumu Fujioka',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  ],
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'orcid', link: 'https://orcid.org/0009-0005-0691-414X' },
      { icon: 'github', link: 'https://github.com/fjktkm' },
      { icon: 'zenn', link: 'https://zenn.dev/fjktkm' },
      { icon: 'note', link: 'https://note.com/fjktkm' },
      { icon: 'x', link: 'https://x.com/fjktkm' },
    ],
    outline: {
      level: [2, 3],
    },
    search: {
      provider: 'local',
    },
  },

  locales: {
    root: {
      label: '日本語',
      lang: 'ja-JP',
      description: '藤岡拓夢のポートフォリオサイト',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Academics', link: '/academics' },
          { text: 'Creative', link: '/creative' },
          { text: 'Development', link: '/development' },
          { text: 'Tech Hobby', link: '/tech_hobby' },
        ],
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Portfolio website of Takumu Fujioka',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Academics', link: '/en/academics' },
          { text: 'Creative', link: '/en/creative' },
          { text: 'Development', link: '/en/development' },
          { text: 'Tech Hobby', link: '/en/tech_hobby' },
        ],
      },
    },
  },
})
