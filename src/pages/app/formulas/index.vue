<script setup lang="ts">
//@ts-nocheck
import nf from "@/content/formulas/newtons-law.md";
import("@/assets/mathjax/es5/tex-chtml-full.js");

definePage({
  name: "Formulas",
});
</script>

<template>
  <div class="dark:prose-invert mx-auto prose prose-sm p-4 text-center">
    <nf />
  </div>
</template>
