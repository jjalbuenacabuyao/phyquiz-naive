<script setup lang="tsx">
import simulations from '@/content/simulations.json'

definePage({
  name: 'Simulations',
})

const selected = ref(undefined)
const show = computed({
  get() {
    return !!selected.value
  },
  set(value) {
    if (!value)
      selected.value = undefined
  },
})
</script>

<template>
  <div class="p-4">
    <button v-for="item in simulations" :key="item.id" class="flex flex-col items-center rounded-xl bg-gray-600" @click="selected = item.id">
      <img class="rounded-t-xl" :src="item.image">
      <div class="flex flex-col justify-center">
        <h2 class="py-4 text-center text-xl font-semibold">
          {{ item.title }}
        </h2>
      </div>
    </button>
  </div>

  <n-drawer v-model:show="show" height="100%" placement="top">
    <n-drawer-content body-content-style="padding: 0" closable>
      <iframe
        allowfullscreen
        class="h-full w-full"
        src="https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html"
      />
    </n-drawer-content>
  </n-drawer>
</template>
