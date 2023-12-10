<script setup lang="tsx">
</script>

<template>
  <div class="p-4">
    <n-h1>Select quiz</n-h1>
    <router-link class="flex flex-col items-center gap-6 rounded-xl bg-gray-600 px-2 py-8" to="/quiz/kinematics">
      <i-angle class="h-24 w-24 shrink-0 rounded-full bg-red-500 p-4" />
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-center  text-xl font-semibold leading-none">
          Kinematics
        </h1>
      </div>
    </router-link>
    <router-link class="mt-3 flex flex-col items-center gap-6 rounded-xl bg-gray-600 px-2 py-8" to="/quiz/newtons-law">
      <i-arrows-exchange-2 class="h-24 w-24 shrink-0 rounded-full bg-blue-500 p-4" />
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-center  text-xl font-semibold leading-none">
          Newton's Laws of Motion
        </h1>
      </div>
    </router-link>
    <router-link class="mt-3 flex flex-col items-center gap-6 rounded-xl bg-gray-600 px-2 py-8" to="/quiz/random">
      <i-question-mark class="h-24 w-24 shrink-0 rounded-full bg-yellow-500 p-4" />
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-center  text-xl font-semibold leading-none">
          Random
        </h1>
      </div>
    </router-link>
  </div>
</template>
