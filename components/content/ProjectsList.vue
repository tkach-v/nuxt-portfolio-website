<template>
  <div class="not-prose">
    <section
      v-if="status === 'error'"
      class="text-red-600 font-semibold"
    >
      Error happened
    </section>
    <section v-else-if="status === 'pending'">
      Loading...
    </section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li
          v-for="repository in repos"
          :key="repository.id"
          class="border border-gray-200 dark:border-gray-500 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
        >
          <a
            :href="repository.html_url"
            target="_blank"
            class="flex items-center justify-between text-sm"
          >
            <div>
              <div class="font-semibold">{{ repository.name }}</div>
              <p>{{ repository.description }}</p>
            </div>
            <div>{{ repository.stargazers_count }} ★</div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Repository } from '~/types'

const { data, status } = useFetch<Repository[]>('https://api.github.com/users/tkach-v/repos')

const repos = computed(() => {
  if (!data.value) return []
  return [...data.value].sort((a, b) => b.stargazers_count - a.stargazers_count)
})
</script>
