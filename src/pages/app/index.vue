<script setup lang="tsx">
definePage({
  name: 'Home',
})
</script>

<template>
  <div class="p-4">
    <router-link class="card" to="/quizzes">
      <div class="h-28 w-28 shrink-0 rounded-lg bg-gray-600 pl-1 pt-2">
        <i-player-play-filled class="h-24 w-24 text-gray-500" />
      </div>
      <div class="ml-4 flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none">
          Play the Quiz!
        </h1>
        <p>
          Test your knowledge about Kinematics and Newton's Laws of Motion
        </p>
      </div>
    </router-link>
    <hr>
    <div class="card flex-col">
      <h1 class="flex items-center gap-3 text-lg font-semibold">
        <i-book class="text-xl" />
        Topics
      </h1>
      <div class="mt-3">
        <div class="flex rounded-xl bg-gray-600 p-2">
          <i-angle class="h-24 w-24 shrink-0 text-gray-500" />
          <div class="ml-6 flex flex-col justify-center gap-2">
            <h1 class="text-xl font-semibold leading-none">
              Kinematics
            </h1>
            <p>
              Test your knowledge about Kinematics and Newton's Laws of Motion
            </p>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex rounded-xl bg-gray-600 p-2">
          <i-angle class="h-24 w-24 shrink-0 text-gray-500" />
          <div class="ml-6 flex flex-col justify-center gap-2">
            <h1 class="text-xl font-semibold leading-none">
              Newton's Laws of Motion
            </h1>
            <p>
              Test your knowledge about Kinematics and Newton's Laws of Motion
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 flex-col">
      <h1 class="flex items-center gap-3 text-lg font-semibold">
        <i-users class="text-xl" />
        People
      </h1>
      <div class="mt-3">
        <div class="flex rounded-xl bg-gray-600 p-2">
          <i-angle class="h-24 w-24 shrink-0 text-gray-500" />
          <div class="ml-6 flex flex-col justify-center gap-2">
            <h1 class="text-xl font-semibold leading-none">
              Franz Reuleaux
            </h1>
            <p>
              Test your knowledge about Kinematics and Newton's Laws of Motion
            </p>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex rounded-xl bg-gray-600 p-2">
          <i-angle class="h-24 w-24 shrink-0 text-gray-500" />
          <div class="ml-6 flex flex-col justify-center gap-2">
            <h1 class="text-xl font-semibold leading-none">
              Isaac Newton
            </h1>
            <p>
              Test your knowledge about Kinematics and Newton's Laws of Motion
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 flex">
      <i-math-symbols class="h-28 w-28 shrink-0 rounded-lg bg-gray-600 p-2 text-gray-500" />
      <div class="ml-4 flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none">
          Formulas
        </h1>
        <p>
          Test your knowledge about Kinematics and Newton's Laws of Motion
        </p>
      </div>
    </div>
    <div class="card mt-3 flex">
      <i-math-symbols class="h-28 w-28 shrink-0 rounded-lg bg-gray-600 p-2 text-gray-500" />
      <div class="ml-4 flex flex-col justify-center gap-2">
        <h1 class="text-2xl font-semibold leading-none">
          Online Simulations
        </h1>
        <p>
          Test your knowledge about Kinematics and Newton's Laws of Motion
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply flex rounded-lg bg-gray-700 p-4;
}
</style>
