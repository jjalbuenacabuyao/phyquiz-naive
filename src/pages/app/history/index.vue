<script setup lang="tsx">
import quizzes from '@/content/quizzes'

const history = JSON.parse(localStorage.getItem('history') || '[]')

definePage({
  name: 'Quiz hstory',
})
</script>

<template>
  <div class="p-4">
    <template v-if="history.length">
      <router-link v-for="item in history" class="mb-4 block bg-gray-200 dark:bg-gray-700" :to="`/history/${item.id}`">
        <div class="p-4">
          <h1 class="mt-2 text-2xl font-medium">
            {{ quizzes[item.quizId].name }}
          </h1>
          <div class="mt-2">
            {{ dayjs(item.createdAt).format('MMMM D, YYYY, h:mm A') }}
          </div>
          <div class="mt-2">
            Score: {{ item.score }}/{{ item.state.length }} (<span class="font-bold">{{ Number(item.score / item.state.length * 100).toFixed(2) }}%</span>)
          </div>
        </div>
      </router-link>
    </template>
    <template v-else>
      <div class="text-center">
        <h1 class="text-2xl font-medium">
          No history yet
        </h1>
        <p class="mt-2">
          You can start a quiz from the <router-link to="/quiz">
            quizzes page
          </router-link>
        </p>
      </div>
    </template>
  </div>
</template>
