<script setup lang="ts">
import topics from '@/content/topics.json'

import p1 from '@/content/topic/newton/1.md'

const topic = topics.find(item => item.id === 'kinematics')
const route = useRoute()
const page = route.params.page
const pages = {
  1: p1,
}
</script>

<template>
  <div>
    <div class="w-full bg-gray-700">
      <div class="p-4">
        <h1 class="text-2xl font-medium">
          {{ topic.lessons[page - 1] }}
        </h1>
      </div>
    </div>
    <div class="prose prose-sm prose-invert mx-auto p-4">
      <component :is="pages[page]" />
    </div>
  </div>
</template>
