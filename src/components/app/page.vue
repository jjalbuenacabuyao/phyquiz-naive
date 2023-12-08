<script setup lang="ts">
</script>

<template>
  <div class="fixed inset-0">
    <n-layout-header bordered class="flex h-14 items-center">
      <i-arrow-narrow-left />
    </n-layout-header>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
