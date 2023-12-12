<script setup lang="tsx">
import topics from '@/content/topics.json'

definePage({
  name: 'Topics',
})
</script>

<template>
  <div class="p-4">
    <router-link v-for="item in topics" class="mb-3 flex flex-col items-center gap-6 rounded-xl bg-gray-300 p-6 dark:bg-gray-600" :to="`/topic/${item.id}`">
      <i-angle v-if="item.id === 'kinematics'" class="h-24 w-24 shrink-0 rounded-full bg-red-500 p-4" />
      <i-arrows-exchange-2 v-else class="h-24 w-24 shrink-0 rounded-full bg-blue-500 p-4" />

      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-center  text-xl font-semibold leading-none">
          {{ item.name }}
        </h1>
        <p class="line-clamp-3">
          {{ item.description }}
        </p>
      </div>
    </router-link>
  </div>
</template>
