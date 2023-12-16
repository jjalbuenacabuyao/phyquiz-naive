<script setup lang="tsx">
//@ts-nocheck
import simulations from '@/content/simulations.json'

definePage({
  name: 'Simulations',
})

const selected = ref<object>()
const show = ref(false)

function select(id: string) {
  selected.value = simulations.find((s: any) => s.id === id)
  show.value = true
}
</script>

<template>
  <div class="flex flex-col gap-3 p-4">
    <button v-for="item in simulations" :key="item.id" class="flex flex-col items-center rounded-xl bg-gray-300 dark:bg-gray-600" @click="select(item.id)">
      <img class="rounded-t-xl" :src="item.image">
      <div class="flex flex-col justify-center">
        <h2 class="py-4 text-center text-xl font-semibold">
          {{ item.title }}
        </h2>
      </div>
    </button>
  </div>

  <n-drawer v-model:show="show" height="100%" placement="bottom">
    <n-drawer-content body-content-style="padding: 0" closable :title="selected.title">
      <iframe
        allowfullscreen
        class="h-full w-full"
        :src="selected.url"
      />
    </n-drawer-content>
  </n-drawer>
</template>
