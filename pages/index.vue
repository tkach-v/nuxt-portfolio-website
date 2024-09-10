<template>
  <div>Hello from the main page!</div>
  <Projects />
</template>
<script setup lang="ts">
import Projects from "~/pages/projects.vue";

useSeoMeta({
  title: 'Main Page',
  description: 'This is the main page',
  ogTitle: 'Main Page',
  twitterTitle: 'Main Page',
})
</script>