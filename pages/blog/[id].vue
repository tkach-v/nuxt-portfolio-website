<template>
  <div>
    Post with id: {{route.params.id}}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>