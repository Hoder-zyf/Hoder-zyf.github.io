---
layout: page
permalink: /publications/
title: publications
description: "* means Equal Contribution"
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<!-- Computer Science & Finance (Interdisciplinary) -->
<h2 class="category">Computer Science & Finance</h2>
<div class="publications">
{% bibliography --query @*[keywords ~= computer science] %}
</div>

<!-- Finance Only -->
<h2 class="category">Finance</h2>
<div class="publications">
{% bibliography --query @*[keywords ~= finance][keywords !~= computer science] %}
</div>

</div>
