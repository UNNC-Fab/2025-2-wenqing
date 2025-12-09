---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Fablab Project"
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
  :root{
    --vp-home-hero-name-color:#ffd700;
    --vp-home-hero-name-background:transparent;
  }
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
