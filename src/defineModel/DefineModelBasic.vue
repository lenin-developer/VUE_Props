<script setup lang="ts">
import type { ModelRef } from "vue";
const model: ModelRef<number | undefined, number> = defineModel();

const handleClick = () => {
  if (typeof model.value === "number") model.value++;
};
</script>

<template>
  <p>{{ model }}</p>
  <button @click="handleClick">model basic increment</button>
</template>

<style scoped></style>
