<script setup lang="ts">
import type { ModelRef } from "vue";

const inputA: ModelRef<string | undefined, string> = defineModel("inputA");
const inputB: ModelRef<string | undefined, string> = defineModel("inputB");
</script>

<template>
  <span>inputA:</span>
  <input v-model="inputA" />
  <br />
  <span>inputB:</span>
  <input v-model="inputB" />
</template>

<style scoped></style>
