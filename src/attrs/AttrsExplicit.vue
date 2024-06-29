<script setup lang="ts">
/** podemos desactivar el paso automatico de atributos (o herencia de atributos) y obtener el contro nosotros con v-bind="$attrs" */
defineOptions({ inheritAttrs: false });
defineProps<{ label: string }>();

const handelClick = () => {
  alert('alerta btn B');
};
</script>

<template>
  <div>
    <label>
      <button @click="handelClick" v-bind="$attrs">
        {{ label }}
      </button>
    </label>
  </div>
</template>

<style scoped></style>
