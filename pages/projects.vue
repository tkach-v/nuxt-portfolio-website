<template>
  <div>
    <h2 class="text-2xl font-semibold mb-10">My GitHub projects:</h2>
    <ProjectsList/>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Projects',
  description: 'My Github projects',
})
</script>