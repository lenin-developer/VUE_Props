<script setup lang="ts">
/**esta es la sintaxis validad para utilizar una interfaz externa como props
Nota: en la documentacion tiene esta estructura
const props = defineProps<Props>()
pero esta no es valida da Error
*/

import { Person } from "../props/interfaces";
const { persona } = withDefaults(defineProps<{ persona: Person }>(), {
  persona: {
    nombre: "sin nombre",
    profecion: "anonimo",
  },
});
</script>

<template>
  <h4>Props default interfaces externa</h4>
  {{ persona.nombre }}
  {{ persona.profecion }}
  <hr />
</template>

<style scoped></style>
