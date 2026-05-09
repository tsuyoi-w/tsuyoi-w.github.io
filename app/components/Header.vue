<template>
  <nav>
    <NuxtLink to="/blog">Blogs</NuxtLink>
    <NuxtLink to="/"><img src="/Logo/t.png" alt="Logo T" /></NuxtLink>
    <NuxtLink to="/project">Project</NuxtLink>
  </nav>
</template>

<style>
nav {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  height: 50px;
  font-size: 30px;
  border-bottom: solid white 5px;
  overflow: hidden;
}
</style>
