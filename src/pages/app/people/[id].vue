<script setup lang="tsx">
import people from '@/content/people.json'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="p-4">
    <router-link v-for="item in people" class="mb-3" :to="`/people/${item.id}`">
      <div class="flex rounded-xl bg-gray-600">
        <img class="rounded-xl object-cover object-top" :src="item.front">

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
