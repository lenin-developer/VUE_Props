<script setup lang="ts">
import type { Person } from '/interfaces.ts';

export interface PropsWithDefaultsExample {
  nombre: string;
  profecion: string;
}

const props = withDefaults(defineProps<PropsWithDefaultsExample>(), {
  nombre: 'nombre por defaul',
  profecion: 'profecion',
});
</script>

<template>
  <h4>Props basicos por defacto con interfaz</h4>
  {{ nombre }} -
  {{ profecion }}
</template>

<style scoped></style>
