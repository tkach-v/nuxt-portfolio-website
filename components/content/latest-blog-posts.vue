<template>
  <BlogPosts
    v-slot="{ posts }"
    :limit="limit"
  >
    <div
      v-for="post in posts"
      :key="post.id"
    >
      <NuxtLink :to="post._path">
        {{ post.title }}
      </NuxtLink>
    </div>
  </BlogPosts>
</template>

<script setup lang="ts">
type Props = {
  limit: string | null
}

withDefaults(defineProps<Props>(), {
  limit: null,
})
</script>
