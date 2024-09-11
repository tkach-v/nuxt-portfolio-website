<template>
  <article class="prose dark:prose-invert prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none">
    <ContentDoc>
      <template #not-found>
        <h1>Blog post not found (404)</h1>
      </template>
      <template #default="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-6 md:col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div
            v-if="doc.toc"
            class="col-span-2 not-prose hidden md:block"
          >
            <aside class="sticky top-8">
              <div class="text-2xl font-semibold mb-2">
                Table of contents
              </div>
              <nav>
                <TableOfContentsLinks
                  :links="doc.body.toc.links"
                  :active-id="activeId"
                />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
const activeId = ref<string | null>(null)

onMounted(() => {
  const elements = Array.from(document.querySelectorAll('h2, h3'))

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
  )

  elements.forEach(element => observer.observe(element))

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>
