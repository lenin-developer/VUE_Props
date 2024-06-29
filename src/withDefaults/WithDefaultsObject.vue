<script setup lang="ts">
export interface CardProps {
  marca: string;
  modelo: string;
}

const props = withDefaults(defineProps<{ card: CardProps }>(), {
  card: {
    marca: 'subaru',
    modelo: 'crossket',
  },
});
</script>

<template>
  <h4>Prop por defecto de un objeto con interfaz</h4>
  {{ card.marca }} -
  {{ card.modelo }}
</template>

<style scoped></style>
