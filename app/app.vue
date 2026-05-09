<template>
  <div>
    <NuxtRouteAnnouncer />
    <Header />
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useAppConfig();
useSeoMeta({
  title: config.title
});
</script>

<style>
@font-face {
  font-family: "jet";
  src: url("/JetBrainsMono-Regular.ttf");
  font-weight: normal;
  font-style: normal;
}

*::-webkit-scrollbar {
  display: none;
}

* {
  background-color: black;
  text-decoration: none;
  color: white;
  font-family: "jet";
}
</style>
