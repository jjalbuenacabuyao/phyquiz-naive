<script setup lang="tsx">
import kinematics from '@/content/quiz/kinematics.json'

definePage({
  name: 'Quiz results',
})

const route = useRoute()
const history = JSON.parse(localStorage.getItem('history') || '[]')
const quizId: string = route.params.id

const quizzes = {
  kinematics: {
    name: 'Kinematics',
    questions: kinematics,
  },
}
const attempt = history.find((h: any) => h.id === quizId)
const quiz = quizzes[attempt.quizId]

// Calculate score
const score = attempt.state.reduce((acc: number, curr: any) => {
  const question = quiz.questions[curr.questionNumber]
  const correctAnswer = question.choices.find((c: any) => c.correct)
  if (curr.answer === correctAnswer.text)
    return acc + 1

  return acc
}, 0)
</script>

<template>
  <div class="w-full bg-gray-700">
    <div class="p-4">
      <h1 class="mt-2 text-2xl font-medium">
        {{ quiz.name }}
      </h1>
      <div class="mt-2 flex justify-between">
        <div>Score: {{ score }}/{{ quiz.questions.length }} (<span class="font-bold">{{ Number(score / quiz.questions.length * 100).toFixed(2) }}%</span>)</div>
        <div>
          {{ dayjs(attempt.createdAt).format('MMMM D, YYYY, h:mm A') }}
        </div>
      </div>
    </div>
  </div>

  <div class="p-4">
    <div v-for="(item, i) in quiz.questions" class="mb-3 bg-gray-700 p-4">
      <div class="flex justify-between">
        <div class="text-gray-400">
          Question {{ i + 1 }}
        </div>
        <div>
          <span v-if="item.choices.find((c: any) => c.correct).text === attempt.state.find((s: any) => s.questionNumber === i)?.answer" class="font-bold text-green-600">CORRECT</span>
          <span v-else class="font-bold text-red-600">WRONG</span>
        </div>
      </div>
      <p class="mt-2 text-lg">
        {{ item.question }}
      </p>
      <n-radio-group
        class="mt-2"
        disabled name="choices" size="large" :value="
          attempt.state.find((s: any) => s.questionNumber === i)?.answer
        "
      >
        <div class="flex flex-col gap-2">
          <n-radio
            v-for="choice in item.choices"
            :key="choice.text"
            :value="choice.text"
          >
            {{ choice.text }}

            <span class="text-bold">
              <span v-if="choice.correct" class="font-bold text-green-600">✓</span>
              <span v-else-if="attempt.state.find((s: any) => s.questionNumber === i)?.answer === choice.text" class="font-bold text-red-600">✗</span>
            </span>
          </n-radio>
        </div>
      </n-radio-group>
    </div>
  </div>
</template>
