import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fablab Project",
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
          { text: 'Arduino', link: '/Arduino' },
          { text: 'CAD', link: '/CAD' },
          { text: 'Project management', link: '/Project management' },
          { text: '3D print', link: '/3D print' },
          { text: 'Laser Cutting', link: '/Laser Cutting' },
          { text: 'PCB Manufacutre', link: '/PCB Manufacutre' },
          { text: 'Molding and Casting', link: '/Molding and Casting' },
          { text: 'Processing', link: '/Processing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
