<template>
  <section class="nor-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div style="width: 50px">
        date
      </div>
      <div>title</div>
    </div>
    <ul class="p-0">
      <li
        v-for="post in posts"
        :key="post._path"
        class="p-0 list-none"
      >
        <NuxtLink
          :to="post._path"
          class="column no-underline hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            class="text-gray-500"
            style="width: 50px"
          >{{ post.year || '' }}</div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Blog } from '~/types'

const { data } = await useAsyncData(
  'blog',
  () => queryContent('/')
    .where({ _path: { $ne: '/blog', $contains: '/blog/' } })
    .only(['_path', 'title', 'publishedAt'])
    .sort({ publishedAt: -1 })
    .find(),
)

const posts = computed((): Blog[] => {
  if (!data.value) return []

  const results: Blog[] = []
  let lastYear = null

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    if (year !== lastYear) {
      (post as Blog).year = year
    }
    results.push(post as Blog)
    lastYear = year
  }

  return results
})
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>
