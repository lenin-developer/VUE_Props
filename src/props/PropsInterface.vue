<script setup lang="ts">
/**esta es la sintaxis validad para utilizar una interfaz externa como props
Nota: en la documentacion tiene esta estructura 
const props = defineProps<Props>()
pero esta no es valida da Error
*/
import { Person } from '/interfaces.ts';
const { nombre, profecion } = defineProps<{ persona: Person }>();
</script>

<template>
  <h4>Props con interfas</h4>
  {{ persona.nombre }}
  {{ persona.profecion }}
  <hr />
</template>

<style scoped></style>
