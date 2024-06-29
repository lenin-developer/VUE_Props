<script setup lang="ts">
type CardPropsType = {
  marca: string;
  modelo: string;
};

const { card } = withDefaults(defineProps<{ card: CardPropsType }>(), {
  card: {
    marca: "subaru",
    modelo: "crossket",
  },
});

console.log("Prop por defecto de un objeto con interna inetrna", card);
</script>

<template>
  <h4>Prop por defecto de un objeto con type interno</h4>
  {{ card.marca }} -
  {{ card.modelo }}
</template>

<style scoped></style>
