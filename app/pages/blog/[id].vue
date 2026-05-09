<template>
  <div>
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>Chargement...</div>
  </div>
</template>

<script setup>
const route = useRoute();
const posts = await queryCollection("articles").order("date", "DESC").all();

const title = ref(posts.map(post => post.title))

console.log(title[0])

const getPost = async () => {
  for (let post of posts) {
    if (post.title == route.params.id) {
        return post
    }
  }
};

const post = await getPost();
</script>
