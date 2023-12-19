<script setup lang="ts">
//@ts-nocheck
import topics from "@/content/topics.json";

const topic = topics.find((item) => item.id === "kinematics");
</script>

<template>
  <div>
    <div class="w-full bg-gray-200 dark:bg-gray-700">
      <div class="p-8">
        <img :src="`/images/topics/kinematics/kinematics-hero.jpg`" />

        <h1 class="mt-4 text-2xl font-medium">
          {{ topic.name }}
        </h1>

        <p class="mt-2">
          {{ topic.description }}
        </p>
      </div>
    </div>
    <div class="p-4">
      <router-link
        v-for="(item, i) in topic.lessons"
        class="mb-3 block bg-gray-200 p-4 dark:bg-gray-700"
        :to="`/topic/kinematics/${i + 1}`"
      >
        <div class="text-gray-500 dark:text-gray-400">Lesson {{ i + 1 }}</div>
        <div class="text-xl font-medium">
          {{ item }}
        </div>
      </router-link>
    </div>
  </div>
</template>
