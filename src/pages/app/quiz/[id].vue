<script setup lang="tsx">
//@ts-nocheck
import quizzes from '@/content/quizzes'

const route = useRoute()
const router = useRouter()
const quizId = route.params.id
const questions = quizzes[quizId].questions

const randomizedQuestions = questions.map((q, i) => ({ ...q, id: i })).sort(() => Math.random() - 0.5)
const quizState = ref<Array<{
  questionNumber: number
  answer: string
}>>([])
const selectedAnswer = ref()
const currentQuestion = ref(randomizedQuestions[0])
const message = useMessage()

async function next() {
  quizState.value.push({
    questionNumber: currentQuestion.value.id,
    answer: selectedAnswer.value,
  })
  selectedAnswer.value = undefined
  if (quizState.value.length === randomizedQuestions.length) {
    // Use crypto to generate UUID
    const id = crypto.randomUUID()
    const status = {
      id,
      state: quizState.value,
      quizId,
      createdAt: new Date().toISOString(),
      score: quizState.value.reduce((acc, curr) => {
        const question = questions[curr.questionNumber]
        const correctAnswer = question.choices.find(c => c.correct)
        if (curr.answer === correctAnswer.text)
          return acc + 1
        return acc
      }, 0),
    }

    const history = JSON.parse(localStorage.getItem('history') || '[]')
    history.push(status)
    localStorage.setItem('history', JSON.stringify(history))

    await nextTick()
    message.success('Quiz completed!')
    router.push(`/history/${id}`)
  }
  else {
    currentQuestion.value = randomizedQuestions[quizState.value.length]
  }
}
</script>

<template>
  <div class="p-4">
    <div class="text-gray-500 dark:text-gray-400">
      Question {{ quizState.length + 1 }}/{{ randomizedQuestions.length }}
    </div>
    <p class="mt-2 text-xl">
      {{ currentQuestion?.question }}
    </p>
    <n-radio-group v-if="currentQuestion" v-model:value="selectedAnswer" class="mt-4" name="choices" size="large">
      <div class="flex flex-col gap-3">
        <n-radio
          v-for="choice in currentQuestion.choices"
          :key="choice.text"
          :label="choice.text"
          :value="choice.text"
        />
      </div>
    </n-radio-group>
    <div class="mt-4 flex justify-end">
      <n-button :disabled="!selectedAnswer" icon-placement="right" type="primary" @click="next">
        <template #icon>
          <i-arrow-narrow-right />
        </template>

        {{ quizState.length + 1 === randomizedQuestions.length ? 'Finish' : 'Next' }}
      </n-button>
    </div>
  </div>
</template>
