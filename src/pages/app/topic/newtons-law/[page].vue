<script setup lang="ts">
//@ts-nocheck
import topics from '@/content/topics.json'

import p1 from '@/content/topic/newton/1.md'
import p2 from '@/content/topic/newton/2.md'
import p3 from '@/content/topic/newton/3.md'
import p4 from '@/content/topic/newton/4.md'

const topic = topics.find(item => item.id === 'newtons-law')
const route = useRoute()
const page = route.params.page
const pages = {
  1: p1,
  2: p2,
  3: p3,
  4: p4,
}
</script>

<template>
  <div>
    <div class="w-full bg-gray-200 dark:bg-gray-700">
      <div class="p-4">
        <h1 class="text-2xl font-medium">
          {{ topic.lessons[page - 1] }}
        </h1>
      </div>
    </div>
    <div class="dark:prose-invert mx-auto prose prose-sm p-4 dark:text-gray-200">
      <component :is="pages[page]" />
    </div>
  </div>
</template>
