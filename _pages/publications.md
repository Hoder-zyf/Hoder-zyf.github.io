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

<!-- Keyword Filter Buttons -->
<div class="keyword-filter-buttons mb-4">
  <button class="btn btn-sm btn-outline-primary active" data-filter="all">All Publications</button>
  <button class="btn btn-sm btn-outline-primary" data-filter="computer science">Computer Science & Finance</button>
  <button class="btn btn-sm btn-outline-primary" data-filter="finance-only">Finance Only</button>
</div>

<div class="publications" id="all-publications">
  <!-- All Publications (default view) -->
  <div class="publication-group" data-category="all">
    {% bibliography %}
  </div>
  
  <!-- Computer Science & Finance (Interdisciplinary) -->
  <div class="publication-group" data-category="computer science" style="display: none;">
    <h2 class="category">Computer Science & Finance</h2>
    {% bibliography --query @*[keywords ~= computer science] %}
  </div>

  <!-- Finance Only -->
  <div class="publication-group" data-category="finance-only" style="display: none;">
    <h2 class="category">Finance</h2>
    {% bibliography --query @*[keywords ~= finance][keywords !~= computer science] %}
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.keyword-filter-buttons button');
    const publicationGroups = document.querySelectorAll('.publication-group');

    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        // Hide all groups first
        publicationGroups.forEach((group) => {
          group.style.display = 'none';
        });

        // Show the selected group
        if (filter === 'all') {
          document.querySelector('[data-category="all"]').style.display = 'block';
        } else {
          document.querySelector(`[data-category="${filter}"]`).style.display = 'block';
        }
      });
    });
  });
</script>
