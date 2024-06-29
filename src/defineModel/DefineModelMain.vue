si queremos pasar un ref para que el componente hijo lo utilize en un v-model
debemos especificar en el hijo un defineModel para poder trabajar con esa
referencia

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import DefineModelBasic from './DefineModelBasic.vue';
import DefineModelArg from './DefineModelArg.vue';
import DefineModelModifeir from './DefineModelModifeir.vue';

const cont: Ref<number> = ref(0);
const inputA: Ref<string> = ref('');
const inputB: Ref<string> = ref('');
const myInputB: Ref<string> = ref('');
</script>

<template>
  <h4>define model basic</h4>
  <DefineModelBasic v-model="cont" />
  <p>inputA: {{ inputA }}</p>
  <p>inputB: {{ inputB }}</p>
  <p>myInputB: {{ myInputB }}</p>
  <DefineModelArg v-model:input-a="inputA" v-model:input-b="inputB" />
  <DefineModelModifeir v-model:my-input.toUpperCase="myInputB" />
</template>

<style scoped></style>
