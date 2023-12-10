<script setup lang="ts">
import topics from '@/content/topics.json'

const topic = topics.find(item => item.id === 'newtons-law')
</script>

<template>
  <div>
    <div class="w-full bg-gray-700">
      <div class="p-8">
        <i-arrows-exchange-2 class="h-24 w-24 shrink-0 rounded-full bg-blue-500 p-4" />

        <h1 class="mt-4 text-2xl font-medium">
          {{ topic.name }}
        </h1>

        <p class="mt-2">
          {{ topic.description }}
        </p>
      </div>
    </div>
    <div class="p-4">
      <router-link v-for="(item, i) in topic.lessons" class="mb-3 block bg-gray-700 p-4" :to="`/topic/newtons-law/${i + 1}`">
        <div class="text-gray-400">
          Lesson {{ i + 1 }}
        </div>
        <div class="text-xl font-medium">
          {{ item }}
        </div>
      </router-link>
    </div>
  </div>
</template>
