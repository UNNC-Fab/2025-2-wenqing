import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fablab Project",
  description: "A VitePress Site",
  base: '/2025-2-wenqing/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coursework', link: '/OpenSource'},
      { text: 'Fablab background', link: '/Fablab background' },
    ],

    sidebar: [
      {
        text: 'Coursework',
        items: [
          { text: 'HUAWEI development language and programming environment', link: '/HUAWEI' },
          { text: 'OpenSource', link: '/OpenSource' },
          { text: 'Arduino', link: '/Arduino' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
