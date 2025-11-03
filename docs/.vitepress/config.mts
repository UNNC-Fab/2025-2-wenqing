import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/2025-2-wenqing/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Coursework', link: '/OpenSource'},
    ],

    sidebar: [
      {
        text: 'Coursework',
        items: [
          { text: 'HUAWEI development language and programming environment', link: '/HUAWEI' },
          { text: 'OpenSource', link: '/OpenSource' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
