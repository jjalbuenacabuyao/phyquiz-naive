<script setup lang="tsx">
import questions from '@/content/quiz/kinematics.json'

const route = useRoute()
const id = route.params.id

const randomizedQuestions = questions.sort(() => Math.random() - 0.5)
const answers = ref([])
const selectedAnswer = ref()
const currentQuestion = computed(() => {
  return randomizedQuestions[answers.value.length]
})

function submitAnswer() {
  answers.value.push(selectedAnswer.value)
  selectedAnswer.value = undefined
}
</script>

<template>
  <div class="p-4">
    <div class="text-gray-400">
      Question {{ answers.length + 1 }}/{{ randomizedQuestions.length }}
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
      <n-button :disabled="!selectedAnswer" icon-placement="right" type="primary" @click="submitAnswer">
        <template #icon>
          <i-arrow-narrow-right />
        </template>

        {{ answers.length + 1 === randomizedQuestions.length ? 'Finish' : 'Next' }}
      </n-button>
    </div>
  </div>
</template>
