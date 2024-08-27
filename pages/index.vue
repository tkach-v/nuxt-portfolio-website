<template>
  <div>Hello from the main page!</div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Main Page',
  description: 'This is the main page',
  ogTitle: 'Main Page',
  twitterTitle: 'Main Page',
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ]
})
</script>