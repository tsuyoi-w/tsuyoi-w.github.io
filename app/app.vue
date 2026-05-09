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
  title: config.title,
  
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

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5em 0;
}

.prose th,
.prose td {
  padding: 0.6em 1em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: left;
  height: unset !important;
}

.prose th {
  background: #1a1a1a;
  font-weight: 600;
}

/* Blockquote */
.prose blockquote {
  border-left: 4px solid white;
  border-right: none !important;
  border-top: none !important;
  border-bottom: none !important;
  padding: 0.75em 1.25em;
  margin: 1.5em 0;
  color: #aaa;
  font-style: italic;
  height: unset !important;
}
</style>
