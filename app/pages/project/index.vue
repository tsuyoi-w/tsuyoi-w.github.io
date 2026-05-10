<template>
  <main class="blog-list">
    <header class="blog-header">
      <h1 class="blog-title" style="text-decoration: underline">Projects</h1>
    </header>
  </main>
</template>

<script setup>

</script>

<style scoped>
.blog-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.blog-header {
  margin-bottom: 3rem;
}

.blog-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin: 0 0 0.25rem;
}

.blog-subtitle {
  color: var(--color-text-muted, #888);
  font-size: 0.95rem;
  margin: 0;
}

/* Filtres */
.tags-filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
}

.tag-btn {
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  border: 1px solid var(--color-border, #e0e0e0);
  background: transparent;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.15s ease;
  color: inherit;
}

.tag-btn:hover,
.tag-btn.active {
  background: var(--color-accent, #111);
  color: #fff;
  border-color: var(--color-accent, #111);
}

/* Grille d'articles */
.posts-grid {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-card {
  border: 1px solid var(--color-border, #e8e8e8);
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.post-card {
  overflow: hidden; /* pas overflow: visible */
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-cover img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.post-body {
  padding: 1.5rem; /* assure qu'il y a bien du padding à gauche */
  overflow: hidden;
}

.post-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.post-date {
  font-size: 0.82rem;
  color: var(--color-text-muted, #888);
}

.post-tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: var(--color-tag-bg, #f0f0f0);
  color: var(--color-tag-text, #555);
}

.post-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.post-description {
  font-size: 0.95rem;
  color: var(--color-text-muted, #666);
  margin: 0 0 1rem;
  line-height: 1.6;
}

.post-read-more {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-accent, white);
}

.no-posts {
  color: var(--color-text-muted, #888);
  text-align: center;
  padding: 3rem 0;
}
</style>
