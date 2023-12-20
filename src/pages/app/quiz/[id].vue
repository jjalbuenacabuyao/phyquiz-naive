<script setup lang="tsx">
//@ts-nocheck
import quizzes from "@/content/quizzes";

const route = useRoute();
const router = useRouter();
const quizId = route.params.id;
const questions = quizzes[quizId].questions;

const letters = ["A. ", "B. ", "C. ", "D. "];

const randomizedQuestions = questions
  .map((q, i) => ({ ...q, id: i }))
  .sort(() => Math.random() - 0.5);
const quizState = ref<
  Array<{
    questionNumber: number;
    answer: string;
  }>
>([]);
const selectedAnswer = ref();
const currentQuestion = ref(randomizedQuestions[0]);
const message = useMessage();

async function next() {
  quizState.value.push({
    questionNumber: currentQuestion.value.id,
    answer: selectedAnswer.value,
  });
  selectedAnswer.value = undefined;
  if (quizState.value.length === randomizedQuestions.length) {
    // Use crypto to generate UUID
    const id = crypto.randomUUID();
    const status = {
      id,
      state: quizState.value,
      quizId,
      createdAt: new Date().toISOString(),
      score: quizState.value.reduce((acc, curr) => {
        const question = questions[curr.questionNumber];
        const correctAnswer = question.choices.find((c) => c.correct);
        if (curr.answer === correctAnswer.text) return acc + 1;
        return acc;
      }, 0),
    };

    const history = JSON.parse(localStorage.getItem("history") || "[]");
    history.push(status);
    localStorage.setItem("history", JSON.stringify(history));

    await nextTick();
    message.success("Quiz completed!");
    router.push(`/history/${id}`);
  } else {
    currentQuestion.value = randomizedQuestions[quizState.value.length];
  }
}
</script>

<template>
  <div class="relative p-4 bg-slate-300 dark:bg-slate-700 min-h-screen">
    <h1 class="relative z-10 capitalize text-center font-bold text-3xl mb-14 text-slate-900">{{ quizId }}</h1>
    <div class="z-[1] absolute top-[-13%] left-0 right-0 h-44 bg-slate-200 rounded-[50%] dark:bg-slate-300"></div>
    <div class="text-gray-500 dark:text-gray-400">
      Quiz {{ quizState.length + 1 }}/{{ randomizedQuestions.length }}
    </div>
    <hr />
    <p class="mt-2 text-xl">
      {{ quizState.length + 1 }}.
      {{ currentQuestion?.question }}
    </p>
    <n-radio-group
      v-if="currentQuestion"
      v-model:value="selectedAnswer"
      class="mt-4"
      name="choices"
      size="large"
      style="display: block !important"
    >
      <div class="flex flex-col gap-2">
        <n-radio
          v-for="(choice, index) in currentQuestion.choices"
          :key="choice.text"
          :label="letters[index] + choice.text"
          :value="choice.text"
          class="p-3 rounded-full bg-white dark:bg-slate-800"
        />
      </div>
    </n-radio-group>
    <div class="mt-4 flex justify-end">
      <n-button
        :disabled="!selectedAnswer"
        icon-placement="right"
        type="primary"
        style="border-radius: 9999px;font-weight:bold;padding-inline:2rem;padding-block:1.3rem;"
        @click="next"
      >
        {{
          quizState.length + 1 === randomizedQuestions.length
            ? "Finish"
            : "Next"
        }}
      </n-button>
    </div>
  </div>
</template>
