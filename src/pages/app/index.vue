<script setup lang="tsx">
//@ts-nocheck
import topics from '@/content/topics.json'
import people from '@/content/people.json'

definePage({
  name: 'PhyQuiz',
})
</script>

<template>
  <div class="p-4">

    <div class="card flex-col">
      <h1 class="flex items-center gap-3 text-lg font-semibold">
        <i-book class="text-xl" />
        Topics
      </h1>
      <router-link v-for="item in topics" :to="`/topic/${item.id}`">
        <div class="flex rounded-xl bg-gray-300 p-4 dark:bg-gray-600">
          <img v-if="item.id === 'kinematics'" :src="`/images/kinematics-icon.png`" class="h-20 w-20">

          <img v-else :src="`/images/newton-icon.png`" class="h-24 w-24">

          <div class="ml-6 flex flex-col justify-center gap-2">
            <h1 class="text-xl font-semibold leading-none">
              {{ item.name }}
            </h1>
            <p class="line-clamp-2">
              {{ item.description }}
            </p>
          </div>
        </div>
      </router-link>
    </div>

    <div class="card mt-3 flex-col">
      <h1 class="flex items-center gap-3 text-lg font-semibold">
        <i-users class="text-xl" />
        People
      </h1>
      <router-link v-for="item in people" :to="`/people/${item.id}`">
        <div class="flex rounded-xl bg-gray-300 dark:bg-gray-600">
          <img class="h-28 w-28 rounded-l-xl object-cover object-top" :src="item.front">

          <div class="ml-6 flex flex-col justify-center">
            <h1 class="text-xl font-semibold leading-none">
              {{ item.name }}
            </h1>
            <div class="mt-1">
              "{{ item.title }}"
            </div>
            <div class="text-gray-500 dark:text-gray-400">
              {{ item.period }}
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <hr>

    <router-link class="card mt-3" to="/formulas">
      <i-math-symbols class="h-28 w-28 shrink-0 rounded-lg bg-white p-2 text-green-600" />
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none">
          Formulas
        </h1>
        <p>
          Quick reference for all the formulas you need to know.
        </p>
      </div>
    </router-link>

    <router-link class="card mt-3" to="/simulations">
      <i-bulb class="h-28 w-28 shrink-0 rounded-lg bg-white p-2 text-amber-500" />
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none">
          Online Simulations
        </h1>
        <p>
          Learn through exploration and discovery using PhET simulations.
        </p>
      </div>
    </router-link>

    <router-link class="card mt-2" to="/quiz">
      <img :src="`/images/PLAY.png`" class="h-28 w-28">
      <div class="flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none">
          Play the Quiz!
        </h1>
        <p>
          Test your knowledge about Kinematics and Newton's Laws of Motion
        </p>
      </div>
    </router-link>

  </div>
</template>

<style scoped>
.card {
  @apply flex rounded-lg gap-x-6 gap-y-3 bg-gray-200 dark:bg-gray-700 p-4;
}
</style>
