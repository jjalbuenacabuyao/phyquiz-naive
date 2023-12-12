<script setup lang="tsx">
import people from '@/content/people.json'

const route = useRoute()
const id = Number(route.params.id)

const person = people.find(item => item.id === id)
</script>

<template>
  <div>
    <img class="aspect-square w-full object-cover object-top" :src="person.head">
    <div class="w-full bg-gray-200 dark:bg-gray-700">
      <div class="p-4">
        <h1 class="text-2xl font-medium">
          {{ person.name }}
        </h1>
        <div>
          {{ person.origin }}, {{ person.period }}
        </div>

        <p class="mt-2">
          {{ person.summary }}
        </p>
      </div>
    </div>
    <div class="p-4">
      <div class="bg-gray-200 dark:bg-gray-700 p-3">
        <h2 class="flex items-center gap-3 text-lg">
          <i-bulb />
          Works
        </h2>
        <p class="mt-2">
          {{ person.works }}
        </p>
      </div>
      <div class="mt-4 bg-gray-200 dark:bg-gray-700 p-3">
        <h2 class="flex items-center gap-3 text-lg">
          <i-award />
          Holdings
        </h2>
        <p class="mt-2">
          {{ person.holdings }}
        </p>
      </div>
    </div>
  </div>
</template>
