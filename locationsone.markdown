---
title: locationsone
layout: default
permalink: /locationsone
show-in-nav: false
menu-order: 3
---
<section class="banner-area-2 pt-200 px-5">
  <h5>Page Path: {{ page.path }}</h5>
  <h5>Page Permalink: {{ page.permalink }}</h5>
  <h5>Page URL: {{ page.url }}</h5>
  <h5>Page Relative URL: {{ page.url | relative_url}}</h5>
  <h5>Page Slug: {{ page.slug }}</h5>
</section>