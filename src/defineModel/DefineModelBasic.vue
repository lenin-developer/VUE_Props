<script setup lang="ts">
import type { ModelRef } from 'vue';
const model: ModelRef<number> = defineModel();

const handleClick = () => {
  model.value++;
};
</script>

<template>
  <p>{{ model }}</p>
  <button @click="handleClick">model basic increment</button>
</template>

<style scoped></style>
