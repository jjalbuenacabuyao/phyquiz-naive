<script setup lang="tsx">
//@ts-nocheck
import html2pdf from 'html2pdf.js'
import quizzes from '@/content/quizzes'

definePage({
  name: 'Quiz results',
})

const route = useRoute()
const history = JSON.parse(localStorage.getItem('history') || '[]')
const quizId: string = route.params.id
const attempt = history.find((h: any) => h.id === quizId)
const quiz = quizzes[attempt.quizId]

// Use html2pdf.js to generate PDF
function exportPDF() {
  const element = document.getElementById('pdf')!
  const opt = {
    margin: 0.5,
    filename: `${quiz.name} - ${dayjs(attempt.createdAt).format('MMMM D, YYYY, h:mm A')}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  }
  html2pdf().set(opt).from(element).save()
}
</script>

<template>
  <div class="bg-gray-900">
    <div id="pdf">
      <div class="w-full bg-gray-200 dark:bg-gray-700">
        <div class="p-4">
          <h1 class="mt-2 text-2xl font-medium">
            {{ quiz.name }}
          </h1>
          <div class="mt-2">
            {{ dayjs(attempt.createdAt).format('MMMM D, YYYY, h:mm A') }}
          </div>
          <div class="mt-2">
            <div>Score: {{ attempt.score }}/{{ quiz.questions.length }} (<span class="font-bold">{{ Number(attempt.score / quiz.questions.length * 100).toFixed(2) }}%</span>)</div>
          </div>
        </div>
      </div>

      <div class="p-4">
        <div v-for="(item, i) in quiz.questions" class="mb-3 bg-gray-200 p-4 dark:bg-gray-700">
          <div class="flex justify-between">
            <div class="text-gray-500 dark:text-gray-400">
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

                <span class="font-bold">
                  <span v-if="choice.correct" class="font-bold text-green-600">✓</span>
                  <span v-else-if="attempt.state.find((s: any) => s.questionNumber === i)?.answer === choice.text" class="font-bold text-red-600">✗</span>
                </span>
              </n-radio>
            </div>
          </n-radio-group>
        </div>
      </div>
    </div>
    <div class="flex justify-end p-4 pt-0">
      <n-button type="primary" @click="exportPDF">
        <i-download />
        <span class="ml-2">Export PDF</span>
      </n-button>
    </div>
  </div>
</template>
