<script setup lang="tsx">
//@ts-nocheck
import topics from '@/content/topics.json'

definePage({
  name: 'Topics',
})
</script>

<template>
  <div class="p-4">
    <router-link v-for="item in topics" class="mb-3 flex flex-col items-center gap-6 rounded-xl bg-gray-300 p-6 dark:bg-gray-600" :to="`/topic/${item.id}`">
      <img v-if="item.id === 'kinematics'" :src="`/images/kinematics-icon.png`" class="h-24 w-24">
      <img v-else :src="`/images/newton-icon.png`" class="h-28 w-28">

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
