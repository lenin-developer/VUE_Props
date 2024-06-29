restriccion no se pude utilizar la caracteristica de Ts (tipos condicionales)
para TODO el obj que recibe el defineProps, pero para props si
https://vuejs.org/guide/typescript/composition-api.html#syntax-limitations
https://www.typescriptlang.org/es/play#example/conditional-types

<script setup lang="ts">
import { Direccion } from "./interfaces.ts";

const props = defineProps<{
  nombre: string;
  apellidos?: string; //opcional
  soyGenial: boolean; // debe ser camelCase al declararse ya kebab-case al utilizarce
  direccion: Direccion; // interfaz
  altura: number;
}>();

/** para acceder a las props desde el tag script se tiene que aceder desde la contante props de clarada o se pude destructurar */
console.log(props.altura);

/**para acceder de la el tag template se hacede directamente con el nombre de la prop */
</script>

<template>
  <h1>Props</h1>
  <p>{{ nombre }}</p>
  <p>soy genial: {{ soyGenial }}</p>
  <p>Estado: {{ direccion.estado }}</p>
  <p>Calle: {{ direccion.calle }}</p>
  <p>Altura: {{ altura }}</p>
</template>

<style scoped></style>
