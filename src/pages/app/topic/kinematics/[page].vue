<script setup lang="ts">
//@ts-nocheck
import topics from '@/content/topics.json'

import p1 from '@/content/topic/kinematics/1.md'
import p2 from '@/content/topic/kinematics/2.md'
import p3 from '@/content/topic/kinematics/3.md'
import p4 from '@/content/topic/kinematics/4.md'
import p5 from '@/content/topic/kinematics/5.md'
import p6 from '@/content/topic/kinematics/6.md'

const topic = topics.find(item => item.id === 'kinematics')
const route = useRoute()
const page = route.params.page
const pages = {
  1: p1,
  2: p2,
  3: p3,
  4: p4,
  5: p5,
  6: p6,
}
</script>

<template>
  <div>
    <div class="w-full bg-gray-200 dark:bg-gray-700">
      <div class="p-4">
        <h1 class="text-2xl font-medium">
          {{ topic.lessons[page - 1] }}
        </h1>
      </div>
    </div>
    <!-- add prose-base -->
    <div class="dark:prose-invertmx-auto prose prose-base text-justify p-4"> 
      <component :is="pages[page]" />
    </div>
  </div>
</template>
