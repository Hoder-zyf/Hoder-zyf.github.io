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
  <button class="filter-btn active" data-filter="all">
    <i class="fas fa-list"></i> All Publications
  </button>
  <button class="filter-btn" data-filter="computer science">
    <i class="fas fa-laptop-code"></i> CS & Finance
  </button>
  <button class="filter-btn" data-filter="finance-only">
    <i class="fas fa-chart-line"></i> Finance Only
  </button>
</div>

<div class="publications" id="all-publications">
  {% bibliography %}
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.keyword-filter-buttons .filter-btn');
    const publications = document.querySelectorAll('#all-publications .bibliography li');

    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        publications.forEach((pub) => {
          if (filter === 'all') {
            pub.style.display = 'block';
          } else {
            const pubContent = pub.textContent.toLowerCase();
            let shouldShow = false;

            if (filter === 'computer science') {
              // Show CS & Finance interdisciplinary papers
              const hasCSKeywords = pubContent.includes('computer science') ||
                                   pubContent.includes('naacl') ||
                                   pubContent.includes('iclr') ||
                                   pubContent.includes('llm') ||
                                   pubContent.includes('language model') ||
                                   pubContent.includes('benchmark') ||
                                   pubContent.includes('multimodal') ||
                                   pubContent.includes('finllm') ||
                                   pubContent.includes('ucfe') ||
                                   pubContent.includes('twinmarket');
              shouldShow = hasCSKeywords;
            } else if (filter === 'finance-only') {
              // Show finance-only papers (exclude CS+Finance interdisciplinary)
              const hasCSKeywords = pubContent.includes('computer science') ||
                                   pubContent.includes('naacl') ||
                                   pubContent.includes('iclr') ||
                                   pubContent.includes('llm') ||
                                   pubContent.includes('language model') ||
                                   pubContent.includes('benchmark') ||
                                   pubContent.includes('multimodal') ||
                                   pubContent.includes('finllm') ||
                                   pubContent.includes('ucfe') ||
                                   pubContent.includes('twinmarket');
              // Check if paper has finance keywords but not CS keywords
              const hasFinanceKeywords = pubContent.includes('finance') ||
                                        pubContent.includes('financial') ||
                                        pubContent.includes('stock') ||
                                        pubContent.includes('market') ||
                                        pubContent.includes('investment') ||
                                        pubContent.includes('trading') ||
                                        pubContent.includes('economic');
              shouldShow = hasFinanceKeywords && !hasCSKeywords;
            }

            pub.style.display = shouldShow ? 'block' : 'none';
          }
        });
      });
    });
  });
</script>
