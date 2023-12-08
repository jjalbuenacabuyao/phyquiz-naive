<script setup lang="ts">
import people from '@/content/people.json'

definePage({
  name: 'People',
})

const route = useRoute()
const { id } = route.params
</script>

<template>
  <div class="p-4">
    <router-link v-for="item in people" class="mb-3 block" :to="`/people/${item.id}`">
      <div class="flex rounded-xl bg-gray-600">
        <img class="h-28 w-28 rounded-l-xl object-cover object-top" :src="item.front">

        <div class="ml-4 flex flex-col justify-center">
          <h1 class="text-xl font-semibold leading-none">
            {{ item.name }}
          </h1>
          <div class="mt-1">
            "{{ item.title }}"
          </div>
          <div class="text-gray-400">
            {{ item.period }}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
