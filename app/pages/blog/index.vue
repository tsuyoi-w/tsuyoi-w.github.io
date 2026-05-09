<template>
  <main class="blog-list">
    <header class="blog-header">
      <h1 class="blog-title">Blogs</h1>
      <p class="blog-subtitle">
        {{ posts.length }} article{{ posts.length > 1 ? "s" : "" }}
      </p>
    </header>
    <div v-if="AllTags" class="tags-filter">
      <button
        class="tag-btn"
        :class="{ active: !activeTag }"
        @click="activeTag = null"
      >
        Tous
      </button>
      <button
        v-for="tag in AllTags"
        :key="tag"
        class="tag-btn"
        :class="{ active: activeTag === tag }"
        @click="activeTag = tag"
      >
        {{ tag }}
      </button>
    </div>
    <ul class="posts-grid">
      <li v-for="post in filteredPosts" :key="post.slug" class="post-card">
        <NuxtLink :to="`/blog/${post.title}`" class="post-link">
          <div v-if="post.cover" class="post-cover">
            <img :src="post.cover" :alt="post.title" />
          </div>
          <div class="post-body">
            <div class="post-meta">
              <time v-if="post.dateFormatted" class="post-date">{{
                post.dateFormatted
              }}</time>
              <span v-for="tag in post.tags" :key="tag" class="post-tag">{{
                tag
              }}</span>
            </div>
            <h2 class="post-title">{{ post.title }}</h2>
            <p v-if="post.description" class="post-description">
              {{ post.description }}
            </p>
            <span class="post-read-more">Lire →</span>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <p v-if="filteredPosts.length === 0" class="no-posts">
      Aucun article dans cette catégorie.
    </p>
  </main>
</template>

<script setup>
const posts = await queryCollection("articles").order("date", "DESC").all();
posts.reverse();

const activeTag = ref(null);
const AllTags = [...new Set(posts.flatMap((post) => post.tags ?? []))];
const filteredPosts = computed(() =>
  activeTag.value
    ? posts.filter((p) => p.tags.includes(activeTag.value))
    : posts,
);

useSeoMeta({
  title: posts[0].title,
});
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
