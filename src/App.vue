<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import PropsBasic from "./props/PropsBasic.vue";
import PropsInterface from "./props/PropsInterface.vue";
import WithDefaultsBasic from "./withDefaults/WithDefaultsBasic.vue";
import WithDefaultsObject from "./withDefaults/WithDefaultsObject.vue"; // CardProps,
import WithDefaultInterfaceExterna from "./withDefaults/WithDefaultInterfaceExterna.vue";
import AttrsExplicit from "./attrs/AttrsExplicit.vue";
import AttrsImplicit from "./attrs/AttrsImplicit.vue";
import DefineModelMain from "./defineModel/DefineModelMain.vue";

import { Direccion, Person } from "./props/interfaces.ts";

const direccion: Direccion = {
  estado: "guerrero",
  calle: "24 de febrero",
};

const person: Person = {
  nombre: "lenin",
  profecion: "Front",
};

// const card: CardProps = {
//   // este se puede poner en WithDefaultsExampleB
//   marca: "una marca",
//   modelo: " un modelo",
// };

const handelClick = () => {
  alert("soy una alerta");
};
</script>

<template>
  <HelloWorld />
  <!--- se tiene que llamar con : todo lo que no se un string -->
  <PropsBasic nombre="Lenin" soy-genial :direccion="direccion" :altura="1.66" />
  <PropsInterface :persona="person" />
  <h2>Props por defecto</h2>
  <WithDefaultsBasic profecion="profecion explicita" />
  <WithDefaultsObject />
  <!-- <WithDefaultsObject :card="{ marca: 'chevi', modelo: 'senta' }" /> -->
  <WithDefaultInterfaceExterna />
  <h2>DefineModel</h2>
  <DefineModelMain />
  <h2>$attrs (atributos ...res)</h2>
  <AttrsExplicit label="Attrs implicit" disabled @click="handelClick" />
  <AttrsImplicit label="Attrs explicit" disabled />
</template>
<style scoped></style>
