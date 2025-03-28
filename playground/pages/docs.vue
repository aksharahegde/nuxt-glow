<script setup lang="ts">
const { data: docs }: { data: any } = await useAsyncData('docs', () => queryCollection('docs').first())

useSeoMeta({
  title: docs.value?.title,
  description: docs.value?.description,
});
</script>

<template>
  <div class="flex flex-col gap-4 max-w-4xl mx-auto px-4 py-10">
    <ContentRenderer
      v-if="docs"
      :value="docs"
      class="prose prose-invert"
    />
    <div v-else>
      Docs not found
    </div>
  </div>
</template>
