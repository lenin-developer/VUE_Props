<script setup lang="ts">
export interface PropsWithDefaultsExample {
  nombre: string;
  profecion: string;
}

const props = withDefaults(defineProps<PropsWithDefaultsExample>(), {
  nombre: "nombre por defaul",
  profecion: "profecion",
});

console.log("a", props);
</script>

<template>
  <h4>Props basicos por defacto con interfaz interna</h4>
  {{ nombre }} -
  {{ profecion }}
</template>

<style scoped></style>
