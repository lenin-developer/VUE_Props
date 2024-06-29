<script setup lang="ts">
import type { ModelRef } from "vue";
import { toUpperCaseMod } from "./toUpperCase.modifier.ts";

const [myInput, modifiers]: ModelRef<string | undefined, string> = defineModel(
  "myInput",
  {
    set(value) {
      const res = toUpperCaseMod(modifiers, value);
      return res;
    },
  }
);
</script>

<template>
  <br />
  <span>myInput:</span>
  <input v-model="myInput" />
</template>

<style scoped></style>
