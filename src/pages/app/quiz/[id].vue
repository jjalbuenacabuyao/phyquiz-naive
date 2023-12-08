<script setup lang="tsx">
import questions from '@/content/quiz/kinematics.json'

const route = useRoute()
const router = useRouter()
const quizId = route.params.id

const randomizedQuestions = questions.sort(() => Math.random() - 0.5)
const quizState = ref([])
const selectedAnswer = ref()
const currentQuestion = ref(randomizedQuestions[0])

async function next() {
  quizState.value.push({
    ...currentQuestion.value,
    answer: selectedAnswer.value,
  })
  selectedAnswer.value = undefined
  if (quizState.value.length === randomizedQuestions.length) {
    // Use crypto to generate UUID
    const id = crypto.randomUUID()
    const status = {
      id,
      state: quizState.value,
      quiz: quizId,
      createdAt: new Date().toISOString(),
    }

    const history = JSON.parse(localStorage.getItem('history') || '[]')
    history.push(status)
    localStorage.setItem('history', JSON.stringify(history))

    await nextTick()
    router.push(`/history/${id}`)
  }
  else {
    currentQuestion.value = randomizedQuestions[quizState.value.length]
  }
}
</script>

<template>
  <div class="p-4">
    <div class="text-gray-400">
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
