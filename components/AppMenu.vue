<template>
  <nav class="font-mono">
    <ul class="flex space-x-5">
      <li>
        <NuxtLink
          to="/about"
          class="link"
        >About</NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/blog"
          class="link"
        >Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/projects"
          class="link"
        >Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .link {
    @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800;
  }
</style>
