<template>
  <section
    v-if="status === 'error'"
    class="text-red-600 font-semibold"
  >Error happened</section>
  <section v-else-if="status === 'loading'">Loading...</section>
  <section v-else>
    <ul class="grid grid-cols-1">
      <li
        v-for="repository in repos"
        :key="repository.id"
        class="border border-gray-200 rounded-sm p-4 hover:bg-grey-100 font-mono"
      >
        <a
          :href="repository.html_url"
          target="_blank"
        >
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">{{ repository.name }}</div>
            <div>{{ repository.stargazers_count }} ★</div>
          </div>
          <p class="text-sm">{{ repository.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
const { data, status } = useFetch('https://api.github.com/users/tkach-v/repos')

const repos = computed(() => {
  return data.value.sort((a, b) => b.stargazers_count - a.stargazers_count)
})
</script>