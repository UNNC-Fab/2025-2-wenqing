---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Fablab Project"
  text: "A VitePress Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Fablab background
      link: /Fablab background
    - theme: alt
      text: Arduino
      link: /Arduino

features:
  - title: AIM
    details: How to Make Almost Anything
  - title: DEVELOPMENT
    details: Inclusiveness, innovation and sustainable development
  - title: Concept
    details: Bits to Atoms
---

<style>
  /* 名称改成白色、去掉渐变 */
  :root{
    --vp-home-hero-name-color:#fff;
    --vp-home-hero-name-background:transparent;
  }
  /* 居中对齐 */
  .VPHomeHero .name,
  .VPHomeHero .text,
  .VPHomeHero .tagline,
  .VPHomeHero .actions{
    text-align:center;
    justify-content:center;
  }
  .VPHomeHero .main{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
</style>
