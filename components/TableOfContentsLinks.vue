<template>
  <ul>
    <li
      v-for="link in links"
      :key="link.id"
    >
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4': level, 'text-green-600 dark:text-green-400': activeId === link.id }"
      >
        {{ link.text }}
      </NuxtLink>
      <TableOfContentsLinks
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { TocLink } from '@nuxt/content'

type Props = {
  links?: TocLink[]
  level?: number
  activeId?: string | null
}

withDefaults(defineProps<Props>(), {
  level: 0,
  activeId: null,
})

const route = useRoute()
</script>
