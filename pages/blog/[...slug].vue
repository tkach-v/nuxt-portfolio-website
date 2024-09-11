<template>
  <article class="prose dark:prose-invert prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none">
    <ContentDoc v-slot="{doc}">
      <div class="grid grid-cols-6 gap-16">
        <div :class="{'col-span-4': doc.toc, 'col-span-6': !doc.toc}">
          <ContentRenderer :value="doc" />
        </div>
        <div
          v-if="doc.toc"
          class="col-span-2 not-prose"
        >
          <aside class="sticky top-8">
            <div class="text-2xl font-semibold mb-2">Table of contents</div>
            <nav>
              <TableOfContentsLinks :links="doc.body.toc.links" :active-id="activeId" />
            </nav>
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
 const activeId = ref<string | null>(null);

onMounted(() => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break
      }
    }
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })

  const elements = document.querySelectorAll('h2, h3')

  for (const element of elements) {
    observer.observe(element)
  }

  onBeforeMount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>
