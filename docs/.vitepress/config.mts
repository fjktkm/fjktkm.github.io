import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FUJIOKA Takumu',
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
          { text: 'ホーム', link: '/' },
          { text: '学術', link: '/academics' },
          { text: 'クリエイティブ', link: '/creative' },
          { text: '開発', link: '/development' },
          { text: '技術趣味', link: '/tech_hobby' },
        ],
        sidebar: {
          '/creative/': [
            {
              text: 'クリエイティブ',
              items: [
                { text: '概要', link: '/creative/' },
                { text: 'NITMic', link: '/creative/nitmic' },
                { text: 'HYPERCUBE', link: '/creative/hypercube' },
                { text: '個人', link: '/creative/individual' },
                { text: 'その他', link: '/creative/other' },
              ],
            },
          ],
        },
      },
    },

    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Portfolio website of FUJIOKA Takumu',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Academics', link: '/en/academics' },
          { text: 'Creative', link: '/en/creative' },
          { text: 'Development', link: '/en/development' },
          { text: 'Tech Hobby', link: '/en/tech_hobby' },
        ],
        sidebar: {
          '/en/creative/': [
            {
              text: 'Creative',
              items: [
                { text: 'Overview', link: '/en/creative/' },
                { text: 'NITMic', link: '/en/creative/nitmic' },
                { text: 'HYPERCUBE', link: '/en/creative/hypercube' },
                { text: 'Individual', link: '/en/creative/individual' },
                { text: 'Other', link: '/en/creative/other' },
              ],
            },
          ],
        },
      },
    },
  },
})
